<script>
    import { products } from "../cart";
    
    export let product;
    let disabled = false

	const addOne = () => {
        product.quantity ++
        $products = $products;
        disabled = false
    }

    const removeOne = () => {
        product.quantity --
        $products = $products;
        if(product.quantity == 0) disabled = true
    } 

    const deleteItem = () => {
        $products = $products.filter(i => i.id != product.id)
    }

</script>

<style>


</style>

<div class="product">
    Name: {product.name}
    Price: {product.price}
    Units: {product.quantity}
    <button on:click={addOne}> + </button>
    <button on:click={removeOne} {disabled}> - </button>
    <button on:click={deleteItem}> X </button>

</div>
