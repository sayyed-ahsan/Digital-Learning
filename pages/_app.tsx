import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
// import "../scss/style.scss";


export default function App({ Component, pageProps }: AppProps) {
	useEffect(()=>{
		AOS.init();
		AOS.refresh();
	  }, []);

	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
