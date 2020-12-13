import React, { useState } from "react";
//import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "375px",
    maxWidth: "375px",
    height: "272px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderColor: "#D5D9D9",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "8px",
    zIndex: "100",
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Modal = ({ closeModal, countriesCurrentInfo }) => {
  // const [open, setOpen] = useState(true);

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  console.log(" from Modal >>>> ", countriesCurrentInfo);

  return (
    <div>
      <div className={classes.paper} style={modalStyle}>
        <div className="header__modal-container">
          <header className="header__modal">
            <h4>Current Information</h4>
          </header>
          {countriesCurrentInfo.map((currentInfo, key) => (
            <div key={key}>
              <p className="header__modalText">
                Corona-Cases for Today: {currentInfo.todayCases}
              </p>
              <p className="header__modalText">
                Today Recovery : {currentInfo.todayRecovered}
              </p>
              <p className="header__modalText">
                Total deaths today: {currentInfo.todayDeaths}
              </p>
            </div>
          ))}
        </div>
        <div>
          {/* <button onClose={(e) => setOpen(false)}>Close</button> */}
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
