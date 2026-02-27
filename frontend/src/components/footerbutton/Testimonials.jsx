import React from 'react';

export default function Testimonials() {
	return (
		<section className="max-w-3xl mx-auto p-6 text-gray-800 bg-white rounded-lg shadow-sm">
			<h2 className="text-2xl font-bold mb-4">Testimonials</h2>

			<div className="space-y-4 mb-4">
				<blockquote className="pl-4 border-l-4 border-purple-500 italic">
					“UI Inventory has completely changed the way I build UIs. The components are clean, stylish, and ready to use. The live preview feature saves a lot of development time.”
					<footer className="mt-2 font-semibold">— Frontend Developer</footer>
				</blockquote>

				<blockquote className="pl-4 border-l-4 border-green-500 italic">
					“I love how easy it is to copy the code and customize the components. UI Inventory is perfect for both beginners and experienced developers.”
					<footer className="mt-2 font-semibold">— Full-Stack Developer</footer>
				</blockquote>

				<blockquote className="pl-4 border-l-4 border-blue-500 italic">
					“Finding modern UI components that are free and well-coded is rare. UI Inventory delivers exactly that. It’s now my go-to UI library for new projects.”
					<footer className="mt-2 font-semibold">— Web Designer</footer>
				</blockquote>

				<blockquote className="pl-4 border-l-4 border-yellow-500 italic">
					“The combination of beautiful design, clean code, and free access makes UI Inventory stand out from other UI component libraries.”
					<footer className="mt-2 font-semibold">— Startup Founder</footer>
				</blockquote>
			</div>

			<p className="text-sm text-gray-600">UI Inventory is built to support modern web development, helping teams and individuals create professional, responsive, and high-quality interfaces faster than ever.</p>
		</section>
	);
}

