<template>
  <div class="modal-editar-veiculo container">
    <div class="row">
      <div class="col-12">
        <h1>Editar veículo</h1>
      </div>
    </div>

    <form id="editar-form" class="row" @submit.prevent>
      <div class="col-12 col-md-6 form-group">
        <label for="modelo">Veículo</label>
        <input id="modelo" :value="editarVeiculo.modelo" class="form-control" type="text" @input="updateEditarVeiculo($event.target.value, 'modelo')">
      </div>
      <div class="col-12 col-md-6 form-group">
        <label for="marca">Marca</label>
        <!-- <input id="marca" :value="editarVeiculo.marca" class="form-control" type="text"> -->
        <select id="marca" :value="editarVeiculo.marca" class="form-control" @input="updateEditarVeiculo($event.target.value, 'marca')">
          <option v-for="(item, index) in getListaMarcas" :key="index" :value="item.name">{{ item.name }}</option>
        </select>
      </div>
      <div class="col-12 col-md-6 form-group">
        <label for="ano">Ano</label>
        <input id="ano" :value="editarVeiculo.ano_modelo" class="form-control" type="text" @input="updateEditarVeiculo($event.target.value, 'ano_modelo')">
      </div>
      <div class="col-12 col-md-6 form-group">
        <label for="cor">Cor</label>
        <input id="cor" :value="editarVeiculo.cor" class="form-control" type="text" @input="updateEditarVeiculo($event.target.value, 'cor')">
      </div>
      <div class="col-12 col-md-6 form-group">
        <label for="combustivel">Combustível</label>
        <select id="combustivel" :value="editarVeiculo.combustivel" class="form-control" type="text" @input="updateEditarVeiculo($event.target.value, 'combustivel')">
          <option v-for="(item, index) in getListaCombustiveis" :key="index" :value="item.name">{{ item.name }}</option>
        </select>
      </div>
      <div class="col-12 col-md-6 form-group">
        <p>&nbsp;</p>
        <div class="custom-control custom-switch">
          <input id="vendido" :checked="editarVeiculo.vendido" type="checkbox" class="custom-control-input" :value="true" @input="updateEditarVeiculo($event.target.value, 'vendido')">
          <label class="custom-control-label" for="vendido">Vendido</label>
        </div>
      </div>
      <div class="col-12 form-group">
        <label for="descricao">Descrição</label>
        <textarea id="descricao" :value="editarVeiculo.descricao" class="form-control" cols="30" rows="10" @input="updateEditarVeiculo($event.target.value, 'descricao')"></textarea>
      </div>
      <div class="col-12 col-md-6 offset-md-6">
        <div class="row">
          <div class="col-12 col-sm-6">
            <button class="btn btn-primary" @click="saveEdit">Salvar</button>
          </div>
          <div class="col-12 col-sm-6">
            <button class="btn btn-danger" @click="closeModal">Cancelar</button>
          </div>
        </div>
      </div>
    </form>

    <!-- <code>INFO: {{ infoVeiculo }}</code> -->
    <!-- <br> -->
    <!-- <br> -->
    <!-- <code>EDITAR: {{ editarVeiculo }}</code> -->
  </div>
</template>

<style lang='less'>
@import "~assets/main.less";

.modal-editar-veiculo {
  #editar-form {
    textarea, input, select {
      background: transparent;
      border: 0;
      border-radius: 0;
      border-bottom: 1px solid @gray-md;
    }

    label:not(.custom-control-label) {
      color: @blue-md;
      user-select: none;
    }

    .custom-switch {
      user-select: none;
      .custom-control-input:checked ~ .custom-control-label::before {
        border-color: @green-lt;
        background-color: @green-lt;
        }
    }

    .btn {
      margin-bottom: 10px;
    }
  }
}
</style>


<script>
import axios from "axios";

export default {
    props: {
        infoVeiculo: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            editarVeiculo: {}
        };
    },
    computed: {
        getListaMarcas() {
            return this.$nuxt.$store.state.listaMarcas ? this.$nuxt.$store.state.listaMarcas : [];
        },
        getListaCombustiveis() {
            return this.$nuxt.$store.state.listaCombustiveis ? this.$nuxt.$store.state.listaCombustiveis : [];
        },
        getSearchQuery() {
            return this.$nuxt.$store.state.searchQuery ? this.$nuxt.$store.state.searchQuery : "";
        }
    },
    created() {
        const self = this;

        // eslint-disable-next-line array-callback-return
        Object.keys(self.infoVeiculo).map((k) => {
            self.editarVeiculo[k] = self.infoVeiculo[k];
        });
    },
    methods: {
        // saves target vehicle data to copied object to avoid conflict with original data
        updateEditarVeiculo(value, type) {
            const self = this;

            self.editarVeiculo[type] = value;

            if (type === "vendido") {
                self.editarVeiculo[type] = self.editarVeiculo[type] === "true" ? self.editarVeiculo[type] = true : null;
            } else if (type === "ano_modelo") {
                self.editarVeiculo[type] = Number(self.editarVeiculo[type]);
            }
        },
        closeModal() {
            this.$nuxt.$store.commit("toggleModalStatus", false);
        },
        // Saves current selected vehicle
        saveEdit() {
            const self = this;

            const ID = self.editarVeiculo._id;
            delete self.editarVeiculo._id;

            axios({
                url: "https://api.nimble.com.br/veiculoQL/v1/gql",
                method: "post",
                data: {
                    query: `
                      mutation UpdateVeiculo($data: VeiculoInput!, $id: ID!) {
                        updateVeiculo(data: $data, id: $id)
                      }
                    `,
                    variables: {
                        data: self.editarVeiculo,
                        id: ID,
                    }
                }
            }).then((response) => {
                if (response.status === 200) {
                    axios({
                        url: "https://api.nimble.com.br/veiculoQL/v1/gql",
                        method: "post",
                        data: {
                            query: `
                              query Veiculo($id: ID!) {
                                veiculo(id: $id) {
                                  _id
                                  marca
                                  modelo
                                  ano_modelo
                                  combustivel
                                  descricao
                                  vendido
                                  cor
                                }
                              }
                            `,
                            variables: {
                                id: ID,
                            }
                        }
                    }).then((result) => {
                        self.editarVeiculo = result.data.data.veiculo;

                        this.$nuxt.$store.commit("setVeiculoSelecionado", self.editarVeiculo);

                        axios({
                            url: "https://api.nimble.com.br/veiculoQL/v1/gql",
                            method: "post",
                            data: {
                                query: `
                                  query BuscaVeiculo($page: Int, $limit: Int, $query: String) {
                                    buscaVeiculo(page: $page, limit: $limit, query: $query) {
                                      pageInfo {
                                        hasPreviousPage
                                        hasNextPage
                                        pages
                                        page
                                      }
                                      total
                                      edges {
                                        node {
                                          _id
                                          marca
                                          modelo
                                          ano_modelo
                                          combustivel
                                          descricao
                                          vendido
                                          cor
                                        }
                                      }
                                    }
                                  }`,
                                variables: {
                                    query: self.getSearchQuery,
                                    page: 1,
                                    limit: 100
                                }
                            }
                        }).then((result) => {
                            self.$nuxt.$store.commit("updateListaVeiculos", result.data.data.buscaVeiculo.edges);
                        });
                    });
                }
            });
        },
    }
};
</script>
