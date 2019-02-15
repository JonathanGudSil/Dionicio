import React from "react";

import {
    View,
    Text,
}
from "react-native";

const holamundo = (props) => {

    const { nombre } = (props);

    return (
        <View>
            <text> Hola {nombre}! </text>
        </View> 
    );
}

export default holamundo;