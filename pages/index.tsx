import Navber from '../components/Home/Navber/Navbar'
import Instructor from '../components/Home/Instructor/Instructor'
import Categories from '../components/Home/Categories/Categories'
import Advertisement from '../components/Home/Advertisement/Advertisement'
import Footer from '../components/Home/Footer/Footer'
import Countdown from './../components/Home/Countdown/Countdown'
import Testimonials from './../components/Home/Testimonials/Testimonials'
import Slider from './../components/Home/Slider/Slider'

export default function Home() {
	return (
		<>
			<Navber />
			<Slider />
			<Instructor />
			<Categories />
			<Advertisement />
			<Countdown />
			<Testimonials />
			<Footer />
		</>
	)
}
