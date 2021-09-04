import React, { useState } from "react";
//import agent style
import {
  StyledAgent,
  RowLayout,
  TextArea,
  MessageDiv,
  SelectLayout,
} from "./style";
//import component
import { Button } from "../../components/Button";
import { FlexLayout, Input, Text } from "../../components/styles";
import { AgentDetail } from "../../components/AgentView";
import { Message } from "../../components/Message";
import { CustomModal } from "../../components/Modal";
import { Avatar } from "../../components/Avatar";
import DropdownMenu from "../../components/DropdownMenu";
import DropdownArea from "../../components/DropdownArea";
//import svgs
import SearchIcon from "../../assets/img/svgs/search-icon.svg";
import SmileIcon from "../../assets/img/svgs/19-Agents/details/smile_icon.svg";
import SendIcon from "../../assets/img/svgs/19-Agents/details/white_Icon-send.svg";
import AttachIcon from "../../assets/img/svgs/19-Agents/details/attachment.svg";
// import DropDownIcon from "../../assets/img/svgs/19-Agents/details/dropdown-down-arrow.svg";
import ExpandArrow from "../../assets/img/svgs/19-Agents/details/expand-arrow.svg";
import EditIcon from "../../assets/img/svgs/19-Agents/details/edit.svg";
import RefereshIcon from "../../assets/img/svgs/19-Agents/details/Refresh.svg";
import AddIcon from "../../assets/img/svgs/19-Agents/details/AddTags.svg";
import TrashIcon from "../../assets/img/svgs/19-Agents/details/trash.svg";
import RightArrow from "../../assets/img/svgs/19-Agents/details/agent_right_arrow.svg";

import NewDropIcon from "../../assets/img/svgs/19-Agents/details/Icon material-arrow-drop-down.svg";
import CloseExpand from "../../assets/img/svgs/19-Agents/details/close_expand_left_arrow.svg";
//import data
import { agentdata } from "../../constant/agentdata";
import { chatbotdata } from "../../constant/menudata";
import { messagdata } from "../../constant/messagedata";
const Agents = () => {
  const [visible, setVisible] = useState(false);
  const [slide, setSlide] = useState(false);
  const onClickModal = () => {
    setVisible(!visible);
  };
  const onSelected = (e) => {
    console.log(e);
  };

  return (
    <>
      <StyledAgent>
        <RowLayout>
          <Input
            outline="none"
            placeholder="Search agent"
            border="transparent"
            color="#BAC2C7"
            width="100%"
          />

          <img src={SearchIcon} alt="search-icon" />
        </RowLayout>
        <FlexLayout
          width="90%"
          margin="1rem 0 0 0"
          justify="space-between"
          wrap="nowrap"
        >
          <Text fontSize="25px" opacity="1" padding="0 0 0 3px">
            Agent Chat Details
          </Text>
          <FlexLayout
            display="grid"
            grid-template-columns="repeat(auto-fill, minmax(180px, 1fr))"
            grid-auto-rows="auto"
            gap="16px"
          >
            <Button variant="grey" width="76px" height="37px">
              <FlexLayout>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4.215"
                  height="8.43"
                  viewBox="0 0 4.215 8.43"
                >
                  <path
                    id="left-arrow"
                    d="M0,0,4.215,4.215,0,8.43Z"
                    transform="translate(4.215 8.43) rotate(180)"
                    fill="#fff"
                  />
                </svg>
                <Text color="white" fontSize="12px" margin="0 0 0 2px">
                  Back
                </Text>
              </FlexLayout>
            </Button>
          </FlexLayout>
        </FlexLayout>
        <FlexLayout
          width="90%"
          margin="25px 0 0 0"
          justify="flex-start"
          wrap="nowrap"
          mobileDirection="column"
        >
          <FlexLayout
            borderRadius="13px"
            Width="100%"
            maxWidth="25%"
            height="75vh"
            padding="10px 10px 9px 10px"
            backgroundColor="white"
            align="flex-start"
            justify="flex-start"
            boxShadow="0px 0px 52px #4444440D;"
          >
            <FlexLayout
              backgroundColor="#F7F8F8"
              justify="flex-start"
              align="flex-start"
              width="100%"
              height="100%"
              borderRadius="13px"
            >
              <FlexLayout>
                <FlexLayout padding="0.5rem" width="100%">
                  <AgentDetail data={agentdata} />
                </FlexLayout>
                <FlexLayout
                  justify="flex-start"
                  padding="0 13px 0 13px"
                  width="100%"
                >
                  <FlexLayout
                    margin="20px 0 0 0"
                    justify="space-between"
                    backgroundColor="white"
                    height="37px"
                    width="100%"
                    borderRadius="10px"
                    padding="0 10px 0 17px"
                  >
                    <DropdownMenu
                      list={chatbotdata}
                      click={onSelected}
                      left="-10px"
                    >
                      <SelectLayout style={{ width: "100%" }}>
                        <Text fontSize="12px">Whatsapp Bots</Text>
                        <img className="arrow" src={RightArrow} alt="svg" />
                      </SelectLayout>
                    </DropdownMenu>
                  </FlexLayout>
                  <FlexLayout
                    margin="20px   0 0 0"
                    align="flex-start"
                    justify="flex-start"
                    backgroundColor="white"
                    height="37px"
                    width="100%"
                    borderRadius="10px"
                    padding="0 10px 0 17px"
                  >
                    <DropdownMenu
                      list={chatbotdata}
                      click={onSelected}
                      left="-10px"
                    >
                      <SelectLayout>
                        <Text fontSize="12px">Website Bots</Text>
                        <img className="arrow" src={RightArrow} alt="svg" />
                      </SelectLayout>
                    </DropdownMenu>
                  </FlexLayout>
                </FlexLayout>
              </FlexLayout>
            </FlexLayout>
          </FlexLayout>
          <FlexLayout
            direction="column"
            width="70%"
            height="75vh"
            align="flex-start"
            justify="flex-start"
            margin="0 0 0 1rem"
            wrap="nowrap"
          >
            <FlexLayout
              height="5vh"
              backgroundColor="#202945"
              borderRadius="9px 9px 0 0"
              width="100%"
              justify="flex-start"
            >
              <Text color="white" margin="0 0 0 20px">
                Chat Preview
              </Text>
            </FlexLayout>

            <FlexLayout
              border="1px solid #9FABD1"
              borderRadius="0 0 22px 22px"
              width="100%"
              height="70vh"
              justify="flex-start"
              align="flex-start"
              wrap="nowrap"
              gap="29.5px"
            >
              <FlexLayout
                direction="column"
                width={slide ? "100%" : "50%"}
                transition="0.7s ease"
                backgroundColor="#ECEBEC"
                wrap="nowrap"
                height="100%"
                borderRadius="0 0 23px 23px"
                position="relative"
                padding="0 0 0 13.09px "
              >
                <FlexLayout
                  direction="column"
                  height="100%"
                  width="100%"
                  borderRadius="0 0 0px 22px"
                  align="flex-start"
                  justify="space-between"
                  overflowy="scroll"
                  overflowx="hidden"
                  position="relative"
                  wrap="nowrap"
                  padding="0 3px 0 0"
                >
                  <FlexLayout width="100%">
                    <FlexLayout
                      padding="0 6px"
                      borderRadius="13px"
                      backgroundColor="white"
                      margin="34.73px 0 34.73px 0"
                    >
                      <Text fontSize="10px">25 May, 2021</Text>
                    </FlexLayout>
                  </FlexLayout>
                  <MessageDiv>
                    {messagdata.map((value, key) => {
                      return <Message key={key + 1} data={value}></Message>;
                    })}
                  </MessageDiv>
                </FlexLayout>

                <FlexLayout width="100%" display="hidden">
                  <FlexLayout padding="23px 4px" width="100%">
                    <FlexLayout
                      justify="space-between"
                      height="31px"
                      borderRadius="5px"
                      border="0.5px solid"
                      backgroundColor="white"
                      borderColor="#8F9BB9"
                      wrap="nowrap"
                      width="100%"
                    >
                      <FlexLayout
                        padding="0 0 0 12.83px"
                        width="auto"
                        flexGrow={1}
                        justify="left"
                        min-width="10px"
                        style={{ overflow: "hidden" }}
                      >
                        <Input
                          fontSize="10px"
                          placeholder="Type your message here"
                          style={{
                            alignSelf: "flex-end",
                          }}
                        />
                      </FlexLayout>
                      <FlexLayout
                        wrap="nowrap"
                        // width="115px"
                        height="31px"
                        // justify="space-between"
                      >
                        <FlexLayout
                          height="100%"
                          width={"20px"}
                          cursor="pointer"
                        >
                          <img src={SmileIcon} alt="search" />
                        </FlexLayout>
                        <FlexLayout
                          height="100%"
                          width={"20px"}
                          cursor="pointer"
                        >
                          <img src={AttachIcon} alt="search" />
                        </FlexLayout>
                        <FlexLayout
                          height="100%"
                          backgroundColor="black"
                          width="33px"
                          borderRadius="0 5px 5px 0"
                          cursor="pointer"
                        >
                          <img src={SendIcon} alt="search" />
                        </FlexLayout>
                      </FlexLayout>
                    </FlexLayout>
                  </FlexLayout>
                </FlexLayout>
                {slide ? (
                  <FlexLayout
                    position="absolute"
                    backgroundColor="#F50057"
                    borderRadius="10px 0 0 10px"
                    width="21px"
                    height="45px"
                    right="0px"
                    top="50%"
                    cursor="pointer"
                    onClick={() => {
                      setSlide(!slide);
                    }}
                  >
                    <img src={CloseExpand} alt="arrow" />
                  </FlexLayout>
                ) : (
                  <FlexLayout
                    position="absolute"
                    top="50%"
                    right="-21px"
                    backgroundColor="#5C6479"
                    borderRadius="0px 10px 10px 0px"
                    width="21px"
                    height="45px"
                    cursor="pointer"
                    onClick={() => {
                      setSlide(!slide);
                    }}
                  >
                    <img src={ExpandArrow} alt="arrow" />
                  </FlexLayout>
                )}
              </FlexLayout>
              {slide ? (
                <></>
              ) : (
                <FlexLayout
                  width="50%"
                  padding="0 30px 0 0"
                  display={slide ? "block" : "flex"}
                  mobileDirection="column"
                >
                  <FlexLayout
                    width="100%"
                    direction="column"
                    align="flex-start"
                    justify="space-between"
                  >
                    <FlexLayout margin="1rem 0" justify="flex-start">
                      <Text color="#202945" fontSize="16px">
                        1. Chat Status
                      </Text>
                      <FlexLayout
                        direction="column"
                        margin="6.42px 0 0 0"
                        width="100%"
                        align="flex-start"
                      >
                        <Button size="small" variant="lime">
                          {/* <img src={ChatStatus} alt="status" /> */}
                          New
                          <img src={NewDropIcon} alt="drop" />
                        </Button>
                      </FlexLayout>
                    </FlexLayout>
                    <FlexLayout
                      margin="1rem 0 0 0"
                      width="100%"
                      justify="flex-start"
                    >
                      <Text color="#202945" fontSize="16px">
                        2. Chat Tags
                      </Text>
                      <FlexLayout
                        direction="column"
                        margin="6.42px 0 0 0"
                        width="100%"
                      >
                        <FlexLayout
                          width="100%"
                          height="10vh"
                          border="1px solid #8F9BB9"
                          borderRadius="10px 10px 0 0"
                          justify="center"
                        >
                          <FlexLayout
                            width="100%"
                            gap="9px"
                            height="10vh"
                            overflowy="scroll"
                            justify="center"
                            padding="10px 0 0 5px"
                          >
                            <Button size="small" variant="transparent">
                              Tag-1
                            </Button>
                            <Button size="small" variant="transparent">
                              Tag-2
                            </Button>
                            <Button size="small" variant="transparent">
                              Tag-3
                            </Button>
                            <Button size="small" variant="transparent">
                              Tag-1
                            </Button>
                            <Button size="small" variant="transparent">
                              Tag-2
                            </Button>
                            <Button size="small" variant="transparent">
                              Tag-3
                            </Button>
                          </FlexLayout>
                        </FlexLayout>
                        <FlexLayout width="100%" height="19px">
                          <Button
                            size="leftRadius"
                            variant="lightRed"
                            width="38%"
                          >
                            <DropdownArea
                              list={chatbotdata}
                              click={onSelected}
                              left="-25px"
                              top="30px"
                              gap="10px"
                            >
                              <FlexLayout gap="3px" wrap="nowrap">
                                <img src={AddIcon} alt="add svg" /> AddTags
                              </FlexLayout>
                            </DropdownArea>
                          </Button>
                          <Button size="noRadius" variant="grey" width="30%">
                            <FlexLayout gap="3px" wrap="nowrap">
                              <img src={EditIcon} alt="edit svg" /> Edit
                            </FlexLayout>
                          </Button>
                          <Button
                            size="rightRadius"
                            variant="lightBlue"
                            width="32%"
                          >
                            <FlexLayout gap="3px" wrap="nowrap">
                              <img src={TrashIcon} alt="add svg" /> Delete
                            </FlexLayout>
                          </Button>
                        </FlexLayout>
                      </FlexLayout>
                    </FlexLayout>
                    <FlexLayout margin="1rem 0 0 0">
                      <Text color="#202945" fontSize="16px">
                        3. Chat Comments
                      </Text>
                    </FlexLayout>
                    <FlexLayout
                      direction="column"
                      margin="6.42px 0 0 0"
                      width="100%"
                      padding="0 11px 0 0"
                    >
                      <FlexLayout
                        width="100%"
                        height="5vh"
                        border="1px solid #8F9BB9"
                        direction="column"
                        borderRadius="10px 10px 0 0"
                        className="comments"
                      >
                        <FlexLayout width="100%">
                          <TextArea
                            placeholder="HI this is Amit goyani 😊"
                            style={{ height: "4vh" }}
                          ></TextArea>
                        </FlexLayout>
                      </FlexLayout>
                      <FlexLayout width="100%" height="19px">
                        <Button
                          size="leftRadius"
                          variant="lightRed"
                          width="50%"
                        >
                          <DropdownArea
                            list={chatbotdata}
                            click={onSelected}
                            left="-25px"
                            top="30px"
                            gap="10px"
                          >
                            <FlexLayout gap="3px" wrap="nowrap">
                              <img src={AddIcon} alt="add svg" /> AddTags
                            </FlexLayout>
                          </DropdownArea>
                        </Button>

                        <Button
                          size="rightRadius"
                          variant="lightBlue"
                          width="50%"
                        >
                          <FlexLayout gap="3px" wrap="nowrap">
                            <img src={AddIcon} alt="add svg" /> Delete
                          </FlexLayout>
                        </Button>
                      </FlexLayout>
                    </FlexLayout>

                    <FlexLayout margin="1rem 0 0 0">
                      <Text color="#202945" fontSize="16px">
                        4. Assign to Other Agent
                      </Text>
                    </FlexLayout>

                    <FlexLayout
                      direction="column"
                      margin="6.42px 0 0 0"
                      width="100%"
                    >
                      <FlexLayout
                        width="100%"
                        height="7vh"
                        border="1px solid #8F9BB9"
                        direction="column"
                        borderRadius="10px 10px 0 0"
                        padding="2px 0"
                        overflowy="scroll"
                        justify="flex-start"
                      >
                        <Avatar /> <Avatar /> <Avatar />
                        <Avatar /> <Avatar />
                      </FlexLayout>
                      <FlexLayout width="100%" height="19px">
                        <Button
                          size="leftRadius"
                          variant="lightRed"
                          onClick={() => {
                            onClickModal();
                          }}
                          width="40%"
                        >
                          Select Agent
                        </Button>
                        <Button size="noRadius" variant="grey" width="30%">
                          <FlexLayout gap="3px" wrap="nowrap">
                            <img src={RefereshIcon} alt="refersh svg" /> Refresh
                          </FlexLayout>
                        </Button>
                        <Button
                          size="rightRadius"
                          variant="lightBlue"
                          width="30%"
                        >
                          Done
                        </Button>
                      </FlexLayout>
                    </FlexLayout>
                  </FlexLayout>
                </FlexLayout>
              )}
            </FlexLayout>
          </FlexLayout>
        </FlexLayout>
      </StyledAgent>
      <CustomModal
        visible={visible}
        setVisible={onClickModal}
        title="Select Agent"
      >
        <FlexLayout direction="column" width="100%" align="flex-start">
          <Text fontSize="14px">Online Agents</Text>
          <DropdownArea
            list={chatbotdata}
            click={onSelected}
            top="40px"
            left="0px"
          >
            <FlexLayout
              border="1px solid #9FABD1"
              borderRadius="10px"
              width="100%"
            >
              <SelectLayout>
                <FlexLayout
                  width="100%"
                  justify="space-between"
                  padding="10px 10px 0 10px"
                  cursor="pointer"
                >
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                </FlexLayout>
                <FlexLayout width="55px" height="51px">
                  <img className="arrow" src={RightArrow} alt="svg" />
                </FlexLayout>
              </SelectLayout>
            </FlexLayout>
          </DropdownArea>
          <Text fontSize="14px" margin="12px 0 0 0">
            Offline Agents
          </Text>
          <DropdownArea
            list={chatbotdata}
            click={onSelected}
            top="40px"
            left="0px"
          >
            <FlexLayout
              border="1px solid #9FABD1"
              borderRadius="10px"
              width="100%"
            >
              <SelectLayout>
                <FlexLayout
                  width="100%"
                  justify="space-between"
                  padding="10px 10px 0 10px"
                  cursor="pointer"
                >
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                </FlexLayout>
                <FlexLayout width="55px" height="51px">
                  <img className="arrow" src={RightArrow} alt="svg" />
                </FlexLayout>
              </SelectLayout>
            </FlexLayout>
          </DropdownArea>
          <FlexLayout gap="7px" margin="13px 0 0 0" width="100%">
            <Button variant="grey">Add</Button>
            <Button
              variant="lightRed"
              onClick={() => {
                onClickModal();
              }}
            >
              Cancel
            </Button>
          </FlexLayout>
        </FlexLayout>
      </CustomModal>
    </>
  );
};
export default Agents;
