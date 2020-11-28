import { useEffect, useState } from "react";
import { Row, Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import api from "../api"
function Notifications(props) {
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
            <Row className="justify-content-center" style={{marginTop: "30px"}}>
                <h2>
                    Возможные отклонения
                </h2>
            </Row>
            <Table size="md" style={{marginTop: '50px'}}>
                <thead>
                    <tr>
                    <th>Пользователь</th>
                    <th>Возраст</th>
                    <th>Группа</th>
                    <th>Причнина</th>
                    </tr>
                </thead>
                <tbody>
                   
                    <tr onClick={() => {getUserInfo(124124)}}>
                    <td>Галкина Виталина Аристарховна</td>
                    <td>34</td>
                    <td>Гипертония</td>
                    <td>Повышеное давление </td>
                    </tr>
                    <tr onClick={() => {getUserInfo(124124)}}>
                    <td>Карпов Святослав Матвеевич</td>
                    <td>71</td>
                    <td>Здоровье</td>
                    <td>Отклонение от нормы </td>
                    </tr>
                    <tr onClick={() => {getUserInfo(124124)}}>
                    <td>Емельянов Владлен Владиславович</td>
                    <td>69</td>
                    <td>Гипертония</td>
                    <td>Повышеное давление </td>
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    );
}
export default withRouter(Notifications);