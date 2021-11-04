<template>
  <div class="container p-5 mx-auto">
    <NavBar />
    <WomenProduct />
    <MenProduct />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import WomenProduct from "../components/WomenProduct.vue";
import MenProduct from "../components/MenProduct.vue";

export default {
  components: {
    Footer,
    NavBar,
    WomenProduct,
    MenProduct,
  },
};
</script>
