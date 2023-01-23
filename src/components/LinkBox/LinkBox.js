import React from "react";
import PropTypes from "prop-types";

import { Container, SVGRadarCustom, Link } from "./LinkBox.styles";

import { ReactComponent as SVGLink } from "icons/link.svg";

const LinkBox = ({ href, whiteMode, className }) => (
  <Container whiteMode={whiteMode} className={className}>
    <SVGRadarCustom />
    <Link href={href}>
      {href} <SVGLink />
    </Link>
  </Container>
);

LinkBox.propTypes = {
  href: PropTypes.string,
};

export default LinkBox;
