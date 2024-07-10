import { Card, Button, Container } from "react-bootstrap";
import "./Home.css"

function Home() {
    return (
        <>
            <section className="top">
                <h1>Bem Vindo(a)!</h1>
            </section>
            <h2 className="tit-home">NewsLetter</h2>
            <Container className="gallery" fluid>

                <Card className="skull">
                    <Card.Header className="card-head">Conheça Nossos Parceiros</Card.Header>
                    <Card.Body>
                        <Card.Title>Veja as empresas parceiras e se torne uma!</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia iste veniam ab. Voluptate consequatur
                        </Card.Text>
                        <Button variant="dark" >Clique Aqui</Button>
                    </Card.Body>
                </Card>
                <Card className="skull">
                    <Card.Header className="card-head">Veja os novos projetos.</Card.Header>
                    <Card.Body>
                        <Card.Title>Novidades na região Norte.</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="dark">Clique Aqui</Button>
                    </Card.Body>
                </Card>
                <Card className="skull">
                    <Card.Header className="card-head">Veja os Próximos eventos no calendário.</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="dark">Clique Aqui</Button>
                    </Card.Body>
                </Card>
            </Container></>
    );
}

export default Home;