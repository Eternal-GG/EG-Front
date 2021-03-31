import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/MatchLog.module.scss';

const cx = classNames.bind(styles);

function MatchLog(props) {
    return (
        <article className={cx('MatchLog')}>
            <section>
                <section className={cx('detail')}>
                    <div className={cx('detailItem')}>
                        <span>#11</span>
                        <span>솔로 랭크</span>
                        <span>4주일 전</span>
                        <span>Seoul</span>
                    </div>
                    <figure>
                        <div>캐릭터 이미지</div>
                        <figcaption>캐시</figcaption>
                    </figure>
                    <div>
                        <span>1/0/4</span>
                        <span>K/A/H</span>
                    </div>
                    <div>
                        <span>2468</span>
                        <span>딜량</span>
                    </div>
                    <div>
                        <span>472</span>
                        <span>MMR</span>
                    </div>
                    <div>
                        <div className={cx('itemList')}>
                            <div>아이템1</div>
                            <div>아이템2</div>
                            <div>아이템3</div>
                        </div>
                        <div className={cx('itemList')}>
                            <div>아이템4</div>
                            <div>아이템5</div>
                            <div>아이템6</div>
                        </div>
                    </div>
                </section>
                <button>V</button>
            </section>
        </article>
    );
}

export default MatchLog;