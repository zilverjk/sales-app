<script lang="ts">
	import '../app.pcss';
	import Sidebar from '$lib/components/sidebar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	{#if data.user}
		<Sidebar />
	{/if}
	<slot />
</main>
