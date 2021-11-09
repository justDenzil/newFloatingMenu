import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import HamburgerMenu from "./components/Hamburger";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function App() {
  const [inactive, setInactive] = useState(false);
  const [open, setIsOpen] = useState(true);

  let useClickOutside = (handler) => {
    let domNode = useRef();
  
    useEffect(() => {
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
  
      document.addEventListener("mousedown", maybeHandler);
  
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
  
    return domNode;
  };

  let domNode = useClickOutside(() => {
    setIsOpen(true);
  });

  return (
    <div className="App">
      <Router>
        <div  className="hamburger"  onClick={() => setIsOpen((open) => !open)}>
        <HamburgerMenu/>
        </div>
        <div ref={domNode} className={`menu-container ${open ? "active" : ""}`}>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
        </div>
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                    </Route>
                  ))
                : null}
            </>
          ))}
      </Router>
    </div>
  );
}

export default App;
