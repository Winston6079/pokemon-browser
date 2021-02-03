import React from 'react';

const Card = (props) => {
	const { name, height, gender, id } = props; 
	return (
		<div className='bg-red ba b--dotted bw3 br-pill grow fl w-50 i f4 tc'>
			<img alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork//${id}.png`} />
			<div>
				<p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
				<p>{height}</p>
				<p>{gender}</p>
			</div>
		</div>
	)
}

export default Card;





