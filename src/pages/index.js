import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/General_Introduction/intro">
            Annapurna Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Annapurna User Guide">
      {/* Header Centralizado */}
      <HomepageHeader />  
      
      <main>
        <HomepageFeatures />
      </main>

      {/* Card Section */}
      <main>
        <section className="container">
          <div className="row">
            {/* Card 1: Introduction */}
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <h3>User Guide Introduction</h3>
                </div>
                <div className="card__body">
                  <p>General overview about this Annapurna™ documentation. </p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to="/docs/General_Introduction/intro">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* Card 2: Requirements */}
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <h3>Release</h3>
                </div>
                <div className="card__body">
                  <p>Learn about Release Note Annapurna™.</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to="/docs/General_Introduction/release">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* Card 3: Scope */}
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <h3>Scope</h3>
                </div>
                <div className="card__body">
                  <p>Discover the scope and potential applications.</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    href="https://www.apmodtech.com/Solutions/AnnapurnaResource">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* Card 4: Contact */}
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <h3>Contact Us</h3>
                </div>
                <div className="card__body">
                  <p>Contact us for inquiries, business, partnerships, or projects.</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    href="https://www.apmodtech.com/ContactUs">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
