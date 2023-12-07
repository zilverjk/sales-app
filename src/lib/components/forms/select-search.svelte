<script lang="ts">
	import { Autocomplete, popup } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';

	function onFlavorSelection(event: CustomEvent<AutocompleteOption<string>>): void {
		inputSelect = event.detail.label;
	}

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom',
	};

	let inputSelect: string = '';
	export let id: string = '';
	export let name: string = '';
	export let placeholderSelect: string = '';
	export let options: Record<string, any>[] = [];

	const flavorOptions: AutocompleteOption<string>[] = options.map(({ id, name }) => ({
		label: name,
		value: id.toString(),
	}));

	console.log('input', inputSelect);
	console.log(flavorOptions);
</script>

<input
	class="w-full mt-2 px-3 py-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg autocomplete"
	{id}
	{name}
	type="search"
	bind:value={inputSelect}
	placeholder={placeholderSelect}
	use:popup={popupSettings}
/>
<div
	data-popup="popupAutocomplete"
	class="w-full inline-flex items-center justify-between px-3 py-2 text-gray-500 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
>
	<Autocomplete bind:input={inputSelect} options={flavorOptions} on:selection={onFlavorSelection} />
</div>
