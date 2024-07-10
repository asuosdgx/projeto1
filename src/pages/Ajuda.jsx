import { Accordion, Alert, Button, Container } from "react-bootstrap"

function Ajuda() {
    return (
        <main>
            <Container fluid>
                <h1>Ajuda</h1>
                <hr />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Sobre o nosso sistema</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae provident culpa neque iusto inventore. Inventore quos dicta rem. Excepturi, libero minus nulla corrupti tempora molestiae ipsa esse laborum. Reprehenderit saepe explicabo, labore repudiandae nihil eaque ut esse. Earum, modi atque! Deleniti, amet esse eius iure blanditiis optio architecto culpa voluptatem, veritatis neque cumque, eos earum! Vel maiores ut dicta unde ab libero reiciendis rerum error officia sit, ad veniam molestias recusandae eveniet eaque. Impedit tempore earum laboriosam vitae nam, magnam commodi iure. Voluptatem nemo esse quaerat quidem in provident pariatur at! Doloremque ipsa illum excepturi dignissimos mollitia harum expedita quia.
                        </Accordion.Body>

                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Sobre o nosso sistema</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veritatis accusantium, beatae perferendis vitae odio ad! Delectus dicta temporibus asperiores, sunt ducimus quam doloribus inventore recusandae perspiciatis autem hic explicabo? Perspiciatis quaerat commodi tenetur fugit saepe vel et magnam vitae culpa, similique, accusamus, rerum iste nihil cumque libero dolor. Culpa obcaecati eveniet mollitia minima voluptatem unde assumenda excepturi fuga officia ea, tempora aliquid et ut ullam commodi hic quaerat adipisci doloribus iusto perspiciatis illum maiores sunt? Et eius, odio consequatur saepe laborum repellat in consectetur aut qui eos totam aspernatur maxime veniam aperiam nostrum cumque placeat dolorem quibusdam quaerat voluptatum?
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Button variant="outline-warning">Clique Aqui</Button>
                <Alert variant="danger">ALERTA</Alert>
            </Container>
        </main>
    );
}

export default Ajuda;