import Playground from "../components/layouts/Playground";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => <Playground>{page}</Playground>)
  return getLayout(<Component {...pageProps}/>)
}
