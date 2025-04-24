"use client";

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Simple Counter</h1>
      <div className="text-6xl font-semibold mb-4">{count}</div>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-medium transition"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-lg font-medium transition"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
