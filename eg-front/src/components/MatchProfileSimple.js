import React, {useEffect, useState} from 'react';
import { BiCaretDown, BiCaretUp, BiCheck } from 'react-icons/bi';
import styles from '../styles/MatchProfileSimple.moduel.scss';
import commonObject from '../styles/CommonObject.scss';
import classNames from 'classnames/bind';
import {tierImg, normal, unRank} from '../utils/images';
import {TIER, UN_RANK} from "../utils/types";

const cx = classNames.bind(styles, commonObject);

function MatchProfileSimple({gameNickname, dropdown, dropdownHandler, season, teamMode, statData, SEASON, fetchStat, seasonHandler}) {
    const {NORMAL, SEASON_1} = SEASON;
    const {stats, mmr, error} = statData;
    const [tierInfo, setTierInfo] = useState({text: NORMAL, imgSrc:normal});

    useEffect(()=>{
        getTierInfo();
    }, [stats, teamMode]);

    const getTierInfo = () => {
        let txt = '';
        let src = '';
        if(error){
            // TODO 나중에 데이터 없음으로 따로 처리할지 고민 좀 하기
            txt = UN_RANK;
            src = unRank;
        }
        else if(season === NORMAL) {
            txt = NORMAL;
            src = normal;
        }else if(season === SEASON_1) {
            // 겜 한 판 해보고 전적갱신 기능 되나 안 되나 보기
            const divideTeamModeMmr = () => {
                switch (teamMode){
                    case 1:
                        return mmr.solo
                    case 2:
                        return mmr.duo
                    case 3:
                        return mmr.squad
                    default:
                        break;
                }
            }
            const teamModeMmr = divideTeamModeMmr();

            if(!teamModeMmr){
                txt = UN_RANK;
                src = unRank;
            }else{
                let index, lp;
                if(teamModeMmr < 3200){
                    index = Math.floor(teamModeMmr / 100);
                    lp = teamModeMmr % 100;
                }else{
                    index = 31;
                    lp = teamModeMmr - 3100;
                }
                txt= `${TIER[index]} ${lp}lp`;

                if(index >= 0 && index < 4) src = tierImg[0];
                else if(index < 8) src = tierImg[1];
                else if(index < 12) src = tierImg[2];
                else if(index < 16) src = tierImg[3];
                else if(index < 20) src = tierImg[4];
                else if(index < 24) src = tierImg[5];
                else if(index < 28) src = tierImg[6];
                else src = tierImg[7]

            }

        }
        setTierInfo({...tierInfo, text: txt, imgSrc: src});
    }
    // if(loading) return <div>로딩 중...</div>
    return(
            <article className={cx('MatchProfileSimple')}>
                <section>
                    <img src={tierInfo.imgSrc} className={cx('img-rank')} alt={tierInfo.text} />
                    <span>{tierInfo.text}</span>
                </section>
                <section>
                    <span className={cx('span-nickname')}>{gameNickname}</span>
                    <div>
                        <button className={cx('btn', 'yellow')} onClick={fetchStat}>전적 갱신</button>
                        <button className={cx('btn', 'yellow')}>★ 즐겨찾기</button>
                    </div>
                    <span className={cx('span-time')}>최근 업데이트 : 27분 전</span>
                </section>
                <section>
                    <span onClick={dropdownHandler}>
                        {season}
                        {dropdown ? <BiCaretUp/> : <BiCaretDown/>}
                    </span>
                    {
                        dropdown &&
                            <ul>
                                <li onClick={(e)=>{seasonHandler(e)}}>
                                    {season === '일반' ? <BiCheck/> : null}
                                    일반
                                </li>
                                <li onClick={(e)=>{seasonHandler(e)}}>
                                    {season === '시즌1' ? <BiCheck/> : null}
                                    시즌1
                                </li>
                            </ul>
                    }

                </section>
            </article>
    );
}
export default MatchProfileSimple;

// 티어 이미지, 닉네임, 전적갱신, 즐겨찾기 등이 있는 컴포넌트