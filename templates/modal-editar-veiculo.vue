<template>
  <div>
    <h1>Editar veículo</h1>
    <code>{{ infoVeiculo }}</code>
  </div>
</template>

<style lang='less'>
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
