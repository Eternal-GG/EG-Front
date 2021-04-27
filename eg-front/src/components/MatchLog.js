import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/MatchLog.module.scss';
import { characterMiniImg } from '../utils/images';
import { getCharacterName } from '../utils/utilFunction';

const cx = classNames.bind(styles);

function MatchLog({gameInfo}) {
    const {
        matchingTeamMode, seasonId, serverName,
        characterNum, playerKill, playerAssistant,
        monsterKill, damageToPlayer, equipment,
        gameRank, date
    } = gameInfo;

    const formatDate = (dateStr, type) => {
        // "YYYY-MM-DD HH:MM~~~", 'YMD' -> return [year, month, day]

        return type === 'YMD' && dateStr.substring(0, 10).split('-')
    }

    const getPlayDate = () => {
        // 연, 월, 주, 일 전에 게임을 했는지 시간을 변환하는 함수

        let playDateStr = ''
        const [curYear, curMonth, curDay] = formatDate(new Date().toISOString(), 'YMD')
        const [playYear, playMonth, playDay] = formatDate(date, 'YMD')

        if(curYear === playYear) {
            if(curMonth === playMonth) {
                if(curDay === playDay) {
                    playDateStr = `오늘`
                }else {
                    playDateStr = (curDay - playDay) >= 7 ?
                        `${Math.floor((curDay - playDay) / 7)}주 전`
                        :
                        `${curDay - playDay}일 전`
                }
            }else {
                playDateStr = `${curMonth - playMonth}개월 전`
            }
        }else {
            playDateStr = `${curYear - playYear}년 전`
        }

        return playDateStr
    }

    return (
        <article className={cx('MatchLog')}>
            <section>
                <section className={cx('detail')}>
                    <div className={cx('detailItem')}>
                        <span>{`#${gameRank < 1 ? '-' : gameRank}`}</span>
                        <span>
                            {
                            `${matchingTeamMode === 1 ? '솔로' : matchingTeamMode === 2 ? '듀오' : '스쿼드'}
                             ${!seasonId ? '랭크' : '일반'}`
                            }
                        </span>
                        <span>{ getPlayDate() }</span>
                        <span>{ serverName }</span>
                    </div>
                    <figure>
                        <img src={characterMiniImg[characterNum - 1]} alt={getCharacterName(characterNum)} style={{objectFit: 'cover', width: 60, height: 60, borderRadius: 50 ,background: 'lightgray'}}/>
                        <figcaption>{getCharacterName(characterNum)}</figcaption>
                    </figure>
                    <div>
                        <span>{`${playerKill} / ${playerAssistant} / ${monsterKill}`}</span>
                        <span>K/A/H</span>
                    </div>
                    <div>
                        <span>{damageToPlayer}</span>
                        <span>딜량</span>
                    </div>
                    <div>
                        <span>472</span>
                        <span>MMR</span>
                    </div>
                    <div>
                        <div className={cx('itemList')}>
                            <div style={{background: 'lightsalmon'}}>{equipment.zero}</div>
                            <div style={{background: 'lightblue'}}>{equipment.one}</div>
                            <div style={{background: 'lightyellow'}}>{equipment.two}</div>
                        </div>
                        <div className={cx('itemList')}>
                            <div style={{background: 'lightgreen'}}>{equipment.three}</div>
                            <div style={{background: 'lightpink'}}>{equipment.four}</div>
                            <div style={{background: 'lightseagreen'}}>{equipment.five}</div>
                        </div>
                    </div>
                </section>
                <button>V</button>
            </section>
        </article>
    );
}

export default MatchLog;