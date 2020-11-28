import { useEffect, useState } from "react";
import { Pagination, Row, Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import api from "../api"
import PaginationBasic from "../components/Pagination";
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
            <Row className="justify-content-center mt-5">
                <h2>
                    Наблюдаемые
                </h2>
            </Row>
            <Row className="justify-content-center">
                <PaginationBasic/>
            </Row>
            <Table size="md" style={{marginTop: '50px'}}>
                <thead>
                    <tr className="table-primary">
                    <th>ID</th>
                    <th>ФИО</th>
                    <th>Возраст</th>
                    <th>Пол</th>
                    <th>Группа</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={() => {getUserInfo(5410100101)}}>
                        <td>5410100101</td>
                        <td>Карпов Станислав Михайлович</td>
                        <td>45</td>
                        <td>М</td>
                        <td>Здоровые</td>
                    </tr>
                    <tr onClick={() => {getUserInfo(5460202401)}} style={{borderBottom: "2px solid red"}}>
                        <td>5460202401</td>
                        <td>Галкина Виталина Аристарховна</td>
                        <td>34</td>
                        <td>Ж</td>
                        <td>Гипертония <i class="far fa-question-circle" title="Повышенное давление"></i></td>
                    </tr>
                    <tr onClick={() => {getUserInfo(5460102001)}}>
                        <td>5460102001</td>
                        <td>Иванов Иван Иванович</td>
                        <td>57</td>
                        <td>М</td>
                        <td>Гипертония</td>
                    </tr>
                    <tr onClick={() => {getUserInfo(5470102101)}}>
                        <td>5470102101</td>
                        <td>Константинов Игнат Юрьевич</td>
                        <td>45</td>
                        <td>М</td>
                        <td>Здоровые</td>
                    </tr>
                    <tr onClick={() => {getUserInfo(5450403501)}}>
                        <td>5450403501</td>
                        <td>Копылова Эльга Ильяовна</td>
                        <td>43</td>
                        <td>Ж</td>
                        <td>Здоровые</td>
                    </tr>
                    <tr onClick={() => {getUserInfo(5450400901)}} style={{borderBottom: "2px solid red"}}>
                        <td>5450400901</td>
                        <td>Карпов Святослав Матвеевич</td>
                        <td>71</td>
                        <td>М</td>
                        <td>Здоровые <i class="far fa-question-circle" title="Низкая физ.активность"></i></td>
                    </tr>
                    <tr onClick={() => {getUserInfo(5450200101)}} style={{borderBottom: "2px solid red"}}>
                        <td>5450200101</td>
                        <td>Емельянов Владлен Владиславович</td>
                        <td>69</td>
                        <td>М</td>
                        <td>Гипертония <i class="far fa-question-circle" title="Повышенное давление"></i></td>
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    );
}
export default withRouter(Users);