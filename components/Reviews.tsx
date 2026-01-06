import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: "The AI diagnostic tool was surprisingly accurate! It suggested a capacitor issue, and when the tech arrived, that's exactly what it was. Saved me so much stress knowing what to expect.",
    stars: 5,
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    id: 2,
    name: 'Michael Ross',
    role: 'Business Owner',
    content: "EcoClimate handles all our commercial HVAC needs. They are prompt, professional, and their maintenance plans have saved us thousands in potential repairs.",
    stars: 5,
    image: "https://picsum.photos/id/91/100/100"
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Homeowner',
    content: "Called at 2 AM when our heater died in a snowstorm. They were there within the hour. Truly 24/7 service. Highly recommended!",
    stars: 5,
    image: "https://picsum.photos/id/44/100/100"
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-md border border-slate-100 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100" />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">{review.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 italic flex-grow">"{review.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;