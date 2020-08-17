import styled from "styled-components";

import { Flex } from "@rebass/grid";

const Container = styled(Flex)`
  max-width: 1024px;
  height: calc(100vh - 70px);
`;
Container.defaultProps = {
  mx: "auto",
};

export default Container;
