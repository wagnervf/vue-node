import { mapState } from "vuex";
import ListSidebar from "../components/ListSidebar";

export default {
  name: "Sidebar",
  components: {
    ListSidebar
  },

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: true,
    mini: false,
    user: {
      name: "",
    email: ""

    }
  }),

  mounted() {
  this.getUserLocalStorage();
  // var u =  JSON.parse(localStorage.getItem("userLogged"))
   
   
  },

  computed: {
    ...mapState(["SidebarColor", "SidebarBg"]),
    Sidebar_drawer: {
      get() {
        return this.$store.state.Sidebar_drawer;
      },
      set(val) {
        this.$store.commit("SET_SIDEBAR_DRAWER", val);
      },
    },
    
  },
  watch: {
    "$vuetify.breakpoint.smAndDown"(val) {
      this.$emit("update:expandOnHover", !val);
    },
  },

  methods: {

    getUserLocalStorage() {
      let user = JSON.parse(localStorage.getItem("userLogged"));
      console.log(user);

      if (user) {
        this.user.name = user.name;
        this.user.email = user.email;
      }
    }
  },
};

