import '@/styles/globals.sass'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import type { AppProps } from 'next/app'
import Layout from "@/components/Layout";
import {YMaps} from "@pbe/react-yandex-maps";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <YMaps query={{
          lang: 'ru_RU',
          apikey: 'f93f7e05-0cbe-4658-9461-e3bf90def416'
      }}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </YMaps>
      
      )
}
