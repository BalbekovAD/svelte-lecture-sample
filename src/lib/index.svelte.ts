let totalAddedNotesCounter = $state(0);

export class Note implements NoteLike {
	readonly name: string;
	readonly id: number;
	readonly text: string;

	constructor(name: string, text: string, id: number) {
		this.name = name;
		this.text = text;
		this.id = id;
	}
}

export interface NoteLike {
	readonly name: string;
	readonly text: string;
}

export const generateNote = ({ name, text }: NoteLike): Note => new Note(name, text, totalAddedNotesCounter++);

export const generateNotes = (...names: NoteLike[]): Note[] => names.map(generateNote);

export const totalAddedNotesCount = () => totalAddedNotesCounter;