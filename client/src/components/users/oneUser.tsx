import React, { useState } from "react";
import { Modal, Image } from "react-bootstrap";

type Props = {
  user: any;
};
const OneUser: React.FC<Props> = ({ user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr onClick={handleShow}>
        <td>
          {user?.name?.title} {user?.name?.first} {user?.name?.last}
        </td>
        <td>{user?.gender}</td>
        <td>{user?.dob?.age}</td>
        <td>{user?.registered?.age}</td>
      </tr>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Image
            className="list-user-photo"
            src={user?.picture?.large}
            roundedCircle
          />
          <div className="list-close-button" onClick={handleClose}>
            X
          </div>
          <h2>
            {user?.name?.title} {user?.name?.first} {user?.name?.last}
          </h2>
          <h5 className="contact-description">
            {`${user?.name?.title} ${user?.name?.first} born in ${user?.nat},
           is living on ${user?.location?.street?.name} nº ${user?.location?.street?.number},
            in the city of ${user?.location?.city}, ${user?.location?.state},
            ${user?.location?.country}.`}
          </h5>
          <ul className="contact-list">
            <b>Contact:</b>
            <li>Email: {user?.email} </li>
            <li>Phone: {user?.phone} </li>
            <li>Cell: {user?.cell} </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OneUser;
