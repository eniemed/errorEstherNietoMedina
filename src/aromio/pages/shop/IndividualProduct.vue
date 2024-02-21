<template>
    <section v-if="product" class="contenedor">
        <article class="contenedor-img">
            <img class="imagen" :src="product.image" :alt="product.name">
        </article>
        <article class="contenedor-info">
            <p class="contenedor-info-name">{{ product.name }}</p>
            <p class="contenedor-info-flavor">{{ product.flavor_name }}</p>
            <p class="contenedor-info-price">{{ product.price }}</p>
            <p class="contenedor-info-description">{{ product.description }}</p>
            <table class="contenedor-info-table">
                <tr>
                    <td>Weight</td>
                    <td>{{ product.weight }}</td>
                </tr>
                <tr>
                    <td>Region</td>
                    <td>{{ product.region }}</td>
                </tr>
            </table>
            <div>
                <button class="contenedor-info-btn">Add to cart</button>
                <span class="contenedor-info-wishlist">(corazon)</span>
            </div>
        </article>
    </section>
</template>

<script>
import router from "@/aromio/router/router";

export default {
    data() {
        return {
            product: null,
            id: null
        };
    },
    created() {
        const { id } = this.$route.params
        this.id = id
        this.getProducts(this.id)
    },
    methods: {
        async getProducts(id) {
            try {
                const res = await fetch(`http://localhost:8000/api/${id}`)
                const data = await res.json()
                this.product = data
            } catch (error) {
                console.error(error)
            }
        },
    },

};
</script>

<style>
   


</style>