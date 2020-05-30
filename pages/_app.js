import 'antd/dist/antd.css';
import App from 'next/app';
import { fetchQuery } from 'react-relay';
import environment from 'relay/RelayEnvironment';
import { VerifyToken } from 'relay/graphql/UserGraph';
import redirectTo from 'middlewares/redirect.middleware';
import cookies from 'next-cookies'
import MainContext from 'constants/MainContext';

class MainApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const token = cookies(ctx).token;
    const refreshToken = cookies(ctx).refreshToken;
    if (token && refreshToken) {
      if (ctx.pathname === '/') {
        redirectTo('/message', { res: ctx.res })
      }
    }


    return { pageProps, token, refreshToken  };
  }

  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }

  async componentDidMount() {
    const { token, refreshToken } = this.props;
    if (token && refreshToken) {
      const { UserGraphVerifyToken: { token: newToken, user } } = await fetchQuery(environment(), VerifyToken, {});
      document.cookie = `token=${newToken}`;
      localStorage.setItem('token', newToken);
      this.setState({ currentUser: user });
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const contextValue = {
      currentUser: this.state.currentUser,
    }
    return (
      <MainContext.Provider value={contextValue}>
        <Component {...pageProps} />
      </MainContext.Provider>
    );
  }
}

export default MainApp;