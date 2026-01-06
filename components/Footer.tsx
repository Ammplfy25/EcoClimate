import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold text-white mb-4 block">
              Eco<span className="text-blue-500">Climate</span>
            </a>
            <p className="max-w-xs text-slate-400">
              Providing top-tier heating, cooling, and air quality services for residential and commercial properties.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">AC Installation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Heating Repair</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Maintenance Plans</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Air Quality</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} EcoClimate HVAC Solutions. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social icons placeholders */}
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;