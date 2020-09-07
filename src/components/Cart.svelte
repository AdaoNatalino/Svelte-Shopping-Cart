<script>
    import { products } from '../cart'
    import CartProduct from './CartProduct.svelte'
</script>

<style>


</style>

<h1>Cart</h1>

{#each $products as product}
    <CartProduct product={product}/>
{/each}