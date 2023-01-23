import LinkBox from "components/LinkBox/LinkBox";
import { TableRow, TableCell } from "components/Table/Table";
import { FillButton } from "components/buttons/buttons";

import { COLORS } from "styles/variables";

import styled from "styled-components";

export const FullInfo = styled.div`
  width: 100%;
  max-height: ${({ isOpen }) => (isOpen ? "208px" : "0")};

  border-radius: 4px;
  border: ${({ isOpen }) => (isOpen ? "1px" : "0")} solid ${COLORS.gray};
  background: ${COLORS.white};

  overflow: hidden;
  overflow-y: scroll;

  transition: max-height 0.25s;
`;

export const FullInfoContent = styled.div`
  padding: 32px;
`;

export const CustomLinkBox = styled(LinkBox)`
  white-space: nowrap;
`;

export const CustomCell = styled(TableCell)`
  &&& {
    padding: 0;

    word-wrap: break-word;
    border: none;
  }
`;

export const CustomRow = styled(TableRow)`
  &&& {
    position: relative;
    top: -6px;

    background: none !important;
  }
`;

export const CustomFillButton = styled(FillButton)`
  &&& {
    padding: 6px 8px;
  }
`;

export const CustomText = styled(Text)`
  color: ${COLORS.prediction};

  margin: 0 0 8px 0;
`;

export const ListButton = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0;
  margin: 0;

  list-style: none;
`;

export const ListButtonItem = styled.li`
  &:not(:last-of-type) {
    margin: 0 16px 0 0;
  }
`;
