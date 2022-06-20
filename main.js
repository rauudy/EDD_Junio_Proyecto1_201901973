//------------------------------------------IMPORT ESTRUCTURAS
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

    ordenBurbuja() {
        if (this.head != null) {
            let aux = this.head;
            while (aux.siguiente != null) {
                let temp = aux.siguiente;
                while (temp != null) {
                    if (temp.dato.nombrelibro < aux.dato.nombrelibro) {
                        let cambio = aux.dato;
                        aux.dato = temp.dato;
                        temp.dato = cambio;
                    }
                    temp = temp.siguiente;
                }
                aux = aux.siguiente;
            }
        } else {
            alert("No Hay Nada");
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

    buscarAutor(valor) {
        if (this.head != null) {
            let existe = false;
            let aux = this.head;
            while (aux != null && existe == false) {
                if (aux.dato.autor === valor) {
                    existe = true;
                    //console.log(`Si se encontro el dato "${aux.dato.usuario}" en la lista`);
                    return aux.dato.autor;
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

    mostrarUsuario() {
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

    mostrarLibro() {
        if (this.head != null) {
            let aux = this.head;
            while (aux != null) {
                console.log("----------------------------");
                console.log("Libro: " + aux.dato.nombrelibro);
                console.log("Autor: " + aux.dato.nombreautor);
                aux = aux.siguiente;
            }
        }
    }

    mostrarAutor() {
        if (this.head != null) {
            let aux = this.head;
            while (aux != null) {
                console.log("----------------------------");
                console.log("Autor: " + aux.dato.nombreautor);
                console.log("biografia: " + aux.dato.biografia);
                aux = aux.siguiente;
            }
        }
    }

    verLibro() {
        if (this.head != null) {
            let aux = this.head;
            let contador = 0;
            while (aux != null) {
                //console.log("----------------------------");
                let txt = "<div" + contador + "><article><br>";
                txt += "Titulo: " + aux.dato.nombrelibro + "<br>";
                txt += "Autor: " + aux.dato.nombreautor;
                document.getElementById('vstlibros').innerHTML += txt;
                txt = "<br></article></div" + contador + ">";
                contador++;
                aux = aux.siguiente;
            }
        }
    }

    verAutoresBB(div) {
        if (this.head != null) {
            let aux = this.head;
            let contador = 0;
            while (aux != null) {
                //console.log("----------------------------");
                let txt = "<div class=\"cardAutores\"><div class=\"textos\">";
                txt += "<h3>Autor: " + aux.dato.nombreautor + "</h3>";
                txt += "<img src=\"img/autt.png\" alt=\"\">";
                txt += "<p>Biografia: " + aux.dato.biografia + "</p>";
                document.getElementById(div).innerHTML += txt;
                txt = "</div></div>";
                contador++;
                aux = aux.siguiente;
            }
        }
    }


}
//---------------------------------------------------------------- LISTA DOBLEMENTE ENLAZADA
class NodoD {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaDobleEnlazada {
    constructor() {
        this.head = null;
    }

    insertar(dato) {
        let p, q;
        p = new NodoD(dato);
        p.siguiente = null;
        if (this.head != null) {
            q = this.head;
            while (q.siguiente != null) {
                q = q.siguiente;
            }
            q.siguiente = p;
            p.anterior = q;
        } else {
            this.head = p;
            p.anterior = q;
        }
    }

    buscarLibro(nombrelibr){
        let p;
        if (this.head != null) {
            p = this.head;
            while (p != null) {
                if (nombrelibr == p.dato.nombrelibro) {
                    return p.dato.cantidad;
                }
                p = p.siguiente;
            }
        }
    }

    existeLibro(nombrelibr){
        let p;
        if (this.head != null) {
            p = this.head;
            while (p != null) {
                if (nombrelibr == p.dato.nombrelibro) {
                    return true;
                }
                p = p.siguiente;
            }
        }
    }

    ultimo() {
        let temp = this.head;
        while (temp != null && temp.siguiente != null) {
            temp = temp.siguiente;
        }
        return temp;
    }

    mostrarLibro() {
        let p;
        if (this.head != null) {
            p = this.head;
            while (p != null) {
                console.log(p.dato.nombrelibro);
                p = p.siguiente;
            }
        }
    }

    verLibro(div) {
        if (this.head != null) {
            let aux = this.head;
            let contador = 0;
            while (aux != null) {
                //console.log("----------------------------");
                let txt = "<div class=\"cardlibros\"><div class=\"textos\">";
                txt += "<h3>Titulo: " + aux.dato.nombrelibro + "</h3>";
                txt += "<img src=\"img/libro.png\" alt=\"\">";
                txt += "<p>Autor: " + aux.dato.nombreautor + "</p>";
                document.getElementById(div).innerHTML += txt;
                txt = "</div></div" + contador + ">";
                contador++;
                aux = aux.siguiente;
            }
        }
    }

    ordenBurbuja() {
        if (this.head != null) {
            let aux = this.head;
            while (aux.siguiente != null) {
                let temp = aux.siguiente;
                while (temp != null) {
                    if (temp.dato.nombrelibro < aux.dato.nombrelibro) {
                        let cambio = aux.dato;
                        aux.dato = temp.dato;
                        temp.dato = cambio;
                    }
                    temp = temp.siguiente;
                }
                aux = aux.siguiente;
            }
        } else {
            alert("No Hay Nada");
        }
    }

    ordenQuickSort(primero, ulti) {
        var pivot;
        if (primero === ulti) {
            return;
        }
        pivot = this.dividir(primero, ulti);
        if (pivot !== null && pivot.siguiente !== null) {
            this.ordenQuickSort(pivot.siguiente, ulti);
        }
        if (pivot !== null && primero !== pivot) {
            this.ordenQuickSort(primero, pivot);
        }
    }

    dividir(primero, ulti) {
        var frente, pivot, temp;
        pivot = primero;
        frente = primero;
        temp = 0;

        while (frente !== null && frente !== ulti) {
            if (frente.dato.nombrelibro > ulti.dato.nombrelibro) { // Ascendente < , Descendente >
                pivot = primero;
                temp = primero.dato;
                primero.dato = frente.dato;
                frente.dato = temp;
                primero = primero.siguiente;
            }
            frente = frente.siguiente;
        }

        temp = primero.dato;
        primero.dato = ulti.dato;
        ulti.dato = temp;
        return pivot;
    }


    

    graficar(div) {
        var codigodot = "digraph G{\nbgcolor=\"transparent\"\nlabel=\" Libros \";\nnode [shape=box];\n";
        var temporal = this.head;
        var conexiones = "";
        var nodos = "";
        var numnodo = 0;
        while (temporal != null) {
            nodos += "N" + numnodo + "[label=\"" + temporal.dato.nombrelibro + "\" style=filled fillcolor=yellow];\n";
            if (temporal.siguiente != null) {
                var auxnum = numnodo + 1;
                conexiones += "N" + numnodo + " -> N" + auxnum + "[dir=both];\n";
            }
            temporal = temporal.siguiente;
            numnodo++;
        }
        codigodot += "//agregando nodos\n";
        codigodot += nodos + "\n";
        codigodot += "//agregando conexiones o flechas\n";
        codigodot += "{rank=same;\n" + conexiones + "\n}\n}";
        //console.log(codigodot);

        d3.select("." + div).graphviz()
            .renderDot(codigodot)
    }

}
//---------------------------------------------------------------- LISTA DE LISTAS

class NodoLL {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
        this.abajo = null;
    }
}

class NodoLS {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListadeListas {
    constructor() {
        this.cabecera = null;
        this.ultimo = null;
        this.tamanio = 0;
    }

    //Metodos para insertar

    //Insertar Album
    insertarCabeza(dato) {
        let temporal = new NodoLL(dato);
        temporal.siguiente = this.cabecera;
        this.cabecera = temporal;
    }

    existeCabeza(dato) {
        let temporal = this.cabecera;
        while (temporal != null) {
            if (dato == temporal.dato) {
                return true;
            }
            //console.log(temporal.dato);
            temporal = temporal.siguiente;
        }
        return false;
    }

    //Insertar Cancion
    insertar(valorcabeza, valor) {
        if (this.existeCabeza(valorcabeza)) {
            //this.insertarCabeza(valorcabeza);
            let temporalCabecera = this.cabecera;
            //Recorrer toda la lista de albums
            while (temporalCabecera != null) {
                if (temporalCabecera.dato == valorcabeza) {
                    //console.log("Si se encontro el album " + valorcabeza);
                    let nuevonodolista = new NodoLS(valor);
                    var iniciolistasimple = temporalCabecera.abajo;
                    temporalCabecera.abajo = nuevonodolista;
                    nuevonodolista.siguiente = iniciolistasimple;
                    break;
                }
                temporalCabecera = temporalCabecera.siguiente;
            }
            if (temporalCabecera == null) {
                console.log("No se encontro la cabecera en la lista");
            }
        } else {
            this.insertarCabeza(valorcabeza);
            let temporalCabecera = this.cabecera;
            //Recorrer toda la lista de albums
            while (temporalCabecera != null) {
                if (temporalCabecera.dato == valorcabeza) {
                    //console.log("Si se encontro el album " + valorcabeza);
                    let nuevonodolista = new NodoLS(valor);
                    var iniciolistasimple = temporalCabecera.abajo;
                    temporalCabecera.abajo = nuevonodolista;
                    nuevonodolista.siguiente = iniciolistasimple;
                    break;
                }
                temporalCabecera = temporalCabecera.siguiente;
            }
            if (temporalCabecera == null) {
                console.log("No se encontro la cabecera en la lista");
            }
        }
    }

    mostrarCabeceras() {
        let temporal = this.cabecera;
        console.log("****** Cabecera ****");
        while (temporal != null) {
            console.log(temporal.dato);
            temporal = temporal.siguiente;
        }
    }

    grafic(div) {
        var codigodot = "digraph G{\nbgcolor=\"transparent\"\nlabel=\" ListadeListas \";\nnode [shape=box];\n";
        var temporal = this.cabecera;
        var conexiones = "";
        var conexiones2 = "";
        var nodos = "";
        var numnodo = 0;
        var numnodo2 = 1;
        while (temporal != null) {
            nodos += "N" + numnodo + "[label=\"" + temporal.dato + "\" style=filled fillcolor=white ];\n";
            if (temporal.siguiente != null) {
                var auxnum = numnodo + 1;
                conexiones += "N" + numnodo + " -> N" + auxnum + "[color=\"white\"];\n";
            }
            if (this.existeCabeza(temporal.dato)) {
                var temporalnodolistasimple = temporal.abajo;
                var cabeza = true;
                while (temporalnodolistasimple != null) {
                    nodos += "B" + numnodo2 + "[label=\"" + temporalnodolistasimple.valor + "\" style=filled fillcolor=white];\n";
                    if (temporalnodolistasimple.siguiente != null) {
                        if (cabeza) {
                            conexiones2 += "N" + numnodo + " -> B" + numnodo2 + "[color=\"white\"];\n";
                        }
                        var auxnum2 = numnodo2 + 1;
                        conexiones2 += "B" + numnodo2 + " -> B" + auxnum2 + "[color=\"white\"];\n";
                    }
                    temporalnodolistasimple = temporalnodolistasimple.siguiente;
                    numnodo2++;
                    cabeza = false;
                }
            }
            temporal = temporal.siguiente;
            numnodo++;
        }
        codigodot += "//agregando nodos\n";
        codigodot += nodos + "\n";
        codigodot += "//agregando conexiones o flechas\n";
        codigodot += "{rank=same;\n" + conexiones + "\n}\n";
        codigodot += "{\n" + conexiones2 + "\n}\n}";
        console.log(codigodot);

        d3.select("." + div).graphviz()
            .width(1500)
            .height(500)
            .renderDot(codigodot)
    }
}

//---------------------------------------------------------------- PILA DE EJEMPLARES
class NodoP {
    constructor(dato) {
        this.dato = dato;
        this.abajo = null;
    }
}

class Pila {
    constructor() {
        this.cima = null;
    }

    //metodos especiales

    //insertar en una pila
    push(dato) {
        let temporal = new NodoP(dato);
        temporal.abajo = this.cima;
        this.cima = temporal;
    }

    //eliminar en una pila
    pop() {
        //this.cima = this.cima.abajo;
        let temporal = this.cima;
        this.cima = null;
        this.cima = temporal.abajo;
        temporal = null;
    }

    //Ver la cima
    peek() {
        console.log(this.cima.dato);
    }

    graficar(div) {
        var codigodot = "digraph Pila\n{\nrankdir =LR;\nnode[shape=Mrecord];\n";
        var nodos = "Nodo[xlabel=Pila label = \"";
        let temporal = this.cima;
        while (temporal != null) {
            if (temporal.abajo == null) {
                nodos += temporal.dato;
            } else {
                nodos += temporal.dato + " | ";
            }
            temporal = temporal.abajo;
        }
        nodos += "\"];\n";
        codigodot += nodos;
        codigodot += "\n}";
        console.log(codigodot);

        d3.select("." + div).graphviz()
            .renderDot(codigodot)
    }
}

//---------------------------------------------------------------- COLA DE ESPERA

class NodoCC {
    constructor(nombre,libro,cantidad) {
        this.nombre = nombre;
        this.libro = libro;
        this.cantidad = cantidad;
        this.siguiente = null;
    }
}

class Cola {
    constructor() {
        this.frente = null;
    }

    enqueue(nombre,libro,cantidad) {
        let nuevo = new NodoCC(nombre,libro,cantidad);
        nuevo.siguiente = null;
        if (this.frente != null) {
            let aux = this.frente;
            while (aux.siguiente != null) {
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
        } else {
            this.frente = nuevo;
        }
    }

    peek() {
        if (this.frente != null) {
            console.log("Frente: " + this.frente.nombre);
        }
    }

    dequeue() {
        if (this.frente != null) {
            let aux = this.frente;
            this.frente = this.frente.siguiente;
            aux = null;
        }
    }

    graficar(div) {
        var codigodot = "digraph G{\nbgcolor=\"transparent\"\nlabel=\" Cola \";\nnode [shape=box];\n";
        var temporal = this.frente;
        var conexiones = "";
        var nodos = "";
        var numnodo = 0;
        while (temporal != null) {
            nodos += "N" + numnodo + "[label=\"Cliente: " + temporal.nombre +"\nLibro: "+ temporal.libro + "\nCantidad: "+ temporal.cantidad + "\" style=filled fillcolor=yellow];\n";
            if (temporal.siguiente != null) {
                var auxnum = numnodo + 1;
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n";
            }
            temporal = temporal.siguiente;
            numnodo++;
        }
        codigodot += "//agregando nodos\n";
        codigodot += nodos + "\n";
        codigodot += "//agregando conexiones o flechas\n";
        codigodot += "{rank=same;\n" + conexiones + "\n}\n}";
        //console.log(codigodot);

        d3.select("."+div).graphviz()
            .width(900)
            .height(100)
            .renderDot(codigodot)
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
        estructuras = "digraph G{\nbgcolor=transparent label=\"Autores\";node[fixedsize=true width=2 height=1];\n";
        acum = "";
        acumuladores = [estructuras, acum];

        if (raiz !== null) {
            this.recorrerArbol(raiz, acumuladores);
        }

        acumuladores[0] += acumuladores[1] + "\n}";
        console.log(acumuladores[0]);

        d3.select(".abb").graphviz()
        .width(1000)
            .height(500)
            .renderDot(acumuladores[0])
    }

    recorrerArbol(raiz, acum) {
        if (raiz) {
            acum[1] += raiz.id.toString() + "[label=\"" + raiz.nombre.toString() + "\",style=filled fillcolor=white];\n";
            if (raiz.izq.raiz !== null) {
                acum[1] += "{" + raiz.id.toString() + "} -> {" + raiz.izq.raiz.id.toString() + "}[color=white];\n";
            }
            if (raiz.der.raiz !== null) {
                acum[1] += "{" + raiz.id.toString() + "} -> {" + raiz.der.raiz.id.toString() + "}[color=white];\n";
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

    graph(div) {
        let filas = "F";
        let colums = "C";
        let codigodot = "digraph G{bgcolor=lightblue\n  label=\" Librera Fantasia \";\n  node [shape=box];\n";
        let nodos = "";
        let conexcionesss = "";
        var x = 1
        var cabezax = this.listahorizontal.buscarLista(x)
        while (cabezax != null) {
            var temporaly = cabezax.abajo
            while (temporaly != null) {
                nodos += "  " + filas + temporaly.x + colums + temporaly.y + "[label=\"" + temporaly.valor + "\"  width = 1.5 style = filled fillcolor=gray, group = " + temporaly.y + "];\n";
                if (temporaly.abajo != null) {
                    conexcionesss += filas + temporaly.x + colums + temporaly.y + "->";
                } else {
                    conexcionesss += filas + temporaly.x + colums + temporaly.y;
                }
                temporaly = temporaly.abajo
            }
            codigodot += nodos
            codigodot += "{rank=same;" + conexcionesss + "[dir=both color=red]}\n"
            conexcionesss = "";
            nodos = "";
            x++
            cabezax = cabezax.siguiente
        }

        for (let index = 1; index < 26; index++) {
            for (let j = 1; j < 26; j++) {
                if (j == 25) {
                    conexcionesss += filas + j + colums + index + "[dir=both color=red]\n";
                } else {
                    conexcionesss += filas + j + colums + index + "->";
                }
            }
        }
        codigodot += conexcionesss + "\n}";

        //console.log(codigodot)
        d3.select("." + div).graphviz()
            .width(1000)
            .height(700)
            .renderDot(codigodot)
    }

    libreraMatriz(div) {
        let filas = "F";
        let colums = "C";
        let codigodot = "digraph G{bgcolor=transparent\n  label=\" Librera Fantasia \";\n  node [shape=box];\n";
        let nodos = "";
        let conexcionesss = "";
        var x = 1
        var cabezax = this.listahorizontal.buscarLista(x)
        while (cabezax != null) {
            var temporaly = cabezax.abajo
            while (temporaly != null) {
                nodos += "  " + filas + temporaly.x + colums + temporaly.y + "[label=\"" + temporaly.valor + "\"  width = 1.5 style = filled fillcolor=gray87, group = " + temporaly.y + "];\n";
                if (temporaly.abajo != null) {
                    conexcionesss += filas + temporaly.x + colums + temporaly.y + "->";
                } else {
                    conexcionesss += filas + temporaly.x + colums + temporaly.y;
                }
                temporaly = temporaly.abajo
            }
            codigodot += nodos
            codigodot += "{rank=same;" + conexcionesss + "[dir=both color=\"transparent\"]}\n"
            conexcionesss = "";
            nodos = "";
            x++
            cabezax = cabezax.siguiente
        }

        for (let index = 1; index < 26; index++) {
            for (let j = 1; j < 26; j++) {
                if (j == 25) {
                    conexcionesss += filas + j + colums + index + "[dir=both color=\"transparent\"]\n";
                } else {
                    conexcionesss += filas + j + colums + index + "->";
                }
            }
        }
        codigodot += conexcionesss + "\n}";

        //console.log(codigodot)
        d3.select("."+div).graphviz()
            .width(1300)
            .height(700)
            .renderDot(codigodot)
    }
}


//---------------------------------------------------------------- MATRIZ DISPERSA
class nodoMD{
    constructor(dato,x,y){
        this.dato=dato;
        this.x=x;
        this.y=y;
        this.siguiente=null;
        this.anterior=null;
        this.abajo=null
        this.arriba=null
    }    
}

class matrizDispersaaa{
    constructor(){
        this.raiz= new nodoMD("raiz",-1,-1);
    }

    buscarFil(y) {
        let auxiliar = this.raiz;
        while (auxiliar != null) {
            if (auxiliar.y == y) {
                return auxiliar;
            }
            auxiliar = auxiliar.abajo;
        }
        return null;
    }

    buscarCol(x) {
        let auxiliar = this.raiz;
        while (auxiliar != null) {
            if (auxiliar.x == x) {
                return auxiliar;
            }
            auxiliar = auxiliar.siguiente;
        }
        return null;
    }

    crearColumna(x) {
        let columna = this.raiz;
        let nuevo = new nodoMD("COL",x, -1);
        let colmm = this.insertarOrdenadoColumna(nuevo, columna);
        return colmm;
    }

    insertarOrdenadoColumna(nuevo,cabezaColumna) {
        let auxiliar = cabezaColumna;
        let agregado = false;
        while (true) {
            if (nuevo.x == auxiliar.x) {
                auxiliar.y = nuevo.y;
                auxiliar.dato = nuevo.dato;
                return auxiliar;
            } else if (auxiliar.x > nuevo.x) {
                agregado = true;
                break;
            }
            if (auxiliar.siguiente != null) {
                auxiliar = auxiliar.siguiente;
            } else {
                agregado = false;
                break;
            }
        }
        if (agregado) {
            nuevo.siguiente = auxiliar;
            auxiliar.anterior.siguiente = nuevo;
            nuevo.anterior = auxiliar.anterior;
            auxiliar.anterior = nuevo;
        } else {
            auxiliar.siguiente = nuevo;
            nuevo.anterior = auxiliar;
        }
        return nuevo;
    }

    crearFila(y) {
        let nodoFilaaa = this.raiz;
        let nuevo = new nodoMD("FIL",-1, y);
        let column = this.insertarOrdenadoFila(nuevo, nodoFilaaa);
        return column;
    }

    insertarOrdenadoFila(nuevo,cabezaFila) {
        let auxiliar = cabezaFila;
        let agregado = false;
        while (true) {
            if (nuevo.y == auxiliar.y) {
                auxiliar.x = nuevo.x;
                auxiliar.dato = nuevo.dato;
                return auxiliar;
            } else if (auxiliar.y > nuevo.y) {
                agregado = true;
                break;
            }
            if (auxiliar.abajo != null) {
                auxiliar = auxiliar.abajo;
            } else {
                agregado = false;
                break;
            }
        }
        if (agregado) {
            nuevo.abajo = auxiliar;
            auxiliar.arriba.abajo = nuevo;
            nuevo.arriba = auxiliar.arriba;
            auxiliar.arriba = nuevo;
        } else {
            auxiliar.abajo = nuevo;
            nuevo.arriba = auxiliar;
        }
        return nuevo;
    }

    insertarNodo(dato,x,y) {
        let nuevo = new nodoMD(dato,x,y);
        let nodoColummm = this.buscarCol(x);
        let nodoFilaaa = this.buscarFil(y);
        if (nodoColummm == null && nodoFilaaa == null) { //Caso1
            nodoColummm = this.crearColumna(x);
            nodoFilaaa = this.crearFila(y);
            nuevo = this.insertarOrdenadoColumna(nuevo, nodoFilaaa);
            nuevo = this.insertarOrdenadoFila(nuevo, nodoColummm);
        } else if (nodoFilaaa == null && nodoColummm != null) { //caso2
            nodoFilaaa = this.crearFila(y);
            nuevo = this.insertarOrdenadoColumna(nuevo, nodoFilaaa);
            nuevo = this.insertarOrdenadoFila(nuevo, nodoColummm);
        } else if (nodoFilaaa != null && nodoColummm == null) { //caso3
            nodoColummm = this.crearColumna(x);
            nuevo = this.insertarOrdenadoColumna(nuevo, nodoFilaaa);
            nuevo = this.insertarOrdenadoFila(nuevo, nodoColummm);
        } else if (nodoFilaaa != null && nodoColummm != null) { //caso4
            nuevo = this.insertarOrdenadoColumna(nuevo, nodoFilaaa);
            nuevo = this.insertarOrdenadoFila(nuevo, nodoColummm);
        }
    }

    graphviz(div){
        let dott = "digraph G{\nbgcolor=\"transparent\"  label=\" Librera Thriller \";\n  node [shape=box];\n";
        let fil = "F";
        let col = "C";
        let antX="";
        let antY="";
        let columnaU = "";
        let casilla="";
        let actualFila=0;
        let filaU="";
        let nodos = "";
        let conect="";
        let conectar="";
        let conectando="";
        let temporal = this.raiz;
        while (temporal != null) {
            let temporal2 = temporal;
            while (temporal2 != null) {
                if(temporal2.x < 0 && temporal2.y < 0){
                    nodos += "  "+"Raiz[label = \"Raiz\" width = 1.5 style = filled fillcolor=yellow, group = -1];\n";
                    antX="Raiz";
                    antY="Raiz";
                }else if(temporal2.y<0){
                    nodos += "  "+fil+temporal2.x+ "[label = \"" + fil + temporal2.x + "\" width = 1.5 style = filled fillcolor=yellow, group = -1 ];\n";
                    conect += "  "+antX + " -> " + fil + temporal2.x+"[dir=both color=white];\n";
                    antX = fil + temporal2.x;
                }else if(temporal2.x<0){
                    nodos += "  "+col + temporal2.y + "[label = \"" + col + temporal2.y+ "\" width = 1.5 style = filled fillcolor=yellow, group = "+temporal2.y+" ];\n";
                    conectar += "   "+antY + " -> " + col + temporal2.y+"[dir=both color=white];\n";
                    antY = col + temporal2.y;
                }else if(temporal2.x >= 0 && temporal2.y >= 0){
                    if (actualFila == 0) {                                                                                               
                        nodos += "  "+fil + temporal2.x + col + temporal2.y + "[label = \"" + temporal2.dato + "\" width = 1.5 style = filled fillcolor=grey, group = "+temporal2.y+"];\n";                        
                        columnaU=columnaU+"  "+fil + temporal2.x + col + temporal2.y + " -> " + col + temporal2.y+"[dir=both color=white];\n";
                        casilla = fil + temporal2.x + col + temporal2.y;
                    } else {
                        nodos += "  "+fil + temporal2.x + col + temporal2.y + "[label = \"" + temporal2.dato + "\" width = 1.5 style = filled fillcolor=grey, group = "+temporal2.y+"];\n";
                        columnaU=columnaU+"  "+fil + temporal2.x + col + temporal2.y + " -> " +casilla+"[dir=both color=white];\n";
                        casilla = fil + temporal2.x + col + temporal2.y;  
                    }
                    actualFila++;
                }
                temporal2 = temporal2.siguiente;
            }
            actualFila = 0;
            casilla = "";
            temporal = temporal.abajo;
        }
        let auxiliar = this.raiz;
        while (auxiliar != null) {
            let unFin = "";
            let auxiliar2 = auxiliar;
            while (auxiliar2 != null) {
                if(auxiliar2.x >= 0 && auxiliar2.y < 0){
                    unFin += fil+auxiliar2.x+"->";
                }else if(auxiliar2.x>=0 && auxiliar2.y>=0){
                    if(auxiliar2.abajo != null){
                        unFin += fil+auxiliar2.x+col+auxiliar2.y+"->";
                    }else{
                        unFin += fil+auxiliar2.x+col+auxiliar2.y +"[dir=both color=white]";
                    }
                }
                auxiliar2 = auxiliar2.abajo;
            }
            conectando += "  {rank=same;"+unFin+"}\n"
            auxiliar = auxiliar.siguiente;
        }
        dott += nodos;
        dott += conectando
        dott += conect;
        dott += filaU;
        dott += columnaU;
        dott += "  {rank=same;\n"+conectar+"  }\n}"

        //console.log(dott)
        
        d3.select("."+div).graphviz()
        .width(1300)
        .height(800)
        .renderDot(dott)
    }

    graphvizLibreria(div){
        let dott = "digraph G{\nbgcolor=\"transparent\"  label=\" Librera Thriller \";\n  node [shape=box];\n";
        let fil = "F";
        let col = "C";
        let antX="";
        let antY="";
        let columnaU = "";
        let casilla="";
        let actualFila=0;
        let filaU="";
        let nodos = "";
        let conect="";
        let conectar="";
        let conectando="";
        let temporal = this.raiz;
        while (temporal != null) {
            let temporal2 = temporal;
            while (temporal2 != null) {
                if(temporal2.x < 0 && temporal2.y < 0){
                    nodos += "  "+"Raiz[label = \"Raiz\" width = 1.5 style = filled fillcolor=transparent, group = -1];\n";
                    antX="Raiz";
                    antY="Raiz";
                }else if(temporal2.y<0){
                    nodos += "  "+fil+temporal2.x+ "[label = \"" + fil + temporal2.x + "\" width = 1.5 style = filled fillcolor=transparent, group = -1 ];\n";
                    conect += "  "+antX + " -> " + fil + temporal2.x+"[dir=both color=transparent];\n";
                    antX = fil + temporal2.x;
                }else if(temporal2.x<0){
                    nodos += "  "+col + temporal2.y + "[label = \"" + col + temporal2.y+ "\" width = 1.5 style = filled fillcolor=transparent, group = "+temporal2.y+" ];\n";
                    conectar += "   "+antY + " -> " + col + temporal2.y+"[dir=both color=transparent];\n";
                    antY = col + temporal2.y;
                }else if(temporal2.x >= 0 && temporal2.y >= 0){
                    if (actualFila == 0) {                                                                                               
                        nodos += "  "+fil + temporal2.x + col + temporal2.y + "[label = \"" + temporal2.dato + "\" width = 1.5 style = filled fillcolor=grey, group = "+temporal2.y+"];\n";                        
                        columnaU=columnaU+"  "+fil + temporal2.x + col + temporal2.y + " -> " + col + temporal2.y+"[dir=both color=transparent];\n";
                        casilla = fil + temporal2.x + col + temporal2.y;
                    } else {
                        nodos += "  "+fil + temporal2.x + col + temporal2.y + "[label = \"" + temporal2.dato + "\" width = 1.5 style = filled fillcolor=grey, group = "+temporal2.y+"];\n";
                        columnaU=columnaU+"  "+fil + temporal2.x + col + temporal2.y + " -> " +casilla+"[dir=both color=transparent];\n";
                        casilla = fil + temporal2.x + col + temporal2.y;  
                    }
                    actualFila++;
                }
                temporal2 = temporal2.siguiente;
            }
            actualFila = 0;
            casilla = "";
            temporal = temporal.abajo;
        }
        let auxiliar = this.raiz;
        while (auxiliar != null) {
            let unFin = "";
            let auxiliar2 = auxiliar;
            while (auxiliar2 != null) {
                if(auxiliar2.x >= 0 && auxiliar2.y < 0){
                    unFin += fil+auxiliar2.x+"->";
                }else if(auxiliar2.x>=0 && auxiliar2.y>=0){
                    if(auxiliar2.abajo != null){
                        unFin += fil+auxiliar2.x+col+auxiliar2.y+"->";
                    }else{
                        unFin += fil+auxiliar2.x+col+auxiliar2.y +"[dir=both color=transparent]";
                    }
                }
                auxiliar2 = auxiliar2.abajo;
            }
            conectando += "  {rank=same;"+unFin+"}\n"
            auxiliar = auxiliar.siguiente;
        }
        dott += nodos;
        dott += conectando
        dott += conect;
        dott += filaU;
        dott += columnaU;
        dott += "  {rank=same;\n"+conectar+"  }\n}"

        //console.log(dott)
        
        d3.select("."+div).graphviz()
        .width(1300)
        .height(800)
        .renderDot(dott)
    }
}

//---------------------------------------------------------------- ESTRUCTURAS
var lista = new ListaEnlazada();
var listaAutores = new ListaEnlazada();
var listaLibros = new ListaDobleEnlazada();
var listadelistas = new ListadeListas();
//lista.agregar(new usuario("2354168452525", "WIlfred Perez", "wil", "wil@gmail.com", "Administrador", "123", "123-4567"));
var arbolabb = new TreeABB();
var grafoABB = new Grafo();

var matrizo = new MatrizO();
matrizo.llenarMatrizOrtogonal();
var matrizdis = new matrizDispersaaa();

var colaEspera = new Cola();

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
    constructor(dpi, nombreautor, correo, telefono, direccion, biografia) {
        this.dpi = dpi;
        this.nombreautor = nombreautor;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.biografia = biografia;
    }
}
class libro {
    constructor(isbn, nombreautor, nombrelibro, cantidad, fila, columna, paginas, categoria) {
        this.isbn = isbn;
        this.nombreautor = nombreautor;
        this.nombrelibro = nombrelibro;
        this.cantidad = cantidad;
        this.fila = fila;
        this.columna = columna;
        this.paginas = paginas;
        this.categoria = categoria;
    }
}


//---------------------------------------------------------------- FUNCION CARGAR LIBROS
function librosCarga(e) {
    var archivo = e.target.files[0];
    var cantidadlibros = 0;
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
            }else if (categoria == "Thriller"){
                matrizdis.insertarNodo(nombrelibro, parseInt(fila), parseInt(columna));
            }
            //console.log(nombreautor);
            //pila de ejemplares
            let nombrePila = "pila" + cantidadlibros;

            cantidadlibros++;
            //Lista de libros para ver
            listaLibros.insertar(new libro(isbn, nombreautor, nombrelibro, cantidad, fila, columna, paginas, categoria));
            //document.getElementById('ejemplares').innerHTML += nombrelibro;
        }
    }
    lector.readAsText(archivo);

}

document.getElementById("formLibros").addEventListener("change", librosCarga, false);


//---------------------------------------------------------------- FUNCION CARGAR AUTORES
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
            listaAutores.agregar(new autor(dpi, nombreautor, correo, telefono, direccion, biografia));
        }
    }
    lector.readAsText(archivo);
}

document.getElementById("formAutores").addEventListener("change", autorCarga, false);


//---------------------------------------------------------------- FUNCION CARGAR USUARIOS
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

var usuarioActivo = "";

function log() {
    var usu = document.fff.nombre.value;
    usuarioActivo = usu;
    var pas = document.fff.password.value;
    let existeUsuario = lista.buscarUsuario(usu);
    let existePass = lista.buscarPass(pas);

    let cualesRol = lista.buscarRol(usu);
    if (usu == "admin" && pas == "123") {
        //alert("Admin maestro")
        document.getElementById("cargamasiva").style.display = "";
        document.getElementById("finn").style.display = "";
        document.getElementById("VistaLibrosOrdenados").style.display = "";
        document.getElementById("vistaautoresbibio").style.display = "";
        document.getElementById("matrizortogonal").style.display = "";
        document.getElementById("matrizdispersa").style.display = ""; //
        document.getElementById("ejemplares").style.display = "";
        document.getElementById("vistaarbolautores").style.display = "";
        document.getElementById("listadelistasss").style.display = "";
        document.getElementById("mostrarColaa").style.display = "";
        document.getElementById("contentmein").style.display = "none";
        document.getElementById('logeado').innerHTML = "ADMIN MAESTRO"; //nombre
    }

    if (usu == existeUsuario && pas == existePass) {
        if (cualesRol == "Usuario") {
            //alert("hola " + usu + " Eres Usuario");
            document.getElementById('logeado').innerHTML = usu; //nombre
            document.getElementById("contentmein").style.display = "none"; //formulario login
            document.getElementById("finn").style.display = ""; //boton fin
            document.getElementById("VistaLibrosOrdenados").style.display = "";
            document.getElementById("vistaautoresbibio").style.display = "";
            document.getElementById("matrizortogonal").style.display = "";
            document.getElementById("matrizdispersa").style.display = ""; //
            document.getElementById("ejemplares").style.display = "";
            document.getElementById("vistaarbolautores").style.display = "";
            document.getElementById("mostrarColaa").style.display = "";
        } else {
            //alert("hola " + usu + " Eres Admin");
            document.getElementById('logeado').innerHTML = "Admin";
            document.getElementById("contentmein").style.display = "none";
            document.getElementById("finn").style.display = "";
            document.getElementById("cargamasiva").style.display = "";
            document.getElementById("VistaLibrosOrdenados").style.display = "";
            document.getElementById("vistaautoresbibio").style.display = "";
            document.getElementById("matrizortogonal").style.display = "";
            document.getElementById("matrizdispersa").style.display = ""; //
            document.getElementById("ejemplares").style.display = "";
            document.getElementById("vistaarbolautores").style.display = "";
            document.getElementById("listadelistasss").style.display = "";
            document.getElementById("mostrarColaa").style.display = "";
        }
    }
}

function salir() {
    usuarioActivo = "";
    usu = "";
    pas = "";
    document.getElementById("cargamasiva").style.display = "none"; //cargas masivas de admin
    document.getElementById("finn").style.display = "none"; //boton de fin de sesion
    document.getElementById("contentmein").style.display = ""; //ver el formulario de login
    document.getElementById("VistaLibrosOrdenados").style.display = "none"; //
    document.getElementById("vistaautoresbibio").style.display = "none"; //
    document.getElementById("matrizortogonal").style.display = "none"; //
    document.getElementById("matrizdispersa").style.display = "none"; //
    document.getElementById("mostrarColaa").style.display = "none"; //
    //document.getElementById("ejemplares").style.display = "none"; //pila de libros disponi
    document.getElementById("vistaarbolautores").style.display = "none"; //
}

var pila = new Pila();
function mostrarPilaLibroAc(){
    var nombrelib = document.pillll.libropilaa.value;
    var cantidad = listaLibros.buscarLibro(nombrelib);
    for (let index = 1; index <= cantidad; index++) {
        pila.push(index);
    }
    pila.graficar("pila");
    for (let index = 0; index < cantidad; index++) {
        pila.pop();
    }
}

function verListaUsuarios() {
    lista.mostrarUsuario(); //muestra en consola lista de usuarios
}

function verListaLibros() {
    listaLibros.mostrarLibro(); //muestra en consola lista de libros
}

function verMatrizOrtogonal() {
    matrizo.mostrarMatriz(); //muestra en consola matriz de Fantasia
    matrizo.libreraMatriz("vistalibrera");
    matrizo.graph("vistaestructura");
}

function verMatrizDispersa() {
    matrizdis.graphvizLibreria("vistalibreraDisp");
    matrizdis.graphviz("vistaestructuraDis");
}


function grafoArbol() {
    grafoABB.graficarArbol(arbolabb.raiz); //Grafica arbol b de autores
    listaAutores.mostrarAutor();
    listaAutores.verAutoresBB("autoresbibio");
}

function verListadeLibros() {
    listaLibros.ordenBurbuja();
    listaLibros.verLibro("vstlibros");
    listaLibros.ordenQuickSort(listaLibros.head, listaLibros.ultimo());
    listaLibros.verLibro("vstlibros2");
}

function perdirlibro(){
    var nombrelib = document.pedirlib.nombrelibro.value;
    var cantidad = document.pedirlib.cantidadlibro.value;

    let cantidadExistente = listaLibros.buscarLibro(nombrelib);

    if(cantidad >cantidadExistente){
        let pedidos = cantidad-cantidadExistente;
        colaEspera.enqueue(usuarioActivo,nombrelib,pedidos)
    }

    if(listaLibros.existeLibro(nombrelib)){
        for (let index = 1; index <= cantidad; index++) {
            listadelistas.insertar(usuarioActivo, nombrelib);
        }
    }
}

function perdirlibroTh(){
    var nomlibb = document.pedirlibTh.nombrelibroTh.value;
    var cantidads = document.pedirlibTh.cantidadlibroTh.value;

    let cantidadExistente = listaLibros.buscarLibro(nomlibb);

    if(cantidads >cantidadExistente){
        let pedidos = cantidads-cantidadExistente;
        colaEspera.enqueue(usuarioActivo,nombrelib,pedidos)
    }
    if(listaLibros.existeLibro(nomlibb)){
        for (let index = 1; index <= cantidads; index++) {
            listadelistas.insertar(usuarioActivo, nomlibb);
        }
    }
}

function mostrarListadeListas(){
    listadelistas.grafic("listalistas");
}

function mostrarCola(){
    colaEspera.graficar("cola")
}

function mostrarTop(){
}