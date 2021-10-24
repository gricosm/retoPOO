class Persona {
    constructor(nombre, edad, dni, sexo = "H", peso, altura){        
    this.nombre = nombre
    this.edad = edad
    this.dni = dni
    this.peso = peso
    this.altura = altura
    }
}

const persona1 = new Persona('Jaime', 22, '32132121P', 35, 126)
const persona2 = new Persona('Elena', 23, '45328433P', "M", 53, 162)
const persona3 = new Persona('Pele', 29, '34982322Z', 67, 196)

console.log(persona1)
console.log(persona2)
console.log(persona3)