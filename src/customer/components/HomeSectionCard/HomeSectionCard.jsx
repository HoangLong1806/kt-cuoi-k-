import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>
      <div className='h-[13rem] w-[10rem]'>
        <img src='https://kenh14cdn.com/2020/11/4/photo-3-1604464221082802359965.jpg' alt='product' className=' object-cover object-top w-full h-full'   />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>Nofiler</h3>
        <p className='mt-2 text-sm text-gray-500'>Men Solid Pure Cotton </p>
      </div>
    </div>
  )
}

export default HomeSectionCard
