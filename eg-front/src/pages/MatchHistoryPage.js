import React, {useEffect, useState, useCallback} from 'react';
import Header from '../components/Header';
import MatchProfileSimple from '../components/MatchProfileSimple';
import MatchProfile from "../components/MatchProfile";
import TeamModeMenu from "../components/TeamModeMenu";
import styles from '../styles/MatchHisotryPage.module.scss';
import {SEASON} from '../utils/types';
import {useDispatch, useSelector} from "react-redux";
import {getGameStats} from '../modules/game';
import MatchLogList from '../components/MatchLogList';

function MatchHistoryPage({ match, history }) {
    const dispatch = useDispatch();
    const { gameNickname } = match.params;
    const [ dropdown, setDropdown ] = useState(false);
    const [ season, setSeason ] = useState('일반');
    const [ teamMode, setTeamMode ] = useState(1);
    const { NORMAL, SEASON_1 } = SEASON;
    const gameStatData = useSelector(state => state.game.statData);
    // 0은 일반을 뜻함
    const dropdownHandler = () => {
        setDropdown(!dropdown);
    };
    const seasonHandler = e => {
      setSeason(e.target.innerText);
    };
    const seasonStringToNumber = seasonStr => {
        /* 문자열인 시즌명을  숫자로 바꾸는 함수*/

        switch (seasonStr) {
            case NORMAL:
                return 0;
            case SEASON_1:
                return 1;
            default:
                console.log('없는 시즌');
                break;
        }
    };
    const fetchStat = useCallback(() =>{
        const seasonNumber = seasonStringToNumber(season);
        dispatch(getGameStats({gameNickname, seasonNumber}));
    }, [gameNickname, season]);

    useEffect(()=>{
        fetchStat();
    }, [fetchStat]);

    return(
        <>
            <Header history={history}/>
            <section className={styles.MatchHistoryPage}>
                <MatchProfileSimple
                    gameNickname={gameNickname}
                    dropdown={dropdown}
                    dropdownHandler={dropdownHandler}
                    season={season}
                    teamMode={teamMode}
                    gameStatData={gameStatData}
                    seasonHandler={seasonHandler}
                    fetchStat={fetchStat}
                    SEASON={SEASON}
                />
                <TeamModeMenu setTeamMode={setTeamMode}/>
                <MatchProfile
                    teamMode={teamMode}
                    gameStatData={gameStatData}
                />
                <MatchLogList />
            </section>
        </>
    )
}

export default MatchHistoryPage;