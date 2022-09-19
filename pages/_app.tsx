import Playground from "../components/layouts/Playground";
import '../styles/global.css';


export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => <Playground>{page}</Playground>)
  return getLayout(<Component {...pageProps}/>)
}
