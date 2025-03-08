<script lang="ts">
	import type { NoteLike } from '$lib/index.svelte';
	import '$lib/styles.css';

	const { onCreateNote }: { onCreateNote: (note: NoteLike) => void } = $props();
	let name = $state('');
	let text = $state('');
</script>

<style>
	form {
			display: inline-flex;
			flex-direction: column;
			gap: 8px;
			align-items: flex-start;
	}
	form > button {
			align-self: flex-end;
	}
	input:user-invalid, textarea:user-invalid {
			background-color: lightpink;
	}
</style>

<form class="card" onsubmit={() => onCreateNote({name, text})}>
	<label>
		Name of note: <input bind:value={name} name="name" required minlength="1" pattern="\S(.*\S)?" placeholder="Enter name of note" />
	</label>
	<label>
		Text of note: <textarea bind:value={text} name="text"></textarea>
	</label>

	<button type="submit">Add new note</button>
</form>