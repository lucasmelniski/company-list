import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as AZ } from "../../utils/imgs/AZorder.svg";
import OneUser from "./oneUser";

type Props = {
  allUsers: any;
};

const UserList: React.FC<Props> = ({ allUsers }) => {
  const mountTable = () => {
    return allUsers?.map((user: any) => <OneUser user={user} />);
  };

  return (
    <>
      <Table size="sm" striped bordered hover>
        <thead>
          <tr>
            <th>
              <div className="th-name">
                <div className="flex-column">Name</div>

                <div className="flex-column th-name-icon">
                  <AZ className="az-icon" />
                </div>
              </div>
            </th>
            <th>Gender</th>
            <th>Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
        {allUsers?.length > 0 && mountTable()}
      </Table>
    </>
  );
};

export default UserList;
