
import swal from 'sweetalert';
import LoginService from '@/services/LoginService';

export default {
  name: 'LoginComponent',
  data() {    
    return {
      props: {
        source: String,
      },
      step: 1,
      valid: true,
      passRules: [
        v => !!v || 'A senha é obrigatória',
        v => (v && v.length > 4) || 'A senha deve ter no mínimo 4 caracteres',
      ],
      emailRules: [
        v => !!v || 'O e-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'O e-mail é inválido',
      ],
      loginForm: {
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },

  methods: {
    // validate () {
    //   return this.$refs.form.validate()
    // },

    loginSubmitUserForm() {},

    async submitLoginUser() {
      if(this.$refs.form.validate()){
        try {
          this.isSubmitted = true; 
         
          await LoginService.loginUser(this.loginForm);
          this.$router.push('/Home/home');
        } catch (error) {
          console.log(error);
          swal({
            title: 'O endereço de email ou a senha que você inseriu não é válido',
            text: 'Por favor, tente novamente.',
            icon: 'error',
          });
        }
      }
    },
  },
};
