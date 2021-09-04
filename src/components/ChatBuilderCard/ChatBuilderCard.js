import React from "react";
import { Button } from "../Button";
import Trash from "../../assets/img/svgs/4-Create bot Action b/trash.svg";
export default function ChatBuilderCard({ title, handleClick, activeCard }) {
  return (
    <div
      style={{
        width: "85%",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "0.6rem",
        margin: "1rem 0",
        display: "flex",
        justifyContent: "space-between",
        border: activeCard === "B" ? "1px solid #F50057" : "1px solid #8F9BB9",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <div style={{ marginBottom: "1.1rem" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: "600" }}>{title}</div>
          <img src={Trash} alt="" style={{ cursor: "pointer" }} />
        </div>
        <div
          style={{ color: "#BAC2C7", fontSize: "0.9rem", margin: "0.5rem 0" }}
        >
          Hi this is Amit goyani
        </div>
      </div>
      <Button
        variant="outlinedGray"
        style={{ height: "30px", width: "70%", fontSize: "12px" }}
      >
        [Reply button] [B]
      </Button>
    </div>
  );
}
