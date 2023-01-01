import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
import { AuthProvider } from '../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
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