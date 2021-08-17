import React, { Component } from 'react';
import "./Instructions.css";

/* Instructions - This Class takes care of user input, validates and passes it for further process*/
/* @desc validate => This function validates user Input */
function validate(username){
    const errors = [];
    if(username === undefined || username.length === 0){
        errors.push("Name can not be empty. Please try Again!");
    }
    else if(validateForName(username) === false){
        errors.push("No such character found in the STAR WARS. Please try again!");
    }
    return errors;
}

/* @desc validateForName => This function verifies for character Name and  */
function validateForName(username){
    var nameValidationTestFlag = false;
    const nameArray = [
        {
          "id": 1,
          "name": "Luke Skywalker"
        },
        {
          "id": 2,
          "name": "C-3PO"
        },
        {
          "id": 3,
          "name": "R2-D2"
        },
        {
          "id": 4,
          "name": "Darth Vader"
        },
        {
          "id": 5,
          "name": "Leia Organa"
        },
        {
          "id": 6,
          "name": "Owen Lars"
        },
        {
          "id": 7,
          "name": "Beru Whitesun lars"
        },
        {
          "id": 8,
          "name": "R5-D4"
        },
        {
          "id": 9,
          "name": "Biggs Darklighter"
        },
        {
          "id": 10,
          "name": "Obi-Wan Kenobi"
        },
        {
          "id": 11,
          "name": "Anakin Skywalker"
        },
        {
          "id": 12,
          "name": "Wilhuff Tarkin"
        },
        {
          "id": 13,
          "name": "Chewbacca"
        },
        {
          "id": 14,
          "name": "Han Solo"
        },
        {
          "id": 15,
          "name": "Greedo"
        },
        {
          "id": 16,
          "name": "Jabba Desilijic Tiure"
        },
        {
          "id": 17,
          "name": "Wedge Antilles"
        },
        {
          "id": 18,
          "name": "Jek Tono Porkins"
        },
        {
          "id": 19,
          "name": "Yoda"
        },
        {
          "id": 20,
          "name": "Palpatine"
        },
        {
          "id": 21,
          "name": "Boba Fett"
        },
        {
          "id": 22,
          "name": "IG-88"
        },
        {
          "id": 23,
          "name": "Bossk"
        },
        {
          "id": 24,
          "name": "Lando Calrissian"
        },
        {
          "id": 25,
          "name": "Lobot"
        },
        {
          "id": 26,
          "name": "Ackbar"
        },
        {
          "id": 27,
          "name": "Mon Mothma"
        },
        {
          "id": 28,
          "name": "Arvel Crynyd"
        },
        {
          "id": 29,
          "name": "Wicket Systri Warrick"
        },
        {
          "id": 30,
          "name": "Nien Nunb"
        },
        {
          "id": 31,
          "name": "Qui-Gon Jinn"
        },
        {
          "id": 32,
          "name": "Nute Gunray"
        },
        {
          "id": 33,
          "name": "Finis Valorum"
        },
        {
          "id": 34,
          "name": "Jar Jar Binks"
        },
        {
          "id": 35,
          "name": "Roos Tarpals"
        },
        {
          "id": 36,
          "name": "Rugor Nass"
        },
        {
          "id": 37,
          "name": "Ric Olié"
        },
        {
          "id": 38,
          "name": "Watto"
        },
        {
          "id": 39,
          "name": "Sebulba"
        },
        {
          "id": 40,
          "name": "Quarsh Panaka"
        },
        {
          "id": 41,
          "name": "Shmi Skywalker"
        },
        {
          "id": 42,
          "name": "Darth Maul"
        },
        {
          "id": 43,
          "name": "Bib Fortuna"
        },
        {
          "id": 44,
          "name": "Ayla Secura"
        },
        {
          "id": 45,
          "name": "Dud Bolt"
        },
        {
          "id": 46,
          "name": "Gasgano"
        },
        {
          "id": 47,
          "name": "Ben Quadinaros"
        },
        {
          "id": 48,
          "name": "Mace Windu"
        },
        {
          "id": 49,
          "name": "Ki-Adi-Mundi"
        },
        {
          "id": 50,
          "name": "Kit Fisto"
        },
        {
          "id": 51,
          "name": "Eeth Koth"
        },
        {
          "id": 52,
          "name": "Adi Gallia"
        },
        {
          "id": 53,
          "name": "Saesee Tiin"
        },
        {
          "id": 54,
          "name": "Yarael Poof"
        },
        {
          "id": 55,
          "name": "Plo Koon"
        },
        {
          "id": 56,
          "name": "Mas Amedda"
        },
        {
          "id": 57,
          "name": "Gregar Typho"
        },
        {
          "id": 58,
          "name": "Cordé"
        },
        {
          "id": 59,
          "name": "Cliegg Lars"
        },
        {
          "id": 60,
          "name": "Poggle the Lesser"
        },
        {
          "id": 61,
          "name": "Luminara Unduli"
        },
        {
          "id": 62,
          "name": "Barriss Offee"
        },
        {
          "id": 63,
          "name": "Dormé"
        },
        {
          "id": 64,
          "name": "Dooku"
        },
        {
          "id": 65,
          "name": "Bail Prestor Organa"
        },
        {
          "id": 66,
          "name": "Jango Fett"
        },
        {
          "id": 67,
          "name": "Zam Wesell"
        },
        {
          "id": 68,
          "name": "Dexter Jettster"
        },
        {
          "id": 69,
          "name": "Lama Su"
        },
        {
          "id": 70,
          "name": "Taun We"
        },
        {
          "id": 71,
          "name": "Jocasta Nu"
        },
        {
          "id": 72,
          "name": "Ratts Tyerell"
        },
        {
          "id": 73,
          "name": "R4-P17"
        },
        {
          "id": 74,
          "name": "Wat Tambor"
        },
        {
          "id": 75,
          "name": "San Hill"
        },
        {
          "id": 76,
          "name": "Shaak Ti"
        },
        {
          "id": 77,
          "name": "Grievous"
        },
        {
          "id": 78,
          "name": "Tarfful"
        },
        {
          "id": 79,
          "name": "Raymus Antilles"
        },
        {
          "id": 80,
          "name": "Sly Moore"
        },
        {
          "id": 81,
          "name": "Tion Medon"
        },
        {
          "id": 82,
          "name": "Finn"
        },
        {
          "id": 83,
          "name": "Rey"
        },
        {
          "id": 84,
          "name": "Poe Dameron"
        },
        {
          "id": 85,
          "name": "BB8"
        },
        {
          "id": 86,
          "name": "Captain Phasma"
        },
        {
          "id": 87,
          "name": "Padmé Amidala"
        }
      ];

      for( let i=0; i< nameArray.length; i++){
          if(username === nameArray[i].name || ((username).localeCompare((nameArray[i].name), undefined, {sensitivity: 'accent'}) === 0) || ((nameArray[i].name).toLowerCase()).includes(username.toLowerCase())){
            nameValidationTestFlag = true;
          }
      }
      return nameValidationTestFlag;
}

class Instructions extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', errors: []};
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
    // Hide Default Template on submit
        window.$showDefault = false;
        const errors = validate(this.state.username);
        if(errors.length > 0){
            this.setState({errors: errors});
            return;
        }else{
            this.setState({errors: []});
        }
        this.sendData(event);
        this.setState({username:''});
    }
      
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
        
    }

    sendData = (event) =>{
        this.setState({username: event.target.value});
        this.props.parentCallback(this.state.username);
    }

    render() {
        const { errors } = this.state;
        return (       
          <div className="container">  
            <div className="formHolder">
                        <form onSubmit={this.mySubmitHandler}>
                            <input
                             type='text'
                             onChange={this.myChangeHandler}
                             className="searchText"
                             value={this.state.username} placeholder="Favorite character name"/>
                            <button type='submit' className="searchBtn">Search</button>
                        </form>
            </div>     
            <div className="errorOutputHolder">{errors.map(error => (<p key={error}>Ooops! {error}</p>))}</div> 
          </div>               
        );
    }
}

export default Instructions;