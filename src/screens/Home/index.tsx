import React, { useState } from "react";
import { RefreshControl } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
    Container,
    TopBar,
    WelcomeArea,
    WelcomeText,
    IconsArea,
    HideSensitiveButton,
    SettingsButton,
    Scroller,
} from "./styles";
import CreditCardWidget from "../../components/CreditCardWidget";
import BankAccountWidget from "../../components/BankAccountWidget";

export default function Home() {
    const [hideSensitive, setHideSensitive] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const toggleSensitive = () => setHideSensitive(!hideSensitive);

    function timeout(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const onRefresh = async () => {
        setRefreshing(true);
        await timeout(2000);
        setRefreshing(false);
    };

    return (
        <Container>
            <Scroller
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <TopBar>
                    <WelcomeArea>
                        <WelcomeText>Olá, Mauri</WelcomeText>
                    </WelcomeArea>
                    <IconsArea>
                        <HideSensitiveButton onPress={toggleSensitive}>
                            <Ionicons
                                name={
                                    hideSensitive
                                        ? "eye-off-outline"
                                        : "eye-outline"
                                }
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
                </TopBar>
                <CreditCardWidget />
                <BankAccountWidget />
            </Scroller>
        </Container>
    );
}
