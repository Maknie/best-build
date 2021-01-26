import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const ProductCarousel = () => {
  return (
    <Jumbotron fluid="false" className="primaryBg">
      <Container>
        <h2 className="text-center poppinsFont colWhite">
          ПРОФЕССИОНАЛЬНАЯ АВАРИЙНО - СПАСАТЕЛЬНАЯ СЛУЖБА{" "}
        </h2>
        <h1 className="text-center poppinsFont colWhite">KAZSPASGROUP</h1>
        <h3 className="text-center poppinsFont colWhite">
          Почему вы должны выбрать именно нас?
        </h3>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className=""
              src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="poppinsFont colBlack ">01</h1>
              <h3 className="poppinsFont colBlack">
                Сертификаты системы менеджмента качества
              </h3>
              <p className="poppinsFont colWhite transparentBg">
                20 августа 2019 года ТОО «Профессиональная аварийно-спасетльная
                служба KazSpasGroup» выданы сертификаты соответствия по Системе
                Менеджмента Качества. СТ РК ISO 9001-2016 (ISO 9001-2015)
                "Системы менеджмента качества" СТ РК OHSAS 18001-2008 (OHSAS
                18001-20087) "Системы менеджмента профессиональной безопасности
                и здоровья"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/268959/pexels-photo-268959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Third slide"
            />
            <Carousel.Caption>
            <h1 className="poppinsFont colWhite">02</h1>
              <h3 className="poppinsFont colWhite">Высокая гарантия безопасности</h3>
              <p className="poppinsFont colWhite transparentBg">
              В штате трудится работники имеющие стаж работы аварийно-спасательной службе 10-25 лет как оперативные работники – спасатели, принимавшие участие при ликвидации аварий, связанных с газонефтеводопроявлениями. Наши инженеры имеет большой опыт работы и гарантируют высокую гарантию безопасности
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/260367/pexels-photo-260367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Third slide"
            />
            <Carousel.Caption>
            <h1 className="poppinsFont colWhite">03</h1>
              <h3 className="poppinsFont colWhite">Опыт работы</h3>
              <p className="poppinsFont colWhite transparentBg">
              Наши инженеры имеет большой опыт работы и гарантируют высокую гарантию безопасности ТЕКСТ в разработке
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Jumbotron>
  );
};

export default ProductCarousel;
