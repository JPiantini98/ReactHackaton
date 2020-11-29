import  React, {useEffect, useState} from 'react'
import './pokeCard.css'
import axios from 'axios'









function PokeCard(props){


    
    const [pokemonData, setPokemonData] = useState({
        images: null,
        id: null,
        types: null,
        abilities: null

    })
    

    
    useEffect(() => {
        if(!pokemonData.abilities ){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemonName}`).then(response =>{
            console.log(response)
                setPokemonData({
                    types: response.data.types,
                    images: response.data.sprites.other['official-artwork'].front_default,
                    id: response.data.id,
                    name: response.data.name,
                    types: response.data.types,
                    abilities: response.data.abilities,
                   
                
                 })
           })
        } 
        
    })  
    
    let pokemonTypes;
    if(pokemonData.types){
        pokemonTypes = pokemonData.types.map((element) => {
          
            return  pokemonTypes = element.type.name
        });
    }

    return(
     
        <div className="card"  id={pokemonTypes ?pokemonTypes[0]:null}>
          
            <img src={pokemonData.images} className="img"></img>
               
            <h5 className="card-title"  id={pokemonTypes ?pokemonTypes[0]:null}  >{pokemonTypes ?pokemonTypes[0]:null}  </h5>

        </div>
      
    )
    

    
} export default PokeCard
