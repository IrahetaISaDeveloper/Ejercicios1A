import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Carousel from "./components/Carousel";
import Navbar from "./components/navbar";
import Cards from "./components/cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
          <Navbar></Navbar>

      <h1 className="color-black">Bienvenido a mi Portafolio Web</h1>
      {/*<Alert titulo={"Esta es una alerta"}></Alert>*/}
      <Carousel
        img1={"https://global.tiffin.edu/img/article/cuales-son-las-etapas-del-desarrollo-de-software.webp"}
        img2={"https://www.universitatcarlemany.com/sites/universitatcarlemany.com/files/images/imageye___-_imgi_73_metodologias-de-desarrollo-de-software-ucma-1.jpg"}
        img3={"https://web-assets.esetstatic.com/tn/-x700/wls/2023/2023-12/desarrollo-software.jpeg"}
      ></Carousel>
      <h1 className="color-black">Tecnologías</h1>
      <br />
      <h2 className="color-black2">FrontEnd</h2>
      <Cards img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png"}caption={"HTML5"}></Cards>
      <Cards img={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/960px-CSS3_logo_and_wordmark.svg.png"}caption={"CSS3"}></Cards>
      <Cards img={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/330px-Unofficial_JavaScript_logo_2.svg.png"}caption={"JavaScript"}></Cards>

      <br />
      <h2 className="color-black2">Backend</h2>
      <Cards img={"https://education.oracle.com/file/general/p-80-java.png"}caption={"Java"}></Cards>
      <Cards img={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"}caption={"Node JS"}></Cards>
      
      <h2 className="color-black2">Almacenamiento de Datos</h2>
      <h3 className="color-black3">Motores</h3>
      <Cards img={"https://mvpcluster.com/wp-content/uploads/2016/04/sql-server-1.png"}caption={"Sql Server"}></Cards>
      <Cards img={"https://agilesparks.com/wp-content/uploads/2022/08/MongoDB_Logo.svg_.png"}caption={"MongoDB"}></Cards>
      <h3 className="color-black3">Herramientas de Gestión</h3>
      <Cards img={"https://www.kenwalger.com/twitter_cards/mongodb-compass.png"}caption={"Mongo DB Compass"}></Cards>
      <Cards img={"https://i.pinimg.com/originals/32/a0/3a/32a03aee0c76419ec5bde950a62883bc.png"}caption={"Sql Server Management Studio"}></Cards>
      <Cards img={"https://upload.wikimedia.org/wikipedia/en/6/68/Oracle_SQL_Developer_logo.svg"}caption={"Sql Developer"}></Cards>


    </>
  );
}

export default App;
