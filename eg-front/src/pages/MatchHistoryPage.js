import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MatchProfileSimple from '../components/MatchProfileSimple';
import MatchProfile from "../components/MatchProfile";
import TeamModeMenu from "../components/TeamModeMenu";
import styles from '../styles/MatchHisotryPage.module.scss';
import { request } from '../utils/axios';
import { GAME_STAT_API, GAME_LIST_API } from "../Config";

function MatchHistoryPage({ match, history }) {
    const { gameNickname } = match.params;
    const [ dropdown, setDropdown ] = useState(false);
    const [ season, setSeason ] = useState('일반');
    // 0은 일반을 뜻함
    const dropdownHandler = () => {
        setDropdown(!dropdown);
    };
    const seasonHandler = e => {
      setSeason(e.target.innerText);
    };
    // useEffect(async()=>{
    //     try {
    //         const statData = await request('get', `${GAME_STAT_API}/${gameNickname}/1`);
    //         console.log(statData)
    //     }catch (e) {
    //         history.push('/error');
    //     }
    // });
    return(
        <>
            <Header history={history}/>
            <section className={styles.MatchHistoryPage}>
                <MatchProfileSimple
                    gameNickname={gameNickname}
                    dropdown={dropdown}
                    dropdownHandler={dropdownHandler}
                    season={season}
                    seasonHandler={seasonHandler}
                />
                <TeamModeMenu />
                <MatchProfile/>
            </section>
        </>
    )
}

export default MatchHistoryPage;