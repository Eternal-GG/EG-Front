import React from 'react';
import normal from '../images/Rank Tier/09_Normal.png';
import { BiBookAlt, BiBookHeart, BiCaretDown, BiCaretUp, BiCheck } from 'react-icons/bi';

function MatchProfileSimple({gameNickname}) {
    return(
        <section>
            <article>
                <section>
                    <img src={normal} alt='노말' />
                    <span>일반</span>
                </section>
                <section>
                    <span>{gameNickname}</span>
                    <div>
                        <button>전적 갱신</button>
                        <button><BiBookAlt />즐겨찾기</button>
                    </div>
                    <span>최근 업데이트 : 27분 전</span>
                </section>
                <ul>
                    <li>일반(고른거 뜸)<BiCaretDown/></li>
                    <li><BiCheck/>일반</li>
                    <li>시즌1</li>
                </ul>
                <input/>
            </article>
        </section>
    );
}
export default MatchProfileSimple;

// 티어 이미지, 닉네임, 전적갱신, 즐겨찾기 등이 있는 컴포넌트