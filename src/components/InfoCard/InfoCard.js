import React from "react";
import PropTypes from "prop-types";

import {
  List,
  Property,
  ListItem,
  Container,
  PropertyLabel,
  PropertyValue,
  CustomFillButton,
} from "./InfoCard.styles";

const InfoCard = ({ value, buttonText, onClickButton }) => (
  <Container>
    <List>
      {value.map(({ label, value }) => (
        <ListItem key={label}>
          <Property>
            <PropertyLabel value={`${label}:`} />
            <PropertyValue>{value}</PropertyValue>
          </Property>
        </ListItem>
      ))}
    </List>
    <CustomFillButton onClick={onClickButton}>{buttonText}</CustomFillButton>
  </Container>
);

InfoCard.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.node })
  ),
  buttonText: PropTypes.string,
  onClickButton: PropTypes.func,
};

export default InfoCard;
