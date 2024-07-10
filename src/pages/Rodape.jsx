import "./Rodape.css"
import { Link } from "react-router-dom"


function Rodape() {
    return (
        <footer className="roda">
            <h3>Informações:</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero reiciendis pariatur, rem nesciunt, alias quos officia aut ipsum consequuntur magni cum quod. Dicta harum reiciendis cupiditate suscipit quisquam pariatur tenetur reprehenderit, illo tempora, sunt perferendis assumenda dolor temporibus, incidunt atque sit fugiat ducimus accusantium corporis saepe? Libero, voluptas distinctio.</p>
            <h4>Dúvidas? Acesse a Política de Privacidade</h4>
            <Link to="/pol" className="nav-link">Politica de Privacidade</Link> 
            
            <aside className="redes">
                <h3>Siga nas redes: </h3>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Youtube</a>
            </aside>
            <hr />
            &copy; 2024 SoulCode Bootcamp

        </footer>
    )
}
export default Rodape