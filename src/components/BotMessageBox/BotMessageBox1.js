import React from "react";
import { StyledButton } from "../Button";
import bold from "../../assets/img/svgs/4-Create bot Action b/format-bold.svg";
import italic from "../../assets/img/svgs/4-Create bot Action b/italic.svg";
import underline from "../../assets/img/svgs/4-Create bot Action b/underline.svg";
import numberlist from "../../assets/img/svgs/4-Create bot Action b/numberlist.svg";
import listview from "../../assets/img/svgs/4-Create bot Action b/list-view.svg";
import fileadd from "../../assets/img/svgs/4-Create bot Action b/file-add-line.svg";
import smily from "../../assets/img/svgs/4-Create bot Action b/smily.svg";
import add from "../../assets/img/svgs/4-Create bot Action b/add.svg";

export default function BotMessageBox1({ b2text }) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          border: "1px solid #8F9BB9",
          borderRadius: "10px",
          margin: "0.5rem 0",
          background: "white",
        }}
      >
        <textarea
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            margin: 0,
            padding: "5px",
            border: "none",
            outline: "none",
            borderRadius: "10px",
          }}
          rows={1}
          cols={1}
        ></textarea>
        <div
          style={{
            height: "25px",
            background: "#F4F6FD",
            borderRadius: "0px 0px 8px 10px",
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",

              justifyContent: "space-between",
              width: "30%",
              marginLeft: "2px",
            }}
          >
            <img src={bold} alt="" className="icon" style={{ marginLeft: "6px" }} />
            <img src={italic} alt="" className="icon" style={{ marginLeft: "6px" }} />
            <img src={underline} alt="" className="icon" style={{ marginLeft: "6px" }} />
            <img src={listview} alt="" className="icon" style={{ marginLeft: "6px" }} />
            <img src={numberlist} alt="" className="icon" style={{ marginLeft: "6px" }} />
            <img src="expand.png" width="12px" alt="" className="icon" style={{ marginLeft: "6px" }} />
            <img src={smily} alt="" className="icon" style={{ marginLeft: "6px" }} />
            <img src={fileadd} alt="" className="icon" style={{ marginLeft: "6px" }} />
          </div>
          <div style={{ display: "flex" }}>
            <StyledButton
              variant="grey"
              style={{
                height: "100%",
                borderRadius: "0",
                fontWeight: "400",
                width: "7vw",
                fontSize: "0.6rem",
                padding: "2px",
              }}
            >
              <img src={add} alt="" style={{ marginRight: "10px" }} />
              Add Stickers
            </StyledButton>
            <StyledButton
              variant="lightBlue"
              style={{
                height: "100%",
                borderRadius: "0",
                width: "2vw",
                fontWeight: "400",
                fontSize: "0.7rem",
              }}
            >
              {/* <img src={downArrow} alt="" style={{ marginLeft: "5px" }} /> */}
              <i className="fa fa-ellipsis-v" />
            </StyledButton>
          </div>
        </div>
      </div>
    </div >
  );
}
