import React from 'react'
import '../MainComponents.css'
import Story from '../ChildComponents/Story.js'

class OurStories extends React.Component {
  // create child component for individual stories with state

  state = {
    items: [
      {
        id: 0,
        name: "Caci",
        imgSrc: "Caci-anim.gif",
        bio: "I want Mocha Moves to become a breeding ground for safe spaces for women of all backgrounds. In order to strengthen personal relationships as they are necessary for a healthy life."
      },
      {
        id: 1,
        name: "Cam",
        imgSrc: "Cam-anim.gif",
        bio: "I would love to see Mocha Moves grow and flourish to become a prominent figure in Black culture by inspiring Black women, chnaging narratives, and expanding into business opportunities. Throughout this experience, my hope is the six of us continue to strengthen and deepen our connections."
      },
      {
        id: 2,
        name: "Dee",
        imgSrc: "Dee-anim.gif",
        bio: "I hope Mocha Moves gives women around the world exactly what I needed way back when, and still need today..inspiration. Whatever you want in life exists, so go get it. Love yourself, and never settle."
      },
      {
        id: 3,
        name: "Kim",
        imgSrc: "KB-anim.gif",
        bio: "My goal for Mocha Moves is to be an inspiration to women, especially those of color. I want to make sure they know that we can do anything we set our minds to. As Michelle Obama said there is no limit to what we as women can accomplish."
      },
      {
        id: 4,
        name: "Randi",
        imgSrc: "Randi-anim.gif",
        bio: "My goal for Mocha Moves is to share this loving energy with everyone. My friends and I have a romance that I think women (especially women of color) are longing to see and be apart of. With this brand, I hope to create a community."
      },
      {
        id: 5,
        name: "Tre",
        imgSrc: "Tre-anim.gif",
        bio: "My goal for Mocha Moves is to create a mirror in which girls and women see themselves. To show that no matter who you are, there's a pillar of light and a friend in a dark space. Even if only one person is touched, I will feel accomplished."
      }
    ]
  }

  makeItems = (items) => {
    return items.map( item => {
      return <Story item={item} key={ item.id } ></Story>
    })
  }

  render (){
    const { items } = this.state
     return(
      <div className='home-stories'>
        { this.makeItems(items) }
      </div>
    )
  }
}

export default OurStories
