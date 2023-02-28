<script>
	import Todo from './Todo.svelte';
	import { todos, logbook } from '../stores.js';

	export let showLogbook = false;

	function toggleComplete(todo, index) {
		todo.isCompleted = !todo.isCompleted;
		if (todo.isCompleted) {
			$todos = $todos.filter((t) => t.id !== todo.id);
			$logbook = [todo, ...$logbook];
		} else {
			$logbook = $logbook.filter((t) => t.id !== todo.id);
			$todos = [todo, ...$todos];
		}
	}

	function removeTodo(todo) {
		$todos = $todos.filter((t) => t.id !== todo.id);
		$logbook = $logbook.filter((t) => t.id !== todo.id);
	}
</script>

<div class="flex flex-col gap-6">
	{#if $todos.length > 0}
		<ul class="flex flex-col gap-1">
			{#each $todos as todo, index (todo.id)}
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

	{#if showLogbook}
		<div class="flex flex-col gap-4 border-t border-neutral-300 pt-4">
			<h1 class="font-medium">Logbook</h1>
			{#if $logbook.length > 0}
				<ul class="flex flex-col gap-1">
					{#each $logbook as todo, index (todo.id)}
						<Todo
							{todo}
							on:remove={(e) => removeTodo(e.detail)}
							on:complete={(e) => toggleComplete(e.detail, index)}
						/>
					{/each}
				</ul>
			{:else}
				<p class="text-sm text-neutral-500">Your completed todos will appear here.</p>
			{/if}
		</div>
	{/if}
</div>
