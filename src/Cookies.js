import { useState, useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { cookieState } from './global/cookieState';
import { Loading, Card } from '../../components';

const Cookies = () => {
    const [cookie, setCookie] = useResetRecoilState(cookieState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const { data } = await getApi.getCookies();
            setCookie(data);
        })();
        setLoading(false);
    }, [setCookie]);

    return (
        <>
            {Loading ? (
                <Loading />
            ) : (
                <div>
                    {cookie.map((cookie) => (
                        <Card cookies={cookie} key={cookie.id} idx={cookie.id} />
                    ))}
                </div>
            )}
        </>
    );
};

export default Cookies;
