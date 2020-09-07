<script>
    import { products } from "../cart";
    
    export let product;
    let disabled = false;

    let showTotal = false;

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

    // const totalInCart = () => {
    //     const arrayOfPrices = $products.map(p => (p.quantity) * p.price)
    //     const total = arrayOfPrices.reduce((a, p) => p + a, 0)
    //     return total
    // }

    // const calculateTotal = () => showTotal = true 

</script>

<style>


</style>


<div class="product">
    Name: {product.name}
    Price: {product.price}
    Qtd: {product.quantity}
    <button on:click={addOne}> + </button>
    <button on:click={removeOne} {disabled}> - </button>
    <button on:click={deleteItem}> X </button>

</div>

<!-- <button on:click={ calculateTotal } class="cal__total"> Calculate your total </button>

{#if showTotal} 
    <div class="total">
        Total in your cart: { totalInCart() }
    </div>
    
{/if} -->