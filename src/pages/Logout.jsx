import { useRecoilState } from 'recoil';
import { loginState } from '../global/loginState';

function Logout() {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    // event
    const onLogout = () => setIsLogin(false);

    // view
    return <button onClick={onLogout}>Logout</button>;
}

export default Logout;
