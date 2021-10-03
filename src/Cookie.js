import { cookieState } from './global/cookieState';
import { useRecoilState, useResetRecoilState } from 'recoil';

const Cookie = () => {
    const [cookies, setCookies] = useResetRecoilState(cookieState);

    return (
        <div>
            {cookie.map((cookie) => (
                <Card cookies={cookie} key={cookie.id} idx={cookie.id} />
            ))}
        </div>
    );
};

export default Cookie;
