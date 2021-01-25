import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Есть вопросы? Задайте свои вопросы сообщением <a href={"mailto:" + "inkarzhanan@gmail.com"}>на почту</a></Col>
        </Row>
        <Row>
          <Col className='text-center py-1'>Copyright &copy; KazSpasGroup</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
