const persona1 = new Persona();
persona1.name = "Luis";
persona1.apellido = "Flores";
persona1.numerodeidentificacion = "13043553";
persona1.estadocivil = "casado";
persona1.Informacionaimprimir();

persona1.cambioestadocivil("soltero"); persona1.Informacionaimprimir();

const Estudiante1 = new Estudiante();
Estudiante1. name = "Ricardo";
Estudiante1.apellido = "Mero";
Estudiante1.numerodeidentificacion = "13130642";
Estudiante1.estadocivil = "Soltero";
Estudiante1. curso = "Metodologia de la Investigacion";
Estudiante1.Informacionaimprimir();

Estudiante1.MatriculANuevoCurso("Metodos y tecnicas de la investigacion");
Estudiante1.Informacionaimprimir();

const profesor1 = new Profesores();
profesor1. name = "Alejandro";
profesor1.apellido = "Castro";
profesor1.numerodeidentificacion = "13038343";
profesor1.estadocivil = "casado"
profesor1.Departamento = "Fundamentos de la programacion";

profesor1. CambioDeDepartamento("Estructura de Datos"); 
profesor1. Informacionaimprimir();

const Empleados1 = new Empleados();
Empleados1. name = "Jorge";
Empleados1. apellido = "Anchundia";
Empleados1. numerodeidentificacion = "13130322";
Empleados1.estadocivil = "soltero";
Empleados1. anoIngresoaFacultad = 2020;
Empleados1. numeroDeDespacho= "A-321";

Empleados1.ReasinagcionDeDespacho("B-202");
Empleados1.Informacionaimprimir();

const Personalservicio1 = new PersonalServicio();
Personalservicio1.name = "Waleska";
Personalservicio1.apellido = "Mera";
Personalservicio1.numerodeidentificacion = "13038383";
Personalservicio1.estadocivil = "Soltera";
Personalservicio1.anoIngresoaFacultad = 2020;
Personalservicio1.numeroDeDespacho = "C-220";
Personalservicio1.seccion = "Secretaria";

Personalservicio1.TrasladarDeSeccion("Decanato");
Personalservicio1.Informacionaimprimir();