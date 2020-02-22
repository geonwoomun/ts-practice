import React from 'react';
import HeroShow from '../../components/HeroShow';
import axios from 'axios';

const Dynamic = ({pagename, shows}) => {
    return (
        <div>
            <HeroShow pagename={pagename} shows={shows}/>
        </div>
    );
};

Dynamic.getInitialProps = async context => {
    const { pagename } = context.query;
    let res = await axios.get(`https://api.tvmaze.com/search/shows?q=${pagename}`);

    const data = res.data;
    return {pagename, shows : data.map(entry => entry.show) }
}

export default Dynamic;