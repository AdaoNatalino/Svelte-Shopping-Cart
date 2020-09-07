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

.product {
    border: 1px solid black;
    flex: 1;
    text-align: center;
}

.buy {
    background-color: lightgreen;
    border-radius: 5px;

}

</style>

<div class="product">
    <!-- id: {product.id} -->
    <h4>{product.name}</h4>
    <p>£{product.price}</p>
    <p>Size: {product.size} </p>
    <button class="buy" on:click={buyProduct}>Add to Cart</button>
</div>
