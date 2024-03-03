import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridActionsCellItem,
  GridDeleteIcon,
} from "@mui/x-data-grid";
import { product } from "../const/const";





export default function DataGridDemo() {
  const [rows, setRows] = useState([]);
  function deleteItem(id) {
    setRows(rows.filter((elem) => elem.id !== id));
  }
  useEffect(() => {
    setRows(product);
  }, []);


  const columns = [
    {
      field: "imageUrl",
      headerName: "Image",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <img
          src={params.row.imageUrl}
          style={{ width: 70, height: 70 }}
          className="rounded-pill"
        />
      ),
    },
  
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      field: "actions",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<GridDeleteIcon />}
          label="Delete"
          onClick={()=>deleteItem(params.id)}
        />,
        <GridActionsCellItem
          // icon={<SecurityIcon />}
          label="Toggle Admin"
          // onClick={toggleAdmin(params.id)}
          showInMenu
        />,
        <GridActionsCellItem
          // icon={<FileCopyIcon />}
          label="Duplicate User"
          // onClick={duplicateUser(params.id)}
          showInMenu
        />,
      ],
    },
  ];
  return (
    <div className="d-flex justify-content-center">
      <Box sx={{ height: 370, width: "85%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
