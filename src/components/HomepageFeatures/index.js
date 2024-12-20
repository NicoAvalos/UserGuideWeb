import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// iconos tomado y editados desde https://www.flaticon.es/ Gracias !

const FeatureList = [
  {
    title: 'Intuitive Workflows',
    Svg: require('@site/static/img/workflow.svg').default,
    description: (
      <>
        Designed for both <strong>beginners</strong> and <strong>advanced users</strong>, 
      </>
    ),
  },
  
  {
    title: 'Results in minutes',
    Svg: require('@site/static/img/Tiempo.svg').default,
    description: (
      <>
        Spend less time on manual tasks and more on <strong>fine-tuning</strong> and <strong>model review</strong>. 

      </>
    ),
  },
  {
    title: 'Access Anywhere, Anytime',
    Svg: require('@site/static/img/en-todos-lados.svg').default,
    description: (
      <>
      Work from anywhere with just an internet connection and drive your projects forward.
      </>
    ),
  },
  {
    title: 'Sensitivity and DE-Risk Management',
    Svg: require('@site/static/img/mineria.svg').default,
    description: (
      <>
        Analyze parameter impact through few or <strong>hundreds of scenarios</strong>.
        .  
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
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
