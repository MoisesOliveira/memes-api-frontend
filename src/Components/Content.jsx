import { Component } from "react";
import { useRef } from "react";
import './styles/Search.css';
import SearchForm from "./Subcomponents/SearchForm";
import Player from "./Subcomponents/Play";
const axios = require('axios');


class Search extends Component{
    constructor(props){
        super(props);
       this.state = {}
    }

    							  

    render(){
        return(
            <div>
                <div class="min-h-screen flex flex-col">
          <header class="first">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
            <a class="navbar-brand" href="">MEME'S GEN</a>
            
            <div class="navbar-nav justify-content-end" id="">
                <div class="navbar-nav">
                     <Player />
                 </div>
                 </div>
            </div>
        </nav>
        </header>
            </div>
            <SearchForm />
        </div>        
                
        )
        
    }
}
export default Search;