import React, { useState } from "react";
import EyeOutlineIcon from "react-native-eva-icons/icons/EyeOutline";
import EyeOffOutlineIcon from "react-native-eva-icons/icons/EyeOffOutline";
import SettingsOutlineIcon from "react-native-eva-icons/icons/Settings_2Outline";

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
                        {hideSensitive ? (
                            <EyeOffOutlineIcon
                                width={28}
                                height={28}
                                fill="#FFFFFF"
                            />
                        ) : (
                            <EyeOutlineIcon
                                width={28}
                                height={28}
                                fill="#FFFFFF"
                            />
                        )}
                    </HideSensitiveButton>
                    <SettingsButton>
                        <SettingsOutlineIcon
                            width={28}
                            height={28}
                            fill="#FFFFFF"
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
