import { useEffect, useState } from "react";
import { Row, Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import api from "../api"
function Users(props) {
    let [users,setUsers] = useState([]);
    useEffect(() => {
        console.log(props)
        // api.get('/users').then(response => {
        //     setUsers(response.data.users)
            setUsers([{id:1,age:12, anomaly: "loh"},{id:21,age:12, anomaly: "loh"},{id:31,age:12, anomaly: "loh"}])
        // }).catch(err => {
        //     console.log(err)
        // })
    }, [])
    function getUserInfo(id) {
        props.history.push(`/users/${id}`);
    }
    return (
        <div>
            <Row>
                <h2>
                    Пользователи в системе
                </h2>
            </Row>
            <Table size="md" style={{marginTop: '50px'}}>
                <thead>
                    <tr>
                    <th>Пользователь</th>
                    <th>Возраст</th>
                    <th>Аномалии</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr onClick={() => {getUserInfo(user.id)}}>
                            <td>{user.id}</td>
                            <td>{user.age}</td>
                            <td>{user.anomaly}</td>
                            </tr>
                        )
                    })}
                    
                   
                </tbody>
            </Table>
        </div>
    );
}
export default withRouter(Users);