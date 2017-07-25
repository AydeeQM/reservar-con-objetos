function Datos_Pasajero(asiento, nombre, apellido, iddni){
    this.asiento = asiento;
    this.nombre = nombre;
    this.apellido = apellido;
    this.iddni = iddni;
    
    this.select_pasajero = function (){
        
    }

        
    this.toHTML = function(){
        var html = '';
        html += 'Asiento N° ' + this.asiento + '<br>';
        html += 'Nombre: ' + this.nombre + '<br>';
        html += 'Apellido: ' + this.apellido + '<br>';
        html += 'N° de DNI: ' + this.iddni + '<br>';
        html += '<br><br>';
        return html;
    }
    
};

function Buses (){
    this.pasajeros = [];
    this.celda = undefined;
    
    this.add = function(personas){
        this.pasajeros.push(personas);
    }
    
    this.colorea = function (){
        
    }
    
    this.buscarPas = function(){
    
    }
    
    this.cancelarRes = function (){
        this.pasajeros [this.nowAgregando].pintado = false;
    }
    
}

var reserva_Asiento = new Buses();
reserva_Asiento.add = (new Datos_Pasajero(document.getElementById("mostrar").textContent, document.getElementById("nombre").value, document.getElementById("apell").value, document.getElementById("eldni").value)

var addButton = document.getElementById('agregar');
addButton.onclick = function() {
       
};

var buscarButton = document.getElementById('dni');
buscarButton.onclick = function(){
    
};

var listaButton = document.getElementById('print');
listaButton.onclick = function (){
    
};




