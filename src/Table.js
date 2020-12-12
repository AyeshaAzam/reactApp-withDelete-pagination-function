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

const useStyles = makeStyles({
  table: {
    width: 650,
    // tableLayout: "auto",
    // margin: " 0 auto",
  },
});

function TableData({ countries, onDelete, isLoading, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const openModal = () => {
    console.log("I have been clicked....");
    setOpen(true);
  };

  const closeModal = () => {
    console.log("closing Modal");
    setOpen(false);
  };

  return (
    <div className="mytable">
      <div className="table__centered">
        {/* // this opens the Modal and also sending props to close it */}
        {open && (
          <Modal closeModal={closeModal} countriesCurrentInfo={countries} />
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
                  <strong>Name</strong>
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
                  onClick={() => onDelete(country.countryInfo._id)}
                >
                  <TableCell align="right" onClick={openModal}>
                    {/* //  or i can do direct inside the tablecell : onClick={() => setOpen(true)} */}
                    <StatusBadgeIcon />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {country.country}
                  </TableCell>
                  <TableCell align="right">{country.cases}</TableCell>
                  <TableCell align="right">{country.deaths}</TableCell>
                  <TableCell align="right">
                    <DeleteIcon />
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
