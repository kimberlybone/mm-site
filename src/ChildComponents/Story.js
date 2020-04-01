import React from 'react'
import '../MainComponents.css'

function Story(props) {
  const { item } = props
  return(
    <div>
      <p className='mm-home-name'>{ item.name } </p>
      <img className='mm-home-gifs' src={ item.imgSrc }/>
      <p className='mm-home-story'>{ item.bio } </p>
    </div>
  )

}
export default Story
