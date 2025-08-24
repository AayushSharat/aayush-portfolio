import React from 'react';
import { Home, User, Folder, Book, Code, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, page: 'home' },
  { name: 'About', icon: User, page: 'about' },
  { name: 'Projects', icon: Folder, page: 'projects' },
  { name: 'Skills', icon: Code, page: 'skills' },
  { name: 'Blogs', icon: Book, page: 'blogs' },
  { name: 'Contact', icon: Mail, page: 'contact' },
];

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="hidden md:flex flex-col w-64 bg-bg-secondary p-8 border-r border-gray-800 sticky top-0 h-screen">
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-text-main">Aayush Sharat</h1>
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item.page} className="mb-4">
              <button
                onClick={() => setCurrentPage(item.page)}
                className={`flex items-center space-x-3 text-lg font-medium transition-colors duration-200 ${
                  currentPage === item.page ? 'text-accent' : 'text-text-secondary hover:text-text-main'
                }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;