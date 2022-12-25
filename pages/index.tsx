import Navber from '../components/Home/Navber/Navbar'

import Instructor from '../components/Home/Instructor/Instructor'
import Categories from '../components/Home/Categories/Categories'
import Advertisement from '../components/Home/Advertisement/Advertisement'
import Footer from '../components/Home/Footer/Footer'
import Newslatter from '../../Digital-Learning/components/Home/Newslatter/Newslatter'


export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button className="btn btn-outline">Button</button>
      <button className="btn btn-outline btn-primary">Button</button>
      <button className="btn btn-outline btn-secondary">Button</button>
      <button className="btn btn-outline btn-accent">Button</button>
      <Navber />

      <Instructor />
      <Categories />
      <Advertisement />
      <Newslatter />
      <Footer />
    </>
  )
}
