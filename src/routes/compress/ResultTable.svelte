<script lang="ts">
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import {
		compressionResultTableData,
		type CompressionResult
	} from '../../stores/compressionStore';

	let sourceData: CompressionResult[] = [];
	let tableSource: TableSource;

	const setTableSource = (): TableSource => {
		return {
			head: ['Name', 'Before', 'Status', 'After', 'Download'],
			body: tableMapperValues(sourceData, ['name', 'before', 'status', 'after', 'download']),
			meta: tableMapperValues(sourceData, ['position'])
		};
	};

	$: {
		sourceData = $compressionResultTableData.map((row) => ({
			...row,
			status: `<span class="chip variant-filled bg-green-700 text-xs font-bold py-1 px-2 text-center rounded-2xl">${row.status}</span>`,
			download: `<button type="button" class="chip variant-filled text-xs uppercase">download</button>`
		}));
		tableSource = setTableSource();
	}
</script>

{#if sourceData.length > 0}
	<div class="overflow-auto max-h-[400px]">
		<Table regionBody="table-fixed " source={tableSource} />
	</div>
{/if}
