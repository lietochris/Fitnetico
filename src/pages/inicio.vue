<template>
  <div>
<nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
  <div class="container">
      <a class="navbar-brand" href="/inicio"><img src="https://i.ibb.co/FgcygyG/logoB.png" class="d-inline-block align-top img-fluid" alt="" width="120" height="30"></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar3SupportedContent" aria-controls="navbar3SupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse text-center justify-content-end" id="navbar3SupportedContent">
        <a class="btn navbar-btn btn-outline-light" href="/perfil" style="">Mi perfil</a><img src="" alt="" width="20"><a class="btn navbar-btn btn-outline-light" href="#where">Cerrar Sesión</a>
      </div>
    </div>
  </nav>
  <div class="py-5 filter-dark cover bg-fixed" style="background-image: url(https://www.skyfitnesschicago.com/wp-content/uploads/2016/10/Sky-Fitness-Chicago-ClassesPrograms-GroupExercise-MoveStrongFunctionalTraining-Header-Image.jpg);background-position:center bottom;background-size:cover;" id="mission">
    <div class="container my-auto">
      <div class="row">
        <div class="col-md-8 p-3 text-white">
          <h2 class="mb-4">¡Bienvenido de nuevo!</h2>
          <p class="lead"><i>En fitnetico estamos para servirte y seguir impulsaldo un estilo de vida saludable</i></p>
        </div>
      </div>
    </div>
  </div>
  <div class="py-5" id="what" style="">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-10 mx-auto px-4">
          <h2 class="text-muted mb-4">Elige una opción</h2>
          <div class="row text-left">
            <div class="p-3 col-lg-4 col-md-4" style="">
              <div class="row mb-3">
                <div class="text-center col-3"><i class="d-block mx-auto fa fa-4x fa-user text-primary"></i></div>
                <div class="align-self-center d-flex align-items-center px-0 px-md-2 col-9">
                  <h5 class="mb-0"><b>&nbsp;Mi perfil</b></h5>
                </div>
              </div>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod.</p>
              <div class="row">
                <div class="col-md-12"><a class="btn btn-dark btn-lg btn-block shadow-lg" href="/perfil">Ir a mi perfil</a></div>
              </div>
            </div>
            <div class="p-3 col-lg-4 col-md-4" style="">
              <div class="row mb-3">
                <div class="text-center col-3"><i class="d-block mx-auto fa fa-4x fa-check-square-o text-success"></i></div>
                <div class="align-self-center d-flex align-items-center px-0 px-md-2 col-9">
                  <h5 class="mb-0"><b>&nbsp;Mis rutinas</b></h5>
                </div>
              </div>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod.</p>
              <div class="row">
                <div class="col-md-12"><a class="btn btn-dark btn-lg btn-block shadow-lg" href="/rutinas">Ir a mis rutinas</a></div>
              </div>
            </div>
            <div class="p-3 col-lg-4 col-md-4" style="">
              <div class="row mb-3">
                <div class="text-center col-3"><i class="d-block mx-auto fa fa-4x fa-pencil-square-o text-warning"></i></div>
                <div class="align-self-center d-flex align-items-center px-0 px-md-2 col-9">
                  <h5 class="mb-0"><b>&nbsp;Generar nueva rutina</b></h5>
                </div>
              </div>
              <p class="text-muted">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid.</p>
              <div class="row">
                <div class="col-md-12"><a class="btn btn-dark btn-lg btn-block shadow-lg" href="#">Crear rutina</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-5 text-center bg-light" id="who">
    <div class="container">
      <div class="row">
        <div class="col-md-12"> </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h2 class="mb-4">Acerca del desarrollo de Fitnetico</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a href="#">
            <div class="bg-light">
              <img alt="Card image" class="card-img rounded-circle" src="https://thumbs.dreamstime.com/b/programming-services-minimal-vector-icon-flat-isolated-eps-illustration-design-long-shadow-117826012.jpg">
              <div class="card-body p-0 bg-light">
                <p class="mt-3 mb-1 bg-light">Sobre los&nbsp;<br>desarrolladores</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a href="#">
            <div class="bg-light">
              <img class="card-img rounded-circle" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMVFRUVFRYaFxgYGBgXFRYWHRoXFhUXGBcYHSggGBolGxUXIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0ODw8PECsbFRkrLTc3LS0rKysrKysrNzcrKystLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgDAgH/xABPEAABAgMDBggICwcEAQUBAAABAAIDBBEFITEGEkFRYZEHCBMiVHGB8Bczc6GxssHTFBUjMjRCUmNyktEWJFNik+HxQ3SDwrM1RIKiwyX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANv4A7P6RNb4Xu08Adn9Imt8L3atpEFS+AOz+kTW+F7tPAHZ/SJrfC92raRBUvgDs/pE1vhe7TwB2f0ia3wvdq2kQVL4A7P6RNb4Xu08Adn9Imt8L3atpEFS+AOz+kTW+F7tPAHZ/SJrfC92raRBUvgDs/pE1vhe7TwB2f0ia3wvdq2kQVL4A7P6RNb4Xu08Adn9Imt8L3atpEFS+AOz+kTW+F7tPAHZ/SJrfC92raRBUvgDs/pE1vhe7TwB2f0ia3wvdq2kQVL4A7P6RNb4Xu08Adn9Imt8L3atpEFS+AOz+kTW+F7tPAHZ/SJrfC92raRBUvgDs/pE1vhe7TwB2f0ia3wvdq2kQVL4A7P6RNb4Xu08Adn9Imt8L3atpEFS+AOz+kTW+F7tPAHZ/SJrfC92raRBUvgDs/pE1vhe7RW0iAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIsKZtSHD8Y4MqaDOIBOi4LKa+p7Ag+0REBERAREQEREBERAREQEXyXALyfNsAqTQazcPOg91+VWPCtCE40a9rjqBBPmUa4R7efKWfGmIJAiCgaSK3k0QS3OC/VyNN5WWhFPLRI8XMDhe0kMzsQKC7Quh+DbK+HOyjXE/KsuiN+tXXtQfmWWX8Czi1kbPL3jObmtupXWoZM8OsMeLlYjhpJIC8+MPKky8vG+zEc0nYbx6FBeC/K+Ws8TBmIRiGIGZlGtN4rWucbkE4bw730MoQNrhWmtWhZNvMmpZszAdVrmki7SAag9RXMuWGUMO0JwRmwxAh8xpuFaVvcaXXLoLIKWl4cjDhS0QRGBpOcPtEX1GhBWDeGO0TGEICCBygZUtJPz83QugYROaK40FVx00fvwGqZ/8A2XYzMB1IPl7qKD5W8JknJOMMvMWIMWQ6EtOonALbcIdpGWkY8dpo5kM0Oom4Fc3ZD2L8PtGHCimoeXPedYF53oLYleHKWc4B8GMwHTzTRWNYOUECbZnwIrXjTTFpxoQohanBNZphuDYHJuODmuNQaGmOhUlkpbMSQtAZhrSLybxoe3Ozb+pBcfDTY8WNAgxoDXOiwozaNbiQcPOFPrAivdCYYjS15hszwcQ6l4WwhYDqC/XOog+kWmtbKmSljSYmIcM/zFe1m5QSscVgRmRPwuBO5Bs0Xyx4OC+kBERAREQEREBfER1F9r8LaoKfy/4XzLRYktLQTyrDml8QUaDra3SorI2Ha9swuXdMgQySACaAkbBtW24wGTVIkOeht5poyLQafqE9eCh+ReVtow2fAZJnKOcXOZQVc37WaDgg09nzsxITYDXuz4cUNdzjmuvoRRXJw2zjviplw+UjQ67Ls70rV5E8E8QxPhVonOdnZxhYkuN9XOwN+hffGCcWy8tDBIaYjjTAXC65BHuDwSL7KmoM5FZDzolxPzgc00IUQyUykfZ82IkN2fDDqPxAeyuNOpSng44Mm2hA+ExIz2DPLc1rQSaYG/0qRZT8C/MZ8BrnV55iHEbEEg4XmMmrHdGhEOa0tiA7BQGm9Uxwd2nKS8w587C5SEWEUzc6jtCvLJjIePCs+LITUURGPBa3NBJYDoFbgFhSHAxIQ/n8rFN2JoPMgq3hGtyz5l0ISMENLfnPDc2o+yWjGisTgHs6MyXjRXghkR4zAbjcKGgUyszg/s2DQslIddbhnmvapRDl2NADWgAYAAADqQcd2pG5Kde+nzI7nUN1aRC7dcrXhcPrrgZIbaRf7K33ZPSZJJloBJNT8my86TgsaLklIuBBlIBB0cmz9EEPbbJt2y5kMhGDnVayrg6rhQ0VPZC2oLPtNj5hpaGZzHV0A3Z3UunLJsaXl2lkCEyG2taNFBna1G8sODyTnyXPh5kT+IygPb9pBj29wm2eyA97I7IjwDmtbiToVCZKWXEnp9gYDzoue4j6ozs+/wBCtPwGQaj95i0BwzW39qnWSORUrINcIEMhzqZz3XuNNAOgbEEphi4dS+JjR1r0ChHCxlHHkJeFMQA11ItHhwNKEXXjBBzzldygtGMJnOB5Y5x05lbi2v8AKpjbmRkGBJttGypuI4NIzhWrjU4DNFxG1SCz5aWyigPdFhNl5qFQB7TUuFK36aKvoE3O2NNug5xrdnMN8OIzQaYFBbnA9l3FnWvl49DFhAEO1tw522tVaLTcojkPLScWG2eloLGOjM5xaAL9IoNtVLWoPpERAREQEREBERBpsqLHbNS8WA4A57bq6HAc071zJknEjSVow+a7lIcUNc0Alxbg4bBS9dZkLXQLAlmRHxmwmCI81c6nOJ60GXJvDmhwqKgGhUdyosyRjPhmd5M5hcYYe4AX43KTsYBXaqN4wY+WlfwxfSEFpyFpyUFoZDiQGMAoGtewAedZZyjlf40L+oz9VydKWXFi15KC+IG45jC+h25oNF7jJycP/tY/9F36IOpHZWSYvMeEB+Nq8zlnI9Jg/nC5Z/ZmcxMrHp5J36LFZZ8THkn/AJD1+ghB1h+2cj0mD+cJ+2Uj0mD+cLlH4ri/wX6vmHHAecFDZcXTBf8AkOoH0EHtQdX/ALZSPSYP5wvz9spHpMH+oFyiLKimtIL7seYbryB5wU+Kot3yL7/5Dfh+o3oOrv2ykekwf6gX4ctZDpMH84XMQyPniK/Ao9/3a+25Hz/Qo/8ATQdLnLqzulQfzhfjsvLOAr8Kg/nC5xGR9odEjj/jX67JC0KfRI5/40HRrcvLPOEzC/MvSNElLTgxIIcyLDpR4BqRXA7CuYbQsyZls3loT4WcOaHtpXXRXHxfH1hzhOPKw6/kCCPWtwd2lZ8UxbNil7dQPPA0BwOKjLsjrYnpiseDFz33GJEFGtAXUBhhOTCDVZKWM2UlYcu3/TaAaYV0rb0RraL9QEREBERAREQEREBERAVFcYMfLS34YvpCvVUTxhnUiy34YvpCDa8Xfxc55Vnqq4VTvFzNYU4fvW+qriQa+2ppjILy6tM3R7FT0zOhzjyQMMHWecdde/6CecIM5mwQypBJ7O1VlFiUNB/fXUbK99JLI+2xyDW+pOFdPX39p8HzLrriS41oTie/t6hupGUgxGHOudU0piOut3m0dg10WVLHAOpzDSuBIN9R2U73k0xDORKEV0Gp3V7MPN1nfWdk7ORyxzQWtdXnEUoP7mu89mgiQyTc0AE3VuuvBOnuewWbkNbrDLta8sY6GaX3VGg4oiS5NS0WHCDYxq6nXQauxbdYcnONeCWkEbFltKMv1ERBR3GDfR8rsEU+xbHi7xKwpu7/AFId/wD8FrOMMOfKnZF9hWx4ufipvVykP1EFxIiICIiAiIgIiICIiAiIgIiICobjFeOlfwxfSFfKonjCj5aWH3cT0hBs+Lh4mb8sz1Vcap3i5CkKcH3rPVVxIIplNY75l0NoqGgmp2dqwMp8m4TZdphwQ5zBSoFHUU5oviKEXVNy7IIBzH1I7DXTdj2f5OFbM0CACKmt+sXYGvZv7Bk5VyrmTcSl4DhS7NF9L+/n0Y1kQIMaKWRH8mXGgrgTXSdvfWSxsrHDHsa1wqaUpS4AYYU1ebtOqtOXYx/MqW1vFLtl+yvfRPviQwmjNAJDT17N/fUIba8q7OJbWmoXnqpv8/aGwyQyl5BxhvD3MLrrwA39e/WbYgOq0HWqQs2TMJzI0ZnKQmk1GFMKHbfTvcLksy0GRIYcw1FBXZsKFZ6IiMqL4wh58p/yra8XTxE35ZnqBanjCeMlRsi+we1bbi6ikCaH3zPUCC30REBERAREQEREBERAREQEREBUPxhXH4TLj7mJ6wV8Kg+MQP3uW8i/1gg3XF08VOeVb6quJU7xdPFTnlm+qrVtOeZBYYkQ0AG/UEHvGjAC80UftHKVt7IJaXtNDW4DCqjE3abozs59c28tGoVu81Du2L5izTPm0zicSBQnZvr59tTTytItjvBmaVd82/mlwNaNOg3YbtK0sxLhmc2GK0vJd88E3ilcRpr7KAZc85rRfQc0kHUMbvNo0jZTFNqFxZRvPF1Rp2enz9ob+ycoHuY1pcXOAzScT/fDvS/zi15ZgFKF39zo7+jWSMo10Q3EAhrzrDq85o1gg99G0nYL6w3j6pB6m4Gt+gd9YZlvBhYc6gFLh2b++/RZLW+6XiPuq2l4voNR1ez2Z89I8oc5ziRUEAE0c2v2QO9N2JOWbznloILmCgF4qDhfhh6e0JbZWXMOI4ticwaDfQnQpbAihwzheDgdappoD4YJINQRpBBGNxwOjdhomeQtpOewwXX5l7Xfy6AiVX3GCPysr+GJ5z/Zbni6msCa8sz1AtFxg/HSvk4nrBb3i6fR5ryzfUCIt5ERAREQEREBERAREQEREBERAVB8Yc/vUt5GJ6zVfioHjC/S4HkX0/M1BveLp4qc8sz1VI+E+YcAyHXmuvPYo5xdPFTnlmeqpTwoMZyAcbnhwzSMdqCDC1mtaKVrtwuw9ve8/T7SDRUvGdqaLsNffRsA1vwNuOdffdsuwp381PR0nDLTW+hu79/MSTTyizbYjiSQK3Y4aLzv3ntybMzGuHOdQ1o6t2dWgJHV7NV2pZRr3YuHNoMa4d+4plMeQ+jG0OFNI19dR7e0N7MRXQnNihwoaVZvrU1oD311z49qtLKjSMdN/fX6BTDg2VnMzox5uNK0u0C/b7OzQ2gxzc7Muh1IFSQQam4awN3tuiWS8+M3GhoMcXY3jZj3rXXRpx8Q8x3Nc6laYaDfu39VMexbLqGxIjiK85rQbiBiSdVB30YVqTZa5xaQwV+br1nrN3fGD9ZDdzmtcKXkm7d3/WskyIe5syA4/OYfNeK9ffUIZJxaOL3VN2N5vNMfPr9o3LJ3No9j8131aaCPbf30hjcP4+VlfJxPSD7FveLl9GmvLt/8bVEeGSeMdshFre6E+tNYND51L+LoP3aa8s31Aiat1EREEREBERAREQEREBERAREQFQPGFd+9y+yC/wBYK/lQHGC+mQfIP9YIN1xdXUgzh++b6qzOE+cLpljReGht197scFFOCLKWHJy80De90VpaNHzTjpos9toxI8Qxohq5xurcGjUNWB/tpLHiILgA4moJw26jXb7Os+EzHzbtY07r9vfq9bTnaGjb9dANFDgO/oGodHLzztR0XA6Md1P8krIl5hgDi8kOJuAwvFcdXfr9pKda15qzOJwxxw09XfRrhgK6zUaT/i/Rp3fpmnU5tAK3kaB17u+Ib6atiJmgjm0F1/ZUtHbTT7dO+K+I9rS4E1FdAAF5NfZ3Hm6K4il1DTt1ej0dnlyV19wprpjXvv2VDf8AxvmspnXYDVmivfvfqbSmw+l1MMNPfvswXQjdfzdmoaLu+G2m7lcmJp8Ax2M5l5APz3N+0G6Rs/W8msCTmiBza34gjv8A5p1H25Zl+NTW46Nd5xNPbruw4rzWgup5hsGvvou9mR9BBvpWguOip1aO+JdRnKyMXPYM4lrWkNGgX1NFbXF1P7vNeWZ6gVR5VuGfDza0zDiKU5ytzi6fR5vy7fUCMreREQEREBERAREQEREBERAREQFQHGG+lwPIP9YK/XOooZlrYFnR3CLPFgzGkDOcG3Vqg5ok7QfDBDTSprWl9aUxKzBlNNC4RSOoDv8A4VvfE+TA+vA/qn2LY2ZkhYEx4gQ4h1Nimu6qCjn25MuJJeb/AOX9B3qV8vtqYFByh3dn6bhqXQ7uCyywKiX/APs4LXRMirCaS08mHDEGMQQeqqCi/jePjymjV1fp5zrXj8aRzdnk7N9fT5tivyW4P7EimkKj3aQ2MSR51neCWzAa8m8/8jv1Qc9C1ZgXCIadmwegecrzFrzFTWIb7r/P32BXxP5C2FBdmxc1jiKgOjOBpoNCcLl5wsh7Bc5rGljnONzeXJJ6gDego1tqRzeHmtRho7085W1/be1BcJqM0DAc0ADULlc0zwf2JAI5SHDYTeM+IRUbKlfBySsA/wADqMW7svQUUbWmTU8o8mta004nRrHnK+YlqTP8R3o16htPmXQspwcWPFALIDXNODg4kHXpX5O8Hljwb4kFjG/ac8gdV5Qc4zkWI81eSTrPfYry4ujaSs15dv8A42rMdk7k62ppLdfKf3UpyIlpFjIgkOSzC4Z3Juzudt7EEnREQEREBERAREQEREBERAX4Sv1eccXbkEM4TstW2dCbm86NEqGNrdtJ3rmy0LRmZyNWI58aI91zb3Xk4NAUp4bbRdFtSIw3CC1rAOypPbULa8AdlMizkSK8A8g1paDoLiRUbkEfbwZWryfK/BqDGhIzqfhxUXdEjQIhALoURhv+q4FdcZSZRS0mxr5mLybXOo0kE1dStLupQSayhycixnR4j4LojsSWuv7KIMvgfyuiTkuYcZxdFgmmcac9ug3aVpeG3IoPhmfgNo9g+VAHzmaHU1hTTJbKWzI8YQpJ8MvoSQxmbcOxSqalw8ZrgC0ghwOkHRRByBk1b0WTmIcxCN7CKjQ5tbwR1Lp2FlfBfIfGGd8kGZxFcHfZ3qg+FHIz4vmnZleQiHOhn7JPzmFRj42i8i6WD3ciX52Z9XO6tKDIyst+JOzMSYfi64A/VYPmjqorZ4E8i80CfjtFT4kEXgU+f1qA8GOSBn5kB/iYdDEOumDe1dPwJYMYGtADWgADUAKABBRvGKdSYlRo5N/rBVA41Vu8Ys/vEr5OJ6wUJybsRseRn4oHPgMhvHVXndqC4OAG0s+TfBLvEvOnQRUdi0vGNtT6NLtOOc9w2YD0KO8AVrCHPPgHCPDNPxtvA3ErS8LVpfCbTjZpq2HSGzbTGnaSgh5d3oFf/Fy+iTPl/wDoFVvCJZLZV0rBa3NcJSGYm15qSTtvorS4uQ/dJn/cf9GoLcREQEREBERAREQEREBERAXlMnmleq+XioQcu8MsmYdqRnH/AFA13mofYt7xfp5rJuNCNxiw2lu0tca+lTjhkyJdOQhMQW1jQQeaMXsNKjruVASszHl4oewvhRYZuN7XNI0U9iDpLhTyQi2lBhQ4L2MMOKXEurQjNLaXdaonLfIiYszk+We14iVoWVpUda3cLhjtJrA08k4i7Pc0536KI29lBNzzw6YiPikfNbob1NaPOgm3F/NbSNdEB/rBdHqjuA7JCbgzBnI8Mw2GG5rQ65xrQ1pqV4oIhwlWXCjWfM8oK5kNz2m6rXAaLlynC9i63y+vs+bH3ET0LkilBjoQdTcFFlQodmS7obc0xYYc8jFzjpUzcLuxRvg0H/8AMlBqgtr1qSRBcUFBcYz6RKj7uJ6wX5wFSTY0OfhOwfDa09tV+8Yv6RK+TiesFkcXU86b6mIKxkJp8hOiIynKS0V1M7A0q2+mxZ2R8iZy0YQOL4piOHUc89lStlwwWYIFpRaCgiBrxtrWqkPF9szOmY0wR4pga3rfjTbcgwOHv/1BvkG+lTbi4OrKTP8AuB6jVCuHgH4xb5BvpU34uYpKTP8AuP8Ao0ILbREQEREBERAREQEREBERAREQfD2VWhtnI2TmvHwIbzrIod4pepCiCEDgqsrorN7v1W2sjIySlvEy8Ju3Nqd5UhRB8NZRfaIgxpuTbEa5kQBzHAhzTgQcQVoTkDZvQ4HYyik6IMeQlGwmNhsAa1ooAMAF7kL9RBp7YyalZotMxBhxS0ENz21oDjRftl5Oy8sCJeEyFnUrmClaLbog01q5MSsyQ6PBhxHNFAXNqaL0smwJeWDmy8JkIONXBjaAnQVtUQaO0slZSYfnx4EOI6lKubW7QsixLCgSocIENkMOIJDG5t62iICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q==" alt="Card image">
              <div class="card-body p-0 bg-light">
                <p class="mt-3 mb-1">Sobre el experto en el que se basa el sistema<br></p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-4 px-4 mb-4 col-6 px-lg-5">
          <a href="#">
            <div class="bg-light">
              <img class="card-img rounded-circle" src="https://img-s2.onedio.com/id-538edd753686a29d4eab98f7/rev-0/raw/s-c7630f957233a13e259fef20603ccf79375e4bd4.jpg" alt="Card image">
              <div class="card-body p-0">
                <p class="mt-3 mb-1" style="">Sobre un&nbsp;<br>sistema experto<br></p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="text-white bg-dark" id="where">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-3">
          <p class="text-center text-muted">© Copyright 2020 Fitnetico - All rights reserved. </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import '../css/inicio.css';
</style>