import { useRecoilState } from 'recoil';
import { loginState } from '../global/loginState';

function Login() {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    // event
    const onLogin = () => setIsLogin(true);

    return <button onClick={onLogin}>Login</button>;
}

export default Login;
