<script lang="ts" setup>
  import { useProductsStore } from "~/stores/products";

  definePageMeta({
    middleware: ["user-access"],
  });

  const productStore = useProductsStore();
  const allProducts = ref([]);

  productStore.getAllProducts().then(() => {
    allProducts.value = productStore.products;
  });

  const selectedCategory = ref("");
</script>

<template>
  <section>
    <div class="container">
      <div class="py-8">
        <div class="mb-6 flex justify-between gap-6">
          <NuxtLink
            to="/product/create"
            class="bg-green-500 text-white flex justify-center items-center px-3 py-2 rounded-lg"
            >Create Products</NuxtLink
          >
          <DropDown @selected-category="selectedCategory = $event" />
        </div>
        <div class="flex gap-6 flex-wrap mx-auto">
          <template
            v-for="(item, index) in allProducts"
            :key="index"
          >
            <CardsCardProduct
              :product="item"
              class="w-[calc(100%/4-18px)]"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
