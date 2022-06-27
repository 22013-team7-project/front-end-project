import React, { useContext } from 'react'
import TeamCard from '../../components/cards/TeamCard';
import GeneralContext from '../../context/GeneralContext'

const TeamPage = () => {

	const { team } = useContext(GeneralContext);

	console.log(team)

	if(team.length >= 1){
		return (
			<div className='max-w-3xl min-h-full flex flex-col mx-auto p-6 md:p-12 rounded-xl shadow-2xl items-center'>
				<div className='grid grid-rows-2 grid-flow-col gap-2'>
						{
							team.map( (pokemon) => (<TeamCard key={pokemon.id} name={pokemon.name}/>))
						}
				</div>
			</div>
		)
	}else{

		return(
			<div className='max-w-3xl min-h-full flex flex-col mx-auto p-6 md:p-12 rounded-xl shadow-2xl items-center'>
				No hay pokemones en tu equipo
			</div>
		)

	}


}

export default TeamPage