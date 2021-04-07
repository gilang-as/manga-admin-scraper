import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage"
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./components/Themes";
// Page
import MangaMainPage from "./pages/Manga/MangaMainPage";
import MangaTagPage from "./pages/Manga/MangaGenrePage";

const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Switch>
                  <Route path="/auth/login">
                      <h1>Login</h1>
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
                  <Route path="/">
                      <h1>Home</h1>
                  </Route>
              </Switch>
          </Router>
      </ThemeProvider>
  );
}

export default App;
