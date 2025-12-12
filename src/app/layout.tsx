import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "IS",
	description: "Isaac Schiffler's Personal Portfolio",
	keywords: [
		"portfolio",
		"developer",
		"projects",
		"software engineer",
		"software",
		"web development",
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scrollbar-hide">
			<body>{children}</body>
		</html>
	);
}
