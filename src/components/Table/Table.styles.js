import { COLORS } from "styles/variables";
import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0 4px;

  thead {
    td,
    th {
      text-align: left;

      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      color: ${COLORS.prediction};
    }
  }

  tbody {
    background: ${COLORS.white};

    tr {
      transition: background 0.25s, color 0.25s;

      cursor: pointer;

      &:hover {
        background: ${COLORS.text};

        color: ${COLORS.white};

        td,
        th {
          border-color: ${COLORS.text};
        }
      }
    }

    td,
    th {
      padding: 17px 0;
      border: 1px solid ${COLORS.gray};
      border-right: none;
      border-left: none;

      text-align: left;
    }

    td:first-child,
    th:first-child {
      padding: 0 0 0 32px;

      border: 1px solid ${COLORS.gray};
      border-right: none;
      border-radius: 4px 0 0 4px;
    }

    td:last-child,
    th:last-child {
      border: 1px solid ${COLORS.gray};
      border-left: none;
      border-radius: 0 4px 4px 0;
    }
  }
`;
