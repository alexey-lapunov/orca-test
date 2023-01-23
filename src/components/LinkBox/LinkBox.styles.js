import styled from "styled-components";
import { COLORS } from "styles/variables";

import { ReactComponent as SVGRadar } from "icons/radar.svg";

export const Link = styled.a.attrs(({ href }) => ({
  href,
}))`
  display: inline-flex;
  align-items: center;

  font-size: 14px;
  line-height: 18px;
  font-weight: 400;

  color: ${COLORS.text};
  text-decoration: none;

  transition: color 0.25s;

  cursor: pointer;

  word-break: break-all;

  svg {
    min-width: 9px;

    fill: ${COLORS.gray};

    margin: 0 0 0 4px;

    transition: fill 0.25s;
  }

  &:hover {
    &&& {
      color: ${COLORS.brescianBlue};

      svg {
        fill: ${COLORS.brescianBlue};
      }
    }
  }
`;

export const SVGRadarCustom = styled(SVGRadar)`
  min-width: 12px;
  margin: 3px 4px 0 0;

  fill: ${COLORS.gray};
`;

export const Container = styled.div`
  display: inline-flex;

  ${Link} {
    color: ${({ whiteMode }) => (whiteMode ? COLORS.white : COLORS.text)};

    svg {
      fill: ${({ whiteMode }) => (whiteMode ? COLORS.white : COLORS.gray)};
    }
  }

  ${SVGRadarCustom} {
    fill: ${({ whiteMode }) => (whiteMode ? COLORS.white : COLORS.gray)};
  }
`;
