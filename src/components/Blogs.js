import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'blogs'), orderBy('date', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setBlogs(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <div className="text-center text-text-secondary">Loading blog posts...</div>;

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-8">Blogs</h1>
      <div className="space-y-8">
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <div key={blog.id} className="bg-bg-secondary p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
              <h3 className="text-2xl font-semibold text-text-main">{blog.title}</h3>
              <p className="mt-2 text-text-secondary">{blog.excerpt}</p>
              <div className="mt-4 text-sm text-text-secondary">
                <span>{new Date(blog.date?.toDate()).toLocaleDateString()}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-text-secondary">Blog posts will be added soon.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;