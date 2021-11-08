import React, { useEffect, useState } from "react";
import {ReactComponent as BackButton} from '../assets/BackButton.svg'
import {ReactComponent as FrontButton} from '../assets/FrontButton.svg'
import {ReactComponent as UploadLogoImage} from '../assets/Upload_Logo_SVG.svg'
import {ReactComponent as NotificationsIcon} from '../assets/icons/Notifications_Icon.svg'
import {ReactComponent as SettingsIcon} from '../assets/icons/Settings_Icon.svg'
import {ReactComponent as UserStatus} from '../assets/icons/User_Status.svg'
import "../assets/style.css";
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
    iconClassName: "icon-Create_Icon",
    closeIconClassName: "bi bi-chevron-up",
    subMenus: [
      { name: "Contact", to: "/content/Contact", iconClassName: "icon-Contact_Icon" },
      { name: "Organization", to: "/content/Contact", iconClassName: "icon-Organization_Icon" },
      { name: "Project", to: "/content/Project",iconClassName: "icon-Project_Icon" },
      { name: "Catalogue", to: "/content/Catalogue", iconClassName: "icon-Catalogue_Icon" },
    ],
  },
  {
    name: "Manage",
    exact: true,
    to: `/`,
    iconClassName: "icon-Manage_Icon",
    closeIconClassName: "bi bi-chevron-up",
    subMenus: [
      { name: "Organization", to: "/content/Organization", iconClassName: "icon-Organization_Icon"},
      { name: "Contact", to: "/content/Contact", iconClassName: "icon-Contact_Icon"},
      { name: "Project", to: "/content/Project", iconClassName: "icon-Project_Icon"},
      { name: "Resources", to: "/content/Resources", iconClassName: "icon-Resources_Icon"},
      { name: "Timesheets", to: "/content/Timesheets", iconClassName: "icon-Timesheets_Icon"},
      { name: "Privileges", to: "/content/Prvileges", iconClassName: "icon-Privileges_Icon" },
    ],
  },

  {
    name: "Generate",
    exact: true,
    to: `/content-2`,
    iconClassName: "icon-Generate_Icon",
    closeIconClassName: "bi bi-chevron-up",
    subMenus: [
      { name: "Estimate", to: "/content/Estimate", iconClassName: "icon-Generate_Icon"},
      { name: "Invoice", to: "/content/Invoice", iconClassName: "icon-Invoice_Icon"},
      { name: "PO", to: "/content/PO", iconClassName: "icon-Invoice_Icon" },
      { name: "Tax Payslip", to: "/content/Tax Payslip", iconClassName: "icon-TaxPayslip_Icon"},
    ],
  },
  {
    name: "Analyse",
    exact: true,
    to: `/content-2`,
    iconClassName: "icon-Analyse_Icon",
    closeIconClassName: "bi bi-chevron-up",
    subMenus: [
      { name: "Revenue", to: "/content/Revenue", iconClassName: "icon-Revenue_Icon"},
      { name: "Expense", to: "/content/Expense",iconClassName: "icon-Expense_Icon" },
      { name: "Statutory", to: "/content/Statutory",  iconClassName: "icon-Statutory_icon"},
      { name: "People", to: "/content/People", iconClassName: "icon-People_Icon"},
      { name: "Growth", to: "/content/Growth", iconClassName: "icon-Growth_Icon"},
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
              closeIconClassName={menuItem.closeIconClassName}
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
