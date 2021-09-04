import React, { useState } from "react";
import { Text } from "../components/styles";
import { Button } from "../components/Button";
import { SideBar } from "./style";
import {
  Agent,
  BotBuilder,
  CreateBot,
  Home,
  Keys,
  Metrics,
  Template,
  Code,
} from "../components/CustomSVG/index";
import avatar from "../assets/img/svgs/19-Agents/details/Agent face/ToyFaces_Colored_BG_29.jpg";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState("agents");
  const TabClick = (name) => {
    setSelected(name);
  };
  const history = useHistory();
  const fontSize = "1.3vw";
  return (
    <SideBar>
      <div style={{ height: "100%", width: "20vw" }}>
        <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "10vh", textAlign: "center", background: "#f2f2f2" }}>
          <div style={{ margin: "8% 0 0 15%" }}>
            <Text color="#F50057" fontSize="2.2vw">
              5
            </Text>
            <Text color="#191B1C" fontSize="2.2vw">
              MINBOT
            </Text>
          </div>
          <div style={{
            border: "2px solid #F50057",
            width: "42px",
            height: "42px",
            margin: "5% 0 0 22px",
            borderRadius: "100%"
          }}>
            <img
              src={avatar}
              alt="avatar"
              width="32px"
              height="32px"
              style={{ borderRadius: "100%", marginTop: "8%" }}
            />
          </div>
        </div>
        <div style={{ height: "90vh", paddingLeft: "13%", paddingTop: "10%" }}>
          <Button variant="lightRed" width="15vw" height="6vh">
            <div style={{ width: "100%", display: "flex", flexDirection: "row", paddingLeft: "2vw" }}>
              <div>
                <Keys size={20} />
              </div>
              <div
                style={{
                  fontSize: "1.1vw",
                  color: "#FFFFFF",
                  paddingTop: "2%",
                  marginLeft: "7%"
                }}
              >
                My Bot Package
              </div>
            </div>
          </Button>
          <div
            style={{ display: "flex", flexDirection: "row", cursor: "pointer", margin: "15% 0 0 0", width: "100%" }}
            onClick={() => {
              TabClick("home");
            }}
          >
            <div>
              <Home
                color={selected === "home" ? "#F50057" : "#202945"}
                size={fontSize}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Text
                color={selected === "home" ? "#F50057" : "#202945"}
                fontSize={fontSize}
                margin="5%"
              >
                Home
              </Text>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", cursor: "pointer", margin: "15% 0 0 0", width: "100%" }}
            onClick={() => {
              TabClick("create");
              history.push("/botbuilder");
            }}
          >
            <div>
              <CreateBot
                color={selected === "create" ? "#F50057" : "#202945"}
                size={fontSize}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Text
                color={selected === "create" ? "#F50057" : "#202945"}
                fontSize={fontSize}
                margin="5%"
              >
                Create Bot
              </Text>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", cursor: "pointer", margin: "15% 0 0 0", width: "100%" }}
            onClick={() => {
              TabClick("bot");
              history.push("/botsimulator");
            }}
          >
            <div>
              <BotBuilder
                color={selected === "bot" ? "#F50057" : "#202945"}
                size={fontSize}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Text
                color={selected === "bot" ? "#F50057" : "#202945"}
                fontSize={fontSize}
                margin="5%"
              >
                Bot Simulator
              </Text>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", cursor: "pointer", margin: "15% 0 0 0", width: "100%" }}
            onClick={() => {
              TabClick("metrics");
            }}
          >
            <div>
              <Metrics
                color={selected === "metrics" ? "#F50057" : "#202945"}
                size={fontSize}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Text
                color={selected === "metrics" ? "#F50057" : "#202945"}
                fontSize={fontSize}
                margin="5%"
              >
                Metrics
              </Text>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", cursor: "pointer", margin: "15% 0 0 0", width: "100%" }}
            onClick={() => {
              TabClick("agents");
              history.push("agents");
            }}
          >
            <div>
              <Agent
                color={selected === "agents" ? "#F50057" : "#202945"}
                size={fontSize}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Text
                color={selected === "agents" ? "#F50057" : "#202945"}
                fontSize={fontSize}
                margin="5%"
              >
                Agents
              </Text>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", cursor: "pointer", margin: "15% 0 0 0", width: "100%" }}
            onClick={() => {
              TabClick("template");
            }}
          >
            <div>
              <Template
                color={selected === "template" ? "#F50057" : "#202945"}
                size={fontSize}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Text
                color={selected === "template" ? "#F50057" : "#202945"}
                fontSize={fontSize}
                margin="5%"
              >
                Templates
              </Text>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", cursor: "pointer", margin: "15% 0 0 0", width: "100%" }}
            onClick={() => {
              TabClick("codeembeded");
              history.push("codeembeded");
            }}
          >
            <div>
              <Code
                color={selected === "codeembeded" ? "#F50057" : "#202945"}
                size={fontSize}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Text
                color={selected === "codeembeded" ? "#F50057" : "#202945"}
                fontSize={fontSize}
                margin="5%"
              >
                code Embeded
              </Text>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", cursor: "pointer", margin: "15% 0 0 0", width: "100%" }}
            onClick={() => {
              TabClick("botbuilder");
              history.push("botbuilder");
            }}
          >
            <div>
              <BotBuilder
                color={selected === "botbuilder" ? "#F50057" : "#202945"}
                size={fontSize}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Text
                color={selected === "botbuilder" ? "#F50057" : "#202945"}
                fontSize={fontSize}
                margin="5%"
              >
                Chat Builder
              </Text>
            </div>
          </div>
        </div>
      </div>
    </SideBar>
  );
};
export default Sidebar;
