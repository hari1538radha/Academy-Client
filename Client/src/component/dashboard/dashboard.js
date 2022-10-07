import React, { useCallback, useEffect, useMemo, useState } from "react";
import Footer from "../Footer/footer";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import MaterialReactTable from "material-react-table";
import {getUniversitiesInfo}  from "../../Store/Slice/getUniversities";
import {getProgrammeInfo}  from "../../Store/Slice/getProgramme";

import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import keyTypes from "./makeData";

const Dashboard = () => {
  const locationState = useLocation().state;
  const type = keyTypes[useLocation().state] || keyTypes["Universities"];
  const [keys, setKeys] = useState(type);
  const dispatch = useDispatch();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  // const { universitiesData, universitiesLoading } = useSelector((state) => state.universitiesInfo);
  // setData(universitiesData);
  //   const { programmeData, programmeLoading } = useSelector((state) => state.programmeInfo);
  //   setData(programmeData);
  const appState = useSelector(state => state);
  // const stateValue = appState.universitiesInfo.universitiesData.length ? appState.universitiesInfo.universitiesData : appState.programmeInfo.programme;
  // // setData(stateValue);
  console.log(appState);
  // if(appState.universitiesInfo.universitiesData.length) {
  //   setData(appState.universitiesInfo.universitiesData)
  // } else {
  //   setData(appState.programmeInfo.programme);
  // }
  useEffect(() => {
  if( locationState === 'Programme') {
    dispatch(getProgrammeInfo());
  }
    dispatch(getUniversitiesInfo());
  }, []);

  const handleCreateNewRow = (values) => {
    data.push(values);
    // setTableData([...data]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      data[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      // setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !alert(`Are you sure you want to delete ${row.getValue("firstName")}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      data.splice(row.index, 1);
      // setTableData([...tableData]);
    },
    [data]
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === "email"
              ? validateEmail(event.target.value)
              : cell.column.id === "age"
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const columns = useMemo(
    () =>
      keys.map((key) => {
        return {
          accessorKey: key,
          header: key,
          muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
            ...getCommonEditTextFieldProps(cell),
            type: key,
          }),
        };
      }),
    [getCommonEditTextFieldProps]
  );

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        columns={columns}
        data={data}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default Dashboard;
