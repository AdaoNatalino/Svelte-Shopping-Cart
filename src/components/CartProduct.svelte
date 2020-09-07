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

   
</script>

<style>

.add {
    background-color: rgb(99, 68, 241);
    border-radius: 5px;
    width: 30px;
}

.remove{
    background-color: yellow;
    border-radius: 5px;
    width: 30px;
}

.delete{
    background-color: red ;
    border-radius: 5px;
    width: 30px;
}

.products {
    position: relative;
    margin-left: auto;
    color: black;
    display: flex;
    border: 1px solid black;
    margin-right: auto;
}


</style>


<div class="products">
    <ul>
        <li>
            <h3>Product: {product.name}</h3>
            <p>Price per Unit: £{product.price}</p>
            <p>Qtd: {product.quantity} </p>
            <button class="add" on:click={addOne}> + </button>
            <button class="remove" on:click={removeOne} {disabled}> - </button>
            <button class="delete" on:click={deleteItem}> X </button>
        </li>
    </ul>
</div>

