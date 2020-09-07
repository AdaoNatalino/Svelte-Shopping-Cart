import { writable } from 'svelte/store'

export let pizzas = writable([
    {"id": 1, "name": "Peperoni", "price": 6, "category": "pizza", "size": "regular"},
    {"id": 2, "name": "Peperoni", "price": 10, "category": "pizza", "size": "large"},
    {"id": 3, "name": "Hawaiian", "price": 6, "category": "pizza", "size": "regular"},
    {"id": 4, "name": "Hawaiian", "price": 10, "category": "pizza", "size": "large"},
    {"id": 5, "name": "Margherita", "price": 6, "category": "pizza", "size": "regular"},
    {"id": 6, "name": "Margherita", "price": 10, "category": "pizza", "size": "large"},
    {"id": 7, "name": "Chicken", "price": 6, "category": "pizza", "size": "regular"},
    {"id": 8, "name": "Chicken", "price": 10, "category": "pizza", "size": "large"},
])

export let drinks = writable([
    {"id": 9, "name": "Orange Juice", "price": 2, "category": "drinks", "size": "small"},
    {"id": 10, "name": "Still or Sparkling Water", "price": 1, "category": "drinks", "size": "small"},
    {"id": 11, "name": "Beer San Miguel", "price": 3, "category": "drinks", "size": "large"},
    {"id": 12, "name": "Cafe Latte", "price": 3, "category": "drinks", "size": "small"},
    {"id": 13, "name": "Bulmers Cider", "price": 3, "category": "drinks", "size": "large"},
])

export let desserts = writable([
    {"id": 14, "name": "Chocolate Brownie", "price": 4, "category": "desserts", "size": "regular"},
    {"id": 15, "name": "Cheesecake", "price": 4, "category": "desserts", "size": "regular"},
    {"id": 16, "name": "Cookie", "price": 3, "category": "desserts", "size": "regular"},    
])

