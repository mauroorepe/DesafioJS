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

const productos = [];
productos.push(new Producto("Pollo", 700, 1));
productos.push(new Producto("Asado", 1200, 2));
productos.push(new Producto("Cerdo", 900, 3));
productos.push(new Producto("Carne Picada", 870, 4));

for (const producto of productos){
        producto.sumaIva();
}

let saldo = 0
let entrada = parseInt(prompt("Seleccione el producto que desee agregar al carrito\n1-Pollo $700/kg\n2-Carne $850/kg\n3-Cerdo $800/kg\n4-Carne Picada $750/kg\n5-Salir"))
let peso
let precio = 0

function preguntarPeso() {
        peso = parseFloat(prompt("Indique cuantos kgs desea agregar al carrito"))
}
function multiplicar(precio, peso) {
        saldo += precio * peso
        console.log(saldo)
}

if((entrada>0) && (entrada<5) ){
        preguntarPeso()
}


while (entrada != 5) {
        switch (entrada) {
                case 1:
                        precio = 700
                        break
                case 2:
                        precio = 1200
                        break
                case 3:
                        precio = 900
                        break
                case 4:
                        precio = 870
                        break
                case 5:
                        break
                default:
                        alert("ingrese una opción válida")
        }
        multiplicar(precio, peso);
        entrada = parseInt(prompt("Seleccione el producto que desee agregar al carrito\n1-Pollo $700/kg\n2-Asado $1200/kg\n3-Cerdo $900/kg\n4-Carne Picada $870/kg\n5-Salir"))
        if((entrada>0) && (entrada<5)){
                preguntarPeso()
        }else if(entrada != 5){
                alert("ingrese una opción válida")
                entrada = parseInt(prompt("Seleccione el producto que desee agregar al carrito\n1-Pollo $700/kg\n2-Asado $1200/kg\n3-Cerdo $900/kg\n4-Carne Picada $870/kg\n5-Salir"))
        }
}

alert("El monto a pagar es de $"+saldo)