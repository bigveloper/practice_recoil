import { useRecoilState } from 'recoil';
import { loginState } from '../global/loginState';

/**
 * @description Logout 컴포넌트
 */
function Logout() {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    // event
    const onLogout = () => setIsLogin(false);

    // view
    return (
        <div>
            <form>
                <button onClick={onLogout}>Logout</button>
            </form>
        </div>
    );
}

export default Logout;
