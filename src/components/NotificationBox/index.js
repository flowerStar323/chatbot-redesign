import React from "react";
import profile from "../../assets/img/svgs/11-Participants/hello.jpg";
import { Input } from "../styles";
import {
  NotificationBoxContainer,
  DetailsContainer,
  GreetingsContainer,
  SubHeading,
  SendButtonContainer,
} from "./style";
// import SendIcon from "../../assets/img/svgs/19-Agents/details/white_Icon-send.svg";
import SendIcon from "../../assets/img/svgs/19-Agents/details/white_Icon-send.svg";

export default function NotificationBox() {
  return (
    <NotificationBoxContainer>
      <img
        src={profile}
        alt=""
        height="100%"
        width="20%"
        style={{ objectFit: "cover" }}
      />
      <DetailsContainer>
        <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
          <GreetingsContainer>Hello Amit,</GreetingsContainer>
          <SubHeading>Here you can create the WhatsApp bot.</SubHeading>

          <div style={{ width: "100%", margin: "1rem 0" }}>
            <div
              style={{ fontSize: "0.8rem", margin: "5px", fontWeight: "800" }}
            >
              Chatbot Name <span style={{ color: "#F50057" }}>*</span>
            </div>
            <div style={{ display: "flex", height: "5vh" }}>
              <Input
                width="60%"
                height="100%"
                fontSize="11px"
                placeholder="Enter here your chatbot name"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #9FABD1",
                  padding: "0.6rem 0.5rem",

                  borderRadius: "8px",
                  // fontSize: "0.8rem",
                }}
              />
              <SendButtonContainer>
                <img src={SendIcon} alt="search" />
              </SendButtonContainer>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "40%",
          }}
        >

        </div>
      </DetailsContainer>
    </NotificationBoxContainer>
  );
}
