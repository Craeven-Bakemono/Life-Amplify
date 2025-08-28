import React from 'react';
import { AFFILIATE_LINK } from '../config/constants';

const Hero = () => {
  return (
    <section className="bg-gray-100 text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Finally, Hear Clearly Again!</h1>
      <p className="text-lg mb-6">Affordable, wireless, and discreet hearing aid for crystal-clear conversations.</p>
      
      {/* Replace hero-video.mp4 with a demo video */}
      <video
        className="mx-auto mb-6 w-3/4 rounded-lg shadow-lg"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
      />
      
      <a
        href={AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
      >
        Order Now
      </a>
    </section>
  );
};

export default Hero;
