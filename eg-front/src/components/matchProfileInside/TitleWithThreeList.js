import React from 'react';
import styles from './TitleWithThreeList.module.scss';

const TitleWithThreeList = ({ titles, data }) => {
  const { TitleWithThreeList } = styles;
  return(
      <>
        <div className={TitleWithThreeList}>
          <span>{ titles[0] }</span>
          <span>{ data[0] }</span>
        </div>
        <div className={TitleWithThreeList}>
          <span>{ titles[1] }</span>
          <span>{ data[1] }</span>
        </div>
        <div className={TitleWithThreeList}>
          <span>{ titles[2] }</span>
          <span>{ data[2] }</span>
        </div>
      </>
  )
};

export default TitleWithThreeList;