import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PokemonRegion from './src/components/PokemonRegion';

export default class Pokedex extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ flex: 0.15 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={this.styles.appTitle}>Pokedex</Text>
          </View>
        </View>

        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={ this.styles.scrollView } >
          
          {/* Pokemon from Kanto Region */}
          <Text style={ this.styles.sectionTitle }> {'\nKanto Pokemon\n'} </Text>
          <View style={ this.styles.pokemonView }>
            <PokemonRegion region='Kanto'/>
          </View>
          {/* Pokemon from Johto Region */}
          <Text style={ this.styles.sectionTitle }> {'\nJohto Pokemon\n'} </Text>
          <View style={ this.styles.pokemonView }>
            <PokemonRegion region='Johto'/>
          </View>

        </ScrollView>
      </React.Fragment>
    );
  }

  styles = {
    /* Text */
    appTitle: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: 'blue'
    },

    /* Views */
    scrollView: {
      marginBottom: 50,
      flex: 1
    },
    pokemonView: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }
}