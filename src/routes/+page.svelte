<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

<style lang="postcss">
    :global(html) {
        font-family: 'Poppins', sans-serif;
        text-align: center;
        background-color: theme(colors.primary);
    }
    .container {
        align-items: center;
        align-content: center;
        height: 85vh;
        width: 85vw;
    }
    .item1 {
        height: 25vh;
    }
    .top-align {
        align-self: start;
    }
</style>

<script>
    import Header from "./components/Header.svelte";    
</script>

<Header />


<div class="mt-8 text-secondary container flex mx-auto my-0 justify-evenly gap-4 flex-wrap">
    <div class="item1 p-4 text-secondary rounded-lg text-center border border-accent max-md:w-64 w-2/3 text-sm lg:text-lg flex flex-wrap justify-center">
        <div class="top-align "><p>Hi! I'm Stereo528!</p></div>
        <div><p class="mt-4 h">This website is very Work In Progress! Please check back later for a more indepth experience!</p></div>
        
    </div>
    <div class="item2 p-4 text-secondary rounded-lg text-center border border-accent max-md:w-64 w-1/4 text-sm lg:text-lg">
        <p>At some point, I'll load fun facts here or something</p>
    </div>
    <div class="item3 p-4 text-secondary rounded-lg text-center border border-accent max-md:w-64 w-3/4 text-sm lg:text-lg">
        <p>I make things! One of those things happens to be Minecraft mods. My current mods are: <br>
            <a href="https://modrinth.com/mod/mainmenuchanger" class="text-primary-button p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:underline">MainMenuChanger</a>
            <a href="https://modrinth.com/mod/yach" class="text-primary-button p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:underline">YACH</a>
            <a href="https://modrinth.com/mod/moue-milkshakes" class="text-primary-button p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:underline">Moue Milkshakes</a>
        </p>
    </div>
</div>
