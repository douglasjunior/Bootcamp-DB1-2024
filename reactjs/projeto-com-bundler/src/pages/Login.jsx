import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import fakeAuth from '../utils/fake-auth';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Aqui simula o processo de login
    fakeAuth.isAuthenticated = true;
    navigate('/tasks');
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input placeholder="Usuário" />
        <br />
        <input placeholder='Senha' type="password" />
        <br />
        <Button htmlType='button' onClick={handleSignIn}>Entrar</Button>
      </form>
    </div>
  )
}

export default Login;
