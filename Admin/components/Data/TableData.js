import { useRef } from "react";
import { IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";

// const addActionRef = useRef(null);

export const columns = {
  RecentDataColumns: [
    { title: "Id", field: "id" },
    { title: "Passenger Name", field: "Passenger_Name" },
    { title: "Driver Name", field: "Driver_Name" },
    { title: "Pic/Drop Address", field: "Pic_Drop" },
    { title: "Date", field: "Date" },
    { title: "Payment", field: "Payment", type: "currency", align: "left" },
    { title: "Status", field: "Status" },
  ],
  PassengersColumns: [
    { title: "Phone Number", field: "phoneNumber" },
    { title: "Status", field: "status" },
    {
      title: "Custom Add",
      field: "internal_action",
      editable: false,
      render: (rowData) =>
        rowData && (
          <IconButton
            color="secondary"
            onClick={() => console.log("Goona be ", rowData.id)}
          >
            <button className="makeChange">Ride History</button>
          </IconButton>
        ),
    },
  ],
  DriversColumns: [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: "phoneNumber" },
    { title: "Address", field: "address" },
    { title: "Status", field: "status" },
  ],
  DispatchersColumns: [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: "phoneNumber" },
    { title: "Address", field: "address" },
    { title: "Status", field: "status" },
  ],
};
