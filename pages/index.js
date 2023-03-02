import Head from 'next/head';

import { HeaderSimple } from '../components/HeaderSimple';
import { HeroBullets } from '../components/HeroSection';
import { FeaturesGrid } from '../components/Team';
import { FooterSimple } from '../components/Footer';
export default function Home(props) {
  const headerProps = {
    colorScheme: props.colorScheme,
    toggleColorScheme: props.toggleColorScheme,
  };
  return (
    <>
      <HeaderSimple
        {...headerProps}
        links={[
          {
            label: 'Source Code',
            link: 'https://github.com/open-source-labs/Chromogen/',
          },
        ]}
      />
      <div className="container">
        <Head>
          <title>Chromogen | A Test Generation Tool</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeroBullets />
        <FeaturesGrid title="Meet the Team" description="Proudly maintained by Open Source Labs" />
        <FooterSimple
          links={[
            {
              link: 'https://www.linkedin.com/company/chromogenvfour',
              label: 'LinkedIn',
            },
            {
              link: 'https://github.com/open-source-labs/Chromogen',
              label: 'Github',
            },
            { link: 'https://www.npmjs.com/package/chromogen', label: 'npm' },
            { link: 'https://demo-zustand-todo.vercel.app', label: 'Demo App' },
          ]}
        />
      </div>
    </>
  );
}
