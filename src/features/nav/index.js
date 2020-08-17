import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";
import Logo from "./hansefit-logo.svg";
const Container = styled(Box)`
  max-width: 100vw;
`;
Container.defaultProps = {
  mx: "auto",
};

const StyledLogo = styled.img`
  height: 70%;
  flex-grow: 1;
`;

const StyledButton = styled.button`
  outline: none;
  height: 100%;
  width: 100%;
  font-size: 14px;
  font-stretch: 100%;
  font-style: italic;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#003bb3")};
  border: none;
  padding: 0 18px;
  transition: 0.4s opacity ease-in-out;
  :hover {
    opacity: 0.6;
  }
  color: ${(props) => (props.color ? props.color : "#FFF")};
  text-transform: uppercase;
`;

const StyledText = styled.div`
  width: 100%;
  margin-top: -4px;
  height: 30%;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-stretch: 100%;
  font-style: italic;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  background-color: #003bb3;
`;

const Nav = (props) => {
  const history = useHistory();
  const handleRedirect = (url) => history.push(url);
  return (
    <Container>
      <Flex flex="1 1 auto" style={{ maxHeight: " 70px" }}>
        <Box width={1 / 4}>
          <StyledLogo src={Logo} />
          <StyledText>Coding Challange</StyledText>
        </Box>
        <Box width={1} />
        <Box width={1 / 4}>
          <StyledButton onClick={() => handleRedirect("/")}>
            Urlaub beantragen
          </StyledButton>
        </Box>
        <Box width={1 / 4}>
          <StyledButton
            bgColor="#001b4d"
            onClick={() => handleRedirect("/bookedHolidays")}
          >
            Urlaubsanträge einsehen
          </StyledButton>
        </Box>
      </Flex>
    </Container>
  );
};

export default Nav;
