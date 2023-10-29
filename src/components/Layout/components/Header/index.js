import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import style from "./Header.module.scss";
import Button from '../../../Button'

const cx = classNames.bind(style);
export default function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo */}
        <div className={cx("logo")}>
          <h1>Logo</h1>
        </div>

        {/* search */}
        <div className={cx("search")}>
          <div className={cx("search-inner")}>
            <input placeholder="Search" spellCheck={false} />
            <button className={cx("close")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <span className={cx("loading")}>
              <FontAwesomeIcon icon={faSpinner} />
              {/* loading-icon */}
            </span>

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>

        {/* action */}
        <div className={cx("action")}>
          <Button text >Upload</Button>
          <Button primary  >Log in</Button>
        </div>
      </div>
    </header>
  );
}
