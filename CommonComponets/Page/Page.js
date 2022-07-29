/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import Head from 'next/head';
import style from './Page.module.css';

export default function Page({ children }) {
  return (
    <>
      <Head>
        <title>Carlos Pumar</title>
      </Head>
      <div className={style.page}>
        <Nav />
        <Main>{children}</Main>
      </div>
    </>
  );
}
