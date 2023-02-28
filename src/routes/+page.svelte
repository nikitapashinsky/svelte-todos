<script>
	import { nanoid } from 'nanoid';
	import '@fontsource/inter/variable.css';
	import '../app.css';
	import { todos, logbook } from '../stores.js';
	import Todos from './Todos.svelte';

	let todoNameInput = '';
	let showLogbook;

	function addTodo() {
		let newTodo = {
			id: nanoid(),
			name: todoNameInput,
			isCompleted: false
		};

		$todos = [newTodo, ...$todos];
		todoNameInput = '';
		console.log($todos);
	}

	function deleteLoggedTodos() {
		$logbook = [];
	}

	function toggleLogbook() {
		showLogbook = !showLogbook;
	}
</script>

<main class="mx-auto flex max-w-lg flex-col p-8">
	<div class="flex w-full flex-col gap-4 rounded-[4px] bg-white p-8 shadow-md">
		<div class="flex items-center justify-between">
			<h1 class="font-medium">Todos</h1>
			<button on:click={toggleLogbook} class="text-sm text-neutral-500 underline"
				>{showLogbook ? 'Hide logbook' : 'Show logbook'}</button
			>
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
		<Todos {showLogbook} on:deleteLoggedTodos={deleteLoggedTodos} />
	</div>
</main>
