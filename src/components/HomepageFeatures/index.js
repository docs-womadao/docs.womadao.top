import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '敬请期待',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        敬请期待更多新内容.......
      </>
    ),
  },
  {
    title: 'warma粉丝mc公益服',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        原为warma鸡窝服务器，起源于2020年10月
        将喜欢Minecraft的沃沃头集合在一起开心的玩耍~ 
        沃玛岛官方群群号：1139412612 。
      </>
    ),
  },
  {
    title: '小游戏',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        沃玛岛服务器内置起床战争、魔法战地小游戏等待您的游玩
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
