import { useEffect, useState } from "react";

export default function FeeModal({ open, onClose, apiUrl }) {
  const [fees, setFees] = useState(null);

  useEffect(() => {
    if (open) {
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => setFees(data.fees))
        .catch(console.error);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Course Fee Range</h2>
        {fees ? (
          <p className="text-gray-700">
            ₹{fees.min.toLocaleString()} – ₹{fees.max.toLocaleString()} per year
          </p>
        ) : (
          <p>Loading...</p>
        )}
        <button onClick={onClose} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Close</button>
      </div>
    </div>
  );
}
