<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	let value: number = 0;
	$: console.log(value);
</script>

<div class="grid grid-cols-1 md:grid-cols-4 gap-1 items-center">
	<p class="grid text-cemter md:text-end pr-4 md:col-start-2">
		{'Compression Type'.toLocaleUpperCase()}
	</p>
	<div class="grid md:col-start-3 md:col-span-4">
		<RadioGroup>
			<RadioItem bind:group={value} name="justify" value={0}>Less</RadioItem>
			<RadioItem bind:group={value} name="justify" value={1}>Recommended</RadioItem>
			<RadioItem bind:group={value} name="justify" value={2}>Extreme</RadioItem>
		</RadioGroup>
	</div>
</div>
