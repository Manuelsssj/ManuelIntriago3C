class Profesores extends Empleados{
    Departamento:String;

    CambioDeDepartamento(NuevoDepartamento:String){
        this.Departamento = NuevoDepartamento;
    }
}
const profesores = new Profesores();
profesores.Departamento;
profesores.name;
profesores.apellido;
profesores.numerodeidentificacion;
profesores.estadocivil;
profesores.numeroDeDespacho;