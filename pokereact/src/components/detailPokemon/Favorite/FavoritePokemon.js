import React, { Component} from 'react';
import './FavoritePokemon.css';
import {AiFillStar} from "react-icons/ai"; //Clicked Fav button icon


export default class FavoritePokemon extends Component{
    state = {
        btnClicked: false,  //variable to know if the button was clicked or not
    }

    //Add to local storage method and btnClicked value
    addFavPokemon = () => {
        if(this.state.btnClicked === false){
            this.setState({ 
                btnClicked: true,
            })
            localStorage.setItem(this.props.id, this.props.name);

        }else{
            this.setState({ 
                btnClicked: false,
            }) 
            localStorage.removeItem(this.props.id);
        }     
    }

    render() {
        //Favorite button bootstrap customization
        let classes;
        classes = localStorage.getItem(this.props.id) ? "btn btn-warning" : "btn btn-outline-dark";

        //Actual renderization of the button
        return(
            <div id = "favBtn" >
                <button id="favBtn" className={ classes } onClick = {this.addFavPokemon}>{<AiFillStar/>}</button>
            </div>
        );
    }

}
