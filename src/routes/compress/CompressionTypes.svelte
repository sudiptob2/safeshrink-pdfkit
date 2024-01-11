<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	let compressionTypeText = 'Compression Type'.toLocaleUpperCase();
	let value: number = 0;
	$: console.log(value);
</script>

<div class="grid grid-cols-1 md:grid-cols-14 gap-1 items-center">
	<label for="compressionType" class="text-center md:text-end pr-2 md:col-start-2 md:col-span-3"
		>{compressionTypeText}</label
	>
	<div class="mb-1 text-center md:col-start-5 md:col-span-8 md:text-end">
		<RadioGroup>
			<RadioItem bind:group={value} name="justify" value={0}>Less</RadioItem>
			<RadioItem bind:group={value} name="justify" value={1}>Recommended</RadioItem>
			<RadioItem bind:group={value} name="justify" value={2}>Extreme</RadioItem>
		</RadioGroup>
	</div>
</div>
