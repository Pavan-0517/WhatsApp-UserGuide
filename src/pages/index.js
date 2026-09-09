import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const documentation = [
  {
    title: 'Getting Started',
    description: 'Learn the basics and get started with WhatsApp.',
    link: '/docs/getting-started',
  },
  {
    title: 'Installation',
    description: 'Install and set up WhatsApp on Android, iOS, and Desktop.',
    link: '/docs/installation-android',
  },
  {
    title: 'User Guide',
    description: 'Explore WhatsApp features and learn how to use them.',
    link: '/docs/user-guide',
  },
  {
    title: 'Administration',
    description: 'Learn about administration and management features.',
    link: '/docs/administration',
  },
  {
    title: 'UPI',
    description: 'Learn about UPI-related features and payments.',
    link: '/docs/UPI',
  },
  {
    title: 'Best Practices',
    description: 'Recommended practices for using WhatsApp effectively.',
    link: '/docs/best-practices',
  },
  {
    title: 'Troubleshooting',
    description: 'Find solutions to common WhatsApp problems.',
    link: '/docs/troubleshooting',
  },
];

function DocumentationCard({title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.cardColumn)}>
      <Link className={styles.card} to={link}>
        <div className={styles.cardContent}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          <span className={styles.cardLink}>Explore →</span>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="WhatsApp User Guide"
      description="Complete WhatsApp documentation and user guide">
      
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>WhatsApp User Guide</h1>

          <p className={styles.heroSubtitle}>
            Complete documentation and guides for WhatsApp
          </p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started">
              Get Started
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="/docs/user-guide">
              User Guide
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.documentation}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">Explore the Documentation</Heading>

              <p>
                Find guides, installation instructions, administration
                information, and troubleshooting help.
              </p>
            </div>

            <div className="row">
              {documentation.map((item) => (
                <DocumentationCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}