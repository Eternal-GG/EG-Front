import React from 'react';
import './MostCharacter.module.scss';
import character1 from '../../images/character/half/001_Jackie.png';

const MostCharacter = ({ topNum, playCount, maxKillCount, top3Percent, styles }) => {
    return(
        <div className={styles}>
            <div>{ topNum }</div>
            <img src={character1}/>
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