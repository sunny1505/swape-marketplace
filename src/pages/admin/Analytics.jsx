import React from "react";
import { Link } from "react-router-dom";
const Analytics = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      change: "+12.5%",
      description: "vs last month",
    },
    {
      title: "Total Listings",
      value: "3,486",
      change: "+18.2%",
      description: "vs last month",
    },
    {
      title: "Successful Swaps",
      value: "842",
      change: "+9.8%",
      description: "vs last month",
    },
    {
      title: "Active Users",
      value: "936",
      change: "+14.4%",
      description: "vs last month",
    },
  ];

  const categoryData = [
    { name: "Dresses", value: 28 },
    { name: "T-Shirts", value: 22 },
    { name: "Jeans", value: 18 },
    { name: "Jackets", value: 14 },
    { name: "Shirts", value: 10 },
    { name: "Other", value: 8 },
  ];

  const swapData = [
    { month: "Jan", swaps: 42 },
    { month: "Feb", swaps: 58 },
    { month: "Mar", swaps: 71 },
    { month: "Apr", swaps: 64 },
    { month: "May", swaps: 89 },
    { month: "Jun", swaps: 102 },
    { month: "Jul", swaps: 116 },
    { month: "Aug", swaps: 132 },
  ];

  const maxSwaps = Math.max(...swapData.map((item) => item.swaps));

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              to="/admin"
              className="mb-3 inline-block text-sm font-medium text-gray-500 hover:text-black"
            >
              ← Back to Dashboard
            </Link>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Analytics
            </h1>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Track marketplace performance and user activity.
            </p>
          </div>

          <select className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-black">
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
          </select>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-gray-500">
                {stat.title}
              </p>

              <div className="mt-3 flex items-end justify-between gap-3">
                <h2 className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </h2>

                <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                  {stat.change}
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Swap Activity */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Successful Swaps
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Monthly completed swap activity
              </p>
            </div>

            {/* Simple Chart */}
            <div className="flex h-72 items-end gap-2 overflow-x-auto border-b border-gray-200 pb-2 sm:gap-4">
              {swapData.map((item) => {
                const height = (item.swaps / maxSwaps) * 100;

                return (
                  <div
                    key={item.month}
                    className="flex min-w-[35px] flex-1 flex-col items-center justify-end"
                  >
                    <span className="mb-2 text-xs font-medium text-gray-600">
                      {item.swaps}
                    </span>

                    <div
                      className="w-full max-w-[42px] rounded-t-lg bg-gray-900 transition-all hover:bg-gray-700"
                      style={{
                        height: `${height}%`,
                        minHeight: "8px",
                      }}
                    />

                    <span className="mt-3 text-xs text-gray-500">
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Categories */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Listing Categories
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Distribution of clothing listings
              </p>
            </div>

            <div className="space-y-5">
              {categoryData.map((category) => (
                <div key={category.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {category.name}
                    </span>

                    <span className="text-sm font-semibold text-gray-900">
                      {category.value}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-gray-900"
                      style={{ width: `${category.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Swap Conversion
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Swap request performance
            </p>

            <div className="mt-6">
              <div className="mb-3 flex items-end justify-between">
                <span className="text-3xl font-bold text-gray-900">
                  68.4%
                </span>

                <span className="text-sm font-medium text-green-600">
                  +6.2%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-gray-900"
                  style={{ width: "68.4%" }}
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Requests Sent</p>
                  <p className="mt-1 font-semibold text-gray-900">1,230</p>
                </div>

                <div>
                  <p className="text-gray-500">Requests Accepted</p>
                  <p className="mt-1 font-semibold text-gray-900">842</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              User Engagement
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Current platform engagement
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Daily Active</p>
                <p className="mt-2 text-2xl font-bold text-gray-900">
                  486
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Weekly Active</p>
                <p className="mt-2 text-2xl font-bold text-gray-900">
                  782
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">New Users</p>
                <p className="mt-2 text-2xl font-bold text-gray-900">
                  124
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Returning</p>
                <p className="mt-2 text-2xl font-bold text-gray-900">
                  71%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Platform Health
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Overall marketplace status
              </p>
            </div>

            <span className="w-fit rounded-full bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700">
              ● All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;