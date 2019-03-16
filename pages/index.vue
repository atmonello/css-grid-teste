<template>
  <layout-main>
    <container-lista slot="lista"></container-lista>
  </layout-main>
</template>

<script>
import layoutMain from "../layouts/mainLayout.vue";

import containerLista from "../components/containerLista.vue";

export default {
    components: {
        layoutMain,
        containerLista,
    }
};
</script>
