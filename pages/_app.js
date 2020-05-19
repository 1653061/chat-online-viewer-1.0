import 'antd/dist/antd.css';
import Router from 'next/router';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

