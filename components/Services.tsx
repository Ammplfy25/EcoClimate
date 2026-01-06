import React from 'react';
import { IconThermometer, IconWind, IconTool } from './Icons';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'ac-repair',
    title: 'AC Repair & Installation',
    description: 'Expert diagnostics and repair for all AC brands. High-efficiency unit installations to lower your energy bills.',
    icon: <IconWind className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'heating',
    title: 'Heating Solutions',
    description: 'Furnace repair, heat pump maintenance, and complete heating system replacements for cozy winters.',
    icon: <IconThermometer className="w-8 h-8 text-orange-500" />
  },
  {
    id: 'maintenance',
    title: 'Preventative Maintenance',
    description: 'Seasonal tune-ups to extend the life of your HVAC system and prevent costly emergency breakdowns.',
    icon: <IconTool className="w-8 h-8 text-slate-500" />
  },
  {
    id: 'air-quality',
    title: 'Indoor Air Quality',
    description: 'Breathe easier with our air purification systems, humidifiers, and duct cleaning services.',
    icon: <IconWind className="w-8 h-8 text-green-500" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600">
            From emergency repairs to routine maintenance, our certified technicians handle it all with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
            >
              <div className="mb-6 p-4 rounded-full bg-slate-50 inline-block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-4">{service.description}</p>
              <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                Learn more <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;