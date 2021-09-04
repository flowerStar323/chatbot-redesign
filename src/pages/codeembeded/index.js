import React, { useState } from "react";
import { FlexLayout, Text } from "../../components/styles";
import {
  CodeHeader,
  CodeParentContainer,
  CodeHeaderContainer,
  CodeContainer,
} from "./style";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import NotificationBox from "../../components/NotificationBox";
import BotStepper from "../../components/BotStepper/BotStepper";
export default function CodeEmbed() {
  const codeString = `<div id='p117-chat'>
  </div >
  <!--- We use Jquery --->
  <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script>
$(function(){
    const chatId = '644646464654646';
    pollwa("#p117-chat",chatId)
})
</script>
    `;
  const [activeTrigger, setActiveTrigger] = useState("type1");
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          margin: "0rem auto",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "870px",
          width: "70%",
          height: "10vh",
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlexLayout
          height="35.38px"
          backgroundColor="#202945"
          borderRadius="9px 9px 0 0"
          width="100%"
          justify="flex-start"
          overflow="hidden"
          maxWidth="870px"
        >
          <Text color="white" margin="0 0 0 20px">
            Code To Embed
          </Text>
        </FlexLayout>

        <CodeParentContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "2rem 0",
            }}
          >
            <CodeHeaderContainer>
              <CodeHeader
                style={
                  activeTrigger !== "type1"
                    ? { backgroundColor: " #bdbad4", color: "white" }
                    : {}
                }
                onClick={() => {
                  setActiveTrigger("type1");
                }}
              >
                <Text color={activeTrigger !== "type1" ? "white" : ""}>
                  Trigger type 1-Scan QR Code by end user
                </Text>
              </CodeHeader>
              <CodeHeader
                style={
                  activeTrigger !== "type2"
                    ? { backgroundColor: " #bdbad4", color: "white" }
                    : {}
                }
                onClick={() => {
                  setActiveTrigger("type2");
                }}
              >
                <Text color={activeTrigger !== "type2" ? "white" : ""}>
                  Trigger type 2-Contact request by end user
                </Text>
              </CodeHeader>
            </CodeHeaderContainer>
            <CodeContainer>
              <SyntaxHighlighter
                customStyle={{
                  width: "100%",
                  height: "100%",
                  padding: "1.5rem",
                  margin: 0,
                  backgroundColor: "#f8f9fe",
                  boxSizing: "border-box",
                  borderRadius: "0px 0px 9px 9px",
                }}
                style={atomOneLight}
                wrapLongLines
              >
                {codeString}
              </SyntaxHighlighter>
            </CodeContainer>
          </div>
        </CodeParentContainer>
      </div>
    </>
  );
}
