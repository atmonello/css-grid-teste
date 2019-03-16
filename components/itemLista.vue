<template>
  <div class="item-lista">
    <!-- <p>{{ infoVeiculo }}</p> -->
    <p class="marca">{{ infoVeiculo.marca }}</p>
    <p class="modelo">{{ infoVeiculo.modelo }}</p>
    <p class="ano_modelo">{{ infoVeiculo.ano_modelo }}</p>
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
        font-size: @ftSizeTiny;
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
