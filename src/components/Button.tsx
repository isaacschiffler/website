import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
	children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	children,
	className = "",
	...props
}) => {
	const baseStyles = "px-6 py-3 rounded-lg font-semibold transition";
	const variants = {
		primary: "bg-blue-500 hover:bg-blue-600 text-white",
		secondary: "bg-slate-700 hover:bg-slate-600 text-white",
	};

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
