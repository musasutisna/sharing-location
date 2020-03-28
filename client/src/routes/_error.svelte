<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="container center-align">
	<h1>{status}</h1>
	<p>{error.message}</p>
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
	<a class="btn btn-small blue-grey" href="/" title="back to home page">Back To Home Page</a>
</div>
