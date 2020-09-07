<script>
	import { products } from '../products'
    import Product from './Product.svelte'
</script>

<style>


</style>

<h1>Products</h1>
<!-- { JSON.stringify($products) } -->

{#each $products as product }

    <Product product={product}/>
    
{/each}
