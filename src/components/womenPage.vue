<script>
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const data = ref(false)
    const count = ref(1)

    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${count.value}`)
        const result = await response.json()
        if (result.category !== "women's clothing") {
          if (count.value === 20) {
            count.value = 1
          } else {
            count.value++
          }
          fetchData()
        } else {
          data.value = result
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    const nextProduct = () => {
      data.value = false
      if (count.value === 20) {
        count.value = 1
      } else {
        count.value++
      }
      fetchData()
    }

    onMounted(() => {
      fetchData()
    })

    return {
      data,
      fetchData,
      nextProduct
    }
  }
}
</script>

<template>
  <section class="container">
    <div class="background-women"></div>
    <article class="product-card">
      <div v-if="data" class="product-card">
        <img :src="data.image" class="product-image" alt="product image" />
        <div class="product-detail-women">
          <h1>{{ data.title }}</h1>
          <div class="product-category">
            <p>{{ data.category }}</p>
            <div>
              <p>{{ data.rating.rate }}/5</p>
            </div>
          </div>
          <p class="product-desc">{{ data.description }}</p>
          <p class="product-price-women">${{ data.price }}</p>
          <div class="product-button-women">
            <button>Buy Now</button>
            <button @click="nextProduct">Next Product</button>
          </div>
        </div>
      </div>
      <div v-else class="loader-container">
        <div class="loader-women"></div>
        <p>Loading</p>
      </div>
    </article>
  </section>
</template>
