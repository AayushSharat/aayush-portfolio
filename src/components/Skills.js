import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

const Skills = () => {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'skills'), (snapshot) => {
      const data = {};
      snapshot.docs.forEach(doc => {
        const skill = doc.data();
        if (!data[skill.category]) {
          data[skill.category] = [];
        }
        data[skill.category].push(skill.name);
      });
      setSkills(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <div className="text-center text-text-secondary">Loading skills...</div>;

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-8">Skills</h1>
      <div className="space-y-8">
        {Object.keys(skills).length > 0 ? (
          Object.keys(skills).map(category => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-text-secondary mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills[category].map(skill => (
                  <span key={skill} className="bg-bg-secondary px-4 py-2 rounded-full text-text-main text-sm border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-text-secondary">Skills will be added soon.</p>
        )}
      </div>
    </div>
  );
};

export default Skills;