import Login from './pages/Login';

import { useRecoilState } from 'recoil';
import { loginState } from './global/loginState';
import Logout from './pages/Logout';

function App() {
    const [isLogin, setIsLogin] = useRecoilState(loginState);
    if (!isLogin) {
        return <Login />;
    }
    return <Logout />;
}

export default App;
