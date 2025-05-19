
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-career-blue" />
              <span className="ml-2 font-bold text-xl bg-clip-text text-transparent bg-career-gradient">
                CareerPath AI
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Empowering students to make informed career decisions through AI-driven guidance.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-career-blue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-career-blue">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-career-blue">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-career-blue">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-career-blue">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">Features</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link to="/assessment" className="text-sm text-gray-500 hover:text-career-blue">
                      Assessment
                    </Link>
                  </li>
                  <li>
                    <Link to="/explore" className="text-sm text-gray-500 hover:text-career-blue">
                      Career Explorer
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-500 hover:text-career-blue">
                      Skill Development
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-500 hover:text-career-blue">
                      Industry Insights
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link to="#" className="text-sm text-gray-500 hover:text-career-blue">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-500 hover:text-career-blue">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-500 hover:text-career-blue">
                      Career Stories
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-500 hover:text-career-blue">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link to="#" className="text-sm text-gray-500 hover:text-career-blue">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-500 hover:text-career-blue">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-500 hover:text-career-blue">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-500 hover:text-career-blue">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} CareerPath AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
