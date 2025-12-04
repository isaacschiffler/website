import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
			{/* Navigation */}
			<nav className="fixed w-full top-0 z-50 bg-slate-900 bg-opacity-95 backdrop-blur-sm border-b border-slate-700">
				<div className="container-custom py-4 flex justify-between items-center">
					<div className="text-2xl font-bold text-blue-400">IS</div>
					<div className="flex gap-6">
						<Link
							href="#about"
							className="hover:text-blue-400 transition"
						>
							About
						</Link>
						<Link
							href="#portfolio"
							className="hover:text-blue-400 transition"
						>
							Portfolio
						</Link>
						<Link
							href="#contact"
							className="hover:text-blue-400 transition"
						>
							Contact
						</Link>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="pt-32 pb-20 container-custom">
				<div className="max-w-3xl">
					<h1 className="text-5xl md:text-7xl font-bold mb-6">
						Hi, I'm Isaac Schiffler
					</h1>
					<p className="text-xl md:text-2xl text-slate-300 mb-8">
						A passionate developer building beautiful and functional
						web applications.
					</p>
					<button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition">
						View My Work
					</button>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-20 bg-slate-800 bg-opacity-50">
				<div className="container-custom">
					<h2 className="text-4xl font-bold mb-12">About Me</h2>
					<div className="grid md:grid-cols-2 gap-12">
						<div>
							<p className="text-slate-300 text-lg mb-4">
								I'm a full-stack developer with a passion for
								creating elegant solutions to complex problems.
							</p>
							<p className="text-slate-300 text-lg">
								With expertise in modern web technologies, I
								focus on building scalable, user-friendly
								applications that make a real impact.
							</p>
						</div>
						<div>
							<h3 className="text-2xl font-semibold mb-4">
								Skills
							</h3>
							<div className="grid grid-cols-2 gap-4">
								{[
									"TypeScript",
									"React",
									"Next.js",
									"Node.js",
									"Tailwind",
									"PostgreSQL",
								].map((skill) => (
									<div
										key={skill}
										className="bg-slate-700 p-3 rounded-lg text-center"
									>
										{skill}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section id="portfolio" className="py-20 container-custom">
				<h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							title: "Project One",
							description: "A description of your first project",
							tags: ["React", "TypeScript", "Tailwind"],
						},
						{
							title: "Project Two",
							description: "A description of your second project",
							tags: ["Next.js", "Node.js", "PostgreSQL"],
						},
						{
							title: "Project Three",
							description: "A description of your third project",
							tags: ["React", "Firebase", "Tailwind"],
						},
					].map((project, index) => (
						<div
							key={index}
							className="bg-slate-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition"
						>
							<div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600" />
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">
									{project.title}
								</h3>
								<p className="text-slate-300 mb-4">
									{project.description}
								</p>
								<div className="flex gap-2 flex-wrap">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs bg-slate-600 px-2 py-1 rounded"
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

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-slate-800 bg-opacity-50">
				<div className="container-custom text-center">
					<h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
					<p className="text-xl text-slate-300 mb-8">
						I'm always open to new opportunities and collaborations.
					</p>
					<div className="flex justify-center gap-6">
						<a
							href="https://github.com/isaacschiffler"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition"
						>
							GitHub
						</a>
						<a
							href="mailto:isaac@example.com"
							className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition"
						>
							Email
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 border-t border-slate-700">
				<div className="container-custom text-center text-slate-400">
					<p>&copy; 2025 Isaac Schiffler. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
