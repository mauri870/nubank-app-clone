import React, { useState } from "react";
import styled from "styled-components/native";
import ContentLoader, { Rect } from "react-content-loader/native";
import { Ionicons } from "@expo/vector-icons";

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
const CurrentInvoiceText = styled.Text`
    color: #727272;
    font-size: 13px;
    margin-vertical: 10px;
`;
const CurrentInvoiceAmount = styled.Text`
    color: #26a1de;
    font-weight: bold;
    font-size: 24px;
`;
const AvailableLimitArea = styled.View`
    flex-direction: row;
`;
const AvailableLimitText = styled.Text`
    color: #191919;
    font-size: 13px;
`;
const AvailableLimitAmount = styled.Text`
    color: #1f7f45;
    font-size: 13px;
    font-weight: bold;
`;

const Loader = (props) => (
    <ContentLoader
        animate={false}
        width={350}
        height={50}
        viewBox="0 0 400 50"
        backgroundColor="#f6f6ef"
        foregroundColor="#e8e8e3"
        {...props}
    >
        <Rect x="0" y="0" rx="0" ry="0" width="350" height="50" />
    </ContentLoader>
);

export default function CreditCardWidget({ hideSensitive = false }) {
    return (
        <Container>
            <TitleArea>
                <Ionicons
                    name="card-outline"
                    size={28}
                    color="#727272"
                    style={{ transform: [{ rotate: "90deg" }] }}
                />
                <Title>Cartão de crédito</Title>
            </TitleArea>

            <CurrentInvoiceText>Fatura atual</CurrentInvoiceText>

            {hideSensitive ? (
                <Loader />
            ) : (
                <>
                    <CurrentInvoiceAmount>R$ 724,81</CurrentInvoiceAmount>
                    <AvailableLimitArea>
                        <AvailableLimitText>
                            Limite disponível{" "}
                        </AvailableLimitText>
                        <AvailableLimitAmount>
                            R$ 23.812,23
                        </AvailableLimitAmount>
                    </AvailableLimitArea>
                </>
            )}
        </Container>
    );
}
