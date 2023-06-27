function load_header() {
    let header = `
    <div class="nav container">
    <a href="Index.html" class="logo">Bencant <span><img style="width: 50px;" src="imagenes/joystick.png" alt="Logo"></span></a>
    <div class="nav-icons">
      <i class="bx bx-bell bx-tada" id="bell-icon"><span></span></i>
      <i class="bx bxs-cart"></i>
      <div class="menu-icon">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>
    <div class="menu">
      <img src="imagenes/Theknight.png" alt="hollowknight">
      <div class="navbar">
        <ul>
          <li><a href="Index.html">Home</a></li>
          <li><a href="#popular">Juegos populares</a></li>
          <li><a href="#nuevo">Juegos nuevos</a></li>
          <li><a href="#proximamente">Proximamente</a></li>
          <li><a href="#nosotros">Sobre nosotros</a></li>
          <li><a href="Login.html"><button>Iniciar Sesion</button></a></li>
        </ul>
      </div>
    </div>
    <div class="notification">
      <div class="notification-box">
        <i class="bx bxs-check-circle"></i>
        <p>Compra realizada con exito.</p>
      </div>
      <div class="notification-box box-color">
        <i class="bx bxs-x-circle"></i>
        <p>Error al realizar la compra.</p>
      </div>
    </div>
  </div>
  `;
    document.getElementById("contenidoHeader").innerHTML= header;
}