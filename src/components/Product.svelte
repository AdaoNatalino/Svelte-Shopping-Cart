<script>
   export let product = {  }
   import { products } from '../cart'

   const buyProduct = () => {
    $products = [...$products, product]
   }

</script>

<style>


</style>

<div class="product">
    id: {product.id}
    name: {product.name}
    price: {product.price}
    <button on:click={buyProduct}>buy</button>
</div>
