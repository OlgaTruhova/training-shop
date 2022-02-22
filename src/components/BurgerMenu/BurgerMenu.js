import React from "react";
import classNames from "classnames";

import "./BurgerMenu.css";

const BurgerMenu = (isMenuOpen, toggleMenuMode) => {
    // const [isMenuOpen, toggleMenu] = useState(false);

    // function toggleMenuMode () {
    //     toggleMenu(!isMenuOpen);
    // }

    return (
        <button type="button" className={classNames("hamburger", {visible: isMenuOpen})} onClick={toggleMenuMode}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
        </button>
    )
}

export {BurgerMenu}