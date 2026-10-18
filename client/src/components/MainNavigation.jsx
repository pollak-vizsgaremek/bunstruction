import { Link } from "react-router";
import { RiShoppingBagLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import classes from "./MainNavigation.module.css";
import img from "../assets/bunstruction-logo.png";
import { useState } from "react";
import LoginModal from "./LoginModalRadix";

function MainNavigation() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <div className={classes.headerBrand}>
            <img className={classes.headerLogo} src={img} alt="logo" />

            <Link className={classes.brandName} to="/">
              <span className={classes.brandHighlight}>BUN</span>
              <span>STRUCTION</span>
            </Link>
          </div>

          <nav className={classes.navMenu}>
            <Link className={classes.navLink} to="/">
              Étlap
            </Link>
            <Link className={classes.navLink} to="/builder">
              Burger Építő
            </Link>
            <Link className={classes.navLink} to="/cart">
              Kosár
            </Link>
            <button
              type="button"
              className={classes.navButton}
              onClick={() => setIsLoginOpen(true)}
            >
              Bejelentkezés
            </button>
          </nav>

          <div className={classes.headerActions}>
            <Link className={classes.cartLink} to="">
              <RiShoppingBagLine className={classes.icon} />
              <span className={classes.cartCount}>3</span>
            </Link>

            <Link className={classes.profileIcon} to="">
              <CgProfile className={classes.icon} />
            </Link>
          </div>
        </div>
      </header>

      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

export default MainNavigation;
