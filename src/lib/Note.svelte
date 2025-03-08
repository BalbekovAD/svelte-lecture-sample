<script lang="ts">
	import type { NoteLike } from '$lib/index.svelte';
	import { X } from 'lucide-svelte';

	import '$lib/styles.css'

	const { note, onDelete }: { note: NoteLike, onDelete: () => void } = $props();
</script>

<style>
		header {
        display: flex;
        justify-content: space-between;
		}
    button {
        border: none;
        cursor: pointer;
        background-color: lightgray;
				padding-block: 0;
				padding-inline: 0;
    }
		p {
				margin-block: 0;
				text-wrap: wrap;
		}
		h3 {
				margin-block: 0;
		}
</style>

<article class="card">
	<header>
		<h3>{note.name}</h3>
		<button onclick={onDelete}>
			<X />
		</button>
	</header>
	<p>{note.text}</p>
</article>