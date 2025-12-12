"use client";

interface ProjectModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	description?: string;
	fullDescription: string;
	tags: string[];
	gradient: string;
	imageUrl?: string;
	demoUrl?: string;
	repoUrl?: string;
}

export const ProjectModal = ({
	isOpen,
	onClose,
	title,
	fullDescription,
	tags,
	gradient,
	imageUrl,
	demoUrl,
	repoUrl,
}: ProjectModalProps) => {
	if (!isOpen) return null;

	return (
		<>
			{/* Backdrop - Full screen clickable area */}
			<div
				className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
				onClick={onClose}
			></div>

			{/* Modal - Centered on top of backdrop */}
			<div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
				<div
					className="relative bg-slate-900 rounded-2xl border border-slate-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl shadow-blue-500/20 scrollbar-hide pointer-events-auto"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Close Button */}
					<button
						onClick={onClose}
						className="sticky top-4 right-4 float-right mr-4 text-gray-400 hover:text-white transition z-10 text-2xl"
						aria-label="Close modal"
					>
						✕
					</button>

					{/* Image Section */}
					{imageUrl && (
						<div
							className={`h-64 bg-gradient-to-br ${gradient}`}
						></div>
					)}
					{!imageUrl && (
						<div
							className={`h-64 bg-gradient-to-br ${gradient} opacity-80`}
						></div>
					)}

					{/* Content Section */}
					<div className="p-8">
						<h2 className="text-4xl font-black mb-4 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
							{title}
						</h2>

						<p className="text-gray-300 text-lg mb-6 leading-relaxed">
							{fullDescription}
						</p>

						{/* Tags */}
						<div className="mb-8">
							<h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
								Technologies
							</h3>
							<div className="flex gap-2 flex-wrap">
								{tags.map((tag) => (
									<span
										key={tag}
										className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-20 text-blue-300 px-4 py-2 rounded-full border border-blue-500 border-opacity-50"
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						{/* Links Section */}
						<div className="flex gap-4 flex-wrap pt-6 border-t border-slate-700">
							{demoUrl && (
								<a
									href={demoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 px-6 py-3 rounded-lg font-bold text-center transition duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
								>
									<span>View Demo</span>
									<span className="group-hover:translate-x-1 transition">
										↗
									</span>
								</a>
							)}
							{repoUrl && (
								<a
									href={repoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 group border-2 border-gray-500 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-6 py-3 rounded-lg font-bold text-center transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
								>
									<span>View Code</span>
									<span className="group-hover:translate-x-1 transition">
										↗
									</span>
								</a>
							)}
						</div>

						<button
							onClick={onClose}
							className="w-full mt-6 text-gray-400 hover:text-gray-300 transition font-medium"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
