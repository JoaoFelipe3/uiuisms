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
    @media (prefers-color-scheme: light) {
        :root {
            --border-and-text-color: black;
            --background-color: white;
        }
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --border-and-text-color: white;
            --background-color: black;
        }
    }

    div {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }

    input {
        background-color: var(--background-color);
        color: var(--border-and-text-color);
        border: 2px solid var(--border-and-text-color);
        border-radius: 3vw;
    }
</style>
