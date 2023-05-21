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
    import {base} from "$app/paths";
</script>

<div class="justify-between flex p-1 items-center text-secondary border-b-4 border-primary-button px-0 sm:px-1 lg:px-5 mx-auto w-4/5 lg:w-1/2">
    <h1 class="text-4xl text-secondary sm:text-3xl">Stereo528</h1>
    <nav>
        <a href="{base}" class="text-secondary p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl">Home</a>
        <a href="{base}/about" class="text-secondary p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl">About</a>
        <a href="{base}/contact" class="text-secondary p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl">Contact</a>
    </nav>
</div>

<div class="mt-8 text-secondary container flex mx-auto my-0 justify-evenly gap-4 flex-wrap">
    <div class="item1 p-4 text-secondary rounded-lg text-center border border-accent max-md:w-64 w-2/3 text-sm lg:text-lg flex flex-wrap justify-center">
        <div class="top-align "><p>Hi! I'm Stereo528!</p></div>
        <div><p class="mt-4 h">This website is very Work In Progress! Please check back later for a more indepth experience!</p></div>
        
    </div>
    <div class="item2 p-4 text-secondary rounded-lg text-center border border-accent max-md:w-64 w-1/4 text-sm lg:text-lg">
        <p>I make things like Minecraft Mods in my spare time! (i think this is a fun fact section, i should make it load random ones)</p>
    </div>
    <div class="item3 p-4 text-secondary rounded-lg text-center border border-accent max-md:w-64 w-3/4 text-sm lg:text-lg">
        <p>Eventually some text will go here, however I have no clue what. probably this whole area will be an introduction to what i do, but leave enough personal for about me page</p>
    </div>
</div>
