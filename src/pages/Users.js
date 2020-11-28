import { useEffect, useState } from "react";
import { Row, Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import api from "../api"
function Users(props) {
    let [users,setUsers] = useState([]);
    useEffect(() => {
        // console.log(props)
        // // api.get('/users').then(response => {
        // //     setUsers(response.data.users)
        //     setUsers([{id:1,age:12, anomaly: "loh"},{id:21,age:12, anomaly: "loh"},{id:31,age:12, anomaly: "loh"}])
        // // }).catch(err => {
        // //     console.log(err)
        // // })
    }, [])
    function getUserInfo(id) {
        props.history.push(`/users/${id}`);
    }
    return (
        <div>
            <Row className="justify-content-center">
                <h2>
                    Наблюдаемые
                </h2>
            </Row>
            
            <Table size="md" style={{marginTop: '50px'}}>
                <thead>
                    <tr className="table-primary">
                    <th>ФИО</th>
                    <th>Возраст</th>
                    <th>Пол</th>
                    <th>Группа</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={() => {getUserInfo()}}>
                        <td>Карпов Станислав Михайлович</td>
                        <td>45</td>
                        <td>М</td>
                        <td>Здоровые</td>
                    </tr>
                    <tr onClick={() => {getUserInfo()}} style={{borderBottom: "2px solid red"}}>
                        <td>Галкина Виталина Аристарховна</td>
                        <td>34</td>
                        <td>Ж</td>
                        <td>Гипертоники <i class="far fa-question-circle" title="Повышенное давление"></i></td>
                    </tr>
                    <tr onClick={() => {getUserInfo()}}>
                        <td>Иванов Иван Иванович</td>
                        <td>57</td>
                        <td>М</td>
                        <td>Гипертоники</td>
                    </tr>
                    <tr onClick={() => {getUserInfo()}}>
                        <td>Константинов Игнат Юрьевич</td>
                        <td>45</td>
                        <td>М</td>
                        <td>Здоровые</td>
                    </tr>
                    <tr onClick={() => {getUserInfo()}}>
                        <td>Копылова Эльга Ильяовна</td>
                        <td>43</td>
                        <td>Ж</td>
                        <td>Здоровые</td>
                    </tr>
                    <tr onClick={() => {getUserInfo()}} style={{borderBottom: "2px solid red"}}>
                        <td>Карпов Святослав Матвеевич</td>
                        <td>71</td>
                        <td>М</td>
                        <td>Здоровые <i class="far fa-question-circle" title="Низкая физ.активность"></i></td>
                    </tr>
                    <tr onClick={() => {getUserInfo()}} style={{borderBottom: "2px solid red"}}>
                        <td>Емельянов Владлен Владиславович</td>
                        <td>69</td>
                        <td>М</td>
                        <td>Гипертоники <i class="far fa-question-circle" title="Повышенное давление"></i></td>
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    );
}
export default withRouter(Users);