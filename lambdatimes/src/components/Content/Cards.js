import React, { /*Component*/ } from 'react'
// import PropTypes from 'prop-types'
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => {
        return (
          <Card
            card={card}
            key = {
              Math.floor(Math.random() * 10000) + 1
            }
          />
        )
      })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
// Cards.PropTypes = {
//   cards: PropTypes.arrayOf({
//     card: PropTypes.object,
//   })
// }

export default Cards;