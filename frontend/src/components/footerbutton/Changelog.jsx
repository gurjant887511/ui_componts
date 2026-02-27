import React from 'react'

const Changelog = () => {
	return (
		<section className="changelog-section p-6 max-w-3xl mx-auto">
			<h2 className="text-2xl font-semibold mb-4">UI Inventory — Changelog</h2>
			<p className="mb-4">
				The UI Inventory Changelog keeps you informed about all the latest updates, improvements, and changes made to the UI Inventory
				library. It’s the best place to track how our UI components, UI Kit, icons, and illustrations continue to evolve over time.
			</p>

			<h3 className="text-xl font-medium mt-4">Our changelog highlights:</h3>
			<ul className="list-disc list-inside mt-2 space-y-2">
				<li>🆕 New UI components and features</li>
				<li>🎨 Design improvements and style updates</li>
				<li>🛠 Bug fixes and performance enhancements</li>
				<li>🔄 Component updates and optimizations</li>
			</ul>

			<p className="mt-4">
				Each update is clearly documented so you can quickly understand what’s new, what’s improved, and how changes may impact your
				projects. We focus on maintaining backward compatibility, clean code standards, and consistent design across all releases.
			</p>

			<p className="mt-4">
				The UI Inventory Changelog is regularly updated to ensure transparency and help developers stay aligned with the latest UI
				trends and improvements.
			</p>
		</section>
	)
}

export default Changelog

