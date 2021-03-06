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

    styles = {
        modalParentView: {
            backgroundColor: 'rgba(128,128,128,0.4)'  
        },
        modalView: {
            width: '78%',
            height: '60%',
            padding: 15,
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            backgroundColor: 'rgba(255,255,255,1)',
            borderColor: 'blue'
        }
    }

    pokedexArr = [];

    toggleModal(visible, pokedexNum) {
        this.state.modalData.pokedexNumber = pokedexNum;
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
                    onPress={ () => this.toggleModal(!this.state.modalVisible, pokedexNum) } >
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
                {/* Pokemon Info Screen */}
                <Modal 
                    style = { this.styles.modalParentView }
                    animationType = { "slide" }
                    transparent = { true }
                    visible = { this.state.modalVisible }
                    onPress = {() => {
                        this.toggleModal(!this.state.modalVisible)}}>
                    
                    {/*Pokemon Information */}
                    <TouchableHighlight onPress = {() => {
                        this.toggleModal(!this.state.modalVisible)}}
                        style = { this.styles.modalView } >
                        <View>
                            <Text>{ 'Pokemon Name: ' +  this.state.modalData.pokemonName } </Text>
                            <Text>{ 'Pokedex Number: ' +  this.state.modalData.pokedexNumber } </Text>
                            <Text>{ 'Attack Stat: ' +  this.state.modalData.atkStat } </Text>
                            <Text>{ 'Defense Stat: ' +  this.state.modalData.defStat } </Text>
                            <Text>{ 'HP Stat: ' +  this.state.modalData.hpStat } </Text>
                        </View>                    
                    </TouchableHighlight>
                </Modal>

                {/* Pokemon List */}
                {this.fillArray(this.props.region)}
                {this.renderPokemonImages()}
            </React.Fragment>
        )
    }
}

export default PokemonRegion; 