import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setProjects(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <div className="text-center text-text-secondary">Loading projects...</div>;

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.length > 0 ? (
          projects.map(project => (
            <div key={project.id} className="bg-bg-secondary p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 flex flex-col">
              <h3 className="text-2xl font-semibold text-text-main">{project.title}</h3>
              <p className="mt-2 text-text-secondary flex-grow">{project.description}</p>
              <div className="mt-4 flex space-x-4 text-text-secondary">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Live Demo</a>
                )}
                {project.sourceUrl && (
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Source Code</a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-text-secondary">Projects will be added soon.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;