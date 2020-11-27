import Chart from '../components/Chart'
function Profile() {
    return (
        <div>
            Thats my profile test reload
            <Chart/>
            <canvas id="myChart" width="400" height="400"></canvas>
        </div>
    );
}
export default Profile;