import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			{/* Animated background elements */}
			<div className="fixed inset-0 z-0">
				<div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
				<div
					className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
					style={{ animationDelay: "2s" }}
				></div>
				<div
					className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
					style={{ animationDelay: "4s" }}
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
						<button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 px-10 py-4 rounded-lg font-bold text-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50">
							View My Work
							<span className="inline-block ml-2 group-hover:translate-x-1 transition">
								→
							</span>
						</button>
						<button className="px-10 py-4 rounded-lg font-bold text-lg border-2 border-gray-500 hover:border-blue-400 text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-105">
							Contact Me
						</button>
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
								"React",
								"Next.js",
								"Node.js",
								"Tailwind CSS",
								"PostgreSQL",
								"GraphQL",
								"AWS",
							].map((skill) => (
								<div
									key={skill}
									className="group bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg text-center border border-slate-700 hover:border-blue-500 transition duration-300 transform hover:scale-105 cursor-pointer"
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
					{[
						{
							title: "Project One",
							description:
								"A beautiful web application built with modern technologies",
							tags: ["React", "TypeScript", "Tailwind"],
							gradient: "from-blue-500 to-cyan-500",
						},
						{
							title: "Project Two",
							description:
								"Full-stack application with backend and database",
							tags: ["Next.js", "Node.js", "PostgreSQL"],
							gradient: "from-purple-500 to-pink-500",
						},
						{
							title: "Project Three",
							description:
								"Real-time application with live updates",
							tags: ["React", "Firebase", "Tailwind"],
							gradient: "from-green-500 to-emerald-500",
						},
					].map((project, index) => (
						<div
							key={index}
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
