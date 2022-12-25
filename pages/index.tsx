import Navber from '../components/Home/Navber/Navbar'
import Slider from '../components/Home/Slider/Slider'
import Instructor from '../components/Home/Instructor/Instructor'
import Categories from '../components/Home/Categories/Categories'
import Advertisement from '../components/Home/Advertisement/Advertisement'
import Footer from '../components/Home/Footer/Footer'

export default function Home() {
	return (
		<>
			<Navber />
			<Slider />
			<Instructor />
			<Categories />
			<Advertisement />
			<Footer />
		</>
	)
}
