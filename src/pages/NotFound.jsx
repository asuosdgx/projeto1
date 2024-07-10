import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./NotFound.css"

function NotFound() {
    return (
        <>
            <Container className="container">
                <h1>Página não encontrada. 404.</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veniam consectetur possimus sit quia pariatur unde, aliquam eveniet accusamus, excepturi quaerat omnis eum voluptate ipsum nisi ab vel praesentium. Modi amet ex ullam omnis at hic doloremque nesciunt laborum eaque sequi iusto neque quas animi suscipit praesentium, reprehenderit pariatur repellendus numquam quae a recusandae. Ullam numquam, amet repudiandae officiis enim magni saepe, sunt eaque quam ab culpa, dolores nobis explicabo laborum incidunt unde distinctio esse earum nesciunt libero? Sapiente debitis vel laborum fugiat at saepe unde necessitatibus quisquam vero doloribus minima eligendi quod, nam tempore exercitationem obcaecati aliquid non labore?
                </p>
            </Container>

            <section>

                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-4 tebs bg-dark "
                >
                    <Tab eventKey="causas" title="Causas" className='aba'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex vitae similique amet fuga non praesentium quod nisi ad dolorum accusamus porro saepe architecto pariatur maiores eveniet, soluta molestias cumque! Dolorum explicabo eius alias tempore eligendi, saepe ipsum debitis magnam.
                    </Tab>
                    <Tab eventKey="solucoes" title="Soluções">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate voluptates, hic officiis perspiciatis minima. Enim accusamus facilis, quod illo totam reiciendis labore libero iste voluptas, exercitationem dolor. Sit quo nulla commodi ullam et necessitatibus distinctio fugit! Nisi minus accusamus earum dolor deserunt saepe molestias sunt, repellendus nobis, odio beatae nesciunt error fugit corporis autem magni esse blanditiis rerum. Inventore excepturi nisi praesentium corrupti sapiente quia quisquam, nobis dolores porro officiis accusamus, nulla necessitatibus impedit hic! Ipsam, consequatur mollitia deleniti quis quos voluptatibus autem soluta aperiam consectetur praesentium assumenda porro magni nemo officiis exercitationem aliquam, asperiores, voluptates totam animi amet! Quam velit libero expedita omnis praesentium, consequatur amet commodi deserunt suscipit, atque tempora itaque optio dolor at excepturi reiciendis fugiat ducimus repellat, cum eligendi. Mollitia itaque quasi dolorem cumque aspernatur dolore magnam delectus nulla accusamus. Labore, eaque numquam cupiditate consequatur modi, voluptas perferendis expedita, hic rem molestiae voluptatibus delectus? Hic laboriosam corrupti fugiat velit possimus minus. Non aperiam sunt nostrum quae architecto? Accusamus ea modi minus commodi voluptatum provident praesentium dicta magni placeat unde, earum sunt dignissimos a assumenda. Commodi ipsa velit, ducimus consequuntur veniam voluptates libero, placeat non veritatis illo enim nam odit rerum maiores! Nesciunt dolores ipsum soluta?
                    </Tab>
                    <Tab eventKey="contato" title="Contato" >
                        <ul className='lista'>
                            <li><a href='#'>Central</a></li>
                            <li><a href='#'>Capitais e Regiões Metropolitanas</a></li>
                            <li><a href='#'>Interior</a></li>
                            <li><a href='#'>Email</a></li>
                            <li><a href='#'>Telefones</a></li>
                            <li><a href='#'>Facebook</a></li>
                        </ul>
                    </Tab>
                </Tabs>

            </section>
        </>

    );
}


export default NotFound;