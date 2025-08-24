import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await addDoc(collection(db, 'messages'), {
        ...form,
        timestamp: new Date(),
      });
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending message: ", error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="max-w-xl mx-auto md:ml-0 md:mr-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-8">Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-text-secondary font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 bg-bg-secondary rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-text-secondary font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 bg-bg-secondary rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-text-secondary font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 bg-bg-secondary rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-bg-main font-bold py-3 rounded-lg hover:bg-blue-400 transition-colors"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default Contact;