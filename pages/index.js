import Head from 'next/head'
import HPBody from 'components/HPBody';
import Header from 'components/Header';

const Main = ({}) => {
  return <>
      <Header isHome />
      <HPBody />
    </>
}

export default Main;