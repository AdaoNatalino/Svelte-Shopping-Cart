<script>
	import { pizzas } from '../products'
    import Product from './Product.svelte'
</script>

<style>


</style>

<h1>Products</h1>

{#each $pizzas as product }

    <Product product={product}/>
    
{/each}
