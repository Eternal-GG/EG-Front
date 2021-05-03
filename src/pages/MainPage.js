import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

import Header from '../components/Header';
import ImgSearch from '../components/ImgSearch';
import PatchCard from '../components/PatchCard';

function MainPage({history}) {
    const [input, setInput] = useState('');
    const onChangeHandler = e => {setInput(e.currentTarget.value);};
    const onSearchHandler = () => {
        history.push(`/bs/player/${input}`);
    };

    return(
        <>
            <Header history={history}/>
            <div style={{background: 'rgba(255, 208, 68, 0.2)', minWidth:1200, minHeight: '100vh'}}>
                <ImgSearch onChangeHandler={onChangeHandler} onSearchHandler={onSearchHandler} />
                <div style={{ display:"flex", alignItems:'center', flexDirection:'column'}}>
                    <PatchCard />
                </div>
            </div>
        </>
    );
}

export default MainPage;