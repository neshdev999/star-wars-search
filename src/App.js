// import React from "react";
import React,{Component} from 'react';
import "./normalize.css";
import "./App.css";
import Header from './Header.js';
import Instructions from './Instructions.js';
import Planet from './Planet.js';
import characterImages from './characterImages.js';
import FilmsImageCarousel from './FilmsImageCarousel.js';
import Footer from './Footer.js';

/** 
 * @desc App.js => This Application holds containers and functions for Header, Footer and main content of the Application. 
 * @author neshdev
 * @required Header.js, Instructions.js, Planet.js, FilmsImageCarousel.js, Footer.js, App.css
 **/

/* Global Variables */
window.$showDefault = true; // On page load default view check
window.$fetchResultsLengthFlag = 0;
window.$fetchCharacterName = '';
window.$fetchPlanetURL = '';
window.$outputResultsCheckFlag = false;
window.$showLoadingIndicator = false;

/* @desc LoadCharacterIntialWImage => This function will load image for character */
function LoadCharacterIntialWImage(props){
var holder = {};
holder.src = characterImages[5].src;

if(window.$fetchCharacterName !== undefined){
     for(let i=0; i<characterImages.length; i++){
       if(characterImages[i].title === window.$fetchCharacterName){
        holder.src = characterImages[i].src;
        break;
       }
     }     
}
  return <img src={holder.src} alt="Star Wars Character"/>;
}

/* @desc FetchingStarShipsUrl => This function fetches url which is received in form of initial fetchPeople response data and gather starship data from api */
function FetchingStarShipsUrl(props){
  var starShipUrlArray = [];
  starShipUrlArray = props.urlArray;
  var starShipRealArray = [];
  if(starShipUrlArray.length === 0 || starShipUrlArray === "No results to display"){
    starShipRealArray.push("No data");
    return(<ul className="StarshipsUlList"><li>No Starships</li></ul>);
  }else{
    for(let i=0; i<starShipUrlArray.length;i++){
      starShipRealArray.push(starShipUrlArray[i]);
    }
    return (
      <ul className="StarshipsUlList">
        {starShipRealArray.map((starship , index) => (
          <li key={index}><Planet url={starship} /></li>
        ))}
      </ul>
    );
  }
}

function FetchingHomeWorldUrl(props){
  var homeWorldUrl = props.url;
  if(homeWorldUrl === "No results to display"){
     return(<div>No HomeWorld</div>);
  }else{
    return (      
        <Planet url={homeWorldUrl} />        
    );
  }
}

/* @desc FetchingVehiclesUrl => This function fetches url which is received in form of initial fetchPeople response data and gather vehicles data from api */

function FetchingVehiclesUrl(props){
  var vehiclesUrlArray = [];
  vehiclesUrlArray = props.urlArray;
  var vehiclesRealArray = [];
  if(vehiclesUrlArray.length === 0 || vehiclesUrlArray === "No results to display"){
    vehiclesRealArray.push("No data");
    return(<ul className="VehiclesUlList"><li>No Vehicles</li></ul>);
  }else{
  for(let i=0; i<vehiclesUrlArray.length;i++){
    vehiclesRealArray.push(vehiclesUrlArray[i]);
  }
  return (
    <ul className="VehiclesUlList">
      {vehiclesRealArray.map((vehicle, index) => (
        <li key={index}><Planet url={vehicle} /></li>
      ))}
    </ul>
  );
      }
}


/* @desc FetchingSpeciesUrl=> This function fetches url which is received in form of initial fetchPeople response data and gather species data from api */

function FetchingSpeciesUrl(props){
  var speciesUrlArray = [];
  speciesUrlArray = props.urlArray;
  var speciesRealArray = [];  
  if(speciesUrlArray.length === 0 || speciesUrlArray === "No results to display"){
    speciesRealArray.push("No data");
    return(<ul className="SpeciesUlList"><li>Species content is not available</li></ul>);
  }else{
  for(let i=0; i<speciesUrlArray.length;i++){
    speciesRealArray.push(speciesUrlArray[i]);
  }
  return (
    <ul className="SpeciesUlList">
      {speciesRealArray.map((specie, index) => (
        <li key={index}><Planet url={specie} /></li>
      ))}
    </ul>
  );
      }
}

/* @desc FetchingFilmsUrl=> This function gathers films data from intial fetchPeople api response data and  prepares output for Films Section */

function FetchingFilmsUrl(props){
  var filmNameStorageArray = [];
  var filmPropArray = props.urlArray;
  if(filmPropArray.length === 0 || filmPropArray === "No results to display"){
    filmNameStorageArray.push("No data");
    return(<ul className="FilmsUlList"><li>No Films</li></ul>);
  }else{

   for(let i=0; i<filmPropArray.length; i++){     
    if(filmPropArray[i] === "http://swapi.dev/api/films/1/"){
        filmNameStorageArray.push("A New Hope");
    }else if(filmPropArray[i] === "http://swapi.dev/api/films/2/"){
        filmNameStorageArray.push("The Empire Strikes Back");
    }else if(filmPropArray[i] === "http://swapi.dev/api/films/3/"){
        filmNameStorageArray.push("Return of the Jedi");
    }else if(filmPropArray[i] === "http://swapi.dev/api/films/4/"){
        filmNameStorageArray.push("The Phantom Menace");
    }else if(filmPropArray[i] === "http://swapi.dev/api/films/5/"){
        filmNameStorageArray.push("Attack of the Clones");
    }else if(filmPropArray[i] === "http://swapi.dev/api/films/6/"){
        filmNameStorageArray.push("Revenge of the Sith");
    }
    }   
    return (
      <ul className="FilmsUlList">
        {filmNameStorageArray.map((film, index) => (
          <li key={index}>{film}</li>
        ))}
      </ul>
    );
        }
}


/* @desc fetchPeople=> This function fetches swapi data from The Star Wars API https://swapi.dev/ */

async function fetchPeople(search, page = 1) {}
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { username: ''}; 
  }

  state = { message: "" }

getCallBackDataFromInstructions = (childData) => {
      this.setState({message: childData});
      this.setState({username: childData});
      if(childData !== undefined){
        this.fetchPeople(childData);
      }else{
        this.fetchPeople("Luke Skywalker");
      }
}

  fetchPeople = async (search, page = 1) => {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${search}&page=${page}`
    );
    const { results, next } = await response.json();
    if(results === undefined || results.length === 0){
        console.log("Api req throttled or Api is not available now");
        window.$outputResultsCheckFlag = true;
        document.querySelector(".currentStack").style.display = "none";
        console.log(next); 
    }else{
      window.$fetchResultsLengthFlag = results.length;
      window.$fetchCharacterName = results[0].name;
      // if (next) {
      //   const next = await fetchPeople(search, page + 1);
      // } else {
      //     console.log("");
      // }  
      this.setState((this.state.results = [...results]));
    }
  };

  render() {
    return (
      <div>

      {/* Header Call*/}
      <Header />

      {/* Search Input Call*/}
      <Instructions parentCallback = {this.getCallBackDataFromInstructions}/>

      {/* Display main default content */}
      <div style={{ display: window.$showDefault ? "block" : "none"}}>
        <div className="characterImageContainer">
          <div className="characterImageItem">
            <img src="/images/characterImages/Luke_SkyWalker.jpg" alt="Luke SkyWalker character in Black"></img>
          </div>
        </div>

        <div className="characterNameHolder">
          <p>Luke SkyWalker</p>
        </div>
        <div className="characterPhysicalContentContainer">
          <div className="DescContainer">
            <div className="DescHeader">Physical Description</div>
          </div>

          <div className="characterPhysicalHeightContentContainer">
            <div className="characterPhysicalHeightContent">
              <span className="heightTag">Height</span>
              <span className="heightValue">1.72</span>
              <span className="heightUnit">meters</span>
            </div>
          </div>

          <div className="characterPhysicalMassContentContainer">
            <div className="characterPhysicalMassContent">
              <span className="massTag">Mass</span>
              <span className="massValue">77</span>
              <span className="massUnit">kilograms</span>
            </div>
          </div>

          <div className="characterPhysicalHairContentContainer">
            <div className="characterPhysicalHairContent">
              <span className="hairTag">Hair Color</span>
              <span className="hairValue">blond</span>
            </div>
          </div>

          <div className="characterPhysicalSkinContentContainer">
            <div className="characterPhysicalSkinContent">
              <span className="skinTag">Skin Color</span>
              <span className="skinValue">fair</span>
            </div>
          </div>

          <div className="characterPhysicalEyeContentContainer">
            <div className="characterPhysicalEyeContent">
              <span className="eyeTag">Eye Color</span>
              <span className="eyeValue">blue</span>
            </div>
          </div>

          <div className="characterPhysicalBirthYearContentContainer">
            <div className="characterPhysicalBirthYearContent">
              <span className="birthYearTag">Birth Year</span>
              <span className="birthYearValue">19BBY</span>
            </div>
          </div>

          <div className="characterPhysicalGenderContentContainer">
            <div className="characterPhysicalGenderContent">
              <span className="genderTag">Gender</span>
              <span className="genderValue">Male</span>
            </div>
          </div>
        </div>

        <div className="DescContainer">
            <div className="DescHeader">Home World</div>
        </div>

        <div className="homeWorldImageContainer">
          <div className="homeWorldImageContent">
            <img src="/images/homeWorld/tatooine.jpg" alt="tatooine planet"></img>
          </div>
        </div>

        <div className="homeWorldNameHolder">
          <p>Tatooine</p>
        </div>

        <div className="DescContainer">
            <div className="DescHeader">Films</div>
        </div>

        <br />
        <div className="carouselContainer">
          <FilmsImageCarousel />
        </div>
        <br />

        <div className="DescContainer">
            <div className="DescHeader">Species</div>
        </div>

        <div className="speciesNameHolder">
          <p>Human</p>
        </div>

        <div className="DescContainer">
            <div className="DescHeader">Vehicles</div>
        </div>

        <div className="vehiclesImageContainer">
          <div className="vehiclesImageHolder">
          <img src="/images/vehicles/Snowspeeder.jpg" alt="Snowspeeder"></img>
          <img src="/images/vehicles/ImperialSpeederBike.jpg" alt="Imperial Speeder Bike"></img>
          </div>
        </div>

        <div className="vehiclesNameHolder">
          <p>Snowspeeder</p>
          <p>Imperial Speeder Bike</p>
        </div>

        <div className="DescContainer">
            <div className="DescHeader">Starships</div>
        </div>

        <div className="starShipsNameHolder">
          <p>X-wing</p>
          <p>Imperial shuttle</p>
        </div>
        <br />
      </div>
      {/* Display main default content ends */}

      {/* Display main content */}
      <div className="currentStack" style={{ display: (window.$fetchResultsLengthFlag === 0 )  ? "none" : "block"}}>      
        <div style={{ display: window.$showDefault ? "none" : "block"}}>

      {/* Character Image*/}
          <div className="characterImageContainer">
            <div className="characterImageItem">
              <LoadCharacterIntialWImage name={this.state.message} />
            </div>
          </div>

      {/* Character Name */}
          <div className="characterNameHolder">
            <p>{this.state.results && this.state.results[0].name
            ? this.state.results[0].name
            : "No results to display"}</p>
          </div>

      {/* Character Physical Description*/}
          <div className="characterPhysicalContentContainer">
            <div className="DescContainer">
              <div className="DescHeader">Physical Description</div>
            </div>

            <div className="characterPhysicalHeightContentContainer">
              <div className="characterPhysicalHeightContent">
                <span className="heightTag">Height</span>
                <span className="heightValue">{this.state.results && this.state.results[0].height ? this.state.results[0].height : "No results to display"}</span>
                <span className="heightUnit">centimeters</span>
              </div>
            </div>

            <div className="characterPhysicalMassContentContainer">
              <div className="characterPhysicalMassContent">
                <span className="massTag">Mass</span>
                <span className="massValue">{this.state.results && this.state.results[0].mass ? this.state.results[0].mass : "No results to display"}</span>
                <span className="massUnit">kilograms</span>
              </div>
            </div>

            <div className="characterPhysicalHairContentContainer">
              <div className="characterPhysicalHairContent">
                <span className="hairTag">Hair Color</span>
                <span className="hairValue">{this.state.results && this.state.results[0].hair_color ? this.state.results[0].hair_color : "No results to display"}</span>
              </div>
            </div>

            <div className="characterPhysicalSkinContentContainer">
              <div className="characterPhysicalSkinContent">
                <span className="skinTag">Skin Color</span>
                <span className="skinValue">{this.state.results && this.state.results[0].skin_color ? this.state.results[0].skin_color : "No results to display"}</span>
              </div>
            </div>

            <div className="characterPhysicalEyeContentContainer">
              <div className="characterPhysicalEyeContent">
                <span className="eyeTag">Eye Color</span>
                <span className="eyeValue">{this.state.results && this.state.results[0].eye_color ? this.state.results[0].eye_color : "No results to display"}</span>
              </div>
            </div>

            <div className="characterPhysicalBirthYearContentContainer">
              <div className="characterPhysicalBirthYearContent">
                <span className="birthYearTag">Birth Year</span>
                <span className="birthYearValue">{this.state.results && this.state.results[0].birth_year ? this.state.results[0].birth_year : "No results to display"}</span>
              </div>
            </div>

            <div className="characterPhysicalGenderContentContainer">
              <div className="characterPhysicalGenderContent">
                <span className="genderTag">Gender</span>
                <span className="genderValue">{this.state.results && this.state.results[0].gender ? this.state.results[0].gender : "No results to display"}</span>
              </div>
            </div>
          </div>

      {/* Character Home World*/}
          <div className="DescContainer">
            <div className="DescHeader">Home World</div>
          </div>
          <div className="homeWorldNameHolder">
            <FetchingHomeWorldUrl url= {this.state.results && this.state.results[0].homeworld ? this.state.results[0].homeworld : "No results to display"} />
          </div> 

      {/* Character Films*/}
          <div className="DescContainer">
            <div className="DescHeader">Films</div>
          </div>

          <div className="CommonUlListContainer">
            <FetchingFilmsUrl urlArray = {this.state.results && this.state.results[0].films ? this.state.results[0].films : "No results to display"}/>
          </div>

      {/* Character Species */}
          <div className="DescContainer">
            <div className="DescHeader">Species</div>
          </div>

          <div className="speciesNameHolder">
            <div className="CommonUlListContainer">
              <FetchingSpeciesUrl urlArray={this.state.results && this.state.results[0].species ? this.state.results[0].species : "No results to display"}/>
            </div>
          </div>

      {/* Character Vehicles */}
          <div className="DescContainer">
            <div className="DescHeader">Vehicles</div>
          </div>

          <div className="vehiclesNameHolder">
            <FetchingVehiclesUrl urlArray={this.state.results && this.state.results[0].vehicles ? this.state.results[0].vehicles : "No results to display"}/>
          </div>

      {/* Character Starships*/}
          <div className="DescContainer">
            <div className="DescHeader">Starships</div>
          </div>

          <div className="starShipsNameHolder">
            <FetchingStarShipsUrl urlArray={this.state.results && this.state.results[0].starships ? this.state.results[0].starships : "No results to display"}/>
          </div>
        </div>
      </div>
      {/* Display main content ends */}         

      {/* Display Loading Indicator with content starts */}
      <div className="loadingIndicator" style={{ display: window.$showDefault ? "none" : "block"}}>
        <div  style={{ display: (window.$fetchResultsLengthFlag === 0 )  ? "block" : "none"}}>
          <div className="loadingContainer">
            <span className="loader loaderWithAnimation"></span>
            <span>{this.state.results && this.state.results[0].name ? this.state.results[0].name : "Loading data..."}</span>
            <span className="loader loaderWithAnimation"></span>
          </div>
        </div> 
          {this.state.results && this.state.results[0].name ? this.state.results[0].name : "Data is not available"}  
      </div>
      {/* Display Loading Indicator with content ends */}

      {/* Display Footer */}
        <Footer />
      </div>
    );
  }
}



export default App;