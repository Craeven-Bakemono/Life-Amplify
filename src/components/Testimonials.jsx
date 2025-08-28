import React from 'react';
import testimonial1 from "../assets/testimonial1.jpg"
import testimonial2 from "../assets/testimonial2.jpg"

const Testimonials = () => {
  return (
    <section className="py-16 bg-white text-center max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="shadow-lg p-6 rounded-lg">
          <img src={testimonial1} alt="John, 68" className="w-32 h-32 mx-auto rounded-full mb-4" />
          <p className="italic">"Finally, I can hear my grandchildren clearly at dinner!" - John, 68</p>
        </div>
        <div className="shadow-lg p-6 rounded-lg">
          <img src={testimonial2} alt="Lisa, 52" className="w-32 h-32 mx-auto rounded-full mb-4" />
          <p className="italic">"Half the price of my old hearing aid and works even better." - Lisa, 52</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
