<template>
  <q-Layout >
    <nav elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>
        <img src="https://i.ibb.co/hHZ5Qkd/logo.png" class="responsive" width="120" height="30">
        </q-toolbar-title>
                <q-space />
        <q-separator vertical /> 

        <q-btn color="grey-4" size="10px" stretch flat label="Expertos"/>
        <q-btn color="grey-4" size="10px" stretch flat label="Iniciar Sesión"/>
      </q-toolbar> 
    </nav>
 
    <div class="img-header">
     <div class="welcome">
       <h1>Fitnetico</h1>
       <hr>
       <p>ROMPE TUS LIMITES</p>
       <button type="submit">    <a href="Registro.html" style="text-decoration:none" target="_blank"><Font color="black"> Registrarse</Font></a>     </button>    
     </div>       
    </div>

    <div class="skew-abajo"></div>
 <main>
    <section class="acerca-de">
    <div class="info-container">
      <h1>Quienes Somos?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie in risus eget iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at ultricies lacus. Sed ut ornare mi, ac blandit nibh. Nulla sollicitudin lorem consequat, porta est ut, scelerisque risus. Morbi iaculis a sem quis iaculis. Sed facilisis turpis placerat, aliquam augue in, aliquet lectus.</p>
      <p>Aliquam erat volutpat. Aliquam pellentesque velit ut neque consequat, id accumsan est cursus. Ut ut leo at dolor molestie porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer auctor gravida quam et faucibus. Vivamus vel porttitor leo, ac ornare odio. Praesent finibus mi urna, sed vehicula dolor bibendum vel.</p>
      <div class="about-gallery">
        <img src="https://i.ibb.co/p14rkG6/01.jpg" alt="01" border="0" />
        <img src="https://i.ibb.co/jhqSXh1/02.jpg" alt="02" border="0" />
        <img src="https://i.ibb.co/0JBhTXK/03.jpg" alt="03" border="0" />
      </div>

      <div class="about-more"><button>Leer mas</button></div>

    </div>
    </section>

   <section class="our-projects">
      <div class="skew-arriba"></div>
   <div class="deg-background"></div>


   <div class="ejeZproject">
      <div class="container-project">
   <div class="project-title">
          <h2>Nuestras Rutinas</h2>
          <hr>
    </div>
          <div class="project-img">
            <img src="https://i.ibb.co/2vxPtZq/001.png" alt="">
            <img src="https://i.ibb.co/Rjj0N7s/002.jpg" alt="">
            <img src="https://i.ibb.co/HBG3hhG/003.jpg" alt="">
            <img src="https://i.ibb.co/hss5045/004.png" alt="">
            <img src="https://i.ibb.co/9Hbj8fp/005.jpg" alt="">
            <img src="https://i.ibb.co/WDD5kWW/006.jpg" alt="">
         </div>
    </div>
      </div>
   <div class="skew-abajo"></div>
   </section>

 </main> 


 <footer class="footer">
   <div class="skew-arriba"></div>
  <div class="deg-footer"></div>
 
  <div class="ejeZfooter">
  <div class="footer-content">

   <div class="footer-title">
     <h2>Formulario de Contacto</h2>
     <hr>
   </div>

   <div class="formulario-content">
     <form id="formulario">
        <label for="user">Nombre:</label>
        <input type="text" id="user" name="user" placeholder="Ingresa tu Nombre">
   
        <label for="email">Correo Electronico:</label>
        <input type="email" id="email" name="email" placeholder="Ingresa tu Correo Electronico">
   
        <label for="message">Escribe tu mensaje</label>
        <textarea name="menssage" id="message"></textarea>
   
        <div class="send"><button>Enviar</button></div>
   
        <div class="mensaje-form">
          <p>Escribenos un mensaje, con gusto tendras una respuesta de parte de nosotros en muy poco tiempo. ATT: Fitneticos</p>
        </div>
     </form>
   </div>

   <div class="footer-text">
     <p>&copy; Fitnetico - 2020 | Todos los derechos reservados.</p>
   </div>
 
  </div>
</div>
 </footer>

  </q-Layout>
</template>





<script>
export default {
  
}
</script>

<style>
:root{
   --red:#892eff; 
   --black:#252a34;
   --blue:#be87d8; 
   --white:#eaeaea;
   --title:35px;
   --text:19px;
}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: #ffff;
    overflow-x: hidden;
    font-family: 'Red Hat Text', sans-serif;
}
.go-top{
    position: fixed;
    bottom: 100px;
    right: -100%;
    width: 50px;
    height: 50px;
    background: #fff;
    border:2px solid var(--red);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1000;
    transition: 0.5s;
}
.go-top:hover{
    background: var(--red);
    color:#fff;
    border: 2px solid var(--white);
}
.go-top:hover span{color:var(--white);}

.go-top > span{
   font-size: 30px;
   color: var(--black);
}


/** Skew **/
.skew-abajo{
    position: absolute;
	bottom: 0;
	left: 0;
	border-width: 0 0 10vh 100vw;
	border-style: solid;
	border-color: transparent transparent #fff transparent;
}
.skew-arriba{
    position: absolute;
	top: 0;
	left: 0;
	border-width: 10vh 100vw 0 0;
	border-style: solid;
	border-color: #fff transparent transparent transparent;
	z-index: 10;
}

/** Navegation Menu **/
#header{
    position: relative;
    width: 100%;
}
.menu{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 60px;
    background: #fff;;

    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
}
.menu .logo-box{margin-left: 20px;}
.menu .logo-box h1 a{
    text-decoration: none;
    font-size: var(--title);
    font-weight: 400;
    color:var(--black);
}
.menu .list-container{margin-right: 20px;}
.menu .list-container ul{display: flex;}
.menu .list-container ul li{list-style: none;}
.menu .list-container ul li a{
    text-decoration: none;
    margin: 0px 10px;
    padding:8px;
    color: var(--black);
    border-radius: 24px;
    transition: 0.3s;
    font-size: 16px;
}
.menu .list-container ul li a.active{
    background: var(--red);
    color:#fff;
}
.menu .list-container ul li a:hover{
    background: var(--red);
    color:#fff;
}

.btn-menu > .fa-bars{
    display: none;
}

@media only screen and (max-width:900px){
    .btn-menu > .fa-bars{
        display: block;
        position:absolute;
        right: 30px;
        top: 20px;
        font-size: 28px;
        color: var(--black);
        transition: 0.5s;
        cursor: pointer;
    }
    .btn-menu > .fa-times{color: var(--red);}
    .btn-menu > .fa-bars:hover{color:var(--red);}
    .menu .logo-box{margin-left: 30px;}
    .menu .list-container{
        position: fixed;
        top:60px;
        left:-100%;
        background:#fff;
        width: 100%;
        height: calc(100vh - 60px);
    }
    .menu .list-container .lists{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-top:4px solid var(--red);
    }
    .menu .list-container ul li{
        width: 90%;
        border-bottom: 2px solid var(--black);
        display: flex;
        justify-content: center;
    }
    .menu .list-container ul li a{
        font-size: 20px;
        text-align: center;
        padding:12px 0px;
    }
    .menu .list-container ul li a.active{
        background: none;
        color:var(--red);
    }
    .menu .list-container ul li a:hover{
        background: none;
        color:var(--red);
    }
}

/** Navegation Menu **/

/** IMG Header **/
.img-header{
    position: relative;
    width: 100%;
    height: 100vh;
    background:url(https://i.ibb.co/3Yc4gGX/Fondo1.jpg);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}
.img-header .welcome{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.img-header .welcome h1{
    font-size: 50px;
    color:#fff;
    font-weight: 200;
}
.img-header .welcome hr{
    width: 400px;
    height: 2px;
    background: #fff;
    border: none;
    margin-top: 5px;
}
.img-header .welcome p{
    font-size: 20px;
    color: #fff;
    margin-top: 20px;
}
.img-header .welcome > button{
    width: 170px;
    height: 40px;
    background: var(--red);
    border-radius: 24px;
    border:none;
    outline: none;
    font-size: 22px;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.5s;
}
.img-header .welcome > button:hover{
    background:var(--blue);
}

@media only screen and (max-width:773px ){
    .img-header .welcome h1{font-size: 40px;}
    .img-header .welcome > button{width: 130px; font-size: 20px;}
}
@media only screen and (max-width:590px){
    .img-header .welcome h1{font-size: 30px;}
    .img-header .welcome hr{width: 100px;}
    .img-header .welcome p{font-size: 17px;}
    .img-header .welcome > button{width: 100px; font-size: 17px;}
}

/** Acerca de Nosotros **/
.acerca-de{
    width: 100%;
    margin-top: 120px;
}
.acerca-de .info-container{
    width: 80%;
    margin:auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.acerca-de .info-container h1{
    font-size: 50px;
    font-weight: 400;
    color: var(--black);
    text-align: center;
    margin-bottom: 20px;
}
.acerca-de .info-container p{
    text-align: center;
    font-size: 17px;
    color: var(--black);
    line-height: 35px;
    margin:10px 0px;
}
.acerca-de .info-container .about-gallery{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 50px 0px;
}
.acerca-de .info-container .about-gallery img{
    width: calc(33.333% - 10px);
    height: 300px;
    margin: 10px 10px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
}
.acerca-de .info-container .about-more{
    width: 100%;
    display: flex;
    justify-content: center;
}
.acerca-de .info-container .about-more button{
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    background: var(--red);
    border: none;
    outline: none;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
}
.acerca-de .info-container .about-more button:hover{background: var(--blue);}

@media only screen and (max-width:773px){
    .acerca-de .info-container .about-gallery{flex-direction: column;}
    .acerca-de .info-container .about-gallery img{width: 100%;}
}
@media only screen and (max-width:590px){
    .acerca-de .info-container h1{font-size: 30px;}
    .acerca-de .info-container p{font-size: 15px;}
}

/** Nuestros proyectos **/
.our-projects{
    position: relative;
    width: 100%;
    height: 100%; 
    background: url(https://i.ibb.co/vs5qHRY/Fondo2.jpg);
    background-attachment:fixed;
    background-position: center;
    background-size: cover;
    margin-top: 100px;
}
.our-projects .deg-background{
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.8);
}
.our-projects .ejeZproject{
    position: relative;
    width: 100%;
    height: 100%;
}
.our-projects .container-project{
    width: 90%;
    margin:auto;
    padding-top: 100px;
}
.our-projects .container-project .project-title{
    border:2px solid #fff;
    padding:10px;
    text-align: center;
    width: 50%;
    margin: auto;
}
.our-projects .container-project .project-title h2{
    font-size: 40px;
    color: #fff;
    font-weight: normal;
}
.our-projects .container-project .project-title hr{
   background:#fff;
   width: 50%;
   height: 3px;
   margin: 10px auto;
}
.our-projects .container-project .project-img{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 80px;
    padding-bottom: 100px;
}
.our-projects .container-project .project-img img{
  width: calc(30% - 10px);
  margin:10px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
}
@media only screen and (max-width:773px){
    .our-projects .container-project .project-img img{width: 80%; margin-bottom: 30px;}
}
@media only screen and (max-width:446px){
    .our-projects .container-project .project-title h2{font-size: 30px;}
}

@media only screen and (max-width:890px){
    .testimonios .box-testimonio .card-testimonio .card-img img{width: 200px; height: 200px;}
    .testimonios .box-testimonio .card-testimonio{width: 100%;}
    .testimonios .box-testimonio .card-testimonio .testimonio-text h4{font-size: 25px;}
    .testimonios .box-testimonio .card-testimonio .testimonio-text p{font-size: 17px; line-height: 35px;}
}

/** Footer **/
.footer{
    position: relative;
    width: 100%;
    height: 100%;
    background: url(https://i.ibb.co/SmVJgT6/footer.jpg);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}
.footer .deg-footer{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
}
.footer .ejeZfooter{
    position: relative;
    width: 100%;
    height: 100%;
}
.footer .footer-content{
    padding-top: 100px;
    width: 90%;
    margin: auto;
    padding-bottom: 100px;
}
.footer .footer-content .footer-title{
    width: 50%;
    margin: auto;
    border:2px solid #fff;
    padding:15px;
}
.footer .footer-content .footer-title h2{
    font-size: 35px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    margin-bottom: 5px;
}
.footer .footer-content .footer-title hr{
    background: #fff;
    height: 2px;
    width: 80%;
    margin:auto;
}
.footer .formulario-content{
    width: 60%;
    margin: 50px auto;
    background: #fff;
    padding:30px;
    border-radius: 50px;
    border: 1.5px solid var(--red);
}
.footer .formulario-content #formulario{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.footer .formulario-content #formulario label{
    font-size: 20px;
    text-align: center;
    color: var(--black);
    margin: 30px 0px 10px 0px;
}
.footer .formulario-content #formulario input{
    width: 90%;
    height: 40px;
    margin:auto;
    border-radius: 24px;
    outline: none;
    border:1.5px solid var(--red);
    text-align: center;
    font-size: 18px;
    color: var(--black);
}
.footer .formulario-content #formulario textarea{
    width: 90%;
    height: 200px;
    margin:auto;
    padding: 20px;
    border-radius: 24px;
    outline: none;
    border:1.5px solid var(--red);
    font-size: 15px;
    color: var(--black);
}
.footer .formulario-content #formulario .send{
    margin: 30px;
    display: flex;
    justify-content: center;
}
.footer .formulario-content #formulario button{
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    background: var(--red);
    border: none;
    outline: none;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
}
.footer .formulario-content #formulario button:hover{
    background: var(--blue);
}
.footer .formulario-content #formulario .mensaje-form{
    width: 100%;
    margin:auto;
    padding:20px;
}
.footer .formulario-content #formulario .mensaje-form p{
    font-size:19px;
    color: var(--black);
    line-height: 35px;
}
.footer .footer-text{
    position:absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background:rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #fff;
}
.footer .footer-text p{
    font-size: 20px;
    text-align: center;
    color: #fff;
}

@media only screen and (max-width:900px){
    .footer .formulario-content{width: 85%; padding:20px;}
    .footer .formulario-content #formulario input{width: 100%;}
    .footer .formulario-content #formulario textarea{width: 100%;}
}
@media only screen and (max-width:590px){
    .footer .formulario-content{width: 95%; padding:20px;}
    .footer .formulario-content #formulario label{font-size: 17px;}
    .footer .formulario-content #formulario input{width: 100%; font-size: 17px;}
    .footer .formulario-content #formulario textarea{width: 100%;}
    .footer .formulario-content #formulario .mensaje-form p{font-size: 17px;}
    .footer .footer-text{width: 100%; padding: 0px 30px;}
    .footer .footer-text p{font-size: 17px;}
}

</style>