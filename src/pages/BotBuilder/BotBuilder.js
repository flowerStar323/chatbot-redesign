import React, { useState } from "react";
// import { Button } from "rebass";
import BotMessageBox from "../../components/BotMessageBox/BotMessageBox";
import BotMessageBox1 from "../../components/BotMessageBox/BotMessageBox1";
import BotStepper from "../../components/BotStepper/BotStepper";
import ChatBuilderCard from "../../components/ChatBuilderCard/ChatBuilderCard";

import NotificationBox from "../../components/NotificationBox";
import { FlexLayout, Text } from "../../components/styles";
import downArrow from "../../assets/img/svgs/4-Create bot Action b/arrow-drop-down-line.svg";

import FreeTextAnswer from "../../components/FreeTextAnswer/FreeTextAnswer";
import DropdownMenu from "../../components/DropdownMenu";
import { SelectLayout } from "../agents/style";
// import { CustomModal } from "../../components/Modal";
import { StyledButton } from "../../components/Button";
import { CustomActionModal } from "../../components/CustomActionModal";
import humantakeover from "../../assets/img/svgs/7-Add Action(human take over)/human.svg";
import mail from "../../assets/img/svgs/7-Add Action(human take over)/mail.svg";
import conversation from "../../assets/img/svgs/7-Add Action(human take over)/conversation.svg";
import HumanTakeOver from "../../components/HumanTakeOver/HumanTakeOver";
import SendEmail from "../../components/SendEmailModal/SendEmail";
import Back from "../../assets/img/svgs/4-Create bot Action b/back.svg";
import Right from "../../assets/img/svgs/4-Create bot Action b/right.svg";
import Endconversation from "../../components/EndConversation/endconversation";
export default function BotBuilder() {
  const [activeAnswerType, setActiveAnswerType] = useState("predefined");
  const [activeCard, setActiveCard] = useState("");
  const [selectedModal, setSelectedModal] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [radioBtn, setRadioBtn] = useState("regularpath");
  const [gotodrop, setGotodrop] = useState("Path 02");
  const [addanswer, setAddanswer] = useState(false);
  const [addcondition, setAddcondition] = useState(false);
  const [gotodrop_add, setGotodrop_add] = useState("path 02");
  const [answerNum, setAnswerNum] = useState(0);


  const SelectModal = () => {
    if (selectedModal === "humantakeover") {
      return {
        title: "Human Takeover",
        icon: humantakeover,
      };
    }
    if (selectedModal === "sendemail") {
      return {
        title: "Send Email",
        icon: mail,
      };
    }
    if (selectedModal === "endconversation") {
      return {
        title: "End conversation",
        icon: conversation,
      };
    }
    return {
      title: "",
      icon: "",
    };
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "0rem auto",
          justifyContent: "space-between",
          maxWidth: "70vw",
          width: "70vw",
          paddingTop: "1%",
          height: "5vh",
        }}
      >
        <BotStepper
          isCompleted={true}
          title="Choose Trigger Bot Type"
          number={1}
        />
        <BotStepper isCompleted={true} title="Bot Builder" number={2} />
        <BotStepper isCompleted={false} title="Bot Simulator" number={3} />
        <BotStepper
          isCompleted={false}
          title="Code to Embed / QR to Scan"
          number={4}
        />
      </div>
      <NotificationBox />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FlexLayout
          height="35.38px"
          backgroundColor="#202945"
          borderRadius="9px 9px 0 0"
          justify="flex-start"
          // width="70%"
          minWidth="70vw"
        >
          <Text color="white" margin="0 0 0 20px">
            Chat Builder
          </Text>
        </FlexLayout>
        <div
          style={{
            minHeight: "60vh",
            maxHeight: "60vh",
            border: " 1px solid #8f9bb9",
            minWidth: "70vw",
            boxShadow: "0px 0px 36px #67656529",
            borderRadius: "0px 0px 5px 5px",
          }}
        >
          <div style={{ borderRadius: "5px", display: "flex", width: "100%", height: "59.8vh" }}>
            <div
              style={{
                width: "30%",
                backgroundColor: "#ECEBEC",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "0px 0px 0px 5px",
                overflowY: "scroll"
                // height: "100px",
              }}
            >
              <ChatBuilderCard
                title="A. Welcome"
                handleClick={() => {
                  setActiveCard("");
                  setAddanswer("false");
                }}
              />
              <ChatBuilderCard
                title="B. Introduction"
                handleClick={() => {
                  setActiveCard("B");
                }}
                activeCard={activeCard}
              />
            </div>
            <div
              style={{
                width: "70%",
                background: "white",
                borderRadius: "5px"

              }}
            >

              <div style={{ height: "90%", overflowY: "scroll", padding: "1rem 1rem 0 1rem", borderRadius: "5px" }}>
                <Text>1. Type Here Your Message Or Question</Text>
                <div style={{ marginBottom: "13.81px" }}>
                  <BotMessageBox b2text="connect" />
                </div>
                <Text>2. Choose Answer Type</Text>
                <div style={{ paddingLeft: "10px", }}>
                  <Text fontSize="13px">1. Fixed Answers</Text>
                  <div
                    style={{
                      width: "100%",
                      border: "1px solid #8F9BB9",
                      borderRadius: "10px",
                      margin: "0.5rem 0",
                      // overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #8F9BB9",
                        borderRadius: "5px 5px 0px 0px",
                      }}
                    >
                      <div
                        style={{
                          width: "50%",
                          height: "100%",
                          textAlign: "center",
                          background:
                            activeAnswerType === "predefined" ? "#BDBAD4" : "white",
                          color:
                            activeAnswerType === "predefined" ? "white" : "black",
                          fontSize: "0.8rem",
                          padding: "0.5rem",
                          cursor: "pointer",
                          fontFamily: "Roboto",
                          fontWeight: "600",
                          borderRight: "1px solid #8F9BB9",
                          borderRadius: "10px 0 0 0",

                          // borderBottom: "1px solid #8F9BB9",
                          // borderRadius: "5px",
                        }}
                        onClick={() => {
                          setActiveAnswerType("predefined");
                          setAddcondition(false);
                          setActiveCard("");
                        }}
                      >
                        Fixed Answers
                      </div>
                      <div
                        style={{
                          width: "50%",
                          textAlign: "center",
                          fontSize: "0.8rem",
                          padding: "0.5rem",
                          cursor: "pointer",
                          background:
                            activeAnswerType === "freetextanswers"
                              ? "#BDBAD4"
                              : "white",
                          color:
                            activeAnswerType === "freetextanswers"
                              ? "white"
                              : "black",
                          fontWeight: "600",
                          borderRadius: "0 10px 0 0",
                        }}
                        onClick={() => {
                          setActiveAnswerType("freetextanswers");
                          setAddanswer(false);
                          setActiveCard("");
                        }}
                      >
                        Free Text Answers
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", height: "33%" }}>
                      <div
                        style={{
                          width: "100%",
                          borderRadius: "5px"
                          // marginLeft: "1.2rem",
                        }}
                      >
                        {activeAnswerType === "predefined" ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                // alignItems: "center",
                                height: "100%",
                                // justifyContent: "center",
                                paddingTop: "10px"
                                // marginTop: "1rem",
                              }}
                            >
                              <div style={{ width: "50%", paddingRight: "10px", marginLeft: "2%" }}>
                                <BotMessageBox1 />
                                <div
                                  style={{
                                    color: "#202945",
                                    fontSize: "0.8rem",
                                    fontWeight: "700",
                                    cursor: "pointer"
                                    // marginBottom: "10px"
                                  }}
                                >
                                  <a onClick={() => setAddanswer(true)}>+ Add Answer</a>
                                </div>
                              </div>
                              <div style={{ width: "50%" }}>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    // width: "70%",
                                  }}
                                >
                                  <div
                                    className=""
                                    style={{
                                      color: "#FF4081",
                                      fontSize: "15px",
                                      fontWeight: "700",
                                      marginBottom: "0px",
                                      marginTop: "2%"
                                    }}
                                  >
                                    Next Destination
                                  </div>

                                  <DropdownMenu
                                    list={[
                                      {
                                        id: "addpath",
                                        label: "Add Path",
                                      },
                                      {
                                        id: "sendendmessage",
                                        label: "Send End Message",
                                      },
                                      {
                                        id: "sendemail",
                                        label: "Send Email",
                                      },
                                      {
                                        id: "notigyagent",
                                        label: "Notify Agent",
                                      },
                                    ]}
                                    click={(e) => {
                                      setGotodrop(e.label);
                                    }}
                                    left="-10px"
                                  >
                                    <StyledButton
                                      style={{
                                        background: "white",
                                        border: "1px solid #BAC2C7",
                                        color: "black",
                                        fontSize: "0.7rem",
                                        minWidth: "200px",
                                        minHeight: activeAnswerType === "freetextanswers" ? "53px" : "46px",
                                        display: "flex",
                                      }}
                                    >
                                      {gotodrop}<img src={downArrow} alt="" style={{ marginLeft: "110px" }} />
                                    </StyledButton>
                                  </DropdownMenu>
                                </div>
                              </div>


                            </div>
                          </>
                        ) : (
                          <FreeTextAnswer
                            radioBtn={radioBtn}
                            setAddcondition={setAddcondition}
                            setRadioBtn={setRadioBtn}
                          />
                        )}
                      </div>


                    </div>
                  </div>
                  {addanswer === true && <Text fontSize="13px">2. Add Answers</Text>}
                  {addanswer === true && <div style={{ border: "1px solid #e2e2e2", borderRadius: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        // alignItems: "center",
                        height: "100%",
                        // justifyContent: "center",
                        // paddingTop: "10px"
                        // marginTop: "1rem",
                      }}
                    >
                      <div style={{ width: "50%", paddingRight: "10px", marginLeft: "2%" }}>
                        <BotMessageBox1 />
                      </div>
                      <div style={{ width: "50%" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            // width: "70%",
                          }}
                        >
                          <div
                            className=""
                            style={{
                              color: "#FF4081",
                              fontSize: "15px",
                              fontWeight: "700",
                              marginBottom: "0px",
                              marginTop: "2%"
                            }}
                          >
                            Next Destination
                          </div>

                          <DropdownMenu
                            list={[
                              {
                                id: "addpath",
                                label: "Add Path",
                              },
                              {
                                id: "sendendmessage",
                                label: "Send End Message",
                              },
                              {
                                id: "sendemail",
                                label: "Send Email",
                              },
                              {
                                id: "notigyagent",
                                label: "Notify Agent",
                              },
                            ]}
                            click={(e) => {
                              setGotodrop_add(e.label);
                            }}
                            left="-10px"
                          >
                            <StyledButton
                              style={{
                                background: "white",
                                border: "1px solid #BAC2C7",
                                color: "black",
                                fontSize: "0.7rem",
                                minWidth: "200px",
                                minHeight: activeAnswerType === "freetextanswers" ? "53px" : "46px",
                                display: "flex",
                              }}
                            >
                              {gotodrop_add}<img src={downArrow} alt="" style={{ marginLeft: "110px" }} />
                            </StyledButton>
                          </DropdownMenu>
                        </div>
                      </div>


                    </div>
                  </div>}
                  {addcondition === true && <Text fontSize="13px">2. Add Condition</Text>}
                  {addcondition === true && <div style={{ padding: "0 5px 0 12px", display: "flex", flexDirection: "row", border: "1px solid #e2e2e2", borderRadius: "10px" }}><div
                    style={{
                      width: "47%",
                      border: "1px solid #8F9BB9",
                      borderRadius: "10px",
                      margin: "2%",
                      position: "relative"
                    }}
                  >
                    <textarea
                      style={{
                        height: "80%",
                        margin: 0,
                        padding: "5px",
                        border: "none",
                        outline: "none",
                        borderRadius: "10px",
                        width: "100%",
                        fontSize: "0.8rem",
                      }}
                      rows={3}
                      cols={1}
                    ></textarea>
                    <div
                      style={{
                        height: "25px",
                        background: "#F4F6FD",
                        borderRadius: "0px 0px 10px 10px",
                        display: "flex",
                        justifyContent: "space-between",
                        overflow: "hidden",
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                      }}
                    >
                      <StyledButton
                        variant="grey"
                        style={{
                          height: "100%",
                          borderRadius: "0",
                          fontWeight: "400",
                          fontSize: "10px",
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        Set As Variable
                        <img src={downArrow} alt="" />
                      </StyledButton>
                    </div>
                  </div>
                    <div>
                      <div style={{ marginLeft: "3%", width: radioBtn === "conditional" ? "100%" : "100%" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            // width: "70%",
                            paddingTop: "6%"
                          }}
                        >
                          <div
                            className=""
                            style={{
                              color: "#FF4081",
                              fontSize: "15px",
                              fontWeight: "700",
                            }}
                          >
                            Next Destination
                          </div>

                          <DropdownMenu
                            list={[
                              {
                                id: "addpath",
                                label: "Add Path",
                              },
                              {
                                id: "sendendmessage",
                                label: "Send End Message",
                              },
                              {
                                id: "sendemail",
                                label: "Send Email",
                              },
                              {
                                id: "notigyagent",
                                label: "Notify Agent",
                              },
                            ]}
                            click={(e) => {
                              setGotodrop(e.label);
                            }}
                            left="-10px"
                          >
                            <StyledButton
                              style={{
                                background: "white",
                                border: "1px solid #BAC2C7",
                                color: "black",
                                fontSize: "12px",
                                minWidth: "160px",
                                minHeight: "53px",
                                display: "flex",
                              }}
                            >
                              {gotodrop}<img src={downArrow} alt="" />
                            </StyledButton>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>}


                </div>


                {activeCard === "B" && <div style={{ marginTop: "10px" }}><Text>3. Add Action</Text></div>}
                {activeCard === "B" && (
                  <DropdownMenu
                    list={[
                      {
                        id: "humantakeover",
                        label: "Human Takeover",
                      },
                      {
                        id: "sendemail",
                        label: "Send Email",
                      },
                      {
                        id: "endconversation",
                        label: "End conversation",
                      },
                    ]}
                    click={(e) => {
                      setIsVisible(true);
                      console.log(e.id);
                      setSelectedModal(e.id);
                    }}
                    left="-10px"
                  >
                    <SelectLayout>
                      <StyledButton
                        style={{
                          background: "white",
                          border: "1px solid #BAC2C7",
                          color: "#BAC2C7",
                          fontSize: "0.9rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          // margin: "0.5rem 0",
                          width: "100%",
                        }}
                      >
                        No Action Choosen <img src={downArrow} alt="" style={{ marginLeft: "74%" }} />
                      </StyledButton>
                    </SelectLayout>
                  </DropdownMenu>
                )}













































              </div>
              <div style={{ height: "10%", paddingTop: "5px", float: "right", paddingRight: "4%", borderRadius: "10px" }}>
                <div style={{ display: "flex", width: "100%", height: "3.5vh" }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      // alignItems: "center",
                      // justifyContent: "space-evenly"
                    }}
                  >
                    <StyledButton
                      variant="grey"
                      className="px-2"
                      style={{ fontSize: "0.7rem", width: "70px" }}
                    >
                      <img
                        src={Back}
                        style={{
                          marginRight: "0.5rem",
                        }}
                        alt="back"
                      />
                      Back
                    </StyledButton>
                    <StyledButton
                      variant="pink"
                      style={{
                        fontSize: "0.7rem",
                        width: "100px",
                        marginLeft: "10px"
                      }}
                      className="px-2"
                    >
                      Next Step
                      <img src={Right} style={{ marginLeft: "0.5rem" }} alt="back" />
                    </StyledButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <CustomActionModal
        visible={isVisible}
        title="Add Action"
        subTitle={SelectModal().title}
        icon={SelectModal().icon}
        setVisible={setIsVisible}
      >
        {selectedModal === "humantakeover" && (
          <HumanTakeOver
            handleClose={() => {
              setIsVisible(false);
            }}
          />
        )}
        {selectedModal === "sendemail" && (
          <SendEmail
            handleClose={() => {
              setIsVisible(false);
            }}
          />
        )}
        {selectedModal === "endconversation" && (
          <Endconversation
            handleClose={() => {
              setIsVisible(false);
            }}
          />
        )}
      </CustomActionModal>
    </>
  );
}
