<script lang="ts" setup>
  import { products } from "~/composables/constants/products";
  import type { Products } from "~/types/products";

  definePageMeta({
    middleware: ["user-access"],
  });

  const route = useRoute();
  const id =
    typeof route.params.id === "number" ? parseInt(route.params.id) : null;
  const product = ref(products.find((item: Products) => item.id === id));
</script>
<template>
  <DetailProduct :product="product" />
</template>
