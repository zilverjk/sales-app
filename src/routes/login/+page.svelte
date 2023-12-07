<script lang="ts">
	import { enhance } from '$app/forms';
	import Alert from '$lib/components/alert.svelte';

	export let form;

	let isLoading = false;
</script>

<main class="w-full flex">
	<div class="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
		<div class="relative z-10 w-full max-w-md">
			<img src="https://floatui.com/logo-dark.svg" width="150" alt="Logo" />
			<div class="mt-16 space-y-3">
				<h3 class="text-white text-3xl font-bold">Módulo de Ventas</h3>
			</div>
		</div>
		<div
			class="absolute inset-0 my-auto h-[500px]"
			style="
        background: linear-gradient(
          152.92deg,
          rgba(192, 132, 252, 0.2) 4.54%,
          rgba(232, 121, 249, 0.26) 34.2%,
          rgba(192, 132, 252, 0.1) 77.55%
        );
        filter: blur(118px);
      "
		></div>
	</div>
	<div class="flex-1 flex items-center justify-center h-screen">
		<div class="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
			<div class="">
				<img src="https://floatui.com/logo.svg" alt="" width="150" class="lg:hidden" />
				<div class="mt-5 space-y-2">
					<h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">Login</h3>
				</div>
			</div>
			{#if form?.message}
				<Alert type="error" title="Credenciales incorrectas" message={form.message} showClose />
			{/if}
			<form
				method="POST"
				class="space-y-5"
				use:enhance={() => {
					isLoading = true;

					return async ({ update }) => {
						isLoading = false;

						update();
					};
				}}
			>
				<div>
					<label for="username" class="font-medium">Usuario</label>
					<input
						type="text"
						id="username"
						name="username"
						required
						class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
					/>
				</div>
				<div>
					<label for="password" class="font-medium">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						required
						class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
					/>
				</div>

				{#if isLoading}
					<button
						class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
						type="button"
						disabled
					>
						<span
							class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
							role="status"
							aria-label="loading"
						/>
						Autenticando...
					</button>
				{:else}
					<button
						class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
						type="submit"
					>
						Ingresar
					</button>
				{/if}
			</form>
		</div>
	</div>
</main>
