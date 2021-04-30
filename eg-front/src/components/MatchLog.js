import React, {useState} from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/MatchLog.module.scss';
import '../styles/CommonObject.scss'
import { characterMiniImg } from '../utils/images';
import { getCharacterName, getItemColor, getItemName } from '../utils/utilFunction';
import {ARMOR, WEAPON} from "../utils/types";

const cx = classNames.bind(styles);

function MatchLog({gameInfo}) {
    const {
        matchingTeamMode, seasonId, serverName,
        characterNum, playerKill, playerAssistant,
        monsterKill, damageToPlayer, equipment,
        gameRank, date
    } = gameInfo;
    const [loading, setLoading] = useState(false);

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

    // const connectItemImg = async(itemCode) => {
    //     // itemCode -> return img src string
    //
    //     try {
    //         const {default:itemImage} = await import(`../images/Item/${itemCode}.png`)
    //         return itemImage
    //     } catch (e) {
    //         console.warn(e)
    //     }
    // }

    const getItemPath = (itemCode) => {
        return require(`../images/Item/${itemCode}.png`).default
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
                             ${seasonId ? '랭크' : '일반'}`
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
                            {
                                [equipment.zero, equipment.one, equipment.two].map((itemCode, idx) => {
                                    return itemCode ?
                                        <img
                                            key = {itemCode}
                                            src={getItemPath(itemCode)}
                                            className={`item_bg ${getItemColor(itemCode, idx > 0 ? ARMOR : WEAPON)}`}
                                            style={{width: '4em', height: '3em', objectFit:'contain', borderRadius: 10, margin: 1}}
                                            alt={getItemName(itemCode, idx > 0 ? ARMOR : WEAPON)}/>
                                        :
                                        <div key={itemCode + idx} style={{width: '100%', background: 'lightgrey', borderRadius: 10, margin: 1}} />
                                })
                            }
                        </div>
                        <div className={cx('itemList')}>
                            {
                                [equipment.three, equipment.four, equipment.five].map((itemCode, idx) => {
                                    return itemCode ?
                                        <img
                                            key = {itemCode}
                                            src={getItemPath(itemCode)}
                                            className={`item_bg ${getItemColor(itemCode, ARMOR)}`}
                                            style={{width: '4em', height: '3em', objectFit:'contain', borderRadius: 10, margin: 1}}
                                            alt={getItemName(itemCode, ARMOR)}/>
                                        :
                                        <div key={itemCode + idx} style={{width: '100%', background: 'lightgrey', borderRadius: 10, margin: 1}} />
                                })
                            }
                        </div>
                    </div>
                </section>
                <button>V</button>
            </section>
        </article>
    );
}

export default MatchLog;