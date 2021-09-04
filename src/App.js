import React, { Suspense } from "react";
// import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import BotBuilder from "./pages/BotBuilder/BotBuilder";
import ConnectInstagram from "./pages/ConnectInstagram/ConnectInstagram";
import Connectfacebook from "./pages/Connectfacebook/Connectfacebook";
import BotSimulator from "./pages/BotSimulator/BotSimulator";
import TargetAudience12 from "./pages/TargetAudience12/TargetAudience12";
const Agents = React.lazy(() => import("./pages/agents"));
const CodeEmbed = React.lazy(() => import("./pages/codeembeded"));
class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <Redirect exact from={`/`} to={`/connectfacebook`} />

            <Route
              path={`/agents`}
              render={(props) => (
                <MainLayout>
                  <Agents {...props} />
                </MainLayout>
              )}
            />
            <Route
              path={`/codeembeded`}
              render={(props) => (
                <MainLayout>
                  <CodeEmbed {...props} />
                </MainLayout>
              )}
            />
            <Route
              path={`/botsimulator`}
              render={(props) => (
                <MainLayout>
                  <BotSimulator {...props} />
                </MainLayout>
              )}
            />
            <Route
              path={`/targetaudience12`}
              render={(props) => (
                <MainLayout>
                  <TargetAudience12 {...props} />
                </MainLayout>
              )}
            />
            <Route
              path={`/connectfacebook`}
              render={(props) => (
                <MainLayout>
                  <Connectfacebook {...props} />
                </MainLayout>
              )}
            />
            <Route
              path={`/connectinstagram`}
              render={(props) => (
                <MainLayout>
                  <ConnectInstagram {...props} />
                </MainLayout>
              )}
            />
            <Route
              path={`/botbuilder`}
              render={(props) => (
                <MainLayout>
                  <BotBuilder {...props} />
                </MainLayout>
              )}
            />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}
export default App;
