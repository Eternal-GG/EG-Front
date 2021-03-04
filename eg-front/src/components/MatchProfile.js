import React from 'react';
import classNames from 'classnames/bind';
import { MostCharacter, TitleWithThreeList } from './matchProfileInside/index';
import styles from '../styles/MatchProfile.module.scss';

const cx = classNames.bind(styles);

function MatchProfile() {
    const averageTitles = [ '평균 킬', '평균 어시스트', '평균 야생동물 사냥' ];
    const averageData = [ 0.3, 0, 10.4 ];
    const topPercentTitles = [ 'Top 3', 'Top 5', 'Top 7' ];
    const topPercentData = [ `1 (0)%`, `4 (20)%`, `7 (30)%` ];
    return(
            <article className={cx('MatchProfile')}>
                <section>
                    <div className={cx('contents')}>
                        <span>자주 쓰는 캐릭터</span>
                        <div className={cx('image-list')}>
                            <MostCharacter topNum={1} playCount={10} maxKillCount={2} top3Percent={' 1(10)%'} />
                            <MostCharacter topNum={2} playCount={10} maxKillCount={2} top3Percent={' 1(10)%'} />
                            <MostCharacter topNum={3} playCount={10} maxKillCount={2} top3Percent={' 1(10)%'} />
                        </div>
                    </div>
                    <div className={cx('contents')}>
                        <div className={cx('div-basis33')}>
                            <span>전투통계</span>
                            <div className={cx('div-wrapper-flex')}>
                                <div className={cx('div-basis25')}>
                                    <span>MMR</span>
                                    <span>500</span>
                                </div>
                                <div className={cx('div-basis25')}>
                                    <span>평균 순위</span>
                                    <span>9.7</span>
                                </div>
                                <div className={cx('div-basis50')}>
                                    <span>플레이</span>
                                    <div className={cx('div-wrapper-flex')}>
                                        <div className={cx('div-basis50')}>
                                            <span>플레이 횟수</span>
                                            <span>21</span>
                                        </div>
                                        <div className={cx('div-basis50')}>
                                            <span>승리 횟수</span>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className={cx('div-basis33')}>
                                <span>평균</span>
                                <div className={cx('div-wrapper-flex')}>
                                    <TitleWithThreeList titles={averageTitles} data={averageData} />
                                </div>
                            </div>
                            <div className={cx('div-basis33')}>
                                <span>상위권 횟수(비율)</span>
                                <div className={cx('div-wrapper-flex')}>
                                    <TitleWithThreeList titles={topPercentTitles} data={topPercentData} />
                                </div>
                        </div>
                    </div>
                </section>
            </article>
    )
}
export default MatchProfile;
// 상세 매치 프로필