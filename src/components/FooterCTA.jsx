import React from 'react';
import { AFFILIATE_LINK } from '../config/constants';

const FooterCTA = () => {
  return (
    <section className="py-12 bg-gray-800 text-white text-center">
      <h3 className="text-2xl font-bold mb-4">Ready to Hear Clearly Again?</h3>
      <a
        href={AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
      >
        Claim Your Oricle Hearing Aid Now
      </a>
    </section>
  );
};

export default FooterCTA;
