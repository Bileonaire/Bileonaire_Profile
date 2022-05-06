import { CookiesProvider } from "react-cookie";
import ContextWrapper from "../context/Context";
import "../styles/globals.css";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <ContextWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextWrapper>
    </CookiesProvider>
  );
}

export default MyApp;
