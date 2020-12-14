import React, { useState } from "react";
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

const Modal = ({ closeModal, currentCountry }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <div>
      <div className={classes.paper} style={modalStyle}>
        <div className="header__modal-container">
          <header className="header__modal">
            <h4>Current Information</h4>
          </header>
          <p className="header__modalText">
            Corona-Cases for Today: <strong>{currentCountry.todayCases}</strong>
          </p>
          <p className="header__modalText">
            Today Recovery : <strong>{currentCountry.todayRecovered}</strong>
          </p>
          <p className="header__modalText">
            Total deaths today: <strong>{currentCountry.todayDeaths}</strong>
          </p>
          <p className="header__modalText">
            Country's ISO2: <strong>{currentCountry.countryInfo.iso2}</strong>
          </p>
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

//watch this : https://codesandbox.io/s/53x7m726xk?file=/src/Product/Product.js
