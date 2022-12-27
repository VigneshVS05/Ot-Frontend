import React from "react";
import { Table, Button } from "react-bootstrap";
import "./OTRateUser.css";
import axios from "axios";


const apiUrl = "https://localhost:7021/api/Welcome";

class OTRateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
      // isOTRate:true,
      // isOTReg:false,
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl + "/GetAllOT")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

 


  deleteUser(id) {
    const { users } = this.state;
    axios.delete(apiUrl + "/DeleteUserDetails/" + id).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.id !== id),
      });
    });
  }


  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div className="Total">
          <Table>
            <thead className="btn-primary">
              <tr>
                <th>OT SlabName</th>
                <th>OT SlabType</th>
                <th>Pay Group</th>
                <th>Hrs Component</th>
                <th >OT Value Component</th>
                <th>Base Component</th>
                <th>OT Rate</th>
                <th>Consider for OT</th>
                <th>Monthly Rate</th>
                <th>Start Date</th>
                <th>End Rate</th>
                <th>Delete</th>
             
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} data-testid="userrow">
                  <td>{user.otSlabName}</td>
                  <td>{user.otSlabType}</td>
                  <td>{user.payGroup}</td>
                  <td>{user.hrsComponent}</td>
                  <td>{user.otValueComponent}</td>
                  <td>{user.baseComponent}</td>
                  <td>{user.otRate}</td>
                  <td>{user.considerForOt}</td>
                  <td>{user.monthlyRate}</td>
                  <td>{user.startDate}</td>
                  <td>{user.endDate}</td>
                   
               
                 
                                 
                  <td>
                    <Button className="del"
                      variant="danger"
                      onClick={() => this.deleteUser(user.id)}
                    >
                    Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default OTRateUser;
