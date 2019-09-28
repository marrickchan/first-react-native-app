import React, { Component } from 'react';
import { Image } from 'react-native';

const Johto = (): Node => (
    <Image
        style={{width: 150, height: 150, resizeMode: 'contain' }}
        source={{uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png' }}
    />
);

export default Johto;