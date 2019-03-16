<template>
  <layout-main>
    <header-logo slot="logo"></header-logo>
    <container-lista slot="lista"></container-lista>
  </layout-main>
</template>

<script>
import layoutMain from "../layouts/mainLayout.vue";
import headerLogo from "../components/headerLogo.vue";
import containerLista from "../components/containerLista.vue";

export default {
    components: {
        layoutMain,
        containerLista,
        headerLogo,
    }
};
</script>
