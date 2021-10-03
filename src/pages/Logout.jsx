import { useRecoilState } from 'recoil';
import { loginState } from '../global/loginState';

function Logout() {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    // event
    const onLogout = () => setIsLogin(false);
    // view
    return (
        <div>
            <button onClick={onLogout}>LOGOUT</button>
        </div>
    );
}

export default Logout;
