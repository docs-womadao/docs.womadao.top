import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'warma粉丝mc公益服',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        原为warma鸡窝服务器，起源于2020年10月，现由"沃玛频道"运营。
        心愿是将喜欢Minecraft的沃沃头集合在一起开心的玩耍~ 
        沃玛频道官方入群通道：http://warma.fans
      
      </>
    ),
  },
  {
    title: '多服互联',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        沃玛岛服务器并不内置生存与创造以及“沃玛岛”等多个子服务器，目前，mod服务器正在试运营中，我们在等你一起玩！
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

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
