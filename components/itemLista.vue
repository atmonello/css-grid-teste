<template>
  <div class="item-lista container" :class="{'selecionado': isSelected}">
    <!-- <p>{{ infoVeiculo }}</p> -->
    <!-- <p>{{ getVeiculoSelecionadoID }}</p> -->
    <div class="row">
      <div class="col-8 col-md-10">
        <p class="marca">{{ infoVeiculo.marca }}</p>
        <p class="modelo">{{ infoVeiculo.modelo }}</p>
        <p class="ano_modelo">{{ infoVeiculo.ano_modelo }}</p>
      </div>
      <div class="col-4 col-md-2 vendido">
        <i class="vendido-icon"></i>
      </div>
    </div>
  </div>
</template>

<style lang='less'>
@import "~assets/main.less";

.item-lista {
  background: @white;
  border-radius: 16px;
  box-shadow: @shadow;
  // width: 100%;
  padding: 1em;
  cursor: pointer;

  p {
    margin: 0;
    font-size: @ftSizeSmall;
    text-transform: uppercase;

    &.marca {
      color: @text-carBrand;
    }

    &.modelo {
      color: @blue-md;
    }

    &.ano_modelo {
      color: @gray-md;
    }
  }

  .vendido {
    display: flex;
    align-items: center;
    justify-content: center;

    .vendido-icon {
      height: 20px;
      width: 20px;
      display: inline-block;
      background-color: @gray-md;
      mask-image: url("../assets/img/tag.svg");
      mask-repeat: no-repeat;
      mask-size: contain;
    }
  }

  &.selecionado {
    background: @blue-md;
    cursor: initial;
    pointer-events: none;

    p {
      &.modelo {
        color: @white;
      }

      &.ano_modelo {
        color: @blue-md-alt;
      }
    }

    .vendido {

      .vendido-icon {
        background-color: @white;
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
            isSelected: false,
        };
    },
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        getVeiculoSelecionadoID() {
            if (this.$nuxt.$store.state.veiculoSelecionado !== null) {
                // eslint-disable-next-line no-underscore-dangle
                return this.$nuxt.$store.state.veiculoSelecionado._id;
            }
            return null;
        }
    },
    watch: {
        getVeiculoSelecionadoID(val) {
            // eslint-disable-next-line no-underscore-dangle
            if (val === this.infoVeiculo._id) {
                this.isSelected = true;
            } else {
                this.isSelected = false;
            }
        }
    }
};
</script>
