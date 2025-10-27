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

<script lang="ts">
	// @ts-nocheck
  // Import the post directly (no loops yet)
  import Post from "$lib/posts/neeraj.svx"
</script>

<h1>📝 My Blog</h1>
<Post />

<!-- <script>
// @ts-nocheck

  import Post, { metadata } from '$lib/posts/neeraj.svx';
  console.log(metadata.title); // "welcome"
</script>

<h1>{metadata.title}</h1>
<Post /> -->
