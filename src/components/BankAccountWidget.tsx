import React, { useState } from 'react'
import styled from 'styled-components/native';
import ShoppingBagOutlineIcon from 'react-native-eva-icons/icons/ShoppingBagOutline';
import SquareOutlineIcon from 'react-native-eva-icons/icons/SquareOutline';
import CheckmarkSquareIcon from 'react-native-eva-icons/icons/CheckmarkSquare_2';

const Container = styled.View`
    background-color: #FFFFFF;
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
            {!selected ? (
                <SquareOutlineIcon width={16} height={16} style={{alignSelf: 'center'}} fill="#727272" />
            ) : (
                <CheckmarkSquareIcon width={22} height={22} style={{alignSelf: 'center'}} fill="#5bb75f" />
            )}

            <ChecklistItemText>{text}</ChecklistItemText>
        </ChecklistItemArea>
    );
}

export default function BankAccountWidget() {
    return (
        <Container>
            <TitleArea>
                <ShoppingBagOutlineIcon width={28} height={28} fill="#727272" />
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
    )
}
