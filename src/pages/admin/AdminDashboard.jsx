import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      icon: "👥",
      link: "/admin/users",
    },
    {
      title: "Total Listings",
      value: "3,486",
      icon: "👕",
      link: "/admin/listings",
    },
    {
      title: "Active Swaps",
      value: "286",
      icon: "🔄",
      link: "/admin/swaps",
    },
    {
      title: "Reports",
      value: "18",
      icon: "⚠️",
      link: "/admin/reports",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Priya Sharma",
      action: "added a new clothing listing",
      item: "Zara Denim Jacket",
      time: "10 minutes ago",
    },
    {
      id: 2,
      user: "Rahul Verma",
      action: "completed a swap",
      item: "Nike Sneakers",
      time: "25 minutes ago",
    },
    {
      id: 3,
      user: "Ananya Singh",
      action: "sent a swap request",
      item: "H&M Summer Dress",
      time: "1 hour ago",
    },
    {
      id: 4,
      user: "Aman Kumar",
      action: "registered on the platform",
      item: "",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-gray-500">
              Admin Panel
            </p>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Monitor users, listings, swaps and marketplace activity.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex w-fit items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            View Website
          </Link>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <Link
              key={stat.title}
              to={stat.link}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl">
                  {stat.icon}
                </div>
              </div>

              <div className="mt-4 text-sm font-medium text-gray-600">
                View details →
              </div>
            </Link>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Activity */}
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Activity
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Latest marketplace activities
                </p>
              </div>

              <Link
                to="/admin/analytics"
                className="text-sm font-medium text-gray-700 hover:text-black"
              >
                Analytics →
              </Link>
            </div>

            <div className="divide-y divide-gray-100">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
                      {activity.user.charAt(0)}
                    </div>

                    <div>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">
                          {activity.user}
                        </span>{" "}
                        {activity.action}
                      </p>

                      {activity.item && (
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          {activity.item}
                        </p>
                      )}

                      <p className="mt-1 text-xs text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage your marketplace
            </p>

            <div className="mt-5 space-y-3">
              <Link
                to="/admin/users"
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <span>Manage Users</span>
                <span>→</span>
              </Link>

              <Link
                to="/admin/listings"
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <span>Manage Listings</span>
                <span>→</span>
              </Link>

              <Link
                to="/admin/swaps"
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <span>Manage Swaps</span>
                <span>→</span>
              </Link>

              <Link
                to="/admin/reports"
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <span>View Reports</span>
                <span>→</span>
              </Link>

              <Link
                to="/admin/analytics"
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <span>View Analytics</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Marketplace Overview */}
        <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Marketplace Overview
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Current platform performance
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Successful Swaps</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">842</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Pending Requests</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">124</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Active Users</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">936</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Flagged Listings</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;