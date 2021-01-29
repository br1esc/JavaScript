class Medidas {
    constructor(lado) {
        this.perimetro=lado*4;
        this.area=lado*lado;

        console.log('Cuadarado de lado '+lado+' cm, con un perímetro de '+this.perimetro+' cm y un área de '+this.area+ 'cm2');
        }
};
var pequeño= new Medidas (2);
var mediano= new Medidas (5);
var grande= new Medidas (10);