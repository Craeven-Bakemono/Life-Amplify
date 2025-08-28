import React, { useEffect, useState } from 'react';
import { AFFILIATE_LINK } from '../config/constants';

const UrgencyGuarantee = () => {
  const [timeLeft, setTimeLeft] = useState(3600 * 24); // 24-hour countdown

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = seconds => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
      <p className="text-lg mb-4">30-Day Money-Back Guarantee + Special Discount</p>
      <p className="text-2xl font-bold mb-6">Hurry! Offer ends in {formatTime(timeLeft)}</p>
      <a
        href={AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
      >
        Order Now
      </a>
    </section>
  );
};

export default UrgencyGuarantee;
