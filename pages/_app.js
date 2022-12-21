import Layout from '../components/Layout/Layout';
import '../styles/globals.css'
import "../styles/scss/index.scss"; 

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
