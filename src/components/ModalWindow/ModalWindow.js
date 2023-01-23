import PropTypes from "prop-types";

import Modal from "react-modal";

import {
  Title,
  Header,
  Content,
  ModalStyle,
  ButtonClose,
  OverlayStyle,
} from "./ModalWindow.styles";

import { ReactComponent as SVGClose } from "icons/close.svg";

const ModalWindow = ({ children, title, ...rest }) => (
  <Modal
    {...rest}
    className="_"
    overlayClassName="_"
    contentElement={(props, children) => (
      <ModalStyle {...props}>{children}</ModalStyle>
    )}
    overlayElement={(props, contentElement) => (
      <OverlayStyle {...props}>{contentElement}</OverlayStyle>
    )}
  >
    <Header>
      <Title>{title}</Title>
      <ButtonClose onClick={rest.onRequestClose}>
        <SVGClose />
      </ButtonClose>
    </Header>
    <Content>{children}</Content>
  </Modal>
);

ModalWindow.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

export default ModalWindow;
