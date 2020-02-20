import React from 'react';
import Blog from '../../components/blog';
import Cafe from '../../components/cafe';

const Dynamic = ({pagename}) => {
    return (
        <div>
            {
                pagename === "blog" ? <Blog/> :
                pagename === "cafe" ? <Cafe/> : null
            }
        </div>
    );
};

Dynamic.getInitialProps = async context => {
    const { pagename } = context.query;
    // pagename에 따른 api 요청을 한다!
    // 또는 redux를 사용할 경우 pagename에 따라서 다른 dispatch를 실행시킨다!!

    return { pagename }
}

export default Dynamic;