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
    },

    updateListaCombustiveis(state, data) {
        state.listaCombustiveis = data;
    },

    updateListaMarcas(state, data) {
        state.listaMarcas = data;
    }
};
