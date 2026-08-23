import React from "react";

const SwapRequests = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Swap Requests
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your incoming and outgoing swap requests.
        </p>

        <div className="mt-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-semibold text-gray-800">
              No Swap Requests
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              You don't have any swap requests yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapRequests;