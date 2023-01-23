import { Text } from "components/typography/typography";

import styled from "styled-components";

export const CustomText = styled(Text)`
  display: inline-flex;
  width: 100%;

  span {
    &:first-of-type {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:last-of-type {
      margin: 0 0 0 5px;
    }
  }
`;
