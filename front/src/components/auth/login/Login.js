
import swal from 'sweetalert';
import LoginService from '@/services/LoginService';

export default {
  name: 'LoginComponent',
  data() {    
    return {
      props: {
        source: String,
      },
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
          this.$router.push('/dashboard/basic-dashboard');
        } catch (error) {
          swal({
            title: 'Senha Incorreta!',
            text: 'Digite a senha cadastrada!',
            icon: 'error',
          });
        }
      }
    },
  },
};
