
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl font-bold text-white mb-4 block">
              <span className="text-colective-purple">Co</span>lective
            </a>
            <p className="mb-4">Modern team collaboration platform that brings your projects to life.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-colective-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="hover:text-colective-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="hover:text-colective-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-colective-purple transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-colective-purple transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-colective-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-colective-purple transition-colors">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-colective-purple transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-colective-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-colective-purple transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-colective-purple transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-colective-purple transition-colors">About</a></li>
              <li><a href="#" className="hover:text-colective-purple transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-colective-purple transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-colective-purple transition-colors">Media Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-colective-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-colective-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-colective-purple transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-colective-purple transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Colective. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-colective-purple transition-colors">Status</a>
              <span className="mx-2">•</span>
              <a href="#" className="text-sm hover:text-colective-purple transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
