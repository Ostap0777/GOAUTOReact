import React, { Component } from 'react'

export class Cars extends Component {
  render() {
	 return (
		<main>
			{this.props.items.map((el, index) => (
				<div className='cars__container' key={index}>
				<h1>{el.name}</h1>,
				<div>{el.price}</div>
				<img src={el.photo} alt={el.name} />
				</div>
			))}
		</main>
	 )
  } 
}

export default Cars