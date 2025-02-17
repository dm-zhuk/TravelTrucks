import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./index.module.css";
import favicon from "../components/img/favicon.png";

const SharedLayout = () => {
  return (
    <>
      <div className={css.sharedHeader}>
        <div className={css.headerContainer}>
          <div className={css.headerNav}>
            <img src={favicon} alt="Logo" width="36" height="auto" />
            <NavLink to="/" className={css.headerLogo}>
              TRAVEL-<span className={css.headerLogoAccent}>TRUCKS</span>
            </NavLink>

            <ul className={css.headerNavList}>
              <li className={css.headerNavItem}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${css.headerNavItemLink} ${css.active}`
                      : css.headerNavItemLink
                  }>
                  Home
                </NavLink>
              </li>
              <li className={css.headerNavItem}>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) =>
                    isActive
                      ? `${css.headerNavItemLink} ${css.active}`
                      : css.headerNavItemLink
                  }>
                  Catalog
                </NavLink>
              </li>
              <li className={css.headerNavItem}>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    isActive
                      ? `${css.headerNavItemLink} ${css.active}`
                      : css.headerNavItemLink
                  }>
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={css.headerContacts}>
            <ul className={css.headerContactsList}>
              <li>
                <a
                  href="mailto:info@camperrental.com"
                  className={css.headerContactsLink}>
                  info@camperrental.com
                </a>
              </li>
              <li>
                <a href="tel:+380631234567" className={css.headerContactsLink}>
                  +380 (63) 123-45-67
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={css.sharedPageCtnr}>
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
