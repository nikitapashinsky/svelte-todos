<script>
	import Todo from '$lib/Todo.svelte';
	import { todos } from '../../stores.js';

	$: todosObj = $todos;
</script>

<div class="flex flex-col gap-4 pt-4">
	<h3 class="font-medium">Logbook</h3>
	{#if todosObj.completedTodos.length > 0}
		<ul class="flex flex-col gap-1">
			{#each todosObj.completedTodos as todo, index (todo.id)}
				<Todo {todo} on:remove={(e) => removeTodo(e.detail)} />
			{/each}
		</ul>
	{:else}
		<p class="text-sm text-neutral-500">Completed todos will appear here in the Logbook.</p>
	{/if}
</div>
