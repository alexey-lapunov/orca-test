import React, { useState } from "react";
import PropTypes from "prop-types";

import CopyBox from "components/CopyBox/CopyBox";
import Dropdown from "components/Dropdown/Dropdown";
import RiskLevel from "components/RiskLevel/RiskLevel";
import { Text } from "components/typography/typography";
import { TableRow, TableCell } from "components/Table/Table";
import AdditionalInfo from "components/AdditionalInfo/AdditionalInfo";
import {
  FullInfo,
  CustomRow,
  CustomCell,
  ListButton,
  CustomLinkBox,
  ListButtonItem,
  FullInfoContent,
  CustomFillButton,
} from "./RowFullInfo.styles";

import { ReactComponent as SVGDownload } from "icons/download.svg";

const options = [
  { value: 1, text: "Document" },
  { value: 2, text: "Image" },
  { value: 3, text: "PDF" },
  { value: 4, text: "HTML" },
];

const RowFullInfo = ({
  riskLevel,
  name,
  fileName,
  ipV4,
  ipV6,
  link,
  additional,
}) => {
  const [isOpenFullInfo, setOpenFullInfo] = useState(false);
  const [isFocusRow, setFocusRow] = useState(false);

  const toggleOpenFullInfo = () => setOpenFullInfo(!isOpenFullInfo);

  const onClickCopyBox = (e) => e.stopPropagation();

  return (
    <>
      <TableRow
        onClick={toggleOpenFullInfo}
        onMouseEnter={() => setFocusRow(true)}
        onMouseLeave={() => setFocusRow(false)}
      >
        <TableCell>
          <RiskLevel level={riskLevel} whiteMode={isFocusRow} />
        </TableCell>
        <TableCell>
          <Text value={name} whiteMode={isFocusRow} />
        </TableCell>
        <TableCell>
          <Text
            value={fileName.name}
            spanValue={fileName.size}
            whiteMode={isFocusRow}
          />
        </TableCell>
        <TableCell>
          <CopyBox
            value={ipV4}
            whiteMode={isFocusRow}
            onClick={onClickCopyBox}
          />
        </TableCell>
        <TableCell>
          <CopyBox
            value={ipV6}
            whiteMode={isFocusRow}
            onClick={onClickCopyBox}
          />
        </TableCell>
        <TableCell>
          <CustomLinkBox href={link} whiteMode={isFocusRow} />
        </TableCell>
      </TableRow>
      <CustomRow>
        <CustomCell colSpan={6}>
          <FullInfo isOpen={isOpenFullInfo}>
            <FullInfoContent>
              <ListButton>
                <ListButtonItem>
                  <CustomFillButton>Download</CustomFillButton>
                </ListButtonItem>
                <ListButtonItem>
                  <Dropdown
                    blueMode
                    icon={<SVGDownload />}
                    title="Download as"
                    options={options}
                  />
                </ListButtonItem>
                <ListButtonItem></ListButtonItem>
              </ListButton>
              <AdditionalInfo value={additional.value} />
            </FullInfoContent>
          </FullInfo>
        </CustomCell>
      </CustomRow>
    </>
  );
};

RowFullInfo.propTypes = {
  riskLevel: PropTypes.string,
  name: PropTypes.string,
  fileName: PropTypes.exact({
    name: PropTypes.string,
    size: PropTypes.string,
  }),
  additional: PropTypes.exact({
    title: PropTypes.string,
    value: PropTypes.string,
  }),

  ipV4: PropTypes.string,
  ipV6: PropTypes.string,
  link: PropTypes.string,
};

export default RowFullInfo;
