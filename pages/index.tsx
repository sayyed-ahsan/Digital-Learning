import Navber from '../components/Home/Navber/Navbar'
import Slider from '../components/Home/Slider/Slider'
import Cupon from '../components/Home/Cupon/Cupon'
import Instructor from '../components/Home/Instructor/Instructor'
import Categories from '../components/Home/Categories/Categories'
import Advertisement from '../components/Home/Advertisement/Advertisement'
import Brand from '../components/Home/Brand/Brand'
import Footer from '../components/Home/Footer/Footer'

export default function Home() {
	return (
		<>
			<Navber />
			<Slider />
      <Cupon/>
			<Instructor />
			<Categories />
			<Advertisement />
      <Brand/>
			<Footer />
		</>
	)
}
