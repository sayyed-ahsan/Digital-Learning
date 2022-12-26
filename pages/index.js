import Navber from '../components/Home/Navber/Navbar'
import Slider from '../components/Home/Slider/Slider'
import Instructor from '../components/Home/Instructor/Instructor'
import Featured from '../components/Home/Featured/Featured'
import Categories from '../components/Home/Categories/Catagories'
import Advertisement from '../components/Home/Advertisement/Advertisement'
import Brand from '../components/Home/Brand/Brand'
import Footer from '../components/Home/Footer/Footer'
import Countdown from './../components/Home/Countdown/Countdown'
import Testimonials from './../components/Home/Testimonials/Testimonials'
import Cupon from '../components/Home/Cupon/Cupon'
import Blog from '../components/Home/Blogs/Blog'
import Newslatter from '../components/Home/Newslatter/Newslatter'
export default function Home({ catagories }) {

	return (
		<>
			<Navber />
			<Slider />
			<Cupon />
			<Instructor />
			<Categories catagories={catagories} />
			<Advertisement />
			<Featured />
			<Countdown />
			<Testimonials />
			<Blog />
			<Brand />
			<Newslatter />
			<Footer />
		</>
	)
}


export const getStaticProps = async () => {
	const res = await fetch('http://localhost:5000/service');
	const data = await res.json();


	return {
		props: {
			catagories: data
		}
	}
}
