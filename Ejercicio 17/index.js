class Factura {
    constructor( cliente, elementos) {
        this.cliente=cliente;
        this.elementos=elementos;
        this.informacion ={
            baseImponible: 0,
            iva:21,
            total:0,
            formaDePago: 'Efectivo',
        };
        this.calculoTotal= function()  {
            for (var i=0; i<this.elementos.length; i++) {
                this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
            }
           this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
        }
        this.mostrarTotal = function () {
            this.calculoTotal();
            alert(`El total de los productos es ${this.informacion.total} €`);
        }
    };
}
class cliente{
    constructor (nombre, direccion, telefono, NIF) {
        this.nombre=nombre;
        this.direccion=direccion;
        this.telefono=telefono;
        this.NIF=NIF;
    }
}
class elementos {
    constructor(descripcion, cantidad, precio) {
        this.descripcion=descripcion;
        this.cantidad=cantidad;
        this.precio=precio;
    }
};
var clienteA = new cliente ('jose','parla','35511226644','54684684j');
var elementoA = [new elementos ( 'Una cosa', 12, 65), new elementos ( 'otra cosa', 22, 1)]
var facturaA = new Factura ( clienteA, elementoA);
facturaA.mostrarTotal();
