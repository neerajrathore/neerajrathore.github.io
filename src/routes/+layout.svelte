<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- ✅ Navigation Bar -->
<nav style="padding: 1rem; background: #f8f8f8; display: flex; gap: 1rem;">
	<a href="/">Home</a>
	<a href="/blog">Blog</a>
</nav>

{@render children?.()}
