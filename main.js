//------------------------------------------Importar Estructuras
//import {ListaEnlazada} from './Struct/ListaSimple.js';

//---------------------------------------------------------------- LISTA ENLAZADA USUARIOS
class NodoS {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.head = null;
    }

    agregar(dato) {
        let nuevo = new NodoS(dato);
        nuevo.siguiente = null;
        if (this.head != null) {
            let aux = this.head;
            while (aux.siguiente != null) {
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
        } else {
            this.head = nuevo;
        }
    }

    buscarUsuario(valor) {
        if (this.head != null) {
            let existe = false;
            let aux = this.head;
            while (aux != null && existe == false) {
                if (aux.dato.usuario === valor) {
                    existe = true;
                    //console.log(`Si se encontro el dato "${aux.dato.usuario}" en la lista`);
                    return aux.dato.usuario;
                }
                aux = aux.siguiente;
            }
            if (existe == false) {
                console.log(`No se encontro el dato "${valor}" en la lista`);
            }
        } else {
            console.log("Esta Vacia");
        }
    }

    buscarPass(valor) {
        if (this.head != null) {
            let existe = false;
            let aux = this.head;
            while (aux != null && existe == false) {
                if (aux.dato.contrasenia === valor) {
                    existe = true;
                    //console.log(`Si se encontro el dato "${aux.dato.usuario}" en la lista`);
                    return aux.dato.contrasenia;
                }
                aux = aux.siguiente;
            }
            if (existe == false) {
                console.log(`No se encontro el dato "${valor}" en la lista`)
            }
        } else {
            console.log("Esta Vacia");
        }
    }

    buscarRol(valor) {
        if (this.head != null) {
            let existe = false;
            let aux = this.head;
            while (aux != null && existe == false) {
                if (aux.dato.usuario === valor) {
                    existe = true;
                    //console.log(`Si se encontro el dato "${aux.dato.usuario}" en la lista`);
                    return aux.dato.rol;
                }
                aux = aux.siguiente;
            }
            if (existe == false) {
                console.log(`No se encontro el dato "${valor}" en la lista`)
            }
        } else {
            console.log("Esta Vacia");
        }
    }

    mostrar() {
        if (this.head != null) {
            let aux = this.head;
            while (aux != null) {
                console.log("----------------------------");
                console.log("Usuario: " + aux.dato.usuario);
                console.log("Contraseña: " + aux.dato.contrasenia);
                aux = aux.siguiente;
            }
        }
    }


}
//---------------------------------------------------------------- ARBOL B
class Node {
    constructor(_id, _nombre) {
        this.id = _id;
        this.nombre = _nombre;
        this.izq = null;
        this.der = null;
    }
}
class TreeABB {
    constructor() {
        this.raiz = null;
    }

    insertar(_id, _nombre) {
        var nuevo;
        nuevo = new Node(_id, _nombre);

        if (this.raiz === null) {
            this.raiz = nuevo;
            this.raiz.izq = new TreeABB();
            this.raiz.der = new TreeABB();
        } else {
            if (_nombre > this.raiz.nombre) {
                this.raiz.der.insertar(_id, _nombre);
            } else {
                if (_nombre < this.raiz.nombre) {
                    this.raiz.izq.insertar(_id, _nombre);
                } else {
                    console.log("Ya existe");
                }
            }
        }
    }
}

class Grafo {
    constructor() { }
    graficarArbol(raiz) {
        var acum, acumuladores, estructuras;
        estructuras = "digraph G{\nnode[fixedsize=true width=2 height=1];\n";
        acum = "";
        acumuladores = [estructuras, acum];

        if (raiz !== null) {
            this.recorrerArbol(raiz, acumuladores);
        }

        acumuladores[0] += acumuladores[1] + "\n}";
        console.log(acumuladores[0]);

        d3.select(".abb").graphviz()
            .width(1500)
            .height(1000)
            .renderDot(acumuladores[0])
    }

    recorrerArbol(raiz, acum) {
        if (raiz) {
            acum[1] += raiz.id.toString() + "[label=\"" + raiz.nombre.toString() + "\"];\n";
            if (raiz.izq.raiz !== null) {
                acum[1] += "{" + raiz.id.toString() + "} -> {" + raiz.izq.raiz.id.toString() + "};\n";
            }
            if (raiz.der.raiz !== null) {
                acum[1] += "{" + raiz.id.toString() + "} -> {" + raiz.der.raiz.id.toString() + "};\n";
            }
            this.recorrerArbol(raiz.izq.raiz, acum);
            this.recorrerArbol(raiz.der.raiz, acum);
        }
    }
}

//----------------------------------------------------------------MATRIZ ORTOGONAL
class NodoO {
    constructor(valor, x, y) {
        this.valor = valor;
        this.x = x;
        this.y = y;
        this.siguiente = null;
        this.abajo = null;
    }
}
class Lista {
    constructor() {
        this.raiz = null;
        this.ultimo = null;
    }

    insertarLista(valor, x) {
        let temporal = new NodoO(valor, x, 1);
        if (this.raiz == null) {
            this.raiz = temporal;
            this.ultimo = temporal;
        } else {
            this.ultimo.siguiente = temporal;
            this.ultimo = temporal;
        }
        let temp = this.ultimo;
        for (let cordy = 25; cordy >= 1; cordy--) {
            let nuevonodo = new NodoO(valor, x, cordy);
            let auxanterior = this.ultimo.abajo;
            temp.abajo = nuevonodo;
            nuevonodo.abajo = auxanterior;
        }
    }

    buscarLista(buscar) {
        let temporal = this.raiz;
        while (temporal != null) {
            if (temporal.x == buscar) {
                return temporal;
            }
            temporal = temporal.siguiente;
        }
        return null;
    }
}

class MatrizO {
    constructor() {
        this.listahorizontal = new Lista();
    }

    llenarMatrizOrtogonal() {
        for (let index = 1; index < 26; index++) {
            this.listahorizontal.insertarLista(1, index);
        }
    }

    mostrarMatriz() {
        var numx = 1;
        var cabecerax = this.listahorizontal.buscarLista(numx);
        while (cabecerax != null) {
            console.log("*********** x=" + numx + "***********");
            var numy = 0;
            var tempy = cabecerax.abajo;
            while (tempy != null) {
                console.log(tempy.valor + "(" + tempy.x + "," + tempy.y + ")");
                tempy = tempy.abajo;
            }
            numx++;
            cabecerax = cabecerax.siguiente;
        }
    }

    insertar(valor, posx, posy) {
        let temporalx = this.listahorizontal.buscarLista(posx);
        let temporaly = temporalx.abajo;
        while (temporaly != null) {
            if (temporaly.y == posy) {
                temporaly.valor = valor;
                return;
            }
            temporaly = temporaly.abajo;
        }
    }
}


//---------------------------------------------------------------- ESTRUCTURAS
var lista = new ListaEnlazada();
//lista.agregar(new usuario("2354168452525", "WIlfred Perez", "wil", "wil@gmail.com", "Administrador", "123", "123-4567"));
var arbolabb = new TreeABB();
var grafoABB = new Grafo();

var matrizo = new MatrizO();
matrizo.llenarMatrizOrtogonal();

//---------------------------------------------------------------- CLASES PARA LOS ARCHIVOS
class usuario {
    constructor(dpi, nombrecompleto, usuario, correo, rol, contrasenia, telefono) {
        this.dpi = dpi;
        this.nombrecompleto = nombrecompleto;
        this.usuario = usuario;
        this.correo = correo;
        this.rol = rol;
        this.contrasenia = contrasenia;
        this.telefono = telefono;
    }
}
class autor {
    constructor(dpi, nombreautor, correo, telefono, direccion, bibliografia) {
        this.dpi = dpi;
        this.nombreautor = nombreautor;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.bibliografia = bibliografia;
    }
}
class libro {
    constructor(isbn, nombreautor, nombrelibro, cantidad, fila, columna, paginas, categoria) {
        this.isbn = isbn;
        this.nomnbreautor = nombreautor;
        this.nombrelibro = nombrelibro;
        this.cantidad = cantidad;
        this.fila = fila;
        this.columna = columna;
        this.paginas = paginas;
        this.categoria = categoria;
    }
}


//---------------------------------------------------------------- funcion para leer el archvio json
function librosCarga(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    let lector = new FileReader();
    lector.onload = function (e) {
        let contenido = e.target.result;
        const object = JSON.parse(contenido);
        for (const key in object) {
            let books = object[key];
            let isbn = books.isbn;
            let nombreautor = books.nombre_autor;
            let nombrelibro = books.nombre_libro;
            let cantidad = books.cantidad;
            let fila = books.fila;
            let columna = books.columna;
            let paginas = books.paginas;
            let categoria = books.categoria;
            if (categoria == "Fantasia") {
                matrizo.insertar(nombrelibro, parseInt(fila), parseInt(columna));
            }
        }
    }
    lector.readAsText(archivo);
}

document.getElementById("formLibros").addEventListener("change", librosCarga, false);


//---------------------------------------------------------------- funcion para leer el archvio json
function autorCarga(e) {
    var archivo = e.target.files[0];

    if (!archivo) {
        return;
    }

    let lector = new FileReader();
    lector.onload = function (e) {
        let contenido = e.target.result;

        const object = JSON.parse(contenido);

        for (const key in object) {
            let autorr = object[key];
            let dpi = autorr.dpi;
            let nombreautor = autorr.nombre_autor;
            let correo = autorr.correo;
            let telefono = autorr.telefono;
            let direccion = autorr.direccion;
            let biografia = autorr.biografia;
            arbolabb.insertar(dpi, nombreautor);
        }
    }
    lector.readAsText(archivo);
}

document.getElementById("formAutores").addEventListener("change", autorCarga, false);


//---------------------------------------------------------------- funcion para leer el archvio json
function usuariosCarga(e) {
    var archivo = e.target.files[0];

    if (!archivo) {
        return;
    }

    let lector = new FileReader();
    lector.onload = function (e) {
        let contenido = e.target.result;

        const object = JSON.parse(contenido);

        for (const key in object) {
            let users = object[key];
            let dpi = users.dpi;
            let nombre = users.nombre_completo;
            let usuar = users.nombre_usuario;
            let correo = users.correo;
            let rol = users.rol;
            let contrasenia = users.contrasenia;
            let telefono = users.telefono;
            lista.agregar(new usuario(dpi, nombre, usuar, correo, rol, contrasenia, telefono));
        }
    }
    lector.readAsText(archivo);
}
document.getElementById("formUser").addEventListener("change", usuariosCarga, false);

//---------------------------------------------------------------- FUNCIONES BOTONES HTML

function log() {
    var usu = document.fff.nombre.value;
    var pas = document.fff.password.value;
    let existeUsuario = lista.buscarUsuario(usu);
    let existePass = lista.buscarPass(pas);

    let cualesRol = lista.buscarRol(usu);
    if (usu == "admin" && pas == "123") {
        alert("Admin maestro")
        document.getElementById("cargamasiva").style.display = "";
        document.getElementById("finn").style.display = "";
        document.getElementById("formLog").style.display = "none";
    }


    if (usu == existeUsuario && pas == existePass) {
        if (cualesRol == "Usuario") {
            //alert("hola " + usu + " Eres Usuario");
            document.getElementById('logeado').innerHTML = usu; //nombre
            document.getElementById("formLog").style.display = "none"; //formulario login
            document.getElementById("finn").style.display = ""; //boton fin
        } else {
            //alert("hola " + usu + " Eres Admin");
            document.getElementById('logeado').innerHTML = "Admin";
            document.getElementById("formLog").style.display = "none";
            document.getElementById("finn").style.display = "";
            document.getElementById("cargamasiva").style.display = "";
        }
    }
}

function salir() {
    usu = "";
    pas = "";
    document.getElementById("cargamasiva").style.display = "none"; //cargas masivas de admin
    document.getElementById("finn").style.display = "none"; //boton de fin de sesion
    document.getElementById("formLog").style.display = ""; //ver el formulario de login
}

function verListaUsuarios() {
    lista.mostrar(); //muestra en consola lista de usuarios
}

function verMatrizOrtogonal() {
    matrizo.mostrarMatriz(); //muestra en consola matriz de Fantasia
}

function grafoArbol() {
    grafoABB.graficarArbol(arbolabb.raiz); //Grafica arbol b de autores
}
