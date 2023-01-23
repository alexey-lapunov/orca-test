import { FillButton } from "components/buttons/buttons";
import { Text } from "components/typography/typography";

import styled from "styled-components";

import { COLORS } from "styles/variables";

export const Container = styled.div`
  height: 100%;
  padding: 24px 32px;

  background: ${COLORS.white};
  border: 1px solid ${COLORS.gray};
  border-radius: 4px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style: none;
  margin: -8px 0;
  padding: 0;
`;

export const ListItem = styled.li`
  width: 50%;

  padding: 8px 0;
`;

export const Property = styled.div`
  display: flex;
  align-items: center;
`;

export const PropertyLabel = styled(Text)`
  width: 35%;
  color: ${COLORS.prediction};
`;

export const PropertyValue = styled.div`
  width: 65%;
`;

export const CustomFillButton = styled(FillButton)`
  display: block;
  margin: 24px 0 0 auto;
`;
