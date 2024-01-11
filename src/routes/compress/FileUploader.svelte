<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { compressionResultTableData } from '../../stores/compressionStore';

	let files: FileList;
	$: if (files) {
		compressionResultTableData.update((data) => {
			const newData = [...data];
			for (let i = 0; i < files.length; i++) {
				newData.push({
					position: data.length + i + 1,
					name: files[i].name,
					before: `${Math.round(files[i].size / 1000)} KB`,
					status: 'saved 35%',
					after: `${Math.round(files[i].size / 1000)} KB`
				});
			}
			return newData;
		});
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
</div>
