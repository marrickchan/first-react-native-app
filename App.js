import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PokemonRegion from './src/components/PokemonRegion';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ flex: 0.25 }}>
          <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
            <Text style={this.styles.appTitle}>I guess this will be a Pokemon App!</Text>
          </View>
        </View>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ flex: 2 }} >
          
          <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
            <PokemonRegion title="Kanto Pokemon" region="Kanto"/>
            <Text>{"\n\n"}</Text>
          </View>
          <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
            <PokemonRegion title="Johto Pokemon" region="Johto"/>
          </View>

        </ScrollView>
      </React.Fragment>
    );
  }

  styles = {
    appTitle: {
      fontSize: 24
    }
  }
}