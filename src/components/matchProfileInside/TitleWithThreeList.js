import React from 'react';
import styles from './TitleWithThreeList.module.scss';

const TitleWithThreeList = ({ title, data }) => {
  const { TitleWithThreeList } = styles;

  return(
        <div className={TitleWithThreeList}>
          <span>{ title }</span>
          <span>{ data }</span>
        </div>
  )
};

export default TitleWithThreeList;