import React, { useState } from "react";
import styled from "styled-components/native";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    AntDesign,
} from "@expo/vector-icons";

const Container = styled.View`
    background-color: #820ad1;
    z-index: 99;
    height: 90px;
    margin-vertical: 10px;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: 10px;
`;

const Button = styled.TouchableOpacity`
    width: 22%;
    background-color: #9128d7;
    flex-direction: column;
    padding: 5px;
    justify-content: space-between;
    border-radius: 2px;
`;
const ButtonText = styled.Text`
    color: #ffffff;
    font-size: 14px;
`;

export default function BottomBar() {
    return (
        <Container>
            <Button onPress={() => {}}>
                <MaterialCommunityIcons
                    name="clover"
                    size={28}
                    color="#FFFFFF"
                />
                <ButtonText>Pix</ButtonText>
            </Button>
            <Button onPress={() => {}}>
                <MaterialIcons name="money" size={28} color="#FFFFFF" />
                <ButtonText>Pagar</ButtonText>
            </Button>
            <Button onPress={() => {}}>
                <AntDesign name="adduser" size={28} color="#FFFFFF" />
                <ButtonText>Indicar{"\n"}amigos</ButtonText>
            </Button>
            <Button onPress={() => {}}>
                <MaterialCommunityIcons
                    name="bank-transfer"
                    size={28}
                    color="#FFFFFF"
                />
                <ButtonText>Transferir</ButtonText>
            </Button>
        </Container>
    );
}
