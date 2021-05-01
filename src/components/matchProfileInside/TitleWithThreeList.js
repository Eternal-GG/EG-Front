import React from 'react';
import styles from './TitleWithThreeList.module.scss';

const TitleWithThreeList = ({ title, data }) => {
  const { TitleWithThreeList, div__number, div__menu_small } = styles;

  return(
        <div className={TitleWithThreeList}>
          <span className={div__menu_small}>{ title }</span>
          <span className={div__number}>{ data }</span>
        </div>
  )
}

export default TitleWithThreeList;