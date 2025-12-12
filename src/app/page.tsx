"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectModal } from "@/components/ProjectModal";

interface BlobPosition {
	top?: number;
	left?: number;
	right?: number;
}

interface Project {
	id: string;
	title: string;
	description: string;
	fullDescription: string;
	tags: string[];
	gradient: string;
	imageUrl?: string;
	demoUrl?: string;
	repoUrl?: string;
}

export default function Home() {
	const [blob1Position, setBlob1Position] = useState<BlobPosition>({
		top: 10,
		left: 10,
	});
	const [blob2Position, setBlob2Position] = useState<BlobPosition>({
		top: 15,
		right: 0,
	});
	const [blob3Position, setBlob3Position] = useState<BlobPosition>({
		top: 50,
		left: 45,
	});
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		null
	);

	const projects: Project[] = [
		{
			id: "1",
			title: "Project One",
			description:
				"A beautiful web application built with modern technologies",
			fullDescription:
				"This is a comprehensive web application showcasing modern development practices. Built with React and TypeScript, it features a responsive design with beautiful UI components. The application demonstrates best practices in state management, component architecture, and performance optimization.",
			tags: ["React", "TypeScript", "Tailwind"],
			gradient: "from-blue-500 to-cyan-500",
			demoUrl: "https://example.com",
			repoUrl: "https://github.com/isaacschiffler",
		},
		{
			id: "2",
			title: "Project Two",
			description: "Full-stack application with backend and database",
			fullDescription:
				"A full-stack application that demonstrates the complete development lifecycle. Features a robust backend API built with Node.js, a PostgreSQL database, and a modern frontend. Includes authentication, real-time updates, and comprehensive error handling.",
			tags: ["Next.js", "Node.js", "PostgreSQL"],
			gradient: "from-purple-500 to-pink-500",
			demoUrl: "https://example.com",
			repoUrl: "https://github.com/isaacschiffler",
		},
		{
			id: "3",
			title: "Project Three",
			description: "Real-time application with live updates",
			fullDescription:
				"A real-time collaborative application using Firebase for instant data synchronization. Features live notifications, collaborative editing, and a polished user experience. Demonstrates advanced React patterns and performance optimization techniques.",
			tags: ["React", "Firebase", "Tailwind"],
			gradient: "from-green-500 to-emerald-500",
			demoUrl: "https://example.com",
			repoUrl: "https://github.com/isaacschiffler",
		},
	];

	useEffect(() => {
		// Target positions for smooth interpolation
		let targetBlob1 = {
			top: blob1Position.top ?? 0,
			left: blob1Position.left ?? 0,
		};
		let targetBlob2 = {
			top: blob2Position.top ?? 0,
			right: blob2Position.right ?? 0,
		};
		let targetBlob3 = {
			top: blob3Position.top ?? 0,
			left: blob3Position.left ?? 0,
		};

		// Clamp function to keep values within bounds
		const clamp = (value: number, min: number, max: number) => {
			return Math.min(Math.max(value, min), max);
		};

		// Generate new random targets every 5 seconds with small offset
		const generateNewTargets = () => {
			// Small random offset from current target (±10% of viewport)
			targetBlob1 = {
				top: clamp(
					(targetBlob1.top ?? 0) + (Math.random() - 0.5) * 5,
					-30,
					60
				),
				left: clamp(
					(targetBlob1.left ?? 0) + (Math.random() - 0.5) * 5,
					-30,
					80
				),
			};
			targetBlob2 = {
				top: clamp(
					(targetBlob2.top ?? 0) + (Math.random() - 0.5) * 5,
					-30,
					60
				),
				right: clamp(
					(targetBlob2.right ?? 0) + (Math.random() - 0.5) * 5,
					-30,
					80
				),
			};
			targetBlob3 = {
				top: clamp(
					(targetBlob3.top ?? 0) + (Math.random() - 0.5) * 5,
					-30,
					80
				),
				left: clamp(
					(targetBlob3.left ?? 0) + (Math.random() - 0.5) * 5,
					-30,
					80
				),
			};
		};

		// Set initial random targets
		generateNewTargets();
		const targetInterval = setInterval(generateNewTargets, 150);

		// Smooth animation loop using requestAnimationFrame
		let animationFrameId: number;

		const animate = () => {
			setBlob1Position((prev) => ({
				top: prev.top! + (targetBlob1.top - prev.top!) * 0.01,
				left: prev.left! + (targetBlob1.left - prev.left!) * 0.01,
			}));

			setBlob2Position((prev) => ({
				top: prev.top! + (targetBlob2.top - prev.top!) * 0.01,
				right: prev.right! + (targetBlob2.right - prev.right!) * 0.01,
			}));

			setBlob3Position((prev) => ({
				top: prev.top! + (targetBlob3.top - prev.top!) * 0.01,
				left: prev.left! + (targetBlob3.left - prev.left!) * 0.01,
			}));

			animationFrameId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			cancelAnimationFrame(animationFrameId);
			clearInterval(targetInterval);
		};
	}, []);

	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			{/* Animated background elements */}
			<div className="fixed inset-0 z-0">
				<div
					className="absolute w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
					style={{
						top: `${blob1Position.top}%`,
						left: `${blob1Position.left}%`,
					}}
				></div>
				<div
					className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
					style={{
						top: `${blob2Position.top}%`,
						right: `${blob2Position.right}%`,
					}}
				></div>
				<div
					className="absolute w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
					style={{
						top: `${blob3Position.top}%`,
						left: `${blob3Position.left}%`,
					}}
				></div>
			</div>

			{/* Navigation */}
			<nav className="fixed w-full top-0 z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-slate-800">
				<div className="container-custom py-4 flex justify-between items-center">
					<Link
						href="#"
						className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition"
					>
						IS
					</Link>
					<div className="flex gap-8 items-center">
						<Link
							href="#about"
							className="text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
						>
							About
						</Link>
						<Link
							href="#portfolio"
							className="text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
						>
							Portfolio
						</Link>
						<Link
							href="#contact"
							className="text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
						>
							Contact
						</Link>
						<a
							href="https://github.com/isaacschiffler"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 px-6 py-2 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
						>
							GitHub
						</a>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative z-10 pt-40 pb-32 container-custom">
				<div className="max-w-4xl">
					<div className="mb-8 inline-block">
						<span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
							WELCOME TO MY PORTFOLIO
						</span>
					</div>
					<h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
						<span className="text-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-400 bg-clip-text">
							Hi, I'm Isaac
						</span>
						<br />
						<span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
							Schiffler
						</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
						Full-stack developer crafting elegant digital solutions.
						I specialize in building fast, scalable web applications
						that solve real problems.
					</p>
					<div className="flex gap-6 flex-wrap">
						<Link
							href="#portfolio"
							className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 px-10 py-4 rounded-lg font-bold text-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50 inline-block"
						>
							View My Work
							<span className="inline-block ml-2 group-hover:translate-x-1 transition">
								→
							</span>
						</Link>
						<Link
							href="#contact"
							className="px-10 py-4 rounded-lg font-bold text-lg border-2 border-gray-500 hover:border-blue-400 text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-105 inline-block"
						>
							Contact Me
						</Link>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section
				id="about"
				className="relative z-10 py-32 container-custom"
			>
				<div className="mb-16">
					<h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-8">
						About Me
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
				</div>

				<div className="grid md:grid-cols-2 gap-16">
					<div>
						<p className="text-gray-300 text-lg mb-6 leading-relaxed">
							I'm a passionate full-stack developer with expertise
							in modern web technologies. I love turning complex
							problems into simple, beautiful, and intuitive
							solutions.
						</p>
						<p className="text-gray-300 text-lg mb-6 leading-relaxed">
							With a strong foundation in TypeScript, React, and
							Node.js, I build scalable applications that users
							love to interact with.
						</p>
						<p className="text-gray-300 text-lg leading-relaxed">
							Beyond coding, I'm constantly learning and exploring
							new technologies to stay at the forefront of web
							development.
						</p>
					</div>
					<div>
						<h3 className="text-3xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
							My Skills
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{[
								"TypeScript",
								"Python",
								"React",
								"Next.js",
								"Node.js",
								"Tailwind CSS",
								"PostgreSQL",
								"Azure",
							].map((skill) => (
								<div
									key={skill}
									className="group bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg text-center border border-slate-700 hover:border-blue-500 transition duration-300 transform hover:scale-105 cursor-pointer"
									style={{ cursor: "default" }}
								>
									<span className="text-sm font-semibold group-hover:text-blue-400 transition">
										{skill}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section
				id="portfolio"
				className="relative z-10 py-32 container-custom"
			>
				<div className="mb-16">
					<h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-8">
						Featured Projects
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							onClick={() => setSelectedProject(project)}
							className="group bg-slate-800 bg-opacity-40 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm cursor-pointer"
						>
							<div
								className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition duration-300`}
							/>
							<div className="p-6">
								<h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition">
									{project.title}
								</h3>
								<p className="text-gray-400 mb-4 group-hover:text-gray-300 transition">
									{project.description}
								</p>
								<div className="flex gap-2 flex-wrap">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full border border-blue-500 border-opacity-30 group-hover:border-opacity-100 transition"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Project Modal */}
			{selectedProject && (
				<ProjectModal
					isOpen={selectedProject !== null}
					onClose={() => setSelectedProject(null)}
					title={selectedProject.title}
					fullDescription={selectedProject.fullDescription}
					tags={selectedProject.tags}
					gradient={selectedProject.gradient}
					demoUrl={selectedProject.demoUrl}
					repoUrl={selectedProject.repoUrl}
				/>
			)}

			{/* Contact Section */}
			<section
				id="contact"
				className="relative z-10 py-32 container-custom"
			>
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-8">
						Let's Connect
					</h2>
					<p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
						I'm always interested in hearing about new projects and
						opportunities. Feel free to reach out!
					</p>

					<div className="flex justify-center gap-6 flex-wrap mb-16">
						<a
							href="https://github.com/isaacschiffler"
							target="_blank"
							rel="noopener noreferrer"
							className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 px-10 py-4 rounded-lg font-bold text-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50 flex items-center gap-2"
						>
							<span>GitHub</span>
							<span className="group-hover:translate-x-1 transition">
								↗
							</span>
						</a>
						<a
							href="mailto:isaac@example.com"
							className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 px-10 py-4 rounded-lg font-bold text-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50 flex items-center gap-2"
						>
							<span>Email</span>
							<span className="group-hover:translate-x-1 transition">
								↗
							</span>
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="relative z-10 py-8 border-t border-slate-800 bg-black bg-opacity-50">
				<div className="container-custom text-center text-gray-400">
					<p>&copy; 2025 Isaac Schiffler. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
