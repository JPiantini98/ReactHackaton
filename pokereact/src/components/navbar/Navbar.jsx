import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";


export const Navbar = () => {
    let history = useHistory();

    const pokemonSearchHandler = () => {
        let userInput = document.querySelector("#pokemonSearchInput").value;
        userInput = userInput.trim().toLowerCase();

        if (userInput) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            .then((response) => {
                if (response.data.id < 810) {   // Excludes generation 8 and alternate forms
                    history.push("/pokemon-detail/" + userInput, {params: response.data});
                } else {
                    throw { message: "Invalid ID"};
                }
            })
            .catch((error) => {
                history.push("/home");
            });
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <Link className="navbar-brand" to="/">Hackadex</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites">Favorites</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <input id="pokemonSearchInput" className="form-control mr-sm-2" type="text" placeholder="Search a Pokemon" aria-label="Search" />
                    <button onClick={() => {pokemonSearchHandler()}} className="btn btn-outline-success my-2 my-sm-0">Search</button>
                </div>
            </div>
        </nav>

    )
}
