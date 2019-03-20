export default {
    setVeiculoSelecionado(state, data) {
        state.veiculoSelecionado = data;
    },

    deleteVeiculoSelecionado(state) {
        state.veiculoSelecionado = null;
    },

    toggleModalStatus(state, data) {
        state.toggleModal = data;
    },

    updateListaVeiculos(state, data) {
        state.listaVeiculos = data;
    }
};
