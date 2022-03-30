import React from "react";
import { ReactComponent as Image } from "../../utils/imgs/imageNotFound.svg";
import { ReactComponent as UserImage } from "../../utils/imgs/user.svg";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-company-photo-column">
        <div className="flex-row">
          <div className="company-photo">
            <Image className="company-icon" />
          </div>
          <div className="company-title">Company</div>
        </div>
      </div>
      <div className="user-photo-column">
        <UserImage className="user-photo" />
      </div>
    </div>
  );
};

export default Header;
