<script lang="ts">
	import '../app.pcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/components/sidebar.svelte';
	import type { PageData } from './$types';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	// floating-ui/dom
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data: PageData;
</script>

{#if data.user}
	<AppShell>
		<svelte:fragment slot="header">Header</svelte:fragment>
		<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
		<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>

		<slot />
	</AppShell>
{:else}
	<slot />
{/if}
