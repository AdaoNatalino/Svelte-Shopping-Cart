<script>
    import { products } from '../cart'
    import CartProduct from './CartProduct.svelte'

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
    
.cart {
    border: 3px solid black;
    margin-top: 5px;
}

</style>

<div class="cart">
    <h1>Cart</h1>
    <h3>Items in the cart: { itemsInCart }</h3>


    {#each $products as product}
        <CartProduct product={product}/>
    {/each}
</div>