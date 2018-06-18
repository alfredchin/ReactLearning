import React from 'react';
import Card from './Card';

//Create a CardList component that list Card 
//and we just pass it a props of robots
const CardList = ({robots}) => {
	return (
	<div>
		{ //wrap in curly bracket bcos it is js	
			robots.map((user, i) =>{
				return (
					<Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
						/>
				);	
			})
		}	
	</div>
	); 
}

export default CardList;

