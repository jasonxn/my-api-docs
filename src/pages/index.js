import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" style={{textAlign: 'center'}}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{maxWidth: '600px', margin: '0 auto'}}>
          Trusted by thousands of retailers worldwide, <strong>Suppy</strong> is a fully customizable, branded e-commerce solution designed to empower retailers to thrive in the digital era.
        </p>
        <div className={styles.buttons} style={{marginTop: '20px'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with Suppy Docs 🚀
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/api/overview"
            style={{marginLeft: '12px'}}>
            Explore API Reference 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Suppy - the future of retail e-commerce solutions">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
