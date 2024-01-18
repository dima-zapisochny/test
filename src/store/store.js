import { defineStore } from 'pinia';

export const useStore = defineStore('shopStore', {
    state: () => ({
        restaurants: [],
        isRestaurantsLoaded: false,
        cart: [],
        restaurant: {},
        isCartOpen: false,
        isAuthOpen: false,
        isLoggedIn: false
    }),

    actions: {
        async fetchRestaurants() {
            if (this.restaurants.length) return;

            const response = await fetch('../db/partners.json');
            const restaurants = await response.json();

            await Promise.all(
                restaurants.map(async (restaurant) => {
                    const products = await this.fetchRestaurantProducts(restaurant.products);
                    this.restaurants.push({ ...restaurant, products });
                })
            );

            this.isRestaurantsLoaded = true;
        },

        async fetchRestaurantProducts(products) {
            const response = await fetch(`../db/${products}`);
            return await response.json();
        },

        async loadRestaurantInfo(id) {
            this.restaurant = this.restaurants.find((restaurant) => restaurant.id === id);
        }
    }
});
