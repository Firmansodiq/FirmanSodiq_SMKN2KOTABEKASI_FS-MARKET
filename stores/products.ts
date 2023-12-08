export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [] as any,
    status: false,
    message: "",
  }),
  actions: {
    async createProduct(payload: any) {
      const { baseUrl, apikey } = useAppConfig();
      const { data, error } = await useFetch("/rest/v1/products", {
        baseURL: baseUrl,
        method: "POST",
        headers: {
          apikey: apikey,
        },
        body: payload,
      });

      if (error.value) {
        this.status = false;
        this.message = "Post Products Gagal !!!";
      } else if (data) {
        this.status = true;
        this.message = "Post Products Berhasil !!!";
      }
    },

    async getAllProducts() {
      const { baseUrl, apikey } = useAppConfig();
      const { data, error } = await useFetch("/rest/v1/products", {
        baseURL: baseUrl,
        method: "GET",
        headers: {
          apikey: apikey,
        },
      });

      if (error.value) {
        this.status = false;
        this.message = "Get Products Gagal !!!";
      } else if (data) {
        this.status = true;
        this.message = "Get Products Berhasil !!!";
        this.products = data.value;
      }
    },
  },
});
