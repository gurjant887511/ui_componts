import React, { useState } from 'react';
import { Search, Clock, User, ArrowRight, Zap } from 'lucide-react';

export default function Blog() {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('All');

	const blogPosts = [
		{
			id: 1,
			title: 'Building Scalable React Components',
			excerpt: 'Learn the best practices for creating reusable, maintainable React components that scale with your application.',
			category: 'React',
			author: 'Sarah Dev',
			date: 'March 5, 2026',
			readTime: '8 min read',
			image: '🧩',
			featured: true
		},
		{
			id: 2,
			title: 'Modern CSS with Tailwind: A Complete Guide',
			excerpt: 'Master Tailwind CSS and build stunning UIs faster than ever before with utility-first CSS.',
			category: 'CSS',
			author: 'John Designer',
			date: 'March 2, 2026',
			readTime: '10 min read',
			image: '🎨',
			featured: true
		},
		{
			id: 3,
			title: 'UI/UX Best Practices for 2026',
			excerpt: 'Discover the latest trends and best practices in user interface and experience design.',
			category: 'Design',
			author: 'Emma UI',
			date: 'February 28, 2026',
			readTime: '7 min read',
			image: '✨',
			featured: true
		},
		{
			id: 4,
			title: 'JavaScript Performance Optimization Tips',
			excerpt: 'Improve your app performance with these essential JavaScript optimization techniques.',
			category: 'JavaScript',
			author: 'Alex Code',
			date: 'February 25, 2026',
			readTime: '9 min read',
			image: '⚡',
			featured: false
		},
		{
			id: 5,
			title: 'Responsive Design Patterns You Need to Know',
			excerpt: 'Create responsive layouts that work perfectly on all devices with these proven patterns.',
			category: 'Design',
			author: 'Maya Responsive',
			date: 'February 22, 2026',
			readTime: '6 min read',
			image: '📱',
			featured: false
		},
		{
			id: 6,
			title: 'State Management with React Hooks',
			excerpt: 'Deep dive into React Hooks and master state management in modern React applications.',
			category: 'React',
			author: 'Chris Dev',
			date: 'February 18, 2026',
			readTime: '11 min read',
			image: '🪝',
			featured: false
		},
		{
			id: 7,
			title: 'Advanced Web Performance Metrics',
			excerpt: 'Understand Core Web Vitals and optimize your website for better user experience and SEO rankings.',
			category: 'Performance',
			author: 'David Performance',
			date: 'February 15, 2026',
			readTime: '12 min read',
			image: '⚙️',
			featured: false
		},
		{
			id: 8,
			title: 'Image Optimization for Fast Loading',
			excerpt: 'Master image formats, compression techniques, and lazy loading strategies for optimal performance.',
			category: 'Performance',
			author: 'Lisa Code',
			date: 'February 12, 2026',
			readTime: '8 min read',
			image: '🖼️',
			featured: false
		},
		{
			id: 9,
			title: 'React Hooks Deep Dive',
			excerpt: 'Master useEffect, useState, useContext and custom hooks for professional React applications.',
			category: 'React',
			author: 'Sarah Dev',
			date: 'February 10, 2026',
			readTime: '15 min read',
			image: '⚛️',
			featured: false
		},
		{
			id: 10,
			title: 'Advanced CSS Grid Layouts',
			excerpt: 'Create complex, responsive layouts using CSS Grid with real-world examples and best practices.',
			category: 'CSS',
			author: 'John Designer',
			date: 'February 8, 2026',
			readTime: '9 min read',
			image: '📐',
			featured: false
		},
		{
			id: 11,
			title: 'Dark Mode Design Implementation',
			excerpt: 'Build beautiful dark mode themes with CSS variables and JavaScript for seamless switching.',
			category: 'Design',
			author: 'Emma UI',
			date: 'February 5, 2026',
			readTime: '7 min read',
			image: '🌙',
			featured: false
		},
		{
			id: 12,
			title: 'Async/Await vs Promises',
			excerpt: 'Master async programming patterns in JavaScript and write cleaner, more readable code.',
			category: 'JavaScript',
			author: 'Alex Code',
			date: 'February 1, 2026',
			readTime: '10 min read',
			image: '📝',
			featured: false
		},
		{
			id: 13,
			title: 'Caching Strategies for Performance',
			excerpt: 'Learn browser caching, service workers, and CDN strategies to dramatically improve load times.',
			category: 'Performance',
			author: 'David Performance',
			date: 'January 28, 2026',
			readTime: '11 min read',
			image: '💾',
			featured: false
		},
		{
			id: 14,
			title: 'Flexbox vs Grid: When to Use What',
			excerpt: 'Understand the differences between Flexbox and CSS Grid, and when to use each for layouts.',
			category: 'CSS',
			author: 'John Designer',
			date: 'January 25, 2026',
			readTime: '8 min read',
			image: '🎯',
			featured: false
		},
		{
			id: 15,
			title: 'Accessibility in Modern Web Design',
			excerpt: 'Build inclusive websites with ARIA, semantic HTML, and keyboard navigation best practices.',
			category: 'Design',
			author: 'Emma UI',
			date: 'January 22, 2026',
			readTime: '9 min read',
			image: '♿',
			featured: false
		}
	];

	const categories = ['All', 'React', 'CSS', 'Design', 'JavaScript', 'Performance'];

	const filteredPosts = blogPosts.filter(post => {
		const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
		const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	const featuredPosts = blogPosts.filter(post => post.featured);

	return (
		<div className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
			{/* Hero Section */}
			<div className="w-full px-4 py-16 border-b border-gray-200 dark:border-gray-700/50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-8">
						<h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
							UI Inventory Blog
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							A knowledge hub for developers and designers. Discover practical insights, best practices, and trends in modern UI design.
						</p>
					</div>

					{/* Search Bar */}
					<div className="mt-10 max-w-2xl mx-auto">
						<div className="relative">
							<Search className="absolute left-4 top-4 text-gray-400" size={20} />
							<input
								type="text"
								placeholder="Search articles..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Featured Posts Section */}
			{filteredPosts.length > 0 && selectedCategory === 'All' && searchTerm === '' && (
				<div className="w-full px-4 py-16 border-b border-gray-200 dark:border-gray-700/50">
					<div className="max-w-6xl mx-auto">
						<div className="flex items-center gap-2 mb-10">
							<Zap className="text-yellow-500 dark:text-yellow-400" size={24} />
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Articles</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{featuredPosts.map((post) => (
								<div
									key={post.id}
									className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
								>
									<div className="h-40 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center text-6xl border-b border-gray-200 dark:border-gray-700">
										{post.image}
									</div>
									<div className="p-6">
										<span className="inline-block px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
											{post.category}
										</span>
										<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
											{post.title}
										</h3>
										<p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
											{post.excerpt}
										</p>
										<div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
											<div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
												<Clock size={14} />
												{post.readTime}
											</div>
											<ArrowRight size={16} className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition" />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Category Filter */}
			<div className="w-full px-4 py-10 border-b border-gray-200 dark:border-gray-700/50">
				<div className="max-w-6xl mx-auto">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">Categories</h3>
					<div className="flex flex-wrap gap-3">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 py-2 rounded-lg font-medium transition ${
									selectedCategory === category
										? 'bg-purple-600 text-white dark:bg-purple-600'
										: 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* All Posts Section */}
			<div className="w-full px-4 py-16">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
						{selectedCategory !== 'All' ? `${selectedCategory} Articles` : 'All Articles'}
					</h2>

					{filteredPosts.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{filteredPosts.map((post) => (
								<article
									key={post.id}
									className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
								>
									<div className="flex items-start justify-between mb-4">
										<span className="text-3xl">{post.image}</span>
										<span className="px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full">
											{post.category}
										</span>
									</div>

									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
										{post.title}
									</h3>

									<p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
										{post.excerpt}
									</p>

									<div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
										<div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
											<div className="flex items-center gap-1">
												<User size={14} />
												{post.author}
											</div>
											<div className="flex items-center gap-1">
												<Clock size={14} />
												{post.readTime}
											</div>
										</div>
										<div className="text-xs text-gray-500 dark:text-gray-500">
											{post.date}
										</div>
									</div>

									<button className="mt-4 w-full py-2 px-4 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg font-medium transition flex items-center justify-center gap-2">
										Read Article
										<ArrowRight size={16} />
									</button>
								</article>
							))}
						</div>
					) : (
						<div className="text-center py-12">
							<p className="text-gray-500 dark:text-gray-400 text-lg">No articles found matching your search.</p>
						</div>
					)}
				</div>
			</div>

			{/* Newsletter Section */}
			<div className="w-full px-4 py-16 border-t border-gray-200 dark:border-gray-700/50">
				<div className="max-w-4xl mx-auto">
					<div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-300 dark:border-purple-700/50 rounded-lg p-8 md:p-12 text-center">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Never Miss an Update</h2>
						<p className="text-gray-700 dark:text-gray-300 mb-6">
							Subscribe to our newsletter and get the latest articles delivered to your inbox.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition"
							/>
							<button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-700 text-white rounded-lg font-semibold transition">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

