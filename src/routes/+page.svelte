<script>
    import UiuismsTable from "$lib/UiuismsTable.svelte";
    import SearchBox from "$lib/SearchBox.svelte";

    let query = "";
</script>

<div>
    <SearchBox bind:query />
    <UiuismsTable {query} />
</div>

<svelte:head>
    <title>Uiuisms</title>
</svelte:head>