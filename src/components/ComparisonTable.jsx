import React from 'react';

const ComparisonTable = () => {
  return (
    <section className="py-16 bg-gray-100 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Oricle vs Traditional Hearing Aids</h2>
      <table className="mx-auto text-left border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-6 py-3">Feature</th>
            <th className="px-6 py-3">Oricle Hearing Aid 2.0</th>
            <th className="px-6 py-3">Traditional Hearing Aid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-6 py-3">Price</td>
            <td className="border px-6 py-3">$200</td>
            <td className="border px-6 py-3">$5000+</td>
          </tr>
          <tr>
            <td className="border px-6 py-3">Rechargeable Battery</td>
            <td className="border px-6 py-3">✅</td>
            <td className="border px-6 py-3">❌</td>
          </tr>
          <tr>
            <td className="border px-6 py-3">Noise Cancellation</td>
            <td className="border px-6 py-3">✅</td>
            <td className="border px-6 py-3">✅</td>
          </tr>
          <tr>
            <td className="border px-6 py-3">Prescription Required</td>
            <td className="border px-6 py-3">❌</td>
            <td className="border px-6 py-3">✅</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ComparisonTable;
