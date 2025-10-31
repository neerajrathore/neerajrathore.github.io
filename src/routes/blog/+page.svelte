<!-- <script lang="ts">
	const postFiles = import.meta.glob('/src/lib/posts/*.svx', { eager: true });
	const posts = Object.entries(postFiles).map(([path, post]: any) => {
		const slug = path.split('/').pop()?.replace('.svx', '');
		return {
			slug,
			title: post.metadata.title,
			date: post.metadata.date,
			content: post.default
		};
	});

	// const postFiles = import.meta.glob('$lib/posts/*.md', { eager: true });

	// const posts = Object.entries(postFiles).map(([path, post]: any) => {
	// 	const slug = path.split('/').pop()?.replace('.md', '');
	// 	return {
	// 		slug,
	// 		title: post.metadata.title,
	// 		date: post.metadata.date,
	// 		content: post.default
	// 	};
	// });
</script>

<h1>📝 Blog Posts</h1>

<ul>
	{#each posts as post}
		<li>
			<a href={`/blog/${post.slug}`}>{post.title}</a>
			<small> — {post.date}</small>
		</li>
	{/each}
</ul>

<h1>📝 My Blog</h1>
<ul>
	{#each posts as blog}
		<li>
			<h3>{blog.title}</h3>
			<p>{blog.date}</p>
		</li>
	{/each}
</ul> -->

<!-- <script lang="ts">
	// @ts-nocheck
  // Import the post directly (no loops yet)
  import Post from "$lib/posts/neeraj.svx"
</script>

<h1>📝 My Blog</h1>
<Post /> -->

<!-- <script>
// @ts-nocheck

  import Post, { metadata } from '$lib/posts/neeraj.svx';
  console.log(metadata.title); // "welcome"
</script>

<h1>{metadata.title}</h1>
<Post /> -->

<script>
	// @ts-nocheck
	import NeerajMd from '$lib/posts/neeraj.svx';
	import SamadhanMd from '$lib/posts/samadhan.svx';

	let open = null;
	const toggle = (id) => (open = open === id ? null : id);
</script>

<h1 class="text-2xl font-bold mb-6 text-white">My Blog Projects</h1>

<div class="accordion space-y-4">
	<div>
		<button on:click={() => toggle('a')}>
			{open === 'a' ? '▼' : '▶'} Neeraj Project (React + Firebase)
		</button>
		{#if open === 'a'}
			<div class="content p-6 rounded mt-2">
				<NeerajMd />
			</div>
		{/if}
	</div>

	<div>
		<button on:click={() => toggle('b')}>
			{open === 'b' ? '▼' : '▶'} Samadhan Project (ASP.NET + Angular)
		</button>
		{#if open === 'b'}
			<div class="content p-6 rounded mt-2">
				<SamadhanMd />
			</div>
		{/if}
	</div>
</div>

<style>
	button {
		background: #2a2a2a;
		color: #fff;
		border: none;
		padding: 0.9rem 1rem;
		width: 100%;
		text-align: left;
		cursor: pointer;
		border-radius: 0.5rem;
		font-weight: 600;
		transition: background 0.2s ease;
	}
	button:hover {
		background: #3a3a3a;
	}
	.content {
		background: #f9f9f9; /* Light container for readability */
		color: #111; /* Dark text */
		border: 1px solid #ddd;
	}

	/* Fix svx inner text if it’s inheriting dark theme */

	:global(.content h1),
	:global(.content h2),
	:global(.content h3),
	:global(.content p),
	:global(.content li) {
		color: #111 !important;
	}
</style>
