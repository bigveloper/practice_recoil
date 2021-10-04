import Login from './pages/Login';
import Logout from './pages/Logout';
import './App.css';

import { useRecoilState } from 'recoil';
import { loginState } from './global/loginState';

function App() {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    if (!isLogin) {
        return <Login />;
    }
    return <Logout />;
}

export default App;
