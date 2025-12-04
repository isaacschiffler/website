import React from "react";

export const Hero = () => {
	return (
		<section className="pt-32 pb-20 container-custom">
			<div className="max-w-3xl">
				<h1 className="text-5xl md:text-7xl font-bold mb-6">
					Hi, I'm Isaac Schiffler
				</h1>
				<p className="text-xl md:text-2xl text-slate-300 mb-8">
					A passionate developer building beautiful and functional web
					applications.
				</p>
				<button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition">
					View My Work
				</button>
			</div>
		</section>
	);
};
