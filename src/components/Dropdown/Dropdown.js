import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";

import PropTypes from "prop-types";

import {
  Fade,
  Header,
  MenuList,
  MenuItem,
  Container,
  HeaderText,
  HeaderIcon,
  StyledSVGArrowDown,
} from "./Dropdown.styles";

const appearDuration = 250;

const Dropdown = ({ title, options, icon, handleItemClick }) => {
  const [isOpen, setOpen] = useState(false);
  const containerNodeRef = useRef(null);
  const nodeRef = useRef(null);

  const onOpenDropdown = () => {
    setOpen(true);
    document.addEventListener("click", onClickDocument);
  };

  const onCloseDropdown = () => {
    setOpen(false);
    document.removeEventListener("click", onClickDocument);
  };

  const toggleOpenDropdown = () =>
    isOpen ? onCloseDropdown() : onOpenDropdown();

  const onClickDocument = ({ target }) => {
    const dropdownNode = target.closest(Container);

    if (containerNodeRef.current !== dropdownNode) {
      onCloseDropdown();
    }
  };

  const onClickItem = (option) => {
    if (handleItemClick) {
      handleItemClick(option);
    }

    onCloseDropdown();
  };

  return (
    <Container ref={containerNodeRef}>
      <Header onClick={toggleOpenDropdown}>
        {icon && <HeaderIcon>{icon}</HeaderIcon>}
        <HeaderText>{title}</HeaderText>
        <StyledSVGArrowDown />
      </Header>
      <Transition
        nodeRef={nodeRef}
        in={isOpen}
        enter={false}
        unmountOnExit={true}
        timeout={appearDuration}
      >
        {(state) => (
          <Fade ref={nodeRef} state={state} duration={appearDuration}>
            <MenuList>
              {options.map((option) => (
                <MenuItem
                  key={option.value}
                  onClick={() => onClickItem(option)}
                >
                  {option.text}
                </MenuItem>
              ))}
            </MenuList>
          </Fade>
        )}
      </Transition>
    </Container>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  options: PropTypes.array,
  handleItemClick: PropTypes.func,
};

Dropdown.defaultProps = {
  options: [],
};

export default Dropdown;
