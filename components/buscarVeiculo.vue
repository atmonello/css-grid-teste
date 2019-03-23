<template>
  <div class="buscar-veiculo">
    <i></i>
    <input type="text" placeholder="Pesquise um veículo..." @input="buscarVeiculo($event.target.value)">
  </div>
</template>

<style lang='less'>
@import "~assets/main.less";

.buscar-veiculo {
    height: 100%;

    i, input {
        vertical-align: text-top;
        display: inline-block;
    }

    i {
        width: 20px;
        height: 20px;
        background-color: @white;
        mask-image: url("../assets/img/search.svg");
        margin-right: 16px;
    }

    input {
        background: transparent;
        border: 0;
        &::placeholder {
            font-weight: 300;
            color: @white;
        }
    }
}
</style>


<script>
import axios from "axios";


export default {
    data() {
        return {
            isSearching: false,
        };
    },
    methods: {
        buscarVeiculo(search) {
            const self = this;

            if (!self.isSearching) {
                axios({
                    url: "https://api.nimble.com.br/veiculoQL/v1/gql",
                    method: "post",
                    data: {
                        query: `
                            query Buscar {
                                buscaVeiculo(page: 1, query: "${search}") {
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
                    // console.log(result);
                    self.isSearching = false;

                    self.$nuxt.$store.commit("updateListaVeiculos", result.data.data.buscaVeiculo.edges);
                });
            }
            self.isSearching = true;
        }
    }
};
</script>
