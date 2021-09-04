import React, { useEffect, useState } from "react";
import { StyledButton, StyledDropdown } from "../Button";
import downArrow from "../../assets/img/svgs/4-Create bot Action b/arrow-drop-down-line.svg";
import DropdownMenu from "../DropdownMenu";
import { Input } from "../styles";
// import add from "../../assets/img/svgs/4-Create bot Action b/add.svg";

export default function FreeTextAnswer({ radioBtn, setAddcondition, setRadioBtn }) {
  const [gotodrop, setGotodrop] = useState("Path 02");
  const [val, setVal] = useState("Set Variable");
  const [contain, setContain] = useState("Contain");

  const selectArray = [
    {
      id: "bigger",
      label: "bigger",
    },
    {
      id: "smallerthan",
      label: "smaller than",
    },
    {
      id: "greater",
      label: "greater then",
    },
    {
      id: "equals",
      label: "equals",
    },
  ];
  useEffect(() => {
    setRadioBtn("regularpath");
  }, [setRadioBtn]);
  return (
    <>
      <div style={{ paddingLeft: "2%" }}>
        <div style={{ marginLeft: "1%" }}>
          <div
            className=""
            style={{
              width: "48%",
              // textAlign: "center",
              marginTop: "5px",
              display: "flex",
              // justifyContent: "center",
            }}
          >
            <div style={{ width: "50%" }}>
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="regularpath"
                // checked={true}
                onChange={(e) => {
                  setRadioBtn(e.target.value);
                }}
              />
              <label
                class="form-check-label"
                for="inlineRadio1"
                style={{ fontSize: "0.9rem", marginLeft: "10px", color: "#BAC2C7" }}
              >
                Regular path
              </label>
            </div>
            <div style={{ textAlign: "right", width: "50%" }}>
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="conditional"
                onChange={(e) => {
                  setRadioBtn(e.target.value);
                }}
              />
              <label
                class="form-check-label"
                for="inlineRadio2"
                style={{ fontSize: "0.9rem", marginLeft: "10px", color: "#BAC2C7" }}
              >
                Conditional path
              </label>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{
              width:
                radioBtn === "conditional" ? "70%" : "50%",
            }}>
              {radioBtn === "regularpath" && (
                <div
                  style={{
                    width: "95%",
                    border: "1px solid #8F9BB9",
                    borderRadius: "10px",
                    margin: "2%",
                    position: "relative",
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
              )}
              {radioBtn === "conditional" && (
                <div
                  style={{
                    margin: "1rem 0",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "35%", }}>
                      <DropdownMenu
                        list={selectArray}
                        click={(e) => {
                          console.log(e);
                          setVal(e.label);
                        }}
                        left="-10px"
                      >
                        <StyledDropdown
                          style={{
                            background: "white",
                            border: "1px solid #BAC2C7",
                            color: "black",
                            fontSize: "13px",
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0,
                          }}
                        >
                          {val} <img src={downArrow} alt="" />
                        </StyledDropdown>
                      </DropdownMenu>
                    </div>
                    <div style={{ marginLeft: "2%", width: "35%", }}>
                      <DropdownMenu
                        list={selectArray}
                        click={(e) => {
                          setContain(e.label);
                          console.log(e);
                        }}
                        left="-10px"
                      >
                        <StyledDropdown
                          style={{
                            background: "white",
                            border: "1px solid #BAC2C7",
                            color: "black",
                            width: "100%",
                            fontSize: "13px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "0 2px",
                          }}
                        >
                          {contain}
                          <img src={downArrow} alt="" style={{ marginLeft: "5%" }} />
                        </StyledDropdown>
                      </DropdownMenu>
                    </div>
                    <div style={{ marginLeft: "2%", width: "35%" }}>
                      <Input
                        style={{
                          paddingLeft: "3%",
                          background: "white",
                          border: "1px solid #BAC2C7",
                          color: "black",
                          fontSize: "12px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          height: "44px",
                          borderRadius: "10px",
                        }}
                        placeholder="value"
                      />
                    </div>
                  </div>

                </div>
              )}
            </div>
            <div>
              <div style={{ marginLeft: "3%", width: radioBtn === "conditional" ? "100%" : "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    // width: "70%",
                    paddingTop: "2%"
                  }}
                >
                  <div
                    className=""
                    style={{
                      color: "#FF4081",
                      fontSize: radioBtn === "conditional" ? "15px" : "15px",
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
                        minHeight: radioBtn === "conditional" ? "35px" : "53px",
                        display: "flex",
                      }}
                    >
                      {gotodrop}<img src={downArrow} alt="" />
                    </StyledButton>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ color: "#202945", fontSize: "0.8rem", cursor: "pointer", fontWeight: "700" }}>
          <a onClick={() => setAddcondition(true)}>+ Add Condition</a>
        </div>
      </div>


      {/* <div style={{ color: "#202945", fontSize: "0.8rem", fontWeight: "700" }}>
        + Add Condition
      </div> */}
    </>
  );
}
