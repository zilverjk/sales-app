<script lang="ts">
	export let type: 'error' | 'success' | 'info' | 'warning';
	export let show: boolean = true;
	export let showClose: boolean = false;
	export let title: string;
	export let message: string;

	const typeAlert: { div: string; svg: string; span: string; p: string; button: string } =
		{
			error: {
				div: `mt-12 mx-4 px-4 rounded-md border-l-4 border-red-500 bg-red-50 md:max-w-2xl md:mx-auto`,
				svg: `h-6 w-6 text-red-500`,
				span: `text-red-600 font-semibold`,
				p: `text-red-600 mt-1`,
				button: `self-start text-red-500`,
			},
			success: {
				div: `mt-12 mx-4 px-4 rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto`,
				svg: `h-6 w-6 text-green-500`,
				span: `text-green-600 font-semibold`,
				p: `text-green-600 mt-1`,
				button: `self-start text-green-500`,
			},
			info: {
				div: `mt-12 mx-4 px-4 rounded-md border-l-4 border-blue-500 bg-blue-50 md:max-w-2xl md:mx-auto`,
				svg: `h-6 w-6 text-blue-500`,
				span: `text-blue-600 font-semibold`,
				p: `text-blue-600 mt-1`,
				button: `self-start text-blue-500`,
			},
			warning: {
				div: `mt-12 mx-4 px-4 rounded-md border-l-4 border-amber-500 bg-amber-50 md:max-w-2xl md:mx-auto`,
				svg: `h-6 w-6 text-amber-500`,
				span: `text-amber-600 font-semibold`,
				p: `text-amber-600 mt-1`,
				button: `self-start text-amber-500`,
			},
		}[type] || 'success';

	function closeAlert() {
		show = false;
	}
</script>

{#if show}
	<div class={typeAlert.div}>
		<div class="flex justify-between py-3">
			<div class="flex">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class={typeAlert.svg}
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
						/>
					</svg>
				</div>
				<div class="self-center ml-3">
					<span class={typeAlert.span}> {title} </span>
					<p class={typeAlert.p}>
						{message}
					</p>
				</div>
			</div>

			{#if showClose}
				<button class={typeAlert.button} on:click={closeAlert}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						/>
					</svg>
				</button>
			{/if}
		</div>
	</div>
{/if}
