

//import VueJwtDecode from "vue-jwt-decode";

import Menu from "../../assets/json/listParametros.json";

  export default {
    data: () => ({
      items: Menu,
      outer: [
        {
          id: 1,
          name: 'Parâmentro do Cria Certo',
          children: [
            {
              id: 2,
              name: 'Core team',
              children: [
                {
                  id: 201,
                  name: 'John',
                },
                {
                  id: 202,
                  name: 'Kael',
                },
                {
                  id: 203,
                  name: 'Nekosaur',
                },
                {
                  id: 204,
                  name: 'Jacek',
                },
                {
                  id: 205,
                  name: 'Andrew',
                },
              ],
            },
            {
              id: 3,
              name: 'Administrators',
              children: [
                {
                  id: 301,
                  name: 'Mike',
                },
                {
                  id: 302,
                  name: 'Hunt',
                },
              ],
            },
            {
              id: 4,
              name: 'Contributors',
              children: [
                {
                  id: 401,
                  name: 'Phlow',
                },
                {
                  id: 402,
                  name: 'Brandon',
                },
                {
                  id: 403,
                  name: 'Sean',
                },
              ],
            },
          ],
        },
      ],
      open: [1, 2],
      search: null,
     
     
    }),
    computed: {
     
    },
    
    created() {
      this.getUser();
    },
  
    methods: {
      getUser() {
      //  let token = localStorage.getItem("jwt");
      //  let tokenDecoded = VueJwtDecode.decode(token);
       // this.user = tokenDecoded;
      },
      logOutUser() {
        localStorage.removeItem("jwt");
        this.$router.push("/");
      }
    },
  }


