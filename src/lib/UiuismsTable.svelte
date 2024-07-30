<script>
    import { uiuisms } from '$lib/data.js';
    import { onMount } from 'svelte';

    export let query;

    function calculateLink(code) {
        let bytes = [].slice.call(new TextEncoder().encode(code)).map((byte) => String.fromCodePoint(byte)).join("");
        return "https://uiua.org/pad?src=" + btoa(bytes).replace(/\+/g, "-").replace(/\//g, "_");
    }

    function highlightMatches(name, query) {
        if (!query) return name;
        return name.replace(new RegExp(query, "gi"), "<mark>$&</mark>");
    }

    let innerWidth = 0;
</script>

{#if innerWidth < 556}
    <div id="hiding-warning">
        <p style="margin: 0">Some data is being hidden from view. To stop this, try rotating to landscape mode.</p>
    </div>
{/if}

<table style="border-collapse: collapse; margin-left: auto; margin-right: auto">
    <thead>
        <tr style="background: #808080;">
            <th>Name</th>
            {#if innerWidth >= 556}
                <th>Code</th>
            {/if}
            <th>Pad</th>
        </tr>
    </thead>
    <tbody>
        {#each uiuisms as { name, code }}
            {#if name.toLowerCase().includes(query.toLowerCase())}
                <tr>
                    <td><b>{@html highlightMatches(name, query)}</b></td>
                    {#if innerWidth >= 556}
                        <td><pre>{code}</pre></td>
                    {/if}
                    <td><a href={calculateLink(code)}>Pad</a></td>
                </tr>
            {/if}
        {/each}
    </tbody>
</table>

<svelte:window bind:innerWidth />

<style>
    @media (prefers-color-scheme: light) {
        :root {
            --entry-background-color: #dfdfdf;
            --odd-entry-background-color: #bfbfbf;
            --code-background-color: #f4f6f6;
            --code-color: #344;
            --warning-color: #ffff80;
        }
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --entry-background-color: #303030;
            --odd-entry-background-color: #181818;
            --code-background-color: #1d2c3a;
            --code-color: #d1daec;
            --warning-color: #808000;
        }
    }

    @font-face {
        font-family: Uiua386;
        src: url(/Uiua386.ttf);
    }

    tr {
        background-color: var(--odd-entry-background-color);
    }

    tr:nth-child(2n) {
        background-color: var(--entry-background-color);
    }

    pre {
        font-family: 'Uiua386';
        background-color: var(--code-background-color);
        color: var(--code-color);
        margin: 0;
    }

    td, th {
        padding: 10px 1px;
    }

    #hiding-warning {
        display: none;
        flex-direction: row;
        background: var(--warning-color);
        border-radius: 3vw;
        margin: 10px;
        height: 17vw;
        align-items: center;
    }

    @media (orientation: portrait) {
        #hiding-warning {
            display: flex;
        }
    }

    #hiding-warning::before {
        content: "\26A0\FE0F";
        font-size: 12vw;
    }
</style>
