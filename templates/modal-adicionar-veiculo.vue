<template>
  <div class="modal-adicionar-veiculo container">
    <div class="row">
      <div class="col-12">
        <h1>Adicionar veículo</h1>
      </div>
    </div>

    <form id="adicionar-form" class="row" @submit.prevent>
      <div class="col-6 form-group">
        <label for="modelo">Modelo</label>
        <input id="modelo" v-model="novoVeiculo.modelo" type="text" :disabled="finished">
      </div>
      <div class="col-6 form-group">
        <label for="marca">Marca</label>
        <!-- <input id="marca" v-model="novoVeiculo.marca" type="text"> -->
        <select id="marca" v-model="novoVeiculo.marca" :disabled="finished">
          <option v-for="(item, index) in getListaMarcas" :key="index" :value="item.name">{{ item.name }}</option>
        </select>
      </div>
      <div class="col-6 form-group">
        <label for="ano">Ano</label>
        <input id="ano" v-model="novoVeiculo.ano_modelo" type="text">
      </div>
      <div class="col-6 form-group">
        <label>&nbsp;</label>
        <div class="custom-control custom-switch">
          <input id="usado" v-model="novoVeiculo.usado" type="checkbox" class="custom-control-input" :value="true" :disabled="finished">
          <label class="custom-control-label" for="usado">Usado</label>
        </div>
      </div>
      <div class="col-6 form-group">
        <label for="combustivel">Combustível</label>
        <select id="combustivel" v-model="novoVeiculo.combustivel" :disabled="finished">
          <option v-for="(item, index) in getListaCombustiveis" :key="index" :value="item.name">{{ item.name }}</option>
        </select>
      </div>
      <div class="col-6 form-group">
        <label for="cor">Cor</label>
        <input id="cor" v-model="novoVeiculo.cor" type="text" :disabled="finished">
      </div>
      <!-- <div class="col-6 form-group"></div> -->
      <!-- <div class="col-6 form-group"></div> -->
      <!-- <div class="col-6 form-group"></div> -->
      <div class="col-12 col-md-6 offset-md-6">
        <div class="row">
          <div class="col-12 col-sm-6">
            <button class="btn btn-primary" :disabled="finished" @click="addVehicle">Salvar</button>
          </div>
          <div class="col-12 col-sm-6">
            <button class="btn btn-danger" :disabled="finished" @click="closeModal">Cancelar</button>
          </div>
        </div>
      </div>
    </form>

    <!-- <div id="debug" class="row"> -->
    <!-- <p class="col-12">{{ novoVeiculo }}</p> -->
    <!-- </div> -->
  </div>
</template>

<style lang='less'>
@import "~assets/main.less";

.modal-adicionar-veiculo {
  label, input, select {
    width: 100%;
  }

  input, select {
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid @gray-md;
  }

  .btn {
    margin-bottom: 10px;
  }
}
</style>


<script>
import axios from "axios";

export default {
    props: {
        modelo: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            finished: false,
            novoVeiculo: {
                modelo: null,
                marca: null,
                ano_modelo: null,
                usado: null,
                combustivel: null,
                cor: null,
            }
        };
    },
    computed: {
        getListaCombustiveis() {
            return this.$nuxt.$store.state.listaCombustiveis ? this.$nuxt.$store.state.listaCombustiveis : [];
        },
        getListaMarcas() {
            return this.$nuxt.$store.state.listaMarcas ? this.$nuxt.$store.state.listaMarcas : [];
        }
    },
    created() {
        const self = this;

        self.novoVeiculo.modelo = self.modelo;
    },
    methods: {
        closeModal() {
            this.$nuxt.$store.commit("toggleModalStatus", false);
        },
        addVehicle() {
            const self = this;

            axios({
                url: "https://api.nimble.com.br/veiculoQL/v1/gql",
                method: "post",
                data: {
                    query: `
                      mutation CreateVeiculo($data: VeiculoInput!) {
                        createVeiculo(data: $data)
                      } 
                    `,
                    variables: {
                        data: self.novoVeiculo
                    },
                }
            }).then(() => {
                self.finished = true;

                setTimeout(() => {
                    self.closeModal();
                }, 1500);
            });
        }
    }
};
</script>
