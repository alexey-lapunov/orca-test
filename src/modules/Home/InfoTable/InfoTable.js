import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "components/Table/Table";
import {
  Header,
  ListCard,
  ListCardItem,
  ModalButtons,
  ControlPanel,
  CustomRiskLevel,
  ModalButtonsItem,
  ControlPanelItem,
} from "./InfoTable.styles";
import CopyBox from "components/CopyBox/CopyBox";
import LinkBox from "components/LinkBox/LinkBox";
import { Fade } from "components/transitions/transitions";
import Dropdown from "components/Dropdown/Dropdown";
import { Transition } from "react-transition-group";
import Switcher from "components/Switcher/Switcher";
import Checkbox from "components/Checkbox/Checkbox";
import InfoCard from "components/InfoCard/InfoCard";
import RowFullInfo from "./RowFullInfo/RowFullInfo";
import RiskLevel from "components/RiskLevel/RiskLevel";
import { Text } from "components/typography/typography";
import { FillButton } from "components/buttons/buttons";
import ModalWindow from "components/ModalWindow/ModalWindow";
import AdditionalInfo from "components/AdditionalInfo/AdditionalInfo";

import { ReactComponent as SVGList } from "icons/list.svg";
import { ReactComponent as SVGLogo } from "icons/logo.svg";
import { ReactComponent as SVGTable } from "icons/table.svg";
import { ReactComponent as SVGCards } from "icons/cards.svg";
import { ReactComponent as SVGArrows } from "icons/arrows.svg";
import { ReactComponent as SVGDownload } from "icons/download.svg";

import { RISK_LEVEL } from "constants/constants";

const InfoTable = ({ children }) => {
  const transitionListCardRef = useRef(null);
  const transitionTableRef = useRef(null);

  const [isCheck, setCheck] = useState(false);
  const [isTableVisible, setTableVisible] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentInfoIndex, setCurrentInfoIndex] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const onClickSwitcher = () => setTableVisible(!isTableVisible);

  const onClickInfoCardButton = (index) => {
    setCurrentInfoIndex(index);
    openModal();
  };

  const getCurrentData = () => {
    const currentData = mockData[currentInfoIndex];

    if (currentData) {
      return currentData;
    }

    return null;
  };

  return (
    <>
      <Header>
        <SVGLogo />
        <ControlPanel>
          <ControlPanelItem>
            <Checkbox
              text="Show additional items"
              checked={isCheck}
              onChange={() => setCheck(!isCheck)}
            />
          </ControlPanelItem>
          <ControlPanelItem>
            <Dropdown title="Group by" icon={<SVGList />} options={options} />
          </ControlPanelItem>
          <ControlPanelItem>
            <Dropdown title="Sort by" icon={<SVGArrows />} options={options} />
          </ControlPanelItem>
          <ControlPanelItem>
            <Switcher
              leftIcon={<SVGTable />}
              rightIcon={<SVGCards />}
              value={isTableVisible}
              onClick={onClickSwitcher}
            />
          </ControlPanelItem>
        </ControlPanel>
      </Header>
      <Transition
        nodeRef={transitionTableRef}
        in={isTableVisible}
        enter={false}
        exit={false}
        unmountOnExit={true}
        timeout={250}
      >
        {(state) => (
          <Fade ref={transitionTableRef} state={state} duration={250}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>File name</TableCell>
                  <TableCell>IP Address v4</TableCell>
                  <TableCell>IP Address v6</TableCell>
                  <TableCell>Scan source</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockData.map(
                  ({
                    riskLevel,
                    name,
                    fileName,
                    ipV4,
                    ipV6,
                    link,
                    additional,
                  }) => (
                    <RowFullInfo
                      key={name}
                      riskLevel={riskLevel}
                      name={name}
                      fileName={fileName}
                      ipV4={ipV4}
                      ipV6={ipV6}
                      link={link}
                      additional={additional}
                    />
                  )
                )}
              </TableBody>
            </Table>
          </Fade>
        )}
      </Transition>
      <Transition
        nodeRef={transitionListCardRef}
        in={!isTableVisible}
        enter={false}
        exit={false}
        unmountOnExit={true}
        timeout={250}
      >
        {(state) => (
          <Fade ref={transitionListCardRef} state={state} duration={250}>
            <ListCard>
              {mockData.map(
                (
                  { riskLevel, name, fileName, ipV4, ipV6, link, additional },
                  index
                ) => (
                  <ListCardItem key={name}>
                    <InfoCard
                      value={[
                        {
                          label: "Risk level",
                          value: <RiskLevel level={riskLevel} lightMode />,
                        },
                        {
                          label: "IP Address v4",
                          value: <CopyBox value={ipV4} />,
                        },
                        {
                          label: "Name",
                          value: <Text value={name} />,
                        },
                        {
                          label: "IP Address v6",
                          value: <CopyBox value={ipV6} />,
                        },
                        {
                          label: "File name",
                          value: (
                            <Text
                              value={fileName.name}
                              spanValue={fileName.size}
                            />
                          ),
                        },
                        {
                          label: "Scan source:",
                          value: <LinkBox href={link} />,
                        },
                      ]}
                      buttonText="Show additional info"
                      onClickButton={() => onClickInfoCardButton(index)}
                    />
                  </ListCardItem>
                )
              )}
            </ListCard>
          </Fade>
        )}
      </Transition>

      <ModalWindow
        title={
          <>
            <CustomRiskLevel
              level={getCurrentData()?.riskLevel}
              fillMode={true}
            />
            {getCurrentData()?.name}
          </>
        }
        closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <AdditionalInfo value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/oBt6U+0u66zkJS34K3FiQF6tNXtxQttI3rsLgxNAymNiSjvzsfVVgkSa2MQmXWrxR8Qduq+OEL8HEl3dZAqzRimgY16AfcMQdpBASfZeJSY81BMSBpTEK3cjUj55rW+gNAEeRDRseV8FUQFHLKUXTD0OsDTPHiPF0bShyujkd8hwyXDaeR9lCK57hjCczb8/dbXHpYdiZOWe8LPPMMB2UuIbnJIvtEA0fV6HM9lsU+xG7ntGTjXlIgc40UkaGKwXrxmwh+g0+nCTCYTXrPcdOixIqw5rsC6JJUPQe+4G4Ws1guQGtIRrz6EkPQgb+Dplb+foNFoFhG8xWKBuqrKvmpPmmTFrlQtYZ9FG3Fj84Sk6QyOVh5EcGogDmTv2eEfYllZ2QKii5gilv//KwtslIaORuRuQvC5QEjzM4apb4lQ/wXCx9fe4QKeWQAAAABJRU5ErkJggg==" />
        <ModalButtons>
          <ModalButtonsItem>
            <FillButton>Download</FillButton>
          </ModalButtonsItem>
          <ModalButtonsItem>
            <Dropdown
              blueMode
              icon={<SVGDownload />}
              title="Download as"
              options={options}
            />
          </ModalButtonsItem>
          <ModalButtonsItem>
            <FillButton onClick={closeModal} lightMode>
              Cancel
            </FillButton>
          </ModalButtonsItem>
        </ModalButtons>
      </ModalWindow>
    </>
  );
};

InfoTable.propTypes = {
  children: PropTypes.node,
};

const options = [
  { value: 1, text: "Name" },
  { value: 2, text: "Fill name" },
  { value: 3, text: "IP Address v4" },
  { value: 4, text: "IP Address v6" },
  { value: 5, text: "Scan source" },
];

const mockData = [
  {
    riskLevel: RISK_LEVEL.high,
    name: "Luctus",
    fileName: { name: "Luctus.ppt", size: "(2Mb)" },
    ipV4: "38.21.46.43/5",
    ipV6: "2855:93c2:2469:6cde:643b:e139:6aae:6e00",
    link: "https://dropbox.com/nulla/dapibus.xml",
    additional: {
      title: "Additional info",
      value:
        "data:image/png;base64,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",
    },
  },
  {
    riskLevel: RISK_LEVEL.medium,
    name: "Ante",
    fileName: { name: "Ante.tiff", size: "(10Mb)" },
    ipV4: "75.128.66.66/28",
    ipV6: "efcd:8153:a72c:7e0e:4200:896d:74d:bac1",
    link: "https://ow.ly/curae.aspx",
    additional: {
      title: "Additional info",
      value:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/oBt6U+0u66zkJS34K3FiQF6tNXtxQttI3rsLgxNAymNiSjvzsfVVgkSa2MQmXWrxR8Qduq+OEL8HEl3dZAqzRimgY16AfcMQdpBASfZeJSY81BMSBpTEK3cjUj55rW+gNAEeRDRseV8FUQFHLKUXTD0OsDTPHiPF0bShyujkd8hwyXDaeR9lCK57hjCczb8/dbXHpYdiZOWe8LPPMMB2UuIbnJIvtEA0fV6HM9lsU+xG7ntGTjXlIgc40UkaGKwXrxmwh+g0+nCTCYTXrPcdOixIqw5rsC6JJUPQe+4G4Ws1guQGtIRrz6EkPQgb+Dplb+foNFoFhG8xWKBuqrKvmpPmmTFrlQtYZ9FG3Fj84Sk6QyOVh5EcGogDmTv2eEfYllZ2QKii5gilv//KwtslIaORuRuQvC5QEjzM4apb4lQ/wXCx9fe4QKeWQAAAABJRU5ErkJggg==",
    },
  },
  {
    riskLevel: RISK_LEVEL.medium,
    name: "ElitProinInterdum",
    fileName: { name: "ElitProinInterdum.xls", size: "(3Mb)" },
    ipV4: "204.200.5.2/1",
    ipV6: "a454:1732:7eeb:b137:a1d:9d52:813b:506e",
    link: "http://google.com/sit.aspx",
    additional: {
      title: "Additional info",
      value:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/oBt6U+0u66zkJS34K3FiQF6tNXtxQttI3rsLgxNAymNiSjvzsfVVgkSa2MQmXWrxR8Qduq+OEL8HEl3dZAqzRimgY16AfcMQdpBASfZeJSY81BMSBpTEK3cjUj55rW+gNAEeRDRseV8FUQFHLKUXTD0OsDTPHiPF0bShyujkd8hwyXDaeR9lCK57hjCczb8/dbXHpYdiZOWe8LPPMMB2UuIbnJIvtEA0fV6HM9lsU+xG7ntGTjXlIgc40UkaGKwXrxmwh+g0+nCTCYTXrPcdOixIqw5rsC6JJUPQe+4G4Ws1guQGtIRrz6EkPQgb+Dplb+foNFoFhG8xWKBuqrKvmpPmmTFrlQtYZ9FG3Fj84Sk6QyOVh5EcGogDmTv2eEfYllZ2QKii5gilv//KwtslIaORuRuQvC5QEjzM4apb4lQ/wXCx9fe4QKeWQAAAABJRU5ErkJggg==",
    },
  },
  {
    riskLevel: RISK_LEVEL.low,
    name: "Non",
    fileName: { name: "Non.ppt", size: "(536Kb)" },
    ipV4: "127.234.110.193/28",
    ipV6: "efcd:8153:a72c:7e0e:4200:896d:74d:bac1",
    link: "http://hex.com/pede.json",
    additional: {
      title: "Additional info",
      value:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/oBt6U+0u66zkJS34K3FiQF6tNXtxQttI3rsLgxNAymNiSjvzsfVVgkSa2MQmXWrxR8Qduq+OEL8HEl3dZAqzRimgY16AfcMQdpBASfZeJSY81BMSBpTEK3cjUj55rW+gNAEeRDRseV8FUQFHLKUXTD0OsDTPHiPF0bShyujkd8hwyXDaeR9lCK57hjCczb8/dbXHpYdiZOWe8LPPMMB2UuIbnJIvtEA0fV6HM9lsU+xG7ntGTjXlIgc40UkaGKwXrxmwh+g0+nCTCYTXrPcdOixIqw5rsC6JJUPQe+4G4Ws1guQGtIRrz6EkPQgb+Dplb+foNFoFhG8xWKBuqrKvmpPmmTFrlQtYZ9FG3Fj84Sk6QyOVh5EcGogDmTv2eEfYllZ2QKii5gilv//KwtslIaORuRuQvC5QEjzM4apb4lQ/wXCx9fe4QKeWQAAAABJRU5ErkJgggdata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/oBt6U+0u66zkJS34K3FiQF6tNXtxQttI3rsLgxNAymNiSjvzsfVVgkSa2MQmXWrxR8Qduq+OEL8HEl3dZAqzRimgY16AfcMQdpBASfZeJSY81BMSBpTEK3cjUj55rW+gNAEeRDRseV8FUQFHLKUXTD0OsDTPHiPF0bShyujkd8hwyXDaeR9lCK57hjCczb8/dbXHpYdiZOWe8LPPMMB2UuIbnJIvtEA0fV6HM9lsU+xG7ntGTjXlIgc40UkaGKwXrxmwh+g0+nCTCYTXrPcdOixIqw5rsC6JJUPQe+4G4Ws1guQGtIRrz6EkPQgb+Dplb+foNFoFhG8xWKBuqrKvmpPmmTFrlQtYZ9FG3Fj84Sk6QyOVh5EcGogDmTv2eEfYllZ2QKii5gilv//KwtslIaORuRuQvC5QEjzM4apb4lQ/wXCx9fe4QKeWQAAAABJRU5ErkJgggdata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/oBt6U+0u66zkJS34K3FiQF6tNXtxQttI3rsLgxNAymNiSjvzsfVVgkSa2MQmXWrxR8Qduq+OEL8HEl3dZAqzRimgY16AfcMQdpBASfZeJSY81BMSBpTEK3cjUj55rW+gNAEeRDRseV8FUQFHLKUXTD0OsDTPHiPF0bShyujkd8hwyXDaeR9lCK57hjCczb8/dbXHpYdiZOWe8LPPMMB2UuIbnJIvtEA0fV6HM9lsU+xG7ntGTjXlIgc40UkaGKwXrxmwh+g0+nCTCYTXrPcdOixIqw5rsC6JJUPQe+4G4Ws1guQGtIRrz6EkPQgb+Dplb+foNFoFhG8xWKBuqrKvmpPmmTFrlQtYZ9FG3Fj84Sk6QyOVh5EcGogDmTv2eEfYllZ2QKii5gilv//KwtslIaORuRuQvC5QEjzM4apb4lQ/wXCx9fe4QKeWQAAAABJRU5ErkJgggdata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/oBt6U+0u66zkJS34K3FiQF6tNXtxQttI3rsLgxNAymNiSjvzsfVVgkSa2MQmXWrxR8Qduq+OEL8HEl3dZAqzRimgY16AfcMQdpBASfZeJSY81BMSBpTEK3cjUj55rW+gNAEeRDRseV8FUQFHLKUXTD0OsDTPHiPF0bShyujkd8hwyXDaeR9lCK57hjCczb8/dbXHpYdiZOWe8LPPMMB2UuIbnJIvtEA0fV6HM9lsU+xG7ntGTjXlIgc40UkaGKwXrxmwh+g0+nCTCYTXrPcdOixIqw5rsC6JJUPQe+4G4Ws1guQGtIRrz6EkPQgb+Dplb+foNFoFhG8xWKBuqrKvmpPmmTFrlQtYZ9FG3Fj84Sk6QyOVh5EcGogDmTv2eEfYllZ2QKii5gilv//KwtslIaORuRuQvC5QEjzM4apb4lQ/wXCx9fe4QKeWQAAAABJRU5ErkJggg",
    },
  },
];

export default InfoTable;
