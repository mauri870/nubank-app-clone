import React, { useState } from "react";
import styled from "styled-components/native";
import ContentLoader, { Rect } from "react-content-loader/native";
import { FontAwesome5 } from "@expo/vector-icons";

const Container = styled.View`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 3px;
    align-items: flex-start;
    margin-bottom: 15px;
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
const AvailableText = styled.Text`
    margin-top: 30px;
    font-size: 16px;
    color: #191919;
`;
const AvailableAmount = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #191919;
`;
const SimulateLoanButton = styled.TouchableOpacity`
    margin-top: 20px;
    padding-horizontal: 15px;
    padding-vertical: 10px;
    border: 1px;
    border-radius: 5px;
    border-color: #820ad1;
`;
const SimulateLoanText = styled.Text`
    font-weight: bold;
    color: #820ad1;
`;

const Loader = (props) => (
    <ContentLoader
        speed={1}
        width={350}
        height={20}
        viewBox="0 0 340 20"
        backgroundColor="#f6f6ef"
        foregroundColor="#e8e8e3"
        {...props}
    >
        <Rect x="0" y="4" rx="0" ry="0" width="100" height="20" />
    </ContentLoader>
);

export default function LoanWidget({ hideSensitive = false }) {
    return (
        <Container>
            <TitleArea>
                <FontAwesome5
                    name="hand-holding-usd"
                    size={28}
                    color="#727272"
                />
                <Title>Empréstimo</Title>
            </TitleArea>

            <AvailableText>Valor disponível de até</AvailableText>

            {hideSensitive ? (
                <Loader />
            ) : (
                <AvailableAmount>R$ 10.000,00</AvailableAmount>
            )}

            <SimulateLoanButton onPress={() => {}}>
                <SimulateLoanText>SIMULAR EMPRESTIMO</SimulateLoanText>
            </SimulateLoanButton>
        </Container>
    );
}
