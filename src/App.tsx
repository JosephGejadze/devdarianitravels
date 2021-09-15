// @modules
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// @styles
import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// @components
import Header from "./components/header";
import Footer from "./components/footer";
// import Home from "./views/home";
// import About from "./views/about";

const About = React.lazy(() => import("./views/about"));
const Home = React.lazy(() => import("./views/home"));

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Header />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
          </Suspense>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
