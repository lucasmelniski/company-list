import React from "react";
import { ReactComponent as SeachUser } from "../../utils/imgs/searchUser.svg";
import { ReactComponent as Gear } from "../../utils/imgs/gear.svg";
import { Accordion, Card, Button } from "react-bootstrap";
import CheckBox from "../../utils/components/checkbox";
import { Link } from "react-router-dom";

type Props = {
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  nat: string;
  setNat: React.Dispatch<React.SetStateAction<string>>;
};
const SearchUser: React.FC<Props> = ({
  search,
  setSearch,
  name,
  setName,
  gender,
  setGender,
  nat,
  setNat,
}) => {
  return (
    <form className="search-form">
      <Accordion style={{ width: "100%" }}>
        <Card>
          <Card.Header>
            <div className="searching">
              <input
                className="input-name"
                placeholder="Searching"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value.replace(
                      /^[0-9!@#$%&*()_+\-=[\]{};':"|,.<>/?]*$/,
                      ""
                    )
                  )
                }
              />

              <div className="searching-icons">
                <Link
                  to={`/${gender}/${nat || "any"}/${
                    name || "any"
                  }/page/1`}
                  className="search-user-icon-column"
                  onClick={() => setSearch(!search)}
                >
                  <SeachUser className="search-user-icon" />
                </Link>
                <Accordion.Toggle
                  as={Button}
                  className="gear-icon-column"
                  variant="link"
                  eventKey="0"
                >
                  <Gear className="gear-icon" />
                </Accordion.Toggle>
              </div>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <h3>Advanced search Config</h3>
              <div className="flex-row">
                <input
                  className="input-name"
                  placeholder="Nat"
                  value={nat}
                  maxLength={2}
                  onChange={(e) => {
                    setNat(
                      e.target.value
                        .replace(
                          /^[0-9!@#$%&*()_+\-=[\]{};':"|,.<>/?áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ?]*$/g,
                          ""
                        )
                        .trim()
                        .toLocaleUpperCase()
                    );
                  }}
                />
                <CheckBox
                  setType={setGender}
                  type={gender}
                  description={"male"}
                />
                <CheckBox
                  setType={setGender}
                  type={gender}
                  description={"female"}
                />
                <CheckBox
                  setType={setGender}
                  type={gender}
                  description={"any"}
                />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </form>
  );
};

export default SearchUser;
