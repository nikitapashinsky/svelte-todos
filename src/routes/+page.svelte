<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
	import { nanoid } from 'nanoid';
	import Todo from './Todo.svelte';
	import { todos } from '../stores.js';
	import { completedTodos } from '../stores.js';

	let newTodoTitle = '';

	function handleAdd() {
		let newTodo = {
			id: nanoid(),
			title: newTodoTitle,
			isCompleted: false
		};

		$todos = [newTodo, ...$todos];
		newTodoTitle = '';
		console.log($todos);
	}

	function removeTodo(todo) {
		$todos = $todos.filter((t) => t.id !== todo.id);
	}

	function handleComplete(id) {
		let completedTodo = $todos.splice(id, 1);
		$todos = $todos;
		$completedTodos = [completedTodo, ...$completedTodos];
	}
</script>

<main class="flex max-w-xs flex-col gap-4 p-8">
	<h1 class="font-medium">Todos</h1>
	<form on:submit|preventDefault={handleAdd}>
		<div class="flex gap-2">
			<input
				required
				type="text"
				bind:value={newTodoTitle}
				placeholder="New todo…"
				class="w-full rounded-sm border border-neutral-400 py-1 px-2 placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
			/>
			<button
				type="submit"
				class="flex items-center justify-center rounded-sm bg-blue-600 px-3  text-white shadow-sm"
				>Add</button
			>
		</div>
	</form>
	<ul class="flex flex-col gap-1">
		{#each $todos as todo, index (todo.id)}
			<Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
		{/each}
	</ul>
</main>
