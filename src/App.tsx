import React from 'react';
import styled from 'styled-components'
import tw from "twin.macro"
import "./App.css"
import { MainPage } from "./app/containers/HomePage"

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;

const App = () => {
    return (
        <AppContainer>
          <MainPage />
        </AppContainer>
    );
};

export default App;
