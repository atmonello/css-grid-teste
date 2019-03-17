export default {
    setVeiculoSelecionado(state, data) {
        state.veiculoSelecionado = data;
    },

    deleteVeiculoSelecionado(state) {
        state.veiculoSelecionado = null;
    },

    toggleModalStatus(state, data) {
        console.log("toggle modal status");
        state.toggleModal = data;
    }
};
