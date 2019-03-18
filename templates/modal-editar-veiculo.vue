<template>
  <div class="modal-editar-veiculo container">
    <div class="row">
      <div class="col-12">
        <h1>Editar veículo</h1>
      </div>
    </div>

    <form id="editar-form" class="row">
      <div class="col-6 form-group">
        <label for="modelo">Veículo</label>
        <input id="modelo" :value="infoVeiculo.modelo" class="form-control" type="text" @input="setEditarVeiculo($event.target.value, 'modelo')">
      </div>
      <div class="col-6 form-group">
        <label for="marca">Marca</label>
        <input id="marca" :value="infoVeiculo.marca" class="form-control" type="text" @input="setEditarVeiculo($event.target.value, 'marca')">
      </div>
      <div class="col-6 form-group">
        <label for="ano">Ano</label>
        <input id="ano" :value="infoVeiculo.ano_modelo" class="form-control" type="text" @input="setEditarVeiculo($event.target.value, 'ano_modelo')">
      </div>
      <div class="col-6 form-group">
        <p>&nbsp;</p>
        <div class="custom-control custom-switch">
          <input id="usado" type="checkbox" class="custom-control-input" :value="true" :checked="infoVeiculo.usado" @input="setEditarVeiculo($event.target.value, 'usado')">
          <label class="custom-control-label" for="usado">Usado</label>
        </div>
      </div>
      <div class="col-12 form-group">
        <label for="descricao">Descrição</label>
        <textarea id="descricao" class="form-control" cols="30" rows="10" @input="setEditarVeiculo($event.target.value, 'descricao')"></textarea>
      </div>
    </form>

    <code>INFO: {{ infoVeiculo }}</code>
    <br>
    <code>EDITAR: {{ editarVeiculo }}</code>
  </div>
</template>

<style lang='less'>
@import "~assets/main.less";

.modal-editar-veiculo {
  #editar-form {
    textarea, input[type="text"] {
      background: transparent;
      border: 0;
      border-radius: 0;
      border-bottom: 1px solid @gray-md;
    }

    label:not(.custom-control-label) {
      color: @blue-md;
    }

    .custom-switch {
      .custom-control-input:checked ~ .custom-control-label::before {
        border-color: @green-lt;
        background-color: @green-lt;
        }
    }
  }
}
</style>


<script>
export default {
    props: {
        infoVeiculo: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            editarVeiculo: {},
        };
    },
    methods: {
        setEditarVeiculo(value, type) {
            const self = this;

            self.editarVeiculo[type] = value;
        }

    }
};
</script>
