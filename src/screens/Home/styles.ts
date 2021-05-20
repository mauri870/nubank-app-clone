import styled from 'styled-components/native';
import EyeOutlineIcon from 'react-native-eva-icons/icons/EyeOutline';

export const Container = styled.View`
    flex: 1;
    margin-top: 20px;
`;
export const TopBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    margin-vertical: 30px;
    margin-horizontal: 20px;
`;
export const WelcomeArea = styled.View`
`;
export const WelcomeText = styled.Text`
    color: #FFFFFF;
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

export const Scroller = styled.ScrollView`
    margin-horizontal: 20px;
`;
