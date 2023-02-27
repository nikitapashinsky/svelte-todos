<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
	import Todo from '$lib/Todo.svelte';
	import { todos } from '../stores.js';

	function toggleComplete(todo, index) {
		todo.isCompleted = !todo.isCompleted;
		$todos.completedTodos = $todos.completedTodos.concat($todos.activeTodos.splice(index, 1));
	}

	// function unCompleteTodo(todo, index) {
	// 	todo.isCompleted = !todo.isCompleted;
	// 	$completedTodos.splice(index, 1);
	// 	$completedTodos = $completedTodos;
	// 	todos.unshift(todo);
	// 	todos = todos;
	// }

	function removeTodo(todo) {
		// $todos = $todos.filter((t) => t.id !== todo.id);
		// $completedTodos = $completedTodos.filter((t) => t.id !== todo.id);
	}
</script>

{#if $todos.activeTodos.length > 0}
	<ul class="flex flex-col gap-1">
		{#each $todos.activeTodos as todo, index (todo.id)}
			<Todo
				{todo}
				on:remove={(e) => removeTodo(e.detail)}
				on:complete={(e) => toggleComplete(e.detail, index)}
			/>
		{/each}
	</ul>
{:else}
	<p class="text-sm text-neutral-500">You don't have any todos. Yay!</p>
{/if}
