import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Carousel from "./components/Carousel";
import Navbar from "./components/navbar";
import Cards from "./components/cards";
import Accordion from "./components/Accordion";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Badge from "./components/Badge";
import Modal from "./components/Modal";
import ProgressBar from "./components/ProgressBar";
import Timeline from "./components/Timeline";
import FeatureBox from "./components/FeatureBox";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ImageWithCaption from "./components/ImageWithCaption";
import PricingCard from "./components/PricingCard";
import SocialLink from "./components/SocialLink";
import SkillsBar from "./components/SkillsBar";
import Gallery from "./components/Gallery";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleContactFormSubmit = (formData) => {
    console.log("Formulario enviado:", formData);
    alert("Mensaje enviado correctamente");
  };

  const timelineEvents = [
    {
      title: "Inicio de Bachillerato en desarrollo de software",
      date: "2024",
      description: "Comencé mis estudios como desarrollador"
    },
    {
      title: "Especialización en JavaScript",
      date: "2025",
      description: "Profundizó en JavaScript y frameworks modernos"
    },
    {
      title: "Fullstack Developer",
      date: "2025 - Presente",
      description: "Me volví desarrollador fullstack con experiencia en backend y frontend"
    }
  ];

  const galleryImages = [
    {
      src: "src/imgs/deliciosos.png",
      alt: "DeliciosOS",
      title: "DeliciosOS - Sistema de gestión de cafetines - Proyecto Expo 2024"
    },
    {
      src: "src/imgs/sgma.png",
      alt: "SGMA",
      title: "SGMA (Sistema de gestión de mantenimiento automotriz)- Sistema web y Aplicación Mobile - Proyecto Expo 2025"
    },
    {
      src: "src/imgs/kimosabi.png",
      alt: "SG Kimosabi",
      title: "SG Kimosabi - Sistema de gestión de tienda en línea - Proyecto Freelance 2025"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Twitter", url: "https://twitter.com" }
  ];

  return (
    <>
      <Navbar></Navbar>

      <Hero
        title="Bienvenido a mi Portafolio Web"
        subtitle="Desarrollador apasionado por crear experiencias web increíbles"
        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
      ></Hero>

      <div className="container my-5">
        <Alert titulo={"¡Bienvenido! Este es mi portafolio profesional"}></Alert>
      </div>

      <Carousel
        img1={"https://global.tiffin.edu/img/article/cuales-son-las-etapas-del-desarrollo-de-software.webp"}
        img2={"https://www.universitatcarlemany.com/sites/universitatcarlemany.com/files/images/imageye___-_imgi_73_metodologias-de-desarrollo-de-software-ucma-1.jpg"}
        img3={"https://web-assets.esetstatic.com/tn/-x700/wls/2023/2023-12/desarrollo-software.jpeg"}
      ></Carousel>

      <section className="container my-5">
        <h1 className="color-black">Tecnologías</h1>
        <h2 className="color-black2 mt-4 mb-3">FrontEnd</h2>
        <div className="cards-container">
          <Cards img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png"}caption={"HTML5"}></Cards>
          <Cards img={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/960px-CSS3_logo_and_wordmark.svg.png"}caption={"CSS3"}></Cards>
          <Cards img={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/330px-Unofficial_JavaScript_logo_2.svg.png"}caption={"JavaScript"}></Cards>
        </div>

        <h2 className="color-black2 mt-4 mb-3">Backend</h2>
        <div className="cards-container">
          <Cards img={"https://education.oracle.com/file/general/p-80-java.png"}caption={"Java"}></Cards>
          <Cards img={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"}caption={"Node JS"}></Cards>
        </div>

        <h2 className="color-black2 mt-4 mb-3">Almacenamiento de Datos</h2>
        <h3 className="color-black3">Motores</h3>
        <div className="cards-container">
          <Cards img={"https://mvpcluster.com/wp-content/uploads/2016/04/sql-server-1.png"}caption={"Sql Server"}></Cards>
          <Cards img={"https://agilesparks.com/wp-content/uploads/2022/08/MongoDB_Logo.svg_.png"}caption={"MongoDB"}></Cards>
        </div>

        <h3 className="color-black3 mt-3">Herramientas de Gestión</h3>
        <div className="cards-container">
          <Cards img={"https://www.kenwalger.com/twitter_cards/mongodb-compass.png"}caption={"Mongo DB Compass"}></Cards>
          <Cards img={"https://i.pinimg.com/originals/32/a0/3a/32a03aee0c76419ec5bde950a62883bc.png"}caption={"Sql Server Management Studio"}></Cards>
          <Cards img={"https://upload.wikimedia.org/wikipedia/en/6/68/Oracle_SQL_Developer_logo.svg"}caption={"Sql Developer"}></Cards>
        </div>
      </section>

      <section className="container my-5">
        <h1 className="color-black">Mi Experiencia</h1>
        <Timeline events={timelineEvents}></Timeline>
      </section>

      <section className="container my-5">
        <h1 className="color-black">Mis Habilidades</h1>
        <div className="skills-section">
          <SkillsBar skillName="React" proficiency={90}></SkillsBar>
          <SkillsBar skillName="JavaScript" proficiency={85}></SkillsBar>
          <SkillsBar skillName="CSS3" proficiency={88}></SkillsBar>
          <SkillsBar skillName="Node.js" proficiency={80}></SkillsBar>
          <SkillsBar skillName="MongoDB" proficiency={82}></SkillsBar>
        </div>
      </section>

      <section className="container my-5">
        <h1 className="color-black">Características Destacadas</h1>
        <div className="features-grid">
          <FeatureBox
            icon="https://via.placeholder.com/80?text=Code"
            title="Código Limpio"
            description="Escribo código limpio y mantenible siguiendo las mejores prácticas"
          ></FeatureBox>
          <FeatureBox
            icon="https://via.placeholder.com/80?text=Design"
            title="Diseño Responsive"
            description="Creo diseños que funcionan en todos los dispositivos"
          ></FeatureBox>
          <FeatureBox
            icon="https://via.placeholder.com/80?text=Performance"
            title="Alto Rendimiento"
            description="Optimizo para rapidez y eficiencia máxima"
          ></FeatureBox>
        </div>
      </section>

      <section className="container my-5">
        <h1 className="color-black">Mis Proyectos</h1>
        <Gallery images={galleryImages}></Gallery>
      </section>

      <section className="container my-5">
        <h1 className="color-black">Planes de Servicio</h1>
        <div className="pricing-grid">
          <PricingCard
            title="Básico"
            price="99"
            features={["5 proyectos", "Soporte por email", "Documentación básica"]}
          ></PricingCard>
          <PricingCard
            title="Profesional"
            price="199"
            features={["Proyectos ilimitados", "Soporte prioritario", "Documentación completa", "Actualizaciones"]}
            highlighted={true}
          ></PricingCard>
          <PricingCard
            title="Premium"
            price="299"
            features={["Todo incluido", "Soporte 24/7", "Consultoría directa", "Actualizaciones prioritarias"]}
          ></PricingCard>
        </div>
      </section>

      <section className="container my-5">
        <h1 className="color-black">Testimonios</h1>
        <div className="testimonials-grid">
          <Testimonial
            name="Juan Pérez"
            role="CEO, Tech Company"
            comment="Excelente trabajo y muy profesional en todas las entregas"
            image="src/imgs/juan.avif"
          ></Testimonial>
          <Testimonial
            name="María García"
            role="Product Manager, StartUp"
            comment="Muy creativo y con gran capacidad de resolver problemas"
            image="src/imgs/maria.jpg"
          ></Testimonial>
          <Testimonial
            name="Carlos López"
            role="Director, Design Studio"
            comment="Perfecto para trabajar en equipo y muy comunicativo"
            image="src/imgs/carlos.jpg"
          ></Testimonial>
        </div>
      </section>

      <section className="container my-5">
        <h1 className="color-black">Preguntas Frecuentes</h1>
        <Accordion
          title1="¿Cuál es tu experiencia?"
          body1="Tengo más de 3 años de experiencia en desarrollo web"
          title2="¿Qué tecnologías usas?"
          body2="Especializado en React, Node.js y bases de datos modernas"
          title3="¿Ofrecen soporte post-proyecto?"
          body3="Sí, ofrecemos soporte por 6 meses después de la entrega"
        ></Accordion>
      </section>

      <section className="container my-5">
        <h1 className="color-black">Contacto</h1>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <ContactForm onSubmit={handleContactFormSubmit}></ContactForm>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <h1 className="color-black">Botones de Ejemplo</h1>
        <div className="button-group">
          <Button label="Primario" variant="primary" onClick={() => alert("Primario")}></Button>
          <Button label="Secundario" variant="secondary" onClick={() => alert("Secundario")}></Button>
          <Button label="Éxito" variant="success" onClick={() => alert("Éxito")}></Button>
          <Button label="Peligro" variant="danger" onClick={() => alert("Peligro")}></Button>
        </div>
      </section>

      <section className="container my-5">
        <h1 className="color-black">Insignias</h1>
        <div className="badges-group">
          <Badge text="React" variant="primary"></Badge>
          <Badge text="JavaScript" variant="success"></Badge>
          <Badge text="CSS3" variant="info"></Badge>
          <Badge text="Node.js" variant="warning"></Badge>
          <Badge text="MongoDB" variant="danger"></Badge>
        </div>
      </section>

      <section className="container my-5">
        <h1 className="color-black">Redes Sociales</h1>
        <div className="social-links-container">
          <SocialLink
            platform="LinkedIn"
            url="https://linkedin.com"
            icon="https://via.placeholder.com/50?text=In"
          ></SocialLink>
          <SocialLink
            platform="GitHub"
            url="https://github.com"
            icon="https://via.placeholder.com/50?text=GH"
          ></SocialLink>
          <SocialLink
            platform="Twitter"
            url="https://twitter.com"
            icon="https://via.placeholder.com/50?text=TW"
          ></SocialLink>
        </div>
      </section>

      <Footer
        year="2024"
        companyName="Mi Portafolio"
        socialLinks={socialLinks}
      ></Footer>
    </>
  );
}

export default App;
