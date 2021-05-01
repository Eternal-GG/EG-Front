import React from 'react';
import styles from './MostCharacter.module.scss';
import { characterHalfImg } from '../../utils/images';
import { getCharacterName } from '../../utils/utilFunction';

const {first, second, third, div__most_info, span__rank_number, span__menu, span__number} = styles

const MostCharacter = ({ characterCode, topNum, playCount, maxKillCount, top3Percent }) => {

    const getRankNumberBgClassName = (num) => {
        return num === 1 ?
            first : num === 2 ?
                second : third;
    }

    return(
        <div className={div__most_info}>
            <span className={`${span__rank_number} ${getRankNumberBgClassName(topNum)}`} />
            <img
                src={ characterHalfImg[characterCode] }
                alt={ getCharacterName(characterCode + 1) }
                title={ getCharacterName(characterCode + 1) }
            />
            <span className={span__menu}>플레이 횟수</span>
            <span className={span__number}>{ playCount }</span>
            <span className={span__menu}>최대 킬 수</span>
            <span className={span__number}>{ maxKillCount }</span>
            <span className={span__menu}>Top 3</span>
            <span className={span__number}>{ top3Percent }</span>
        </div>
    )
};

export default MostCharacter;