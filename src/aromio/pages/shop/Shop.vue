<template>
    <section class="fondo">
        <article class="contenedor-cards">
            <div @click="navigationProduct(product.id)" v-for="product in products" :key="product.id" class="card">
                <img class="imagen" :src="product.image" :alt="product.name">
                <p class="nombre">{{ product.flavor_name }}</p>
                <h3 class="titulo">{{ product.name }}</h3>
                <span class="precio">${{ product.price }}</span>
                <div class="contenedor-btn">
                    <button class="añadir-carrito">Add to cart ⟶</button>
                    <button class="favoritos">♡</button>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
import router from '@/aromio/router/router'

export default {
    data() {
        return {
            products: [],
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        async getProducts() {
            try {
                const res = await fetch("http://localhost:8000/api/products")
                const data = await res.json()
                this.products = data
            } catch (error) {
                console.error(error)
            }
        },
        navigationProduct(id) {
            router.push(`/public/${id}`)
        }

    },
}
</script>

<style>
    .card {
        background-color: white;
        width: 290px;
        height: 350px;
        margin-bottom: 200px;
        text-align: center;
        border-radius: 30px;
        padding: 10px;
        filter: drop-shadow(-4px 10px 10px rgba(72, 72, 72, 0.5));
        cursor: pointer;
        transition: all 0.3s;
    }

    .card:hover {
        filter: drop-shadow(-10px 12px 10px rgba(72, 72, 72, 0.7));
        transform: scale(1.1);
    }

    .card:hover img {
        transform: translateY(-15px);
    }

    .contenedor-cards {
        padding: 30vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .nombre {
        color: rgb(136, 136, 136);
    }

    .titulo {
        color: rgb(73, 30, 18);
    }

    .precio {
        color: rgb(109, 109, 109);
    }

    .añadir-carrito {
        color: rgb(131, 73, 49);
    }

    .favoritos {
        color: rgb(126, 126, 126);
    }

    .imagen {
        background-color: transparent;
        width: 100%;
        height: 35vh;
        object-fit: cover;
        border-radius: 8px;
        display: block;
        margin: -150px 0 auto;
        filter: drop-shadow(-4px 10px 10px rgba(72, 72, 72, 0.5));
        transition: all 0.3s;
    }

    .nombre, .titulo, .precio {
        font-family: 'Alata', sans-serif;
        margin: 10px 0;
        background-color: white;
    }

    .precio {
        font-family: 'Alata', sans-serif;
        margin: 10px 0;
        background-color: white;
        margin-top: 20px;
    }

    .añadir-carrito, .favoritos {
        padding: 8px;
        cursor: pointer;
        border: none;
        background-color: white;
        border-radius: 4px;
        margin-top: 8px;
    }

    .contenedor-btn {
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 10px;
    }

    .añadir-carrito {
        font-family: 'Alata', sans-serif;
        padding: 8px;
        cursor: pointer;
        border: none;
        background-color: white;
        border-radius: 4px;
    }

    .favoritos {
        padding: 8px;
        cursor: pointer;
        border: none;
        background-color: white;
        border-radius: 4px;
        color: red;
    }

    @media screen and (max-width: 800px) {

        /* .nombre, .añadir-carrito {
            height: 0;
        } */
        
        .card {
            background-color: white;
            width: 290px;
            height: 350px;
            margin-bottom: 150px;
            position: relative;
            z-index: 1;
        }

        .contenedor-cards {
            padding: 0px;
            padding-top: 200px;
        }

        .nombre, .precio, .titulo, .favoritos, .añadir-carrito, .contenedor-btn {
            background-color: transparent;
            position: relative;
            z-index: 2;
        }
    }
</style>
