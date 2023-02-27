<script>
	import { nanoid } from 'nanoid';
	import '@fontsource/inter/variable.css';
	import '../app.css';
	import { todos } from '../stores.js';

	export let todoNameInput = '';

	function addTodo() {
		let newTodo = {
			id: nanoid(),
			name: todoNameInput,
			isCompleted: false
		};

		$todos.activeTodos = [newTodo, ...$todos.activeTodos];
		todoNameInput = '';
		console.log($todos);
	}
</script>

<main class="flex max-w-xs flex-col gap-4 p-8">
	<div class="flex items-center justify-between">
		<h1 class="font-medium">Todos</h1>
		<a href="logbook" class="text-sm text-neutral-500 underline">Logbook</a>
	</div>
	<form on:submit|preventDefault={addTodo}>
		<div class="flex gap-2">
			<input
				required
				type="text"
				bind:value={todoNameInput}
				placeholder="New todo…"
				class="w-full rounded-sm border border-neutral-400 py-1 px-2 placeholder-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
			/>
			<button
				type="submit"
				class="flex items-center justify-center rounded-sm bg-blue-600 px-3 text-white  shadow-sm focus:outline-none  focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
				>Add</button
			>
		</div>
	</form>
	<slot />
</main>
