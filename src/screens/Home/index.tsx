import React, { useState } from "react";
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

    const toggleSensitive = () => setHideSensitive(!hideSensitive);

    return (
        <Container>
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

            <Scroller>
                <CreditCardWidget />
                <BankAccountWidget />
            </Scroller>
        </Container>
    );
}
