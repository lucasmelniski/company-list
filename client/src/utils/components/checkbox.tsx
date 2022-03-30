import React from "react";

type Props = {
  description: string;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
};

const CheckBox: React.FC<Props> = ({ description, type, setType }) => {
  const handleClick = () => {
    setType(description);
  };

  return (
    <div className="checkbox-column" onClick={() => handleClick()}>
      <div className="flex-row">
        <div className="checkbox-outside">
          {description === type && <div className="checkbox-inside" />}
        </div>
        <div className="checkbox-description">{description}</div>
      </div>
    </div>
  );
};

export default CheckBox;
