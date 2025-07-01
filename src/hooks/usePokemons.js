import { useContext } from "react";
import GeneralContext from "../context/GeneralContext"

const usePokemons = () => {
	const context = useContext(GeneralContext)
	if(!context) throw new Error('There is no provider')

	const { getPokemonList, getPokemon, addToTeam, removeFromTeam, pokemons, selectedPokemon, team, changeValue,value } = context;

	return { 
		getPokemonList, 
		getPokemon, 
		addToTeam, 
		removeFromTeam, 
		pokemons, 
		selectedPokemon, 
		team,
		value, 
		changeValue,
	}
}

export default usePokemons