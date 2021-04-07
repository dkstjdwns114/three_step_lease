import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 550,
    minHeight: 550
  }
});

const RealTimeTable = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (props.openOrClose === "개업") {
      setColumns([
        { id: "index", label: " ", minWidth: 50 },
        { id: "store_name", label: "가게 이름", minWidth: 160 },
        {
          id: "classification",
          label: "업종",
          minWidth: 80
        },
        {
          id: "date",
          label: "개업일자",
          minWidth: 130
        },
        {
          id: "city",
          label: "행정구역",
          minWidth: 120
        }
      ]);
      const rowsData = props.data_list.map((store, idx) => {
        let authorization_date =
          store.authorization_date.substr(0, 4) +
          "년 " +
          store.authorization_date.substr(4, 2) +
          "월 " +
          store.authorization_date.substr(6) +
          "일";
        let city = store.address.split(" ")[0];
        return createData(
          idx + 1,
          store.store_name,
          store.category_kor,
          authorization_date,
          city
        );
      });
      setRows(rowsData);
    } else if (props.openOrClose === "폐업") {
      setColumns([
        { id: "index", label: " ", minWidth: 50 },
        { id: "store_name", label: "가게 이름", minWidth: 150 },
        {
          id: "classification",
          label: "업종",
          minWidth: 130
        },
        {
          id: "date",
          label: "폐업일자",
          minWidth: 120
        },
        {
          id: "city",
          label: "행정구역",
          minWidth: 120
        }
      ]);
      const rowsData = props.data_list.map((store, idx) => {
        let closed_date =
          store.closed_date.substr(0, 4) +
          "년 " +
          store.closed_date.substr(4, 2) +
          "월 " +
          store.closed_date.substr(6) +
          "일";
        let city = store.address.split(" ")[0];
        return createData(
          idx + 1,
          store.store_name,
          store.category_kor,
          closed_date,
          city
        );
      });
      setRows(rowsData);
    }
  }, [props.data_list]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const createData = (index, store_name, classification, date, city) => {
    return { index, store_name, classification, date, city };
  };

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <Typography variant="subtitle1" gutterBottom>
                      {column.label}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Typography variant="body1" gutterBottom>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </Typography>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default RealTimeTable;
