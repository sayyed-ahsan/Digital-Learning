import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
// import "../scss/style.scss";

import Footer from '../components/Footer/Footer';
import { AuthProvider } from '../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(()=>{
		AOS.init();
		AOS.refresh();
	  }, []);

	return (
		<AuthProvider>
			<>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
				<Toaster />
			</>
		</AuthProvider>
	)
}
