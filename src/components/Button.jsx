// src/components/Button.jsx
const Button = ({ label, onClick, variant = "default" }) => {
  const base =
    "flex items-center justify-center p-4 rounded-lg text-xl font-medium transition";

  const variants = {
    default: "bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800",
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600",
  };

  return (
    <button
      onClick={() => onClick(label)}
      className={`${base} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
