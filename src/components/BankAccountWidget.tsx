import React, { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 3px;
    align-items: flex-start;
    margin-bottom: 10px;
`;
const TitleArea = styled.View`
    flex-direction: row;
    align-items: center;
`;
const Title = styled.Text`
    color: #727272;
    font-size: 16px;
    margin-left: 15px;
`;
const ChecklistArea = styled.View`
    margin-top: 20px;
`;
const DepositButton = styled.TouchableOpacity`
    margin-top: 20px;
    padding-horizontal: 15px;
    padding-vertical: 10px;
    border: 1px;
    border-radius: 5px;
    border-color: #820ad1;
`;
const DepositButtonText = styled.Text`
    font-weight: bold;
    color: #820ad1;
`;

const ChecklistItemArea = styled.View`
    flex-direction: row;
`;
const ChecklistItemText = styled.Text`
    font-size: 16px;
`;
const ChecklistItem = ({ selected = false, text }) => {
    return (
        <ChecklistItemArea>
            <Ionicons
                name={selected ? "checkbox" : "square-outline"}
                size={selected ? 22 : 16}
                color={selected ? "#5bb75f" : "#727272"}
                style={{ alignSelf: "flex-end" }}
            />

            <ChecklistItemText>{text}</ChecklistItemText>
        </ChecklistItemArea>
    );
};

export default function BankAccountWidget() {
    return (
        <Container>
            <TitleArea>
                <MaterialIcons name="attach-money" size={28} color="#727272" />
                <Title>Conta</Title>
            </TitleArea>

            <ChecklistArea>
                <ChecklistItem selected={true} text="Abra sua conta" />
                <ChecklistItem text="Faça seu primeiro depósito" />
                <ChecklistItem text="Veja seu dinheiro render" />
            </ChecklistArea>

            <DepositButton onPress={() => {}}>
                <DepositButtonText>DEPOSITAR</DepositButtonText>
            </DepositButton>
        </Container>
    );
}
