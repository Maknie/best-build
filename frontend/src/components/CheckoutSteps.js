import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Вход в систему</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Вход в систему</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Контактные данные</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Контактные данные</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Оплата</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Оплата</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Завершить заказ</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Завершить заказ</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
