<script>
    import { products } from '../cart'
    let itemsInCart = 0;
    $: {
        let count = 0
        for(let i of $products){
            count += i.quantity;
        }
        itemsInCart = count
    }
    
</script>



<style>


</style>

<nav>
    <a href="/"> Home </a>
    <a href="/contact-us"> Contact us </a>
    Items in the cart { itemsInCart }
</nav>