import React from 'react';
import Card from './Card';

const Cardlist = ({ character }) => {
	return (
		<div>
			{
				character.map((user, index) => {
					return (
					<Card
						id={index+1} 
						key={index} 
						name={character[index].name} 
						height={character[index].height} 
						gender={character[index].gender} 
					/>	
					)
				})
			}
		</div>
	)
}

export default Cardlist;