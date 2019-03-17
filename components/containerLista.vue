<template>
  <div class="container-lista">
    <p>Lista de veículos</p>
    <item-lista v-for="(veiculo, index) in listaVeiculos" :key="index" :info-veiculo="veiculo.node" @click.native="storeVeiculoSelecionado(veiculo.node)"></item-lista>
  </div>
</template>

<style lang='less'>
.container-lista {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 8px;
  padding-right: 1em;
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
            required: true,
            type: Array
        }
    },
    data() {
        return {
        };
    },
    methods: {
        // Armazena o veículo selecionado na Vuex
        storeVeiculoSelecionado(veiculo) {
            this.$nuxt.$store.commit("setVeiculoSelecionado", veiculo);
        }
    }
};
</script>
