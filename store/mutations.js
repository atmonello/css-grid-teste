export default {
    setVeiculoSelecionado(state, data) {
        state.veiculoSelecionado = data;
    },

    deleteVeiculoSelecionado(state) {
        state.veiculoSelecionado = null;
    }
};
