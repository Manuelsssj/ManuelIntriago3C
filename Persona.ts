class Persona{
   name:String;
   apellido:String;
   numerodeidentificacion:String;
   estadocivil:String;


      cambioestadocivil(Nuevoestadocivil: String){
        this.estadocivil=Nuevoestadocivil;
    }
    Informacionaimprimir(){
        console.log("Nombre:", this.name);
        console.log("Apellido:", this.apellido);
        console.log("Numero de Identificacion:", this.numerodeidentificacion);
        console.log("Estado Civil:", this.estadocivil);   
    }

}