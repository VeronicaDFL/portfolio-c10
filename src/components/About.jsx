import {Container,Row,Col} from "react-bootstrap"
import pic from "../images/v2.jpeg"
export default function About() {
    
    return (
            <>
        <section>
           <Container className="bg-danger">
            <Row >
                <Col>
                <img src= {pic}
                alt="Prifile Pic"/>
                </Col>

                <Col>
                <h1>Hi I am Veronica</h1>
                <p>I am a Software Engineer located in South Florida.
                    Currently working with Javascript.
                </p>
                </Col>
            </Row>
           </Container>
        </section>
        
        </>
    )
}
                

    