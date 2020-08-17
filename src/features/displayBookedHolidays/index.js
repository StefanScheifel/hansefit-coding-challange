import React from "react";

import { useSelector } from "react-redux";

import { Flex } from "@rebass/grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import { selectRequestedHolidays } from "../bookHoliday/holidaySlice";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#003bb3",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function DisplayBookedHolidays() {
  const requestedHolidays = useSelector(selectRequestedHolidays);
  console.log(requestedHolidays);
  return (
    <Flex alignContent="center">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name </StyledTableCell>
              <StyledTableCell>eMail</StyledTableCell>
              <StyledTableCell>Abteilung</StyledTableCell>
              <StyledTableCell>Zeitraum</StyledTableCell>
              <StyledTableCell>Anzahl Urlaubstage </StyledTableCell>
              <StyledTableCell>Urlaubsart</StyledTableCell>
              <StyledTableCell>Datum</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requestedHolidays.map((row) => (
              <StyledTableRow key={row.created}>
                <StyledTableCell>{`${row.firstName} ${row.lastName}`}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.unit}</StyledTableCell>

                <StyledTableCell>
                  {new Date(row.dateFrom).toLocaleDateString()} -{" "}
                  {new Date(row.dateTo).toLocaleDateString()}
                </StyledTableCell>
                <StyledTableCell>{row.totalAmountDays}</StyledTableCell>
                <StyledTableCell>{row.holidayType}</StyledTableCell>
                <StyledTableCell>
                  {new Date(row.created).toLocaleString()}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default DisplayBookedHolidays;
