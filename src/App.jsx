import Login from './pages/Login';
import Main from './layout/Main';
import './App.css';

import { useRecoilState } from 'recoil';
import { loginState } from './global/loginState';

function App() {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    if (!isLogin) {
        return <Login />;
    }

    return <Main />;
}

export default App;
