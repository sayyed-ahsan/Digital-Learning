import React, { useEffect, useState } from 'react'

const Featured = () => {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    fetch('http://localhost:3000/api/categories/categories')
      .then(res => res.json())
      .then(data => setCategories(data))

  }, [])




  return (
    <div className='bg-white py-10 lg:py-20'>
      <div className='w-9/12 mx-auto'>
        <div className='text-center text-black'>
          <h2 className='text-3xl font-bold'>What We Have</h2>
          <p className='w-1/2 mx-auto my-2'>Morbi ligula massa, commodo at nisl tincidunt, dignissim feugiat metus.
            Suspendisse placerat lacinia porttitor. Vivamus</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
          {
            categories.map(category => <div key={category._id} className='w-95 flex items-center bg-white rounded-md p-5 py-10 text-black justify-around shadow-xl hover:bg-secondary transition-all duration-500'>
              <img className='w-16 h-16' src={category.pic} alt="" />
              <h3 className='text-2xl font-bold'>{category.category_name}</h3>
            </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
// export async function getStaticProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/categories/categories`);
//   const catagories = await res.json();

//   // Pass data to the page via props
//   return { props: { catagories } };
// }

export default Featured;

