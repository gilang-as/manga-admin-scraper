import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage"
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./components/Themes";
// Page
import MangaMainPage from "./pages/Manga/MangaMainPage";
import MangaTagPage from "./pages/Manga/MangaGenrePage";
import SignInPage from "./pages/auth/SignInPage";
import TestPage from "./pages/Test";

const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Switch>
                  <Route path="/auth/sign-in">
                      <SignInPage/>
                  </Route>
                  <Route path="/manga/genre">
                      <MangaTagPage/>
                  </Route>
                  <Route path="/manga">
                      <MangaMainPage/>
                  </Route>
                  <Route path="/dashboard">
                      <DashboardPage/>
                  </Route>
                  <Route path="/test">
                      <TestPage/>
                  </Route>
                  <Route path="/">
                      <Redirect to="/dashboard"/>
                  </Route>
              </Switch>
          </Router>
      </ThemeProvider>
  );
}

export default App;
