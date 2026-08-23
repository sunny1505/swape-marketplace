import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SwapDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          ← Back
        </button>

        {/* Swap Details Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800">
              Swap Details
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Swap ID: {id || "N/A"}
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item Details */}
              <div className="border border-gray-200 rounded-lg p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Item Details
                </h2>

                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-medium">Item:</span> Cotton Shirt
                  </p>

                  <p>
                    <span className="font-medium">Category:</span> Shirts
                  </p>

                  <p>
                    <span className="font-medium">Condition:</span> Good
                  </p>
                </div>
              </div>

              {/* Swap Information */}
              <div className="border border-gray-200 rounded-lg p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Swap Information
                </h2>

                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-medium">Status:</span>{" "}
                    <span className="text-yellow-600">
                      Pending
                    </span>
                  </p>

                  <p>
                    <span className="font-medium">Requested By:</span>{" "}
                    User
                  </p>

                  <p>
                    <span className="font-medium">Date:</span>{" "}
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mt-8">
              <button
                type="button"
                className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Accept Swap
              </button>

              <button
                type="button"
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Reject Swap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapDetails;