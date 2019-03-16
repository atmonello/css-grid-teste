<template>
  <div class="container-lista">
    <item-lista></item-lista>
    <item-lista></item-lista>
    <item-lista></item-lista>
  </div>
</template>

<style lang='less'>
</style>


<script>
import itemLista from "./itemLista.vue";

export default {
    components: {
        itemLista
    },
    data() {
        return {
        };
    }
};
</script>
