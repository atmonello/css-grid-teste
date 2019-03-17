<template>
  <div class="adicionar-veiculo container-fluid">
    <div class="row">
      <div class="col-11">
        <input type="text" name="veiculo" placeholder="Adicionar um veículo...">
      </div>
      <div class="col-1">
        <div class="add-icone"></div>
      </div>
    </div>
  </div>
</template>

<style lang='less'>
@import "~assets/main.less";

.adicionar-veiculo {
    border-bottom: 1px solid @gray-md;
    height: 100%;

    input {
      background-color: transparent;
      border: none;
      font-size: @ftSizeExtraLarge;
      width: 100%;

      &::placeholder {
        color: @gray-md;
      }
    }

    .add-icone {
      background-color: @green-dk;
      color: @green-dk;
      height: 40px;
      mask-image: url("../assets/img/add.svg");
      width: 40px;
      cursor: pointer;

      &:hover {
        filter: brightness(1.05);
      }
    }

}
</style>


<script>
export default {
    data() {
        return {
        };
    }
};
</script>
