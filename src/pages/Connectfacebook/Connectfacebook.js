import React from "react";
import BotStepper from "../../components/BotStepper/BotStepper";
export default function Connectfacebook() {

  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "0rem auto",
          justifyContent: "space-between",
          width: "50vw",
          paddingTop: "1%",
          height: "5vh",
        }}
      >
        <BotStepper
          isCompleted={true}
          title="Bot Builder"
          number={1}
        />
        <BotStepper isCompleted={true} title="Chat window design" number={2} />
        <BotStepper isCompleted={false} title="Bot Simulator ......." number={3} />
        <BotStepper
          isCompleted={false}
          title="Code to be Embedded"
          number={4}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            minHeight: "80vh",
            maxHeight: "80vh",
            border: " 1px solid #8f9bb9",
            minWidth: "50vw",
            background: "white",
            boxShadow: "0px 0px 36px #67656529",
            borderRadius: "20px",
            padding: "2% 3% 0 3%"
          }}
        >
          <div style={{ borderRadius: "10px" }}>
            <img src="facebook.png" style={{ borderRadius: "10px", width: "100%", height: "60vh" }} />
          </div>
          <div style={{
            width: "100%", display: "flex", marginTop: "3%", height: "10vh", textAlign: "center", alignItems: "center", justifyContent: "center"
          }}>
            < div style={{ fontSize: "14px", background: "#f50057", textAlign: "center", width: "170px", height: "40px", paddingTop: "9px", borderRadius: "10px", color: "white" }}>Connect to Facebook</div>
          </div>
        </div>
      </div >

    </>
  );
}
