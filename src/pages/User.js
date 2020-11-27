import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function User(props) {
    useEffect(() => {
        // api.get(`/user?id=${match.params.id}`).then(response => {

        // }).catch(err => {
        //     console.log(err)
        // })
        
    }, [])
    return(
        <div>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Общие сведения</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Семья</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Питание</a>
                    <a class="nav-item nav-link" id="nav-activity-tab" data-toggle="tab" href="#nav-activity" role="tab" aria-controls="nav-activity" aria-selected="false">Физич. активность</a>
                    <a class="nav-item nav-link" id="nav-obsled-tab" data-toggle="tab" href="#nav-obsled" role="tab" aria-controls="nav-obsled" aria-selected="false">Обследования</a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">.123</div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">322</div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">33</div>
                <div class="tab-pane fade" id="nav-activity" role="tabpanel" aria-labelledby="nav-activity-tab">activity</div>
                <div class="tab-pane fade" id="nav-obsled" role="tabpanel" aria-labelledby="nav-obsled-tab">obsled</div>
            </div>
        </div>
    )
}
export default withRouter(User);