import React from 'react';
import normal from '../images/Rank Tier/09_Normal.png';
// import normal from '../images/Rank Tier/08_Immortal.png';
import { BiCaretDown, BiCaretUp, BiCheck } from 'react-icons/bi';
import styles from '../styles/MatchProfileSimple.moduel.scss';
import commonObject from '../styles/CommonObject.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles, commonObject);

function MatchProfileSimple({gameNickname}) {
    return(
        <section className={cx('MatchProfileSimple')}>
            <article>
                <section>
                    <img src={normal} className={cx('img-rank')} alt='노말' />
                    <span>일반</span>
                </section>
                <section>
                    <span className={cx('span-nickname')}>{gameNickname}</span>
                    <div>
                        <button className={cx('btn', 'yellow')}>전적 갱신</button>
                        <button className={cx('btn', 'yellow')}>즐겨찾기</button>
                    </div>
                    <span className={cx('span-time')}>최근 업데이트 : 27분 전</span>
                </section>
                <section>
                    <span>일반<BiCaretDown/></span>
                    <ul>
                        <li><BiCheck/>일반</li>
                        <li><BiCheck/>시즌1</li>
                    </ul>
                </section>
            </article>
        </section>
    );
}
export default MatchProfileSimple;

// 티어 이미지, 닉네임, 전적갱신, 즐겨찾기 등이 있는 컴포넌트