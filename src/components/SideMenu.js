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

import "./FloatingMenu.css";

import MenuItem from "./MenuItem";

/**
 * @author 
 * @function SideMenu
 **/

export const menuItems = [
  {
    name: "Create",
    exact: true,
    to: "/",
    iconClassName: "bi bi-file-earmark-plus",
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
    iconClassName: "bi bi-calendar4-range",
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
    iconClassName: "bi bi-pencil-square",
    subMenus: [
      { name: "Estimate", to: "/content/Estimate" },
      { name: "Invoice", to: "/content/Invoice" },
      { name: "PO", to: "/content/PO" },
      { name: "Tax Payslip", to: "/content/Tax Payslip"},
    ],
  },
  {
    name: "Analyse",
    exact: true,
    to: `/content-2`,
    iconClassName: "bi bi-file-earmark-ruled",
    subMenus: [
      { name: "Revenue", to: "/content/Revenue" },
      { name: "Expense", to: "/content/Expense" },
      { name: "Statutory", to: "/content/Statutory" },
      { name: "People", to: "/content/People" },
      { name: "Growth", to: "/content/Growth" },
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
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };


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
      <div className={`bottom-menu ${inactive ? "inactive" : ""}`}>
        <div className="bottom-menu-item-container">
        <div className="bottom-menu-icon-container">
          <NotificationsIcon />
        </div>
        <div className="title-container">
          Notifications
        </div>
        </div>
        <div className="bottom-menu-item-container">
        <div className="icon-container">
          <SettingsIcon />
        </div>
        <div className="title-container">
          Settings
        </div>
        </div>
        <div className="bottom-divider">
        </div>
        <div className="bottom-menu-item-container">
        <div className="bottom-menu-icon-container">
          <UserStatus />
        </div>
        <div className="title-container">
          Umesh
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default SideMenu;
