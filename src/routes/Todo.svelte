<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let todo;
</script>

<li class="group relative flex justify-between gap-4 py-1 ">
	<div class="flex items-center gap-2">
		<!-- <input type="checkbox" on:change={() => handleComplete(id)} /> -->
		{todo.title}
	</div>
	<button on:click={() => dispatch('remove', todo)} class="invisible group-hover:visible">
		<span class="text-red-700 underline">Delete</span>
	</button>
	<div
		class="invisible absolute top-0 -left-2 -z-10 box-content h-full min-w-full bg-neutral-100 px-2 group-hover:visible"
	/>
</li>

<style>
</style>
