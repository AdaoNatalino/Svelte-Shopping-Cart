<script>
    import { products } from "../cart";

    const totalInCart = () => {
        const arrayOfPrices = $products.map(p => (p.quantity) * p.price)
        const total = arrayOfPrices.reduce((a, p) => p + a, 0)
        return total
    }

    let total = 0

    const calculateTotal = () => {
        total = totalInCart()
        // debugger
        return total
    }

</script>

<button on:click={ calculateTotal } class="cal__total"> Calculate your total </button>


<div class="total">
    Total in your cart: { total }
</div>