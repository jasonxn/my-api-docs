import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fully Customizable & Branded',
    ImgSrc: '/img/static/img/fully-customizable-branded.png',
    description: (
      <>
        Suppy lets retailers create a unique online store experience tailored to their brand and business needs — no compromises.
      </>
    ),
  },
  {
    title: 'Seamless Digital Retail',
    ImgSrc: '/img/seamless-digital-retail.png',
    description: (
      <>
        From rapid digital store setup to powerful backend systems, Suppy delivers an end-to-end e-commerce solution built for retail success.
      </>
    ),
  },
  {
    title: 'Built by Industry Veterans',
    ImgSrc: '/img/built-by-veterans.png',
    description: (
      <>
        Developed by seasoned professionals with deep retail tech expertise, Suppy combines innovation with practical retail insights.
      </>
    ),
  },
];

function Feature({ImgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={ImgSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
