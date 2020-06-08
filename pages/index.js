import Head from 'next/head'
import HPBody from 'components/HPBody';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Main = ({}) => {
  return <>
      <Header isHome />
      <HPBody />
      <Footer />
    </>
}

export default Main;