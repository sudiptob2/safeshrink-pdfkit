<script>
	import CompressionTypes from './CompressionTypes.svelte';
	import FileUploader from './FileUploader.svelte';
	import PageIntro from './PageIntro.svelte';
</script>

<div class="flex-1 mx-w-4xl mx-auto p-10">
	<div class="grid grid-cols-1 md:grid-cols-6 gap-4">
		<div class="md:col-start-2 md:col-span-4">
			<PageIntro />
			<CompressionTypes />
			<FileUploader />
		</div>
	</div>
</div>
