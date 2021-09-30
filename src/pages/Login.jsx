import { useRecoilState } from 'recoil';
import { loginState } from '../global/loginState';

/**
 * @description Login 컴포넌트
 */
function Login() {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    // state
    const style = {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',

        height: '100vh',
        lineHeight: '100vh',
    };

    // event
    const onLogin = () => setIsLogin(true);

    return (
        <div style={style}>
            <form>
                <button onClick={onLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;
