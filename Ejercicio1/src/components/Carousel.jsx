const Carousel = ({img1,img2,img3}) => {
    return ( 
        <div className="carousel" id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="Slide 1"></img>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="Slide 2"></img>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="Slide 3"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
     );
}
 
export default Carousel;