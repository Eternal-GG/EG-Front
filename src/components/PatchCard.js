import React from 'react';
import styles from '../styles/PatchCard.module.scss'

const {patchCard} = styles

function PatchCard(props) {
    return (
        <div className={patchCard} onClick={() => {window.open('https://playeternalreturn.com/ko/patch-notes/0-31-0/')}}>
            <span>정기 점검 사전 안내 (0.31.0 패치노트)</span>
        </div>
    );
}

export default PatchCard;