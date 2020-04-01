import React from 'react'
import '../ChildComponents.css'

function Story(props) {
  const { item } = props
  return(
    <div className='mm-home-story'>
      <p className='mm-home-name'>{ item.name } </p>
      <img className='mm-home-gifs' src={ item.imgSrc }/>
      <p className='mm-home-intro'>{ item.intro }</p>
      <p className='mm-home-bio'>"...{ item.bio }" </p>
    </div>
  )

}
export default Story
