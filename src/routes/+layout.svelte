<script>
    export const prerender = true;
</script>

<nav>
    <div style="flex: 3">
        <h1 style="margin-bottom: 0">Uiuisms</h1>
        <p style="margin-top: 0">The catalog of Uiua snippets</p>
    </div>
    <p style="flex: 1">
        <a href="/uiuisms">home</a> &bull; <a href="/uiuisms/about">about</a>
    </p>
</nav>

<div style="margin: 8px">
    <slot />
</div>

<style>
    @media (prefers-color-scheme: light) {
        :root {
            --navbar-background-color: #dfdfdf;
        }
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --navbar-background-color: #303030;
        }
    }

    nav {
        display: flex;
        justify-content: space-evenly;
        background-color: var(--navbar-background-color);
        align-items: center;
    }

    nav > * {
        text-align: center;
    }
</style>
