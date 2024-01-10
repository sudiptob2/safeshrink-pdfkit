<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';

	let files: FileList;
	$: if (files) {
		console.log(files);
	}
</script>

<div class="">
	<div class="">
		<FileDropzone class="w-full" name="files" bind:files multiple>
			<svelte:fragment slot="lead"
				><i class="text-surface-700 fa-solid fa-file-arrow-up text-4xl" /></svelte:fragment
			>
			<svelte:fragment slot="message">
				<strong>Upload a file </strong>or drag and drop</svelte:fragment
			>
			<svelte:fragment slot="meta">Only <string>PDF</string> files are allowed</svelte:fragment>
		</FileDropzone>
	</div>
	{#if files}
		<div class="mt-4">
			<h2 class="text-lg">Selected files:</h2>
			<ul>
				{#each Array.from(files) as file (file.name)}
					<li>{file.name}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
