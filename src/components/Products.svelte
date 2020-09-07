<script>
	import { pizzas, drinks, desserts } from '../products'
    import Product from './Product.svelte'

    const OPTIONS = {
        PIZZAS: "Pizzas",
        DRINKS: "Drinks",
        DESSERTS: "Desserts"
    }

    let choice = "";

    const selectPizzas = () => choice = OPTIONS.PIZZAS 

    const selectDrinks = () => choice = OPTIONS.DRINKS

    const selectDesserts = () => choice = OPTIONS.DESSERTS

</script>

<style>

.pizza {
    background-color: rgb(243, 84, 84);
    border-radius: 5px;
}
.drinks {
    background-color: rgb(84, 126, 243);
    border-radius: 5px;
}
.desserts {
    background-color: rgb(235, 238, 72);
    border-radius: 5px;
}

.container {
    position: relative;
    margin-left: 10px;
    color: black;
    display: flex;
    border: 1px solid black;
}

</style>

<h1>Select your Category: {choice}</h1>

<button class="pizza" on:click={selectPizzas}>Pizzas</button>
<button class="drinks" on:click={selectDrinks}>Drinks</button>
<button class="desserts" on:click={selectDesserts}>Desserts</button>

<div class="container">

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

</div>


