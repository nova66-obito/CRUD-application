import Button from "react-bootstrap/Button";
import React from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";

function TableComponent({ update, setUpdate, boxClick }) {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    fetch(
      "https://655f2e8a879575426b44c20a.mockapi.io/student_data_crud_app/studentsData",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((tasks) => {
        setTableData(tasks.reverse());
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [update]);

  const deleteUser = (id) => {
    // Fixed the API endpoint to match where you're fetching data from
    fetch(
      `https://655f2e8a879575426b44c20a.mockapi.io/student_data_crud_app/studentsData/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Delete failed");
      })
      .then(() => {
        alert("Deleted successfully!");
        setUpdate(!update);
      })
      .catch((error) => {
        console.error("Delete error:", error);
        alert("Delete failed. Please try again.");
      });
  };

  return (
    <div className="table-responsive">
      <Button 
        onClick={() => boxClick()} 
        variant="warning" 
        className="fs-5 mb-3"
      >
        Add Data
      </Button>
      
      <Table striped bordered hover variant="light" className="tablemain">
        <thead className="text-center">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Phone No</th>
            <th>Qualification</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tableData &&
            tableData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.emailId}</td>
                <td>{item.location}</td>
                <td>{item.phoneNo}</td>
                <td>{item.qualification}</td>
                <td className="btn-cover">
                  <div className="d-flex flex-wrap justify-content-center gap-1">
                    <Button
                      onClick={() => boxClick(item)}
                      variant="success"
                      className="actbtn"
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="danger" 
                      onClick={() => deleteUser(item.id)} 
                      className="actbtn"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;
