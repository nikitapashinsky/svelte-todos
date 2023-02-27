import { writable } from 'svelte/store';

export const todos = writable([]);

export const completedTodos = writable([]);
