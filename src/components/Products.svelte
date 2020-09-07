<script>
	import { pizzas, drinks, desserts } from '../products'
    import Product from './Product.svelte'

    const OPTIONS = {
        PIZZAS: "pizzas",
        DRINKS: "drinks",
        DESSERTS: "desserts"
    }

    let choice = "";

    const selectPizzas = () => choice = OPTIONS.PIZZAS 

    const selectDrinks = () => choice = OPTIONS.DRINKS

    const selectDesserts = () => choice = OPTIONS.DESSERTS

</script>

<style>


</style>

<h1>Select your Category:</h1>

<button on:click={selectPizzas}>Pizzas</button>
<button on:click={selectDrinks}>Drinks</button>
<button on:click={selectDesserts}>Desserts</button>

{#if (choice == OPTIONS.PIZZAS)}
    {#each $pizzas as product }

    <Product product={product}/>

    {/each}
{/if}


{#if (choice == OPTIONS.DRINKS)}
    {#each $drinks as product }

        <Product product={product}/>
        
    {/each}
{/if}

{#if (choice == OPTIONS.DESSERTS)}
    {#each $desserts as product }

        <Product product={product}/>
        
    {/each}
{/if}
