import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "My Portfolio",
	description: "Showcasing my projects and skills",
	keywords: ["portfolio", "developer", "projects"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
