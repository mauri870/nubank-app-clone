import React, { useState, useCallback } from "react";
import { RefreshControl } from "react-native";

import { Container, Scroller } from "./styles";
import CreditCardWidget from "../../components/CreditCardWidget";
import BankAccountWidget from "../../components/BankAccountWidget";
import BottomBar from "../../components/BottomBar";
import TopBar from "../../components/TopBar";
import LoanWidget from "../../components/LoanWidget";

export default function Home() {
    const [hideSensitive, setHideSensitive] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const toggleSensitive = useCallback(() => {
        setHideSensitive((state) => !state);
    }, []);

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
            <TopBar
                hideSensitive={hideSensitive}
                onClickSensitive={toggleSensitive}
            />
            <Scroller
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <CreditCardWidget hideSensitive={hideSensitive} />
                <BankAccountWidget />
                <LoanWidget hideSensitive={hideSensitive} />
            </Scroller>

            <BottomBar />
        </Container>
    );
}
