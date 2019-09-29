import React from 'react';
import { Image, Modal, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

class PokemonRegion extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
        modalVisible: false,
        modalData: {
            pokemonName: '',
            pokedexNumber: '',
            atkStat: '',
            defStat: '',
            hpStat: ''
        }
    }

    pokedexArr = [];

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
     }

    fillArray(region) {
        switch (region) {
            case 'Kanto':
                this.pokedexArr = [];
                for(var i = 1; i <= 151; i++){
                    var itempStr = '' + i;
                    if(itempStr.length == 1){
                        this.pokedexArr.push('00' + itempStr);
                    } else if (itempStr.length == 2){
                        this.pokedexArr.push('0' + itempStr);
                    } else if (itempStr.length == 3){
                        this.pokedexArr.push(itempStr);
                    }
                }
                return;
            case 'Johto':
                this.pokedexArr = [];
                for(var i = 152; i <= 251; i++){
                    this.pokedexArr.push(i + '');
                }
                return;
        }
    }

    renderPokemonImages() {
        return (
            this.pokedexArr.map(pokedexNum => ( 
                <TouchableOpacity
                    key={ 'poke' + pokedexNum }
                    onPress={ () => this.toggleModal(!this.state.modalVisible) } >
                    <Image
                        style={{width: 100, height: 100, resizeMode: 'contain' }}
                        resizeMethod={ 'resize' }
                        source={{uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokedexNum + '.png' }}
                    />
                </TouchableOpacity>
            ))
        )
    }

    render() {
        return (
            <React.Fragment>
                <Modal 
                    animationType = {"slide"}
                    transparent = {false}
                    visible = {this.state.modalVisible}>
                    <View>
                        <Text>Modal is open!</Text>
                        <TouchableHighlight onPress = {() => {
                            this.toggleModal(!this.state.modalVisible)}}>
                            <Text>Close Modal</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
                {this.fillArray(this.props.region)}
                {this.renderPokemonImages()}
            </React.Fragment>
        )
    }
}

export default PokemonRegion;