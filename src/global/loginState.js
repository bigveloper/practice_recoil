import { atom, selector } from 'recoil';

const loginState = atom({
    key: 'loginState',
    default: false,
});

const getLoginState = selector({
    key: 'loginState/get',
    default: false,
});

export { loginState, getLoginState };
