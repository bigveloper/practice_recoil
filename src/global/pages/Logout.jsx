import { useRecoilState } from 'recoil';
import { loginState } from '../loginState';

function Logout() {
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    const onLogout = () => setIsLogin(false);

    return (
        <div>
            <form>
                <button onClick={onLogout}>Logout</button>
            </form>
        </div>
    );
}

export default Logout;
