import RiskLevel from "components/RiskLevel/RiskLevel";

import CopyBox from "components/CopyBox/CopyBox";

import styled from "styled-components";

import { COLORS } from "styles/variables";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 0 16px 0;

  border-bottom: 1px solid ${COLORS.gray};

  margin: 0 0 32px 0;
`;

export const CustomCopyBox = styled(CopyBox)`
  max-width: 100%;
`;

export const ControlPanel = styled.ul`
  display: flex;
  align-items: center;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const ControlPanelItem = styled.li`
  &:not(:last-of-type) {
    margin: 0 16px 0 0;
  }
`;

export const ListCard = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: -16px;
  padding: 0;

  list-style: none;
`;

export const ListCardItem = styled.li`
  width: 50%;

  padding: 16px;
`;

export const ModalButtons = styled.ul`
  display: flex;
  justify-content: flex-end;

  margin: 16px 0 0 0;
  padding: 0;

  list-style: none;
`;

export const ModalButtonsItem = styled.li`
  &:not(:last-of-type) {
    margin: 0 16px 0 0;
  }
`;

export const CustomRiskLevel = styled(RiskLevel)`
  margin: 0 12px 0 0;
`;
