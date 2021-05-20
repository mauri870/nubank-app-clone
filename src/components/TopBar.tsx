import React, { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    margin-vertical: 30px;
    margin-horizontal: 20px;
`;

export const WelcomeArea = styled.View``;
export const WelcomeText = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 26px;
`;
export const IconsArea = styled.View`
    flex-direction: row;
`;
export const HideSensitiveButton = styled.TouchableOpacity`
    background-color: #9128d7;
    border-radius: 50px;
    padding: 10px;
    margin-right: 5px;
`;

export const SettingsButton = styled.TouchableOpacity`
    background-color: #9128d7;
    border-radius: 50px;
    padding: 10px;
`;

export default function TopBar({ hideSensitive = false, onClickSensitive }) {
    return (
        <Container>
            <WelcomeArea>
                <WelcomeText>Oi, Usuario</WelcomeText>
            </WelcomeArea>
            <IconsArea>
                <HideSensitiveButton onPress={onClickSensitive}>
                    <Ionicons
                        name={hideSensitive ? "eye-outline" : "eye-off-outline"}
                        size={28}
                        color="#FFFFFF"
                    />
                </HideSensitiveButton>
                <SettingsButton>
                    <Ionicons
                        name="settings-outline"
                        size={28}
                        color="#FFFFFF"
                    />
                </SettingsButton>
            </IconsArea>
        </Container>
    );
}
