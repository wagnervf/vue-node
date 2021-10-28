

import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "HomeComponent",
  data() {
    return {
      checkbox1: true,
      checkbox2: false,
      user: {},
      select: ['Raça', 'Peso'],
      items: [
        'Peso',
        'Raça',
        'Idade',
        'Origem',
      ],

      select2: ['Destino'],
      items2: [
        'Cidade',
        'Valor',
        'Idade',
        'Origem',
      ],
    };
  },
  methods: {
    getUser() {
      let token = localStorage.getItem("jwt");
      let tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
    },
    logOutUser() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
  },
  created() {
    this.getUser();
  }
};
