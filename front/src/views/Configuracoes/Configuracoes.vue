<template>
  <v-container >
        <TiposSimulacoesTable />
  </v-container>
</template>

<script>
import TiposSimulacoesTable from './TiposSimulacoes.vue'

export default {
  name: "Configuracoes",
  components: {TiposSimulacoesTable},

  data: () => ({
    
  }),
  

  methods: {
   

    // getTipos() {
    //   TiposSimulacoesServices.getTiposSimulacoes().then((resposta) => {
    //     this.desserts = this.mapedMenu(resposta.tipos);
    //     console.log(resposta.tipos);
    //   });
    // },

    //  mapedMenu(value) {
    //   return value.map((val) => ({
    //     id: val._id,
    //     descricao: val.descricao,
    //     ativo: val.ativo,
    //   }));
    // },

    
  },
};
</script>
