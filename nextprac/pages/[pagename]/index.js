import React from 'react';
import {useRouter} from 'next/router';
import Blog from '../../components/blog';
import Cafe from '../../components/cafe';

const Dynamic = () => {
    const router = useRouter();
    const {pagename} = router.query;
    return (
        <div>
            {
                pagename === "blog" ? <Blog/> :
                pagename === "cafe" ? <Cafe/> : null
            }
        </div>
    );
};

export default Dynamic;