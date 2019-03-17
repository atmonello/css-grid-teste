<template>
  <layout-main :is-loading="loading">
    <header-logo slot="logo"></header-logo>
    <adicionar-veiculo slot="adicionar"></adicionar-veiculo>
    <container-lista slot="lista" :lista-veiculos="lista"></container-lista>
    <detalhes-veiculo slot="detalhes"></detalhes-veiculo>
  </layout-main>
</template>

<script>
import axios from "axios";
import layoutMain from "../layouts/mainLayout.vue";
import headerLogo from "../components/headerLogo.vue";
import adicionarVeiculo from "../components/adicionarVeiculo.vue";
import containerLista from "../components/containerLista.vue";
import detalhesVeiculo from "../components/detalhesVeiculo.vue";

export default {
    components: {
        layoutMain,
        containerLista,
        headerLogo,
        adicionarVeiculo,
        detalhesVeiculo,
    },
    data() {
        return {
            loading: true,
            lista: [],
        };
    },
    mounted() {
        const self = this;

        axios({
            url: "https://api.nimble.com.br/veiculoQL/v1/gql",
            method: "post",
            data: {
                query: `
                  query ListarTodosVeiculos {
                    buscaVeiculo(page: 1, limit: 6) {
                      total
                      edges {
                        node {
                          _id
                          marca
                          modelo
                          ano_fabricacao
                          ano_modelo
                          combustivel
                          cor
                          usado
                        }
                      }
                    }
                  }
                `
            }
        }).then((result) => {
            self.lista = result.data.data.buscaVeiculo.edges;
            self.loading = false;
        });
    }
};
</script>
