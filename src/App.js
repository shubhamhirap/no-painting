import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Button from "./components/Button";
// import ButtonGroup from "./components/ButtonGroup";
import Backdrop from "./pages/Backdrop";
import DashboardInit from "./pages/DashboardInit";
import Drawer from "./pages/Drawer";
import NavbarContainer from "./pages/NavbarContainer";
import RefreshButton from "./pages/RefreshButton";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  let backdrop;
  if (drawerOpen) {
    backdrop = <Backdrop close={backdropClickHandler} />;
  }

  return (
    // <div className="app-container">
    //   <Drawer show={drawerOpen} />
    //   <div className="app-navbar">
    //     <NavbarContainer toggle={drawerToggleClickHandler} />
    //   </div>
    //   <div className="app-header"></div>
    //   {backdrop}
    //   <div className="app-internal-container">
    //     <DashboardInit />
    //   </div>
    // </div>

    // <div>
    //   <Button
    //     extraClass="ml-4 mt-4"
    //     icon={Button.icon.PRODUCT}
    //     backgroundColor={Button.backgroundColor.SUCCESS}
    //     color={Button.color.textLight}
    //     text="Product"
    //   />
    // </div>

    // <div>
    //   <ButtonGroup text1={"+"} text2={`100%`} text3={`-`} />
    // </div>

    // <div>
    //   <NavbarContainer />
    // </div>

    <Router>
      <div className="app-container">
        <Drawer show={drawerOpen} />
        <div className="app-navbar">
          <NavbarContainer toggle={drawerToggleClickHandler} />
          <RefreshButton />
        </div>
        <div className="app-header"></div>
        {backdrop}
        <div className="app-internal-container">
          <DashboardInit />
        </div>
      </div>
    </Router>
  );
}

export default App;
