import React from "react";
import BotStepper from "../../components/BotStepper/BotStepper";
import NotificationBox from "../../components/NotificationBox";
import { FlexLayout, Text } from "../../components/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BotBuilder() {
  const styleddiv = {
    padding: "11px 18px 10px 21px",
    marginBottom: "5px",
    background: "#8F9BB9",
    color: "#fff",
    borderRadius: "19px 19px 19px 19px",
    font: "normal normal normal 12px / 14px Roboto",
    width: "auto",
    float: "right",
    clear: "both",
  };

  const styleddiv1 = {
    padding: "11px 18px 10px 21px",
    marginBottom: "5px",
    background: "#8F9BB9",
    color: "#fff",
    borderRadius: "19px 19px 6px 19px",
    font: "normal normal normal 12px / 14px Roboto",
    width: "auto",
    float: "right",
    clear: "both",
  };

  const stylebtn = {
    cursor: "pointer",
    padding: "6px 14px 5px 15px",
    margin: "0px 0px 0px 4px",
    background: "#FFFFFF 0% 0 % no - repeat padding- box; back",
    border: "1px solid #8F9BB9",
    borderRadius: "19px",
    color: "#000",
    font: "normal normal normal 12px/14px Roboto",
  };

  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          margin: "1rem auto",
          justifyContent: "space-between",
          maxWidth: "870px",
          width: "100%",
        }}
      >
        <BotStepper isCompleted={true} title="Bot Builder" number={1} />
        <BotStepper isCompleted={true} title="Bot Simulator....." number={2} />
        <BotStepper
          isCompleted={true}
          title="Target audience....."
          number={3}
        />
        <BotStepper
          isCompleted={true}
          title="Connect WhatsApp Account....."
          number={4}
        />
        <BotStepper isCompleted={false} title="Run....." number={5} />
        <BotStepper isCompleted={false} title="Metrics....." number={6} />
      </div>
      <NotificationBox />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "521px",
        }}
      >
        <FlexLayout
          height="35.38px"
          backgroundColor="#202945"
          borderRadius="9px 9px 0 0"
          justify="flex-start"
          overflow="hidden"
          minWidth="870px"
        >
          <Text color="white" margin="0 0 0 20px">
            Bot Simulator
          </Text>
        </FlexLayout>
        <div
          style={{
            height: "100%",
            border: " 1px solid #8f9bb9",
            minWidth: "870px",
            minHeight: "486px",
            boxShadow: "0px 0px 36px #67656529",
            borderRadius: "0px 0px 20px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "486px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <div
                  style={{
                    font: "normal normal medium 14px/17px Roboto",
                    color: "#202945",
                    marginTop: "10.62px",
                    marginLeft: "21px",
                  }}
                >
                  1. Test your bot on WhatsApp
                </div>
                <div
                  style={{
                    fontWeight: "400",
                    fontSize: "0.55rem",
                    color: "#bac2c7",
                    marginTop: "3px",
                    marginLeft: "20px",
                    font: "normal normal normal 12px/14px Roboto",
                  }}
                >
                  And have a look at the conversation from chats.
                </div>
              </div>
              <div style={{ padding: "11.8px 50px 16.55px 45.6px" }}>
                <div
                  style={{
                    position: "relative",
                    maxWidth: "202.8px",
                    maxHeight: "415.65px",
                    minWidth: "202.8px",
                    minHeight: "415.65px",
                    background: "#232323 0% 0% no-repeat padding-box",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      border: "1px solid #9B9B9B",
                      borderRadius: "50%",
                      width: "6px",
                      top: "21.09px",
                      left: "64.19px",
                      height: "6px",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      border: "1px solid #9B9B9B",
                      borderRadius: "7px",
                      width: "38.92px",
                      top: "20.37px",
                      left: "82.13px",
                      height: "7.53px",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      top: "43.41px",
                      padding: "0px 8.27px 0px 7.97px",
                    }}
                  >
                    <img
                      width="186.56px"
                      height="330.02px"
                      src="iphoechat.png"
                      alt=""
                    ></img>
                  </div>
                  <div
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      border: "1px solid #9B9B9B",
                      borderRadius: "20px",
                      width: "61.58px",
                      top: "383.46px",
                      left: "70.08px",
                      height: "20.53px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div style={{ width: "569px" }}>
              <div
                style={{
                  maxHeight: "389.5px",
                  minHeight: "389.5px",
                  padding: "27px 18px 5px 18px",
                }}
              >
                <div style={styleddiv1}>HI this is Amit goyani 😊</div>
                <div style={styleddiv}>
                  On December 31, we're going to host the biggest new years eve
                  secret party in Canada!
                </div>
                <div style={styleddiv}>
                  Do you want to be the first to know about the secret place?
                </div>
                <div
                  style={{
                    marginBottom: "5px",
                    display: "flex",
                    flexDirection: "row",
                    float: "right",
                    clear: "both",
                  }}
                >
                  <div style={stylebtn}>Yes</div>
                  <div style={stylebtn}>No</div>
                </div>
                <div style={styleddiv}>Awesome! 👍</div>
              </div>
              <div
                style={{
                  minHeight: "98.5px",
                  maxHeight: "98.5px",
                  borderColor: "#E2E8F8",
                  borderWidth: "1px",
                  borderStyle: "solid none",
                  display: "flex",
                  flexDirection: "row",
                  padding: "33.5px 51.34px 25px 39.09px",
                }}
              >
                <div
                  style={{
                    height: "38px",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                    border: "1px solid #9FABD1",
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    minWidth: "320px",
                    maxWidth: "320px",
                    padding: "12px 0px 12px 18.99px",
                    font: "normal normal normal 12px/14px Roboto",
                  }}
                  contentEditable={true}
                ></div>
                <div
                  style={{
                    cursor: "pointer",
                    height: "37.55px",
                    maxWidth: "59.57px",
                    minWidth: "59.57px",
                    background: "#F50057 0% 0% no-repeat padding-box",
                    padding: "5.72px 20.73px 9.72px 20.73px",
                  }}
                >
                  <img
                    width="20.69px"
                    height="20.08px"
                    src="forword.png"
                    alt=""
                  ></img>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    display: "flex",
                    minheight: "37.55px",
                    minWidth: "100.63px",
                    background: "#202945 0% 0% no-repeat padding-box",
                    borderRadius: "0px 8px 8px 0px",
                    padding: "12px 0px 11.55px 5.98px",
                  }}
                >
                  <FontAwesomeIcon icon={["far", "coffee"]} />
                  <FontAwesomeIcon icon={["far", "coffee"]} />
                  <FontAwesomeIcon icon={["far", "coffee"]} />
                  <FontAwesomeIcon icon="coffee" />
                  {/* <img width="14px" height="14px" src="reload.png" /> */}
                  <span
                    style={{
                      marginLeft: "8.63px",
                      font: "12px/14px Roboto",
                      color: "#fff",
                    }}
                  >
                    Re Simulate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
