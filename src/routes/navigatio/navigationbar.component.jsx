import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { userContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {CartIcon} from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.scss";
import { CartContext} from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
 const {isCartOpen}= useContext(CartContext)
  //console.log(currentUser);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null)
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-In
            </Link>
          )}
          <CartIcon />
        </div>
       {isCartOpen &&  <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
