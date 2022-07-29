class Producto {
        constructor(nombre, precio, id) {
                this.nombre  = nombre.toUpperCase();
                this.precio  = parseFloat(precio);
                this.id = parseInt(id)
        }
        sumaIva() {
            this.precio = this.precio * 1.21;
        }
}

const producto1 = new Producto("Pollo", 700, 1);
const producto2 = new Producto("Asado", 1200, 2);
const producto3 = new Producto("Cerdo", 900, 3);
const producto4 = new Producto("Carne Picada", 870, 4);

const productos = [];
productos.push (producto1);
productos.push (producto2);
productos.push (producto3);
productos.push (producto4);

for (const producto of productos){
        producto.sumaIva();
}


let saldo = 0
let entrada = parseInt(prompt("Seleccione el producto que desee agregar al carrito\n1-"+producto1.nombre+" $"+producto1.precio+"/kg\n2-"+producto2.nombre+" $"+producto2.precio+"/kg\n3-"+producto3.nombre+" $"+producto3.precio+"/kg\n4-"+producto4.nombre+" $"+producto4.precio+"/kg\n5-Salir"))
let peso
let precioSeleccionado

function preguntarPeso() {
        peso = parseFloat(prompt("Indique cuantos kgs desea agregar al carrito"))
}
function multiplicar(precioSeleccionado, peso) {
        saldo += precioSeleccionado * peso
        console.log(saldo)
}

if((entrada>0) && (entrada<5) ){
        preguntarPeso()
}


while (entrada != 5) {
        switch (entrada) {
                case 1:
                        precioSeleccionado = producto1.precio
                        break
                case 2:
                        precioSeleccionado = producto2.precio
                        break
                case 3:
                        precioSeleccionado = producto3.precio
                        break
                case 4:
                        precioSeleccionado = producto4.precio
                        break
                case 5:
                        break
                default:
                        alert("ingrese una opción válida")
        }
        multiplicar(precioSeleccionado, peso);
        entrada = parseInt(prompt("Seleccione el producto que desee agregar al carrito\n1-"+producto1.nombre+" $"+producto1.precio+"/kg\n2-"+producto2.nombre+" $"+producto2.precio+"/kg\n3-"+producto3.nombre+" $"+producto3.precio+"/kg\n4-"+producto4.nombre+" $"+producto4.precio+"/kg\n5-Salir"))
        if((entrada>0) && (entrada<5)){
                preguntarPeso()
        }else if(entrada != 5){
                alert("ingrese una opción válida")
                entrada = parseInt(prompt("Seleccione el producto que desee agregar al carrito\n1-"+producto1.nombre+" $"+producto1.precio+"/kg\n2-"+producto2.nombre+" $"+producto2.precio+"/kg\n3-"+producto3.nombre+" $"+producto3.precio+"/kg\n4-"+producto4.nombre+" $"+producto4.precio+"/kg\n5-Salir"))
        }
}

alert("El monto a pagar es de $"+saldo)