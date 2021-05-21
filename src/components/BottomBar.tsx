import React, { useState } from "react";
import styled from "styled-components/native";
import {
    MaterialCommunityIcons,
    FontAwesome5,
    Ionicons,
    MaterialIcons,
    SimpleLineIcons,
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

const ButtonTouchable = styled.TouchableOpacity`
    width: 90px;
    background-color: #9128d7;
    flex-direction: column;
    padding: 5px;
    margin-horizontal: 5px;
    justify-content: space-between;
    border-radius: 2px;
`;
const ButtonText = styled.Text`
    color: #ffffff;
    font-size: 13px;
`;
const Scroller = styled.ScrollView``;

const Button = (props) => <ButtonTouchable activeOpacity={0.7} {...props} />;

export default function BottomBar() {
    return (
        <Container>
            <Scroller horizontal={true} showsHorizontalScrollIndicator={false}>
                <Button onPress={() => {}} activeOpacity={0.8}>
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
                        name="bank-transfer-out"
                        size={28}
                        color="#FFFFFF"
                    />
                    <ButtonText>Transferir</ButtonText>
                </Button>
                <Button onPress={() => {}}>
                    <MaterialCommunityIcons
                        name="bank-transfer-in"
                        size={28}
                        color="#FFFFFF"
                    />
                    <ButtonText>Depositar</ButtonText>
                </Button>
                <Button onPress={() => {}}>
                    <FontAwesome5
                        name="hand-holding-usd"
                        size={28}
                        color="#FFFFFF"
                    />
                    <ButtonText>Empréstimos</ButtonText>
                </Button>
                <Button onPress={() => {}}>
                    <SimpleLineIcons
                        name="screen-smartphone"
                        size={28}
                        color="#FFFFFF"
                    />
                    <ButtonText>Recarga de{"\n"}celular</ButtonText>
                </Button>
                <Button onPress={() => {}}>
                    <Ionicons name="card-outline" size={28} color="#FFFFFF" />
                    <ButtonText>Função de{"\n"}débito</ButtonText>
                </Button>
                <Button onPress={() => {}}>
                    <FontAwesome5
                        name="comment-dollar"
                        size={28}
                        color="#FFFFFF"
                    />
                    <ButtonText>Cobrar</ButtonText>
                </Button>
                <Button onPress={() => {}}>
                    <FontAwesome5
                        name="hand-holding-usd"
                        size={28}
                        color="#FFFFFF"
                    />
                    <ButtonText>Doação</ButtonText>
                </Button>
                <Button onPress={() => {}}>
                    <MaterialIcons
                        name="help-outline"
                        size={28}
                        color="#FFFFFF"
                    />
                    <ButtonText>Me ajuda</ButtonText>
                </Button>
            </Scroller>
        </Container>
    );
}
