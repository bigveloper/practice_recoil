import { useRecoilState } from 'recoil';
import { loginState } from '../global/loginState';

/**
 * @description Login
 */

function Login() {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    // event
    const onLogin = () => setIsLogin(true);

    // view
    return (
        <div>
            <form>
                <button onClick={onLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;
