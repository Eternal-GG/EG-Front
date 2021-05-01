import React, {useCallback, useEffect, useState} from 'react';
import MatchLog from './MatchLog';
import { getGames } from '../modules/game';
import { useDispatch } from 'react-redux';
import styles from '../styles/MatchLogList.module.scss'

function MatchLogList({ gameNickname, gamesData }) {
    const dispatch = useDispatch();
    const { data, loading, error } = gamesData;
    const [ page, setPage ] = useState(1);
    const [ gameLog, setGameLog ] = useState(data);
    console.log(data)

    const fetchGames = useCallback(() =>{
        dispatch(getGames({gameNickname, page}));
    }, [gameNickname, page]);
    useEffect(()=>{
        fetchGames();
        setGameLog(prev => prev.concat(data));
        console.log(gameLog)
    }, [fetchGames]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>error...</div>;
    if (!data) return <div>데이터 없음</div>;

    return (
        <>
            <div className={`${styles.div__title_log}`}>게임 전적</div>
            {
                data.map((gameInfo) => {
                    return(
                        <MatchLog gameInfo={gameInfo} />
                    )
                })
            }
            <button className={`${styles.Btn__more} btn yellow`} onClick={() => setPage(prev => prev + 1)}>더 보기</button>
        </>
    );
}

export default MatchLogList

// TODO 더보기 누르면 갯수 늘어나게 하기
// data 가 아예 0 이거나 더보기 계속 눌러서 페이지 값이 최대값을 넘었을 때..! error 라고 뜸 이거 해결하기