<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let todo;
</script>

<li
	class={`group relative flex justify-between gap-4 py-1 hover:bg-neutral-100 ${
		todo.isCompleted ? 'text-neutral-500' : 'text-neutral-900'
	}`}
>
	<div class="flex items-center gap-2">
		<input
			type="checkbox"
			on:change={() => dispatch('complete', todo)}
			checked={todo.isCompleted}
		/>
		{todo.name}
	</div>
	<button on:click={() => dispatch('remove', todo)} class="invisible group-hover:visible">
		<span class="text-sm text-red-700 underline">Delete</span>
	</button>
	<!-- <div
		class="invisible absolute top-0 -left-2 -z-10 box-content h-full min-w-full bg-neutral-100 px-2 group-hover:visible"
	/> -->
</li>

<style>
</style>
