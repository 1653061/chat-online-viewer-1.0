import 'antd/dist/antd.css';
import App, { Container } from 'next/app';
import { fetchQuery } from 'react-relay';
import environment from 'relay/RelayEnvironment';
import { VerifyToken } from 'relay/graphql/UserGraph';
import redirectTo from 'middlewares/redirect.middleware';
import cookies from 'next-cookies'

class MainApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const token = cookies(ctx).token;
    const refreshToken = cookies(ctx).refreshToken;
    // if (token && refreshToken) {
    //   if (ctx.pathname === '/') {
    //     redirectTo('/message', { res: ctx.res })
    //   }
    // }


    return { pageProps, token, refreshToken  };
  }

  async componentDidMount() {
    const { token, refreshToken } = this.props;
    if (token && refreshToken) {
      const { UserGraphVerifyToken: { token: newToken } } = await fetchQuery(environment(), VerifyToken, {});
      document.cookie = `token=${newToken}`;
      localStorage.setItem('token', newToken);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
          <Component {...pageProps} />
      </Container>
    );
  }
}

export default MainApp;