

export const BannerHome = () => {

  return (
  <>
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <h2 className="carrousel-title unstyle">Próximamente~Addicted</h2>
      <p className="carrousel-parraph unstyle">Una mujer de negocios exitosa, Zoe Reynard, parace haberlo conseguido todo: el esposo de sus sueños, dos hijos maravillosos y una carrera próspera. Aún cuando todo parece perfecto desde afuera, Zoe aún no logra escapar o resistirse a ciertas tentaciones.</p>
      <img src="public\img\imageMovieBannerOne.avif" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <h2 className="carrousel-title unstyle">Próximamente~Divergente</h2>
    <p className="carrousel-parraph unstyle">En el futuro, una adolescente aprende que es una "Divergente". Cuando se entera del complot de un malvado líder para asesinar a todos los divergentes se embarca en una búsqueda frenética para saber la verdad sobre sí misma y por qué el líder quiere que maten a los de su clase.</p>
      <img src="public\img\imageMovieBannerTwo.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <h2 className="carrousel-title unstyle">El Club de Madres Solteras</h2>
      <p className="carrousel-parraph unstyle">Cuando cinco madres solteras que luchan ponen de lado sus diferencias para formar un grupo de apoyo, encuentran inspiración y risa en su nueva hermandad y se ayudan mutuamente a superar los obstáculos que se interponen en su camino</p>
      <img src="public\img\imageMovieBannerThree.avif" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>
  )
}
