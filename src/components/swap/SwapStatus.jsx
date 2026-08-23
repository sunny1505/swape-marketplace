const STATUS_MAP = {
  pending: {
    label: "Pending",
    className: "status-pending",
  },
  accepted: {
    label: "Accepted",
    className: "status-accepted",
  },
  rejected: {
    label: "Rejected",
    className: "status-rejected",
  },
  negotiating: {
    label: "Negotiating",
    className: "status-negotiating",
  },
  confirmed: {
    label: "Confirmed",
    className: "status-confirmed",
  },
  completed: {
    label: "Completed",
    className: "status-completed",
  },
  cancelled: {
    label: "Cancelled",
    className: "status-cancelled",
  },
};

function SwapStatus({ status }) {
  const current = STATUS_MAP[status] || STATUS_MAP.pending;

  return (
    <span className={`swap-status ${current.className}`}>
      {current.label}
    </span>
  );
}

export default SwapStatus;