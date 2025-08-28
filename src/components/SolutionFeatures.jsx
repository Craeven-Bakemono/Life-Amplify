import React from 'react';
import productImage from '../../public/product-image.webp'; // replace with actual product image

const SolutionFeatures = () => {
  return (
    <section className="py-16 bg-gray-100 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Why Oricle Hearing Aid 2.0 Works</h2>
      <img src={productImage} alt="Oricle Hearing Aid" className="mx-auto mb-6 rounded-lg shadow-lg" />
      <ul className="text-lg list-disc list-inside space-y-2">
        <li>Compact, wireless, discreet design</li>
        <li>Rechargeable battery with up to 20 hours use</li>
        <li>Effective background noise cancellation</li>
        <li>Affordable alternative to traditional hearing aids</li>
      </ul>
    </section>
  );
};

export default SolutionFeatures;
