import React, { useEffect, useState } from "react";
import {ReactComponent as BackButton} from '../assets/BackButton.svg'
import {ReactComponent as FrontButton} from '../assets/FrontButton.svg'
import {ReactComponent as UploadLogoImage} from '../assets/Upload_Logo_SVG.svg'
import {ReactComponent as CreateIcon} from '../assets/icons/Create_Icon.svg'
import {ReactComponent as ManageIcon} from '../assets/icons/Manage_Icon.svg'
import {ReactComponent as GenerateIcon} from '../assets/icons/Generate_Icon.svg'
import {ReactComponent as AnalyseIcon} from '../assets/icons/Analyse_Icon.svg'
import {ReactComponent as NotificationsIcon} from '../assets/icons/Notifications_Icon.svg'
import {ReactComponent as SettingsIcon} from '../assets/icons/Settings_Icon.svg'
import {ReactComponent as UserStatus} from '../assets/icons/User_Status.svg'
import { ReactComponent as DownArrow } from '../assets/downArrow.svg'

import MenuItem from "./MenuItem";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Create",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Contact", to: "/content/Contact" },
      { name: "Project", to: "/content/Project" },
      { name: "Catalogue", to: "/content/Catalogue" },
    ],
  },
  {
    name: "Manage",
    exact: true,
    to: `/`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Organization", to: "/content/Organization" },
      { name: "Contact", to: "/content/Contact" },
      { name: "Project", to: "/content/Project" },
      { name: "Resources", to: "/content/Resources" },
      { name: "Timesheets", to: "/content/Timesheets" },
      { name: "Privileges", to: "/content/Prvileges" },
    ],
  },

  {
    name: "Generate",
    exact: true,
    to: `/content-2`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Estimate", to: "/content-2/Estimate" },
      { name: "Invoice", to: "/content-2/Invoice" },
      { name: "PO", to: "/content-2/PO" },
      { name: "Tax Payslip", to: "/content-2/Tax Payslip", iconClassName: "bi bi-speedometer2" },
    ],
  },
  {
    name: "Analyse",
    exact: true,
    to: `/content-2`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Revenue", to: "/content-2/Revenue" },
      { name: "Expense", to: "/content-2/Expense" },
      { name: "Statutory", to: "/content-2/Statutory" },
      { name: "People", to: "/content-2/People" },
      { name: "Growth", to: "/content-2/Growth" },
    ],
  },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="toggle-menu-btn" onClick={() => {setInactive(!inactive);}}>
            {inactive ? (
            <FrontButton className="back-btn" />
          ) : (
            <BackButton className="back-btn" />
          )}
            
        </div>
        <div className="upload-logo-container">
            <div className="upload-logo-image">
                <UploadLogoImage className="upload-logo-img"/>
            </div>
            <div className="upload-logo-text">Upload logo</div>
        </div>
        <div className="divider">
        </div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
