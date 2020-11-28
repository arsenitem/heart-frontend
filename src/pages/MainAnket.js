import { useState } from "react"
import { Row } from "react-bootstrap"
import { findRenderedComponentWithType } from "react-dom/test-utils"
function MainAnket() {
    let [send, setSend] = useState(false)
    return(
        <>
        {send ? <>
            <Row className="justify-content-center" style={{marginTop:"20%"}}>Результат: 24 балла</Row>
            <Row className="justify-content-center">Опасность: умеренная
            </Row>
            <Row>
        Рекомендация: Ваше здоровье находится в состоянии хрупкого
        равновесия, так как пребывает под давлением
        неблагоприятных факторов. В Ваших силах
        сохранить и преумножить Ваше здоровье.
        Откажитесь от вредных привычек, упорядочьте
        режим дня, займитесь физкультурой и спортом,
        чаще бывайте на воздухе
            </Row>
        </>

            
       
     
         :
        <form class="decor">
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <div class="form-inner">
            <h3 id="qwe">Анкета 1: Общие сведения</h3>
            <h4 id="qwe">1. Ваш возраст.</h4>
            <section class="container">
                <div class="dropdown">
                    <select name="one" class="dropdown-select">
                    <option value="">ВыберитеЕ</option>
                    <option value="1">20-29</option>
                    <option value="2">30-39</option>
                    <option value="3">40-49 </option>
                    <option value="4">50-59 </option>
                    <option value="5">60-69</option>
                    <option value="6">70-79</option>
                    <option value="6">80 и выше</option>
                    </select>
                </div>

                <h4 id="qwe">2. Ваш пол.</h4>
                <label>
                <input type="radio" name="o"/>Мужской
                </label>
                <label>
                <input type="radio" name="o"/>Женский
                </label>


            <h4 id="qwe">3. Ваш рост.</h4>
            <label>
            <input type="text" placeholder="см." name="o"/>
            </label>

            <h4 id="qwe">4. Ваш вес.</h4>
            <label>
            <input type="text" placeholder="кг." name="p"/>
            </label>

            <h4 id="qwe">5. Соотношение вашего роста и веса по Ѕрокку (до 40
            лет "рост - 110", после 40 лет Ц "рост - 100")
            .</h4>
            <label>
            <input type="radio" name="o"/>отклонение менее чем на 10%
            </label>
            <label>
            <input type="radio" name="o"/>отклонение более чем на 10%
            </label>


            <h4 id="qwe">6. Есть ли среди ваших близких родственников
            .</h4>
            <div class="size_block">
            <label id = "q"><input type="checkbox"/> больные артериальной гипертензией </label>
            <label id = "q"><input type="checkbox"/>перенесшие инфаркт миокарда</label>
            <label id = "q"><input type="checkbox"/>перенесшие инсульт</label>
            </div>


            <h4 id="qwe">7. Бывают ли у вас
            .</h4>
            <div class="size_block">
            <label id = "q"><input type="checkbox"/>головные боли  </label>
            <label id = "q"><input type="checkbox"/>головокружения</label>
            <label id = "q"><input type="checkbox"/>шаткость походки </label>
            <label id = "q"><input type="checkbox"/>боли в грудной клетке</label>
            <label id = "q"><input type="checkbox"/>одышки</label>
            <label id = "q"><input type="checkbox"/>сердцебиения </label>
            <label id = "q"><input type="checkbox"/>тяжесть в ногах</label>
            <label id = "q"><input type="checkbox"/>отеки на ногах</label>
            <label id = "q"><input type="checkbox"/>онемение кончиков пальцев на ногах</label>
            <label id = "q"><input type="checkbox"/>потребность в остановках при ходьбе </label>
            <label id = "q"><input type="checkbox"/>подъем артериального давления свыше 140/90 рт.ст</label>
            </div>


            <h4 id="qwe">8.  Курите ли вы.</h4>
            <label>
            <input type="radio" name="o"/>да
            </label>
            <label>
            <input type="radio" name="o"/>нет
            </label>


            <h4 id="qwe">9. Употребляете ли вы алкоголь.</h4>
            <label>
            <input type="radio" name="o"/>не употребляю 
            </label>
            <label>
            <input type="radio" name="o"/>1 раз в неделю
            </label>
            <label>
            <input type="radio" name="o"/>1-2 раза в месяц
            </label>


            <h4 id="qwe">10.Часто ли вам приходится ходить пешком.</h4>
            <label>
            <input type="radio" name="o"/>1,5 - 3 км в день
            </label>
            <label>
            <input type="radio" name="o"/>1,5 - 3 км в неделю 
            </label>
            <label>
            <input type="radio" name="o"/>менее 1,5 - 3 км в неделю
            </label>


            <h4 id="qwe">11. Нормальный среднесуточный рацион включает в
            себя 1) овощи и фрукты, 2) мясо, 3) рыбу,
            4) кисломолочные продукты, 5) крупы, 6) мучные
            изделия ваш среднесуточный рацион включает в
            себя:
            </h4>
            <label>
            <input type="radio" name="o"/>5-6 из перечисленных
            </label>
            <label>
            <input type="radio" name="o"/>3-4 из перечисленных
            </label>
            <label>
            <input type="radio" name="o"/>1-2 из перечисленных
            </label>


            <h4 id="qwe">12. Подвержены ли вы стрессам
            .</h4>
            <div class="size_block">
                <label id = "q"><input type="checkbox"/>бывают ли периоды немотивированного беспокойства  </label>
                <label id = "q"><input type="checkbox"/>беспокоит ли бессонница</label>
                <label id = "q"><input type="checkbox"/>раздражают ли резкие звуковые и световые сигналы </label>
                <label id = "q"><input type="checkbox"/>свойственны ли перепады настроения</label>
                <label id = "q"><input type="checkbox"/>трудно сосредоточится на выполняемой работе</label>
                <label id = "q"><input type="checkbox"/>испытываете признаки сильной физической слабости, апатию </label>
                
            </div>

            <input type="submit" value="Отправить" onClick={() =>{setSend(true)}}/>
            </section>
        </div>
</form>
        }
        </>
    )
}
export default MainAnket