import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'warma粉丝mc公益服',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        原为warma鸡窝服务器，起源于2020年10月
        将喜欢Minecraft的沃沃头集合在一起开心的玩耍~ 
        沃玛频道官方入群通道：http://warma.fans
      
      </>
    ),
  },
  {
    title: '多服互联',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        沃玛频道服务器内置生存与创造以及“沃玛岛”等多个子服务器，我们期待着你的游玩！
      </>
    ),
  },
  {
    title: '敬请期待',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        服务器目前仍处于积极开发与维护的过程之中
        未来将会不断开放更多的新玩法！敬请期待！
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
