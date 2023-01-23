import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";

import PropTypes from "prop-types";

import {
  Header,
  MenuList,
  MenuItem,
  Container,
  HeaderText,
  HeaderIcon,
  StyledSVGArrowDown,
  CustomFadeWithTranslate,
} from "./Dropdown.styles";

const appearDuration = 250;

const Dropdown = ({ title, options = [], icon, blueMode, handleItemClick }) => {
  const transitionRef = useRef(null);
  const containerNodeRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

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
    <Container ref={containerNodeRef} blueMode={blueMode}>
      <Header onClick={toggleOpenDropdown}>
        {icon && <HeaderIcon>{icon}</HeaderIcon>}
        <HeaderText>{title}</HeaderText>
        <StyledSVGArrowDown />
      </Header>
      <Transition
        nodeRef={transitionRef}
        in={isOpen}
        enter={false}
        unmountOnExit={true}
        timeout={appearDuration}
      >
        {(state) => (
          <CustomFadeWithTranslate
            ref={transitionRef}
            state={state}
            duration={appearDuration}
          >
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
          </CustomFadeWithTranslate>
        )}
      </Transition>
    </Container>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  options: PropTypes.array,
  blueMode: PropTypes.bool,
  handleItemClick: PropTypes.func,
};

export default Dropdown;
