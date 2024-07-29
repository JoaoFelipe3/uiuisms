<script>
    import { onMount } from "svelte";

    export let query;

    let input;

    onMount(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key === "/") {
                e.preventDefault();
                input.focus();
            }
        });
    });
</script>

<div>
    <input
        type="text"
        placeholder="Search Uiuisms&hellip;"
        bind:this={input}
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
