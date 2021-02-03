import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
	return (
		<input 
			className='b--dark-red ba bg-light-green tc'
			type='search' 
			placeholder="Cath 'em all"
			onChange={searchChange}
		/>
	)
}

export default SearchBox;