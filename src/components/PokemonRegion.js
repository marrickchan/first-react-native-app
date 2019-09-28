import React from 'react';
import { Image, Text } from 'react-native';

class PokemonRegion extends React.Component {
    constructor(props){
        super(props);
    }

    kantoArr = ['001', '002', '003', '004', '005', '006', '007', '008', '009'];
    johtoArr = ['155', '156', '157', '158', '159', '160', '161', '162', '163']

    renderPokemonImages(region) {
        switch (region) {
            case 'Kanto':
                return (
                    this.kantoArr.map(pokedexNum => (
                        <Image
                            style={{width: 150, height: 150, resizeMode: 'contain' }}
                            source={{uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokedexNum + '.png' }}
                        />
                    ))
                )
            case 'Johto':
                return (
                    this.johtoArr.map(pokedexNum => (
                        <Image
                            style={{width: 150, height: 150, resizeMode: 'contain' }}
                            source={{uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokedexNum + '.png' }}
                        />
                    ))
                )
        }
    }

    render() {
        return (
            <React.Fragment>
                <Text>{this.props.title + "\n\n" }</Text>
                {this.renderPokemonImages(this.props.region)}
            </React.Fragment>
        )
    }
}

export default PokemonRegion;