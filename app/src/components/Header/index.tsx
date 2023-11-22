import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { gstyles, colors } from "../../theme";
import { Feather } from '@expo/vector-icons';

type Props = {
    openDrawer: Function;
}

export function Header({openDrawer}: Props) {
    return(
    <View style={gstyles.header}>
        <TouchableOpacity onPress={() => openDrawer()}><Feather name="menu" size={40} color={colors.cyan} /></TouchableOpacity>
        <Image source={require("../../../assets/logo64.png")} style={gstyles.headerLogo} />
    </View>
    )
}
