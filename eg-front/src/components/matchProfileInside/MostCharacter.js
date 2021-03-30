import React from 'react';
import './MostCharacter.module.scss';
import { characterHalfImg } from '../../utils/images';

const MostCharacter = ({ characterCode, topNum, playCount, maxKillCount, top3Percent, styles }) => {
    return(
        <div className={styles}>
            <div>{ topNum }</div>
            <img src={ characterHalfImg[characterCode] } alt={ characterCode } />
            <span>플레이 횟수</span>
            <span>{ playCount }</span>
            <span>최대 킬 수</span>
            <span>{ maxKillCount }</span>
            <span>Top 3</span>
            <span>{ top3Percent }</span>
        </div>
    )
};

export default MostCharacter;