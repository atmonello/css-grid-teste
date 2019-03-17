<template>
  <div class="item-lista container">
    <!-- <p>{{ infoVeiculo }}</p> -->
    <div class="row">
      <div class="col-10">
        <p class="marca">{{ infoVeiculo.marca }}</p>
        <p class="modelo">{{ infoVeiculo.modelo }}</p>
        <p class="ano_modelo">{{ infoVeiculo.ano_modelo }}</p>
      </div>
      <div v-if="infoVeiculo.usado" class="col-2 vendido">
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
  width: 100%;
  padding: 1em;

  p {
    margin: 0;
    font-size: @ftSizeSmall;

    &.marca {
      color: @black;
      text-transform: uppercase;
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
        };
    }
};
</script>
