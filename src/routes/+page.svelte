<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
	import { todos } from '../stores.js';
	let newTodo = '';

	function handleAdd() {
		$todos = [newTodo, ...$todos];
		newTodo = '';
	}

	function handleRemove(index) {
		$todos.splice(index, 1);
		$todos = $todos;
	}
</script>

<main class="flex max-w-xs flex-col gap-4 p-8">
	<h1 class="font-medium">Todos</h1>
	<form on:submit|preventDefault={handleAdd}>
		<div class="flex gap-2">
			<input
				required
				type="text"
				bind:value={newTodo}
				placeholder="New todo…"
				class="w-full rounded-sm border border-neutral-400 py-1 px-2 text-sm placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
			/>
			<button
				type="submit"
				class="flex items-center justify-center rounded-sm bg-blue-600 px-3 text-sm text-white shadow-sm"
				>Add</button
			>
		</div>
	</form>
	<ul class="flex flex-col gap-1">
		{#each $todos as todo, index (index)}
			<li class="group relative flex justify-between gap-4 py-1 text-sm">
				<div class="flex items-center gap-2">
					<input type="checkbox" />
					{todo}
				</div>
				<button on:click={() => handleRemove(index)} class="invisible group-hover:visible">
					<span class="text-red-700 underline">Delete</span>
				</button>
				<div
					class="invisible absolute top-0 -left-2 -z-10 box-content h-full min-w-full bg-neutral-100 px-2 group-hover:visible"
				/>
			</li>
		{/each}
	</ul>
</main>
