import { useRecoilState } from 'recoil';
import { loginState } from '../global/loginState';

function Login() {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    // event
    const onLogin = () => setIsLogin(true);

    // view
    return (
        <div>
            <button onClick={onLogin}>LOGIN</button>
        </div>
    );
}

export default Login;
