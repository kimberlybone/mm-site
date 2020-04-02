import React from 'react'
import HomeHeader from '../ChildComponents/HomeHeader'
import OurStories from '../ChildComponents/OurStories'

function HomePage() {
  return(
      <div className="mm-body">
        <HomeHeader></HomeHeader>
        <OurStories></OurStories>
      </div>
  )
}
export default HomePage
