<script>
    import { products } from "../cart";

    const totalInCart = () => {
        const arrayOfPrices = $products.map(p => (p.quantity) * p.price)
        return arrayOfPrices.reduce((a, p) => p + a, 0)
    }
    let total = 0
    const calculateTotal = () => total = totalInCart()
     
</script>

<style>

.total{
    background-color: black;
    display: flex;
    color: white;
    width: 30%;
    font-size: x-large;
}  

.total__container {
    display: grid;
}

.cal__total {
    align-items: center;
    color: blue;
    border-radius: 5px;
    background-color: lightgray;
    font-weight: 500;
    width: 30%;
}

</style>

<div class="total__container">
    <button on:click={ calculateTotal } class="cal__total"> Calculate your total </button>


    <div class="total">
        Total Price: £{ total }
    </div>
</div>