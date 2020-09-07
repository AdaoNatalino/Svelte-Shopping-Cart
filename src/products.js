import { writable } from 'svelte/store'

export let products = writable([
    {"id": 1, "name": "A", "price": 10},
    {"id": 2, "name": "B", "price": 5},
    {"id": 3, "name": "C", "price": 20}
])

