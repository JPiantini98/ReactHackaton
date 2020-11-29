import React, { useEffect } from 'react'
import  { useState } from 'react'
import { Layout } from '../layout/Layout'
import './homeStyle.css'
import axios from 'axios'
import './pokeImages/grass.jpg'
import './pokeCard/pokeCard.css'
import PokeCard from './pokeCard/PokeCard'



export const Home = () => {

   return (
        <Layout >
            <div>
                <div className="box">

                    <PokeCard pokemonName="bulbasaur"/>

                </div>

                <div className="box">
                
                    <PokeCard pokemonName="rattata"/>

                </div>
                
                <div className="box">
                    
                    <PokeCard pokemonName="charizard"/>
                
                </div>
                
                <div className="box">

                    <PokeCard pokemonName="pikachu"/>
                
                </div>
                
                <div className="box">

                    <PokeCard pokemonName="caterpie"/>
                
                </div>
                
                <div className="box">

                    <PokeCard pokemonName="gastly"/>
                
                </div>
                
                <div className="box">

                    <PokeCard pokemonName="dewgong"/>
                
                </div>
                
                <div className="box">

                    <PokeCard pokemonName="castform-snowy"/>
                
                </div>
                
                <div className="box">

                    <PokeCard pokemonName="machop"/>
                
                </div>

                <div className="box">

                    <PokeCard pokemonName="tornadus-incarnate"/>

                </div>

                <div className="box">

                    <PokeCard pokemonName="ekans"/>

                </div>

                <div className="box">

                    <PokeCard pokemonName="sandshrew"/>

                </div>

                <div className="box">

                    <PokeCard pokemonName="geodude"/>

                </div>

                <div className="box">

                    <PokeCard pokemonName="steelix"/>

                </div>

                <div className="box">

                    <PokeCard pokemonName="abra"/>

                </div>

                <div className="box">

                    <PokeCard pokemonName="dratini"/>

                </div>

                <div className="box">

                    <PokeCard pokemonName="umbreon"/>

                </div>

                <div className="box">

                    <PokeCard pokemonName="clefairy"/>

                </div>



               
               
              
                
            </div>
        
         
        </Layout>
    )
}
