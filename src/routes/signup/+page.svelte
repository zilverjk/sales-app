<script lang="ts">
	import { enhance } from '$app/forms';
	import SelectSearch from '$lib/components/forms/select-search.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.roles);
</script>

<div class="max-w-sm w-full text-gray-600">
	<div class="text-center">
		<img src="https://floatui.com/logo.svg" width="150" class="mx-auto" />
		<div class="mt-5 space-y-2">
			<h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">Sign up</h3>
			<p class="">
				Already have an account?
				<a href="javascript:void(0)" class="font-medium text-indigo-600 hover:text-indigo-500"
					>Log in</a
				>
			</p>
		</div>
	</div>
	<form method="POST" class="mt-8 space-y-5" use:enhance>
		<div>
			<label for="username" class="font-medium">Username</label>
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
		<div>
			<label for="email" class="font-medium">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				required
				class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
			/>
		</div>
		<div>
			<label for="name" class="font-medium">Nombre</label>
			<input
				type="text"
				id="name"
				name="name"
				required
				class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
			/>
		</div>
		<div>
			<label for="lastname" class="font-medium">Apellidos</label>
			<input
				type="text"
				id="lastname"
				name="lastname"
				required
				class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
			/>
		</div>
		<div>
			<label for="role" class="font-medium">Rol</label>
			<SelectSearch id="role" name="role" options={data.roles} />
		</div>

		<button
			class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
		>
			Registrar
		</button>
	</form>
</div>
