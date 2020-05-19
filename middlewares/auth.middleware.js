import React, { Component } from 'react';
import cookies from 'next-cookies';
import redirectTo from 'middlewares/redirect.middleware';

export const withAuth = (AuthComponent) =>
  class Authenticated extends Component {
    static async getInitialProps(ctx) {
      const pageProps =
        AuthComponent.getInitialProps &&
        (await AuthComponent.getInitialProps(ctx));
      const token = cookies(ctx).token;
      const refreshToken = cookies(ctx).refreshToken;
      if (!token && !refreshToken) {
        redirectTo('/', { res: ctx.res })
      }
      return {
        ...pageProps,
      };
    }

    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    render() {
      return <AuthComponent {...this.props} />;
    }
  };
