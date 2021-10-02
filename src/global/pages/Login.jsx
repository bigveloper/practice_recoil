import { useRecoilState } from 'recoil';
import { loginState } from '../loginState';

function Login() {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    // event
    const onLogin = () => setIsLogin(false);

    //view
    return (
        <form>
            <button onClick={onLogin}>Login</button>
        </form>
    );
}

export default Login;
