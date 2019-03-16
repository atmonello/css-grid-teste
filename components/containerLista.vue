<template>
  <div class="container-lista">
    <item-lista v-for="(veiculo, index) in listaVeiculos" :key="index" :info-veiculo="veiculo.node"></item-lista>
  </div>
</template>

<style lang='less'>
.container-lista {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 8px;
}
</style>


<script>
import itemLista from "./itemLista.vue";

export default {
    components: {
        itemLista
    },
    props: {
        listaVeiculos: {
            required: true
        }
    },
    data() {
        return {
        };
    }
};
</script>
