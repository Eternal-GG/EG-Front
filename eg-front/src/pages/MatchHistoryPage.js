import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import MatchProfileSimple from "../components/MatchProfileSimple";
import MatchProfile from "../components/MatchProfile";
import {request} from '../utils/axios';
import {DOMAIN, GAME_LIST_API} from "../Config";

function MatchHistoryPage({match, history}) {
    const {gameNickname} = match.params;
    const [dropdown, setDropdown] = useState(false);
    const [season, setSeason] = useState('일반');
    // 0은 일반을 뜻함
    const dropdownHandler = () => {
        setDropdown(!dropdown);
    };
    const seasonHandler = (e) => {
      setSeason(e.target.innerText);
    };
    // useEffect(async()=>{
    //     try {
    //         const games = await request('get', `${GAME_LIST_API}/${gameNickname}/1`);
    //     }catch (e) {
    //         history.push('/error');
    //     }
    // });
    return(
        <>
            <Header history={history}/>
            <MatchProfileSimple
                gameNickname={gameNickname}
                dropdown={dropdown}
                dropdownHandler={dropdownHandler}
                season={season}
                seasonHandler={seasonHandler}
            />
            <MatchProfile />
            </>
    )
}

export default MatchHistoryPage;