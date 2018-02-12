$(document).ready(function(){
/*hay q añadir los productos dentro del carrito*/

  $('a.btn').on('click', function(event){/*se selecciona el lugar al q se añadira el evento, luego hacemos el evento .on con el es una situacion en la q se hace algo luego añadimos ('click',  "no olvidar la coma ni las comillas" luego indicamos la function(event) en este caso es el evento que se ejecutara */
    event.preventDefault();/*en este caso el evento que llamo es el de prevenir el comportamiento por defecto del ancla "a.btn" Este comportamiento no dejara q la pagina suba al inicio al precionar el  ancla*/
    var product = $(this).prev().text()/* añadimos una variable de lo que estamos haciendo en este caso haremos una variable del ancla  hacemos referencia del cancla con un this usando en ves del ancla $('a.btn') añadiremos el .prev() q dice q sacara informacion el siguiente elemento en este caso el siguiente elemento del a.btn es el "H5" al cual buscamos tomar como informacion tenemos q tomar en cuenta q el .prev() no solo sacara la  informacion de texto si no todo lo demas, por ende tenemos q ser mas especifico añadiendo tb el .text() para hacer incapies en q solo nos de el texto en el h5*/

    $('ul.cart').append('<li>' + product + '<span class="btn-x">x</span></li>');/*luego de q ya tenemos la variable product lista, lo que sigue es .... continuara*/
    $('a.btn-x').on('click', function(event){
      event.preventDefault();
    })
  });

$('ul.cart').on('click','.btn-x', function(){
  $(this).parent().remove();
})

})
