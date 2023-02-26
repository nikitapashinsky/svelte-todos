<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
	import { todos } from '../stores.js';
	let newTodo = '';

	$: console.log($todos);
	function handleSubmit() {
		$todos = [newTodo, ...$todos];
		newTodo = '';
	}

	function handleRemove(index) {
		$todos.splice(index, 1);
		$todos = $todos;
	}
</script>

<main class="p-8 flex flex-col gap-4">
	<h1 class="font-medium">Todos</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<input
			type="text"
			bind:value={newTodo}
			placeholder="Add todo"
			class="text-sm focus:outline-none"
		/>
	</form>
	<ul>
		{#each $todos as todo, index (todo)}
			<li class="text-sm" on:click={() => handleRemove(index)}>{todo}</li>
		{/each}
	</ul>
</main>
