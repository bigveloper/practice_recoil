import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loginState } from '../loginState';

function Login() {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    // event
    const onLogin = () => setIsLogin(true);

    useEffect(() => {
        console.log(isLogin);
    }, [isLogin]);

    //view
    return (
        <form>
            <button onClick={onLogin}>Login</button>
        </form>
    );
}

export default Login;
