<script>
    import UiuismsTable from "$lib/UiuismsTable.svelte";
    import SearchBox from "$lib/SearchBox.svelte";

    let query = "";
</script>

<SearchBox bind:query />
<UiuismsTable {query} />

<svelte:head>
    <title>Uiuisms</title>
</svelte:head>