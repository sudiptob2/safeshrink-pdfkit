<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	// Highlight JS
	import 'highlight.js/styles/github-dark.css';
	// for HTML
	// Floating UI for Popups
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Safe<span class="text-sm">Shrink</span></strong>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
