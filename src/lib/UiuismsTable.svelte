<script>
    import { uiuisms } from '$lib/data.js';

    export let query;

    function calculateLink(code) {
        let bytes = [].slice.call(new TextEncoder().encode(code)).map((byte) => String.fromCodePoint(byte)).join("");
        return "https://uiua.org/pad?src=" + btoa(bytes).replace(/\+/g, "-").replace(/\//g, "_");
    }

    function highlightMatches(name, query) {
        if (!query) return name;
        let newName = name.replace(new RegExp(query, "gi"), "<mark>$&</mark>");
        console.log(newName);
        return newName;
    }
</script>

<table style="border-collapse: collapse; margin-left: auto; margin-right: auto">
    <tbody>
        {#each uiuisms as { name, code }}
            {#if name.toLowerCase().includes(query.toLowerCase())}
                <tr>
                    <td><b>{@html highlightMatches(name, query)}</b></td>
                    <td><pre>{code}</pre></td>
                    <td><a href={calculateLink(code)}>Pad</a></td>
                </tr>
            {/if}
        {/each}
    </tbody>
</table>

<style>
    @media (prefers-color-scheme: light) {
        :root {
            --entry-background-color: #dfdfdf;
            --odd-entry-background-color: #bfbfbf;
            --code-background-color: #f4f6f6;
            --code-color: #344;
        }
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --entry-background-color: #303030;
            --odd-entry-background-color: #181818;
            --code-background-color: #1d2c3a;
            --code-color: #d1daec;
        }
    }

    @font-face {
        font-family: Uiua386;
        src: url(../static/Uiua386.ttf);
    }

    tr {
        background-color:var(--entry-background-color);
    }

    tr:nth-child(2n) {
        background-color: var(--odd-entry-background-color);
    }

    pre {
        font-family: 'Uiua386';
        background-color: var(--code-background-color);
        color: var(--code-color);
    }
</style>
