import { Text } from "components/typography/typography";

import { COLORS } from "styles/variables";

import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled(Text)`
  margin: 0 0 8px 0;

  color: ${COLORS.prediction};
`;

export const Value = styled(Text)`
  word-break: break-all;
`;
