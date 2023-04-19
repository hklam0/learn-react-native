
import React, {useState, useEffect} from 'react';

import {
  Text,
  View,
  StyleSheet,
  Button,Image, ScrollView, TextInput
} from 'react-native';

import Counter from './components/counter';

const style = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

const Greeting = (props) => {
  return (
    <View>
      <Text>Hello {props.name!}</Text>
    </View>
  )
}

const LotsOfGreetings = () => {
  return (
    <View>
      <Greeting name="Jen"/>
      <Greeting name="Ash"/>
      <Greeting name="Ally"/>
    </View>
  )
}



function App(): JSX.Element {

  const [pokemon, setPokemon] = useState("");
  const [pokemonIsSelected, setPokemonIsSelected] = useState(false)
  const [selectedPokemonURL, setSelectedPokemonURL] = useState("")
  const [pokemonDetail, setPokemonDetail] = useState("")
  
  useEffect(() => {
    fetchPokemon()
  },[])


  const fetchPokemon = () => {
    const request = fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => setPokemon(data.results))
  }

  const fetchPokemonDetail = () => {
    if (pokemonIsSelected) {const request = fetch(selectedPokemonURL)
      .then(response => response.json())
      .then(data => setPokemonDetail(data))
    }
    
  }

  const ShowPokemonDetail = () => {
    if (pokemonDetail) { return (
      
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source={{uri: pokemonDetail.sprites.front_default}} style={{width: 250, height: 250}}/>
        <Text>Soecies: {pokemonDetail.species.name}</Text>
        <Text>{pokemonDetail.stats[0].stat.name} : {pokemonDetail.stats[0].base_stat}</Text>
        <Text>{pokemonDetail.stats[1].stat.name} : {pokemonDetail.stats[1].base_stat}</Text>
        <Text>{pokemonDetail.stats[2].stat.name} : {pokemonDetail.stats[2].base_stat}</Text>
        <Text>{pokemonDetail.stats[3].stat.name} : {pokemonDetail.stats[3].base_stat}</Text>
        <Text>{pokemonDetail.stats[4].stat.name} : {pokemonDetail.stats[4].base_stat}</Text>
        <Text>{pokemonDetail.stats[5].stat.name} : {pokemonDetail.stats[5].base_stat}</Text>
        <Text>Weight : {pokemonDetail.weight}</Text>

        <Text> </Text>
      </View>
      
    )}
   
  }

  const ButtonList = ({pokemons}) => {
    
    const buttonListItem = pokemons.map((pokemon, index) => {
      return (<View>
        <Button onPress={() => {
        setPokemonIsSelected(true)
        setSelectedPokemonURL(pokemon.url)
        fetchPokemonDetail()
      }} title={pokemon.name}/>
      </View>)
    })
    
    return (
      <View>
        {buttonListItem}
      </View>
    )
  }

  return (
    
      <ScrollView>
        <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               

               {/* {pokemonIsSelected ? null : <Text>Hello, world!</Text>} */}
              {/* {pokemonIsSelected? null: <LotsOfGreetings/>} */}
              
              
              <Image source={{uri: 'https://pokeapi.co/static/pokeapi_256.3fa72200.png', }}
                style={{width: 300, height: 120}}
              />
            {/* <Counter/> */}
            {/* <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              defaultValue="Try to type in me!"
            /> */}
            <ShowPokemonDetail/>
            <Text>Choose your Pokemon!</Text>
          {pokemon ? <ButtonList pokemons={pokemon}/> : null}
        </View>
      
        </ScrollView>
        
        
      


  );
}

export default App;
