import '@/styles/common.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_OAUTH_CONFIG } from '@/oauth.config';

export default function App({Component, pageProps}) {
  return (
    <>
    <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CONFIG?.clientId}>
    <Component {...pageProps} />
    </GoogleOAuthProvider>
    </>
  );
}
