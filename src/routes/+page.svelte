<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

<style lang="postcss">
    :global(html) {
        font-family: 'Poppins', sans-serif;
        text-align: center;
        background-color: theme(colors.primary);
    }
</style>

<script>
    import Links from "../components/Links.svelte";
    import Logo from "../components/Logo.svelte";
</script>

<div class="justify-between flex p-1 items-center text-secondary border-b-4 border-primary-button px-5 mx-auto w-1/2">
    <Logo/>
    <Links/>
</div>

<div class="mt-8 text-secondary">
    <p class="">Hi! I'm Stereo528 (She/Her), and I love programming and video games.</p>
</div>
