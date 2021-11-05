import swal from 'sweetalert';
import Api from './Api';

export default {
  /**
   * Método responsável por realizar um novo login 'User'
   * (POST): localhost:3000/api/v1/login
   */
  async loginUser(user) {
    try {
      const response = await Api().post('/login', user);


      const { token } = response.data;

      const userLogged = {
        'createdAt': (response.data.user.createdAt),
        'name': (response.data.user.name),
        'email': (response.data.user.email),
      };

     // localStorage.setItem('users',JSON.stringify(response.data.user))

      console.log(response.data);
      localStorage.setItem('userLogged', JSON.stringify(userLogged));
      localStorage.setItem('jwt', token);


      //localStorage.getItem('YourItem')
      //localStorage.removeItem('YourItem')
      if (token) {
        swal({
          title: 'Sucesso!',
          text: 'Usuário(a) logado com sucesso!',
          icon: 'success',
        });
      }


    } catch (error) {
      console.log(error);
      swal({
        title: 'Oops!',
        text: 'Alguma coisa deu errado aqui!',
        icon: 'error',
      });
      this.$router.push('/');
    }
  },
};
