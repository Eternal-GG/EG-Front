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

    const getItemPath = (itemCode) => {
        return require(`../images/Item/${itemCode}.png`).default
    }

    const getBorderLeftColor = (gameRank) => {
        // gameRank => class name string

        return gameRank === 1 ? 'border_left__green' :
            gameRank <=3 ?
            'border_left__blue' : ''
    }

    const getRankNumColor = (gameRank) => {
        // gameRank => class name string

        return gameRank === 1 ? 'span__rank_num_green' :
            gameRank <=3 ?
                'span__rank_num_blue' : ''
    }

    const getDropDownColor = (gameRank) => {
        // gameRank => class name string

        return gameRank === 1 ? 'btn__drop_down_green' :
            gameRank <=3 ?
                'btn__drop_down_blue' : ''
    }

    return (
        <article className={cx('MatchLog')}>
            <section>
                <section className={cx('detail', `${getBorderLeftColor(gameRank)}`)}>
                    <div className={cx('detailItem')}>
                        <span className={cx('span__rank_num', `${getRankNumColor(gameRank)}`)}>
                            {`#${gameRank < 1 ? '-' : gameRank}`}
                        </span>
                        <span>
                            {
                            `${matchingTeamMode === 1 ? '솔로' : matchingTeamMode === 2 ? '듀오' : '스쿼드'}
                             ${seasonId ? '랭크' : '일반'}`
                            }
                        </span>
                        <span className={cx('span__play_date')}>{ getPlayDate() }</span>
                        <span className={cx('span__server_name')}>{ serverName }</span>
                    </div>
                    <figure>
                        <img
                            src={characterMiniImg[characterNum - 1]}
                            alt={getCharacterName(characterNum)}
                            title={getCharacterName(characterNum)}
                        />
                        <figcaption>{getCharacterName(characterNum)}</figcaption>
                    </figure>
                    <div>
                        <div className={cx('div__kah')}>
                        <span className={cx('span__data')}>{playerKill}</span>
                        <span> / </span>
                        <span className={cx('span__data')}>{playerAssistant}</span>
                        <span> / </span>
                        <span className={cx('span__data')}>{monsterKill}</span>
                        </div>
                        <span className={cx('span__data_name')}>K/A/H</span>
                    </div>
                    <div>
                        <span className={cx('span__data')}>{damageToPlayer}</span>
                        <span className={cx('span__data_name')}>딜량</span>
                    </div>
                    <div>
                        <span className={cx('span__data')}>472</span>
                        <span className={cx('span__data_name')}>MMR</span>
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
                                            alt={getItemName(itemCode, idx > 0 ? ARMOR : WEAPON)}
                                            title={getItemName(itemCode, idx > 0 ? ARMOR : WEAPON)}
                                        />
                                        :
                                        <div key={itemCode} className={cx('div__item_empty')} />
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
                                            style={{width: 55, height: '3em', objectFit:'contain', borderRadius: 10, margin: 1}}
                                            alt={getItemName(itemCode, ARMOR)}
                                            title={getItemName(itemCode, ARMOR)}
                                        />
                                        :
                                        <div key={itemCode + idx} style={{width: '100%', background: 'lightgrey', borderRadius: 10, margin: 1}} />
                                })
                            }
                        </div>
                    </div>
                </section>
                <button className={cx('btn__drop_down', `${getDropDownColor(gameRank)}`)}>V</button>
            </section>
        </article>
    );
}

export default MatchLog;