import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { GlobalStyles, theme } from 'styles/global';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
