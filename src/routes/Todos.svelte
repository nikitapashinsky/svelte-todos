<script>
	import Todo from './Todo.svelte';
	import { todos, logbook } from '../stores.js';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let showLogbook = false;

	function toggleComplete(todo, index) {
		todo.isCompleted = !todo.isCompleted;
		if (todo.isCompleted) {
			setTimeout(() => {
				$todos = $todos.filter((t) => t.id !== todo.id);
				$logbook = [todo, ...$logbook];
			}, 400);
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

<div class="flex flex-col gap-8">
	{#if $todos.length > 0}
		<ul class="flex flex-col divide-y divide-neutral-200">
			{#each $todos as todo, index (todo.id)}
				<Todo
					{todo}
					on:remove={(e) => removeTodo(e.detail)}
					on:complete={(e) => toggleComplete(e.detail, index)}
				/>
			{/each}
		</ul>
	{:else}
		<p class="py-4 text-center text-sm leading-normal text-neutral-500">
			You don't have any todos yet!<br />Now is the right time!
		</p>
	{/if}

	{#if showLogbook}
		<div class="flex flex-col gap-4 border-t border-neutral-300 pt-6">
			<div class="space-y-1">
				<div class="flex justify-between">
					<h1 class="font-medium">Logbook</h1>
					{#if $logbook.length > 0}
						<button
							on:click={() => dispatch('deleteLoggedTodos', $todos)}
							class="text-sm text-red-700 underline">Delete all</button
						>
					{/if}
				</div>
				<p class="text-sm text-neutral-500">
					{$logbook.length} completed todos
				</p>
			</div>
			{#if $logbook.length > 0}
				<ul class="flex flex-col divide-y divide-neutral-200">
					{#each $logbook as todo, index (todo.id)}
						<Todo
							{todo}
							on:remove={(e) => removeTodo(e.detail)}
							on:complete={(e) => toggleComplete(e.detail, index)}
						/>
					{/each}
				</ul>
			{:else}
				<p class="py-4 text-center text-sm leading-normal text-neutral-500">
					Your completed todos<br />will appear here.
				</p>
			{/if}
		</div>
	{/if}
</div>
