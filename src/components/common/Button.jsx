import { Link } from "react-router-dom";

function Button({
  children,
  variant = "primary",
  size = "medium",
  to,
  type = "button",
  onClick,
  disabled = false,
  fullWidth = false,
  className = "",
}) {
  const classes = [
    "swape-btn",
    `swape-btn-${variant}`,
    `swape-btn-${size}`,
    fullWidth ? "swape-btn-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;