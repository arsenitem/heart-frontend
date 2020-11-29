import { useState } from "react"
import { Row } from "react-bootstrap"

function AreaAnket() {
    let [send, setSend] = useState(false)
    return(
            <>
            {send ? <Row className="justify-content-center" style={{marginTop:"10%"}}>Ваш ответ записан. Спасибо!</Row>: 
                <form class="decor">
                <div class="form-left-decoration"></div>
                <div class="form-right-decoration"></div>
                <div class="circle"></div>
                <div class="form-inner">
                   
                    <section class="container">
                    <h3 id="qwe">Анкета 2: Оценка территории</h3>
                    <h4 id="qwe">1. Сколько времени понадобится на то, чтобы добраться на работу или в школу?</h4>
                        <div class="dropdown">
                            <select name="one" class="dropdown-select">
                            <option value="">Выберите…</option>
                            <option value="1">1-5 мин</option>
                            <option value="2">6-10 мин</option>
                            <option value="3">11-20 мин</option>
                            <option value="4">21-30 мин мин</option>
                            <option value="5">31+ мин мин</option>
                            <option value="6">не знаю</option>
                            </select>
                        </div>
        
                        <h4 id="qwe">2. Оцените свое отношение ко времени, затрачиваемому на дорогу до места работы / школы.</h4>
                        <label>
                        <input type="radio" name="r"/>Категорически не доволен
                        </label>
                        <label>
                        <input type="radio" name="r"/>Несколько не удовлетворен
                        </label>
                        <label>
                        <input type="radio" name="r"/>Неопределенное отношение
                        </label>
                        <label>
                        <input type="radio" name="r"/>Несколько удовлетворен
                        </label>
                        <label>
                        <input type="radio" name="r"/>Полностью удовлетворен
                        </label>
                        <label>
                        <input type="radio" name="r"/>Работаю/учусь дома
                        </label>
        
        
        
                        <h4 id="qwe">3. На тротуары в окрестностях падает тень от деревьев.</h4>
                        <label>
                        <input type="radio" name="q"/>Полностью согласен
                        </label>
                        <label>
                        <input type="radio" name="q"/>Неопределенное отношение
                        </label>
                        <label>
                        <input type="radio" name="q"/>Скорее да
                        </label>
                        <label>
                        <input type="radio" name="q"/>Скорее нет
                        </label>
                        <label>
                        <input type="radio" name="q"/>Категорически не согласен
                        </label>
        
        
        
                        <h4 id="qwe">4. В окрестностях, как правило, мусора нет.</h4>
                        <label>
                        <input type="radio" name="w"/>Полностью согласен
                        </label>
                        <label>
                        <input type="radio" name="w"/>Неопределенное отношение
                        </label>
                        <label>
                        <input type="radio" name="w"/>Скорее да
                        </label>
                        <label>
                        <input type="radio" name="w"/>Скорее нет
                        </label>
                        <label>
                        <input type="radio" name="w"/>Категорически не согласен
                        </label>
        
        
                        <h4 id="qwe">5. Количеством и скоростью передвижения транспорта.</h4>
                        <label>
                        <input type="radio" name="e"/>Категорически не доволен
                        </label>
                        <label>
                        <input type="radio" name="e"/>Несколько не удовлетворен
                        </label>
                        <label>
                        <input type="radio" name="e"/>Неопределенное отношение
                        </label>
                        <label>
                        <input type="radio" name="e"/>Несколько удовлетворен
                        </label>
                        <label>
                        <input type="radio" name="e"/>Полностью удовлетворен
                        </label>
        
        
                        <input type="submit" value="Отправить" onClick={() =>{setSend(true)}}/>
                    </section>
                </div>
            </form>
            }
    
    </>
    )
}
export default AreaAnket