<script>
    export let query;
    
    let searchBar = document.querySelector('input');
    document.addEventListener("keydown", event => {
        if (event.key === "/") searchBar.focus();
    });
</script>

<div>
    <input
        type="text"
        placeholder="Search Uiuisms&hellip;"
        bind:value={query}
    />
</div>

<style>
    div {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }
</style>
