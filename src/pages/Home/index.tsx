import React from 'react';
import style from './styles.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={style.homeContainer}>
      <h1>首页</h1>
      <p>欢迎来到首页！</p>
    </div>
  );
};

export default HomePage;