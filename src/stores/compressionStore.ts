import { writable } from 'svelte/store';

export type CompressionResult = {
	position: number;
	name: string;
	before: string;
	status: string;
	after: string;
};

export const compressionResultTableData = writable<CompressionResult[]>([]);
