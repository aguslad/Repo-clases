class Producto {
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
    name: string;
    price: number;
    getPrice() {
      return this.price;
    }
 }
  
 class ProductoTecnologico extends Producto {
    constructor(name: string, price: number, useBatteries) {
      super(name, price);
      this.useBatteries = useBatteries;
    }
    useBatteries: boolean = false;
    setBatteries(usa: boolean) {
      this.useBatteries = usa;
    }
  }

  class ProductoAlimenticio extends Producto {
    fechaCaducidad: Date;
    constructor(name, price, fechaCaducidad) {
      super(name, price);
      this.fechaCaducidad = new Date(fechaCaducidad); // Convertir a objeto Date
    }
  
    checkCaducidad():boolean {
      const hoy = new Date();

      if (this.fechaCaducidad < hoy) {
        return true; // Está vencido
    }
    return false; // No está vencido
    }
}

class ProductoCongelado extends ProductoAlimenticio {
    temperaturaRecomendada: number;
    private margen: number;
    constructor(name: string, price: number, fechaCaducidad: string, temperaturaRecomendada: number, margen: number = 5) {
      super(name, price, fechaCaducidad);
      this.margen = margen;
      this.temperaturaRecomendada = temperaturaRecomendada;      
    }
    estaAlmacenadoCorrectamente(temperaturaActual: number): boolean {
      
    if (this.temperaturaRecomendada == temperaturaActual){
        return true;
    }
    else if (this.temperaturaRecomendada + this.margen <= temperaturaActual){
        return true;
    }
    else if (this.temperaturaRecomendada - this.margen <= temperaturaActual){
        return true;
    }
    }
}  
  

function main(){
// Creación de la instancia
// const pan = new ProductoAlimenticio("Pan Integral", 3.50, "2024-08-30");

// const estaVencido = pan.checkCaducidad();
// console.log("¿El producto está vencido?:", estaVencido ? "Sí" : "No");

// // Mostrar detalles del producto
// console.log("Nombre del Producto:", pan.name);
// console.log("Precio:", pan.getPrice());
// console.log("Fecha de Caducidad:", pan.fechaCaducidad);


console.log("hola")
// Creación de la instancia
const helado = new ProductoCongelado("Helado de Vainilla", 2.99, "2024-12-31", -18);

// Temperatura actual de almacenamiento
const temperaturaActual = -20; // Supongamos que esta es la temperatura actual

// Verificar si el producto está almacenado correctamente
const estaAlmacenadoCorrectamente = helado.estaAlmacenadoCorrectamente(temperaturaActual);
console.log("¿Está almacenado correctamente?:", estaAlmacenadoCorrectamente ? "Sí" : "No");

// Verificar si el producto está caducado
const esCaducado = helado.checkCaducidad();
console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", helado.name);
console.log("Precio:", helado.getPrice());
console.log("Fecha de Caducidad:", helado.fechaCaducidad.toDateString());
console.log("Temperatura Recomendada:", helado.temperaturaRecomendada, "grados");
}

main();
