import React from "react";

const Swaps = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Swaps
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage all clothing swap requests.
            </p>
          </div>

          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
            Total Swaps: 0
          </span>
        </div>

        {/* Empty State */}
        <div className="border border-gray-200 rounded-lg p-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            No Swaps Found
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            There are currently no swap requests available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Swaps;