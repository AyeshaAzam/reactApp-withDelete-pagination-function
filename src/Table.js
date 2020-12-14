import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import StatusBadgeIcon from "./StatusBadgeIcon";
import Modal from "./Modal";
import "./Table.css";

const useStyles = makeStyles({
  table: {
    width: 650,
    // tableLayout: "auto",
    // margin: " 0 auto",
  },
});

function TableData({ countries, onDelete, isLoading, id }) {
  const classes = useStyles();
  const [openCountryModal, setOpenCountryModal] = useState(false);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const openModal = () => {
    console.log("I have been clicked....");
    setOpenCountryModal(true);
  };

  const closeModal = () => {
    console.log("closing Modal");
    setOpenCountryModal(false);
  };

  const getModal = (country) => {
    openModal();
    setOpenCountryModal(country);
  };

  // for tabbing not using the keyboard keys
  const myFocusIn = (event) => {
    event.preventDefault();
    // const currentTarget = event.currentTarget as HTMLElement;
    const currentTarget = event.currentTarget;
    currentTarget.classList.add("table__tableBody--has-focus");
  };

  const myFocusOut = (event) => {
    event.preventDefault();
    const currentTarget = event.currentTarget;
    currentTarget.classList.remove("table__tableBody--has-focus");
  };

  // const onKeyPress = (event) => {
  //   //Invoke callback on enter key
  //   //KeyCodes.Enter = 13
  //   if (event.charCode === 13) {
  //     // do something
  //     props.clickCallback && props.clickCallback(event);
  //   }
  // };

  //const onClick = (event) => {};

  return (
    <div className="mytable">
      <div className="table__centered">
        {/* // this opens the Modal and also sending props to close it */}
        {openCountryModal && (
          <Modal closeModal={closeModal} currentCountry={openCountryModal} />
        )}
        <TableContainer className="table__container">
          <Table
            className={classes.table}
            aria-label="simple table"
            style={{ width: "auto", tableLayout: "auto", margin: " 0 auto" }}
          >
            <TableHead>
              <TableRow style={{ width: 100 }}>
                <TableCell align="right"></TableCell>
                <TableCell variant="head">
                  <strong>Flag</strong>
                </TableCell>
                <TableCell variant="head">
                  <strong>Country</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Cases</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Deaths</strong>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map((country, index) => (
                <TableRow
                  key={index}
                  style={{ width: 100 }}
                  className="table__tableBody"
                  onFocus={myFocusIn}
                  onBlur={myFocusOut}
                >
                  <TableCell align="right" onClick={() => getModal(country)}>
                    {/* //  or i can do direct inside the tablecell : onClick={() => setOpen(true)} */}
                    <StatusBadgeIcon />
                  </TableCell>
                  <TableCell align="right" className="table__countryFlag">
                    {
                      <img
                        src={country.countryInfo.flag}
                        alt="logo"
                        width="48"
                      />
                    }
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className="table__country"
                  >
                    <a
                      target="_blank"
                      href="https://disease.sh/"
                      className="table__text-link"
                    >
                      <span>{country.country}</span>
                    </a>
                  </TableCell>
                  <TableCell align="right">{country.cases}</TableCell>
                  <TableCell align="right">{country.deaths}</TableCell>
                  <TableCell align="right">
                    <button className="table__delete-the-row">
                      <DeleteIcon onClick={() => onDelete(country)} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default TableData;

// confirm if they want to delete the row: https://roytuts.com/delete-multiple-table-rows-from-server-using-react/
//https://codepen.io/austinlyons/pen/vyojXo
