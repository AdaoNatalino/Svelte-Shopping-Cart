<script>
   export let product = {  }
   import { products } from '../cart'

   const buyProduct = () => {
       for(let i of $products){
           if(i.id == product.id){
               i.quantity ++;
               $products = $products
               return 
           }
       }
       product.quantity = 1;
    $products = [...$products, product]
   }

</script>

<style>


</style>

<div class="product">
    <!-- id: {product.id} -->
    name: {product.name}
    price: £{product.price}
    size: {product.size}
    <button on:click={buyProduct}>buy</button>
</div>
