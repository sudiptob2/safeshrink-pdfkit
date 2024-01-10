<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';

	let files: FileList;
	$: if (files) {
		console.log(files);
	}
</script>

<div class="text-center mt-20">
	<div class="mb-10 mt-5">
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight">Fast & Efficient PDF</p>
		<p class="mb-2 text-xl sm:text-2xl md:text-3xl font-semibold">Compression</p>
		<p class="text-sm sm:text-base md:text-lg text-surface-700 font-light">
			Reduce filesize while keeping quality and protecting your <strong class="text-tertiary-700"
				>{'privacy.'.toUpperCase()}</strong
			>
		</p>
	</div>

	<div class="flex justify-center">
		<FileDropzone class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2" name="files" bind:files multiple>
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
