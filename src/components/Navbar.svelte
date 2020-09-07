<script>
    import { products } from '../cart'

    let itemsInCart = 0;

    $: {
        let count = 0
        for(let i of $products){
            count += i.quantity;
        }
        itemsInCart = count
    }

</script>



<style>


</style>

<nav >
    <a href="https://www.linkedin.com/in/adao-natalino-9bb85a89/"> Profile </a>
    <a href="https://github.com/AdaoNatalino/Svelte-Shopping-Cart"> Repo </a>
</nav>
<h3>Items in the cart { itemsInCart }</h3>