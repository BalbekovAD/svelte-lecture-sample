<script lang="ts">
	import { generateNote, totalAddedNotesCount } from '$lib/index.svelte';
	import NoteComponent from '$lib/Note.svelte';
	import type { Note } from '$lib/index.svelte';
	import CreateNoteForm from '$lib/CreateNoteForm.svelte';
	import { fly } from 'svelte/transition';

	const notes: Note[] = $state([]);
</script>

<style>
    li {
        list-style-type: none;
        margin: 16px;
    }

    ul {
        margin-block: 0;
        padding-inline: 0;
    }
</style>

<header>
	<h1>Welcome to SvelteKit</h1>
	<h2>At this moment you have created {totalAddedNotesCount()} notes!</h2>
</header>
<ul>
	{#each notes as note, i (note.id)}
		<li transition:fly={{x: 400}}>
			<NoteComponent {note} onDelete={() => notes.splice(i, 1)} />
		</li>
	{/each}
</ul>
<CreateNoteForm onCreateNote={noteLike => notes.push(generateNote(noteLike))} />