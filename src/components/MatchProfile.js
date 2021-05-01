import React from 'react';
import classNames from 'classnames/bind';
import { MostCharacter, TitleWithThreeList } from './matchProfileInside/index';
import styles from '../styles/MatchProfile.module.scss';
import { AVERAGE_MENU, TOP_MENU } from '../utils/types';

const cx = classNames.bind(styles);

function MatchProfile({teamMode, statData}) {
    const {stats, mmr, loading, error, mostCharacter} = statData;

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>error...</div>;
    if (!statData) return <div>데이터 없음</div>;

    const makeTeamModeString = teamMode => {
        let teamModeString = 'solo';
        switch (teamMode) {
            case 1:
                teamModeString = 'solo';
                break;
            case 2:
                teamModeString = 'duo';
                break;
            case 3:
                teamModeString = 'squad';
                break;
            default:
                break;
        }
        return teamModeString;
    }
    let teamModeString = makeTeamModeString(teamMode);
    const {
            averageKills, averageAssistants, averageHunts,
            averageRank, totalGames, totalWins, top3, top5, top7
        } = stats[teamMode - 1];

    const averageInfo = [
        { title: AVERAGE_MENU[0], data: averageKills },
        { title: AVERAGE_MENU[1], data: averageAssistants },
        { title: AVERAGE_MENU[2], data: averageHunts }
    ];
    const topRateInfo = [
        { title: TOP_MENU[0], data: top3 },
        { title: TOP_MENU[1], data: top5 },
        { title: TOP_MENU[2], data: top7 }
    ];
    return(
            <article className={cx('MatchProfile')}>
                <section>
                    <div className={cx('contents')}>
                        <span>자주 쓰는 캐릭터</span>
                        <div className={cx('image-list')}>
                            {
                                mostCharacter[teamModeString] &&
                                mostCharacter[teamModeString].map(({characterCode, totalGames, maxKillings, wins}, idx) => {
                                    return (
                                        <MostCharacter
                                            key = {characterCode}
                                            characterCode={characterCode - 1}
                                            topNum={idx+1}
                                            playCount={totalGames}
                                            maxKillCount={maxKillings}
                                            top3Percent={ wins > 0 ? `${wins} (${(totalGames / wins).toFixed(1)})%` : `0 (0)%` }
                                        />
                                        )
                                })
                            }
                        </div>
                    </div>
                    <div className={cx('contents')}>
                        <div className={cx('div-basis33')}>
                            <span>전투통계</span>
                            <div className={cx('div-wrapper-flex')}>
                                <div className={cx('div-basis25')}>
                                    <span>MMR</span>
                                    <span>{ mmr[teamModeString] }</span>
                                </div>
                                <div className={cx('div-basis25')}>
                                    <span>평균 순위</span>
                                    <span>{ averageRank }</span>
                                </div>
                                <div className={cx('div-basis50')}>
                                    <span>플레이</span>
                                    <div className={cx('div-wrapper-flex')}>
                                        <div className={cx('div-basis50')}>
                                            <span>플레이 횟수</span>
                                            <span>{ totalGames }</span>
                                        </div>
                                        <div className={cx('div-basis50')}>
                                            <span>승리 횟수</span>
                                            <span>{ totalWins }</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className={cx('div-basis33')}>
                                <span>평균</span>
                                <div className={cx('div-wrapper-flex')}>
                                    {
                                        averageInfo.map(({title, data}) => {
                                            return(
                                            <TitleWithThreeList key={title} title={title} data={data}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={cx('div-basis33')}>
                                <span>상위권 비율</span>
                                <div className={cx('div-wrapper-flex')}>
                                    {
                                        topRateInfo.map(({title, data}) => {
                                            return(
                                                <TitleWithThreeList key={title} title={title} data={`${data}%`} />
                                            )
                                        })
                                    }
                                </div>
                        </div>
                    </div>
                </section>
            </article>
    )
}
export default MatchProfile;
// 상세 매치 프로필