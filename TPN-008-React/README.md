# TPN°9 React- Manejo de rutas
En React, el enrutamiento se utiliza para permitir la navegación dentro de una aplicación web de una sola página (SPA, por sus siglas en inglés) sin necesidad de recargar la página completa.
<br>
Esto se logra mediante el uso de un enrutador de React, que maneja el cambio de la URL del navegador y muestra el componente correspondiente para la ruta actual.
Tener en cuenta: [https://johnserrano.co/blog/aprende-a-crear-rutas-con-react-router](https://johnserrano.co/blog/aprende-a-crear-rutas-con-react-router)

<hr />

En este trabajo práctico, hacer una aplicación de lista de tareas utilizando React y el manejo de rutas con React Router. La aplicación tendrá una página de inicio que muestra una lista de tareas, una página de detalle para cada tarea y una página de creación de nuevas tareas.RequerimientosLa aplicación debe tener tres páginas:

* Utilizar el hook useState para mantener el estado del texto ingresado.
* Utilizar el hook useEffect para actualizar el número de caracteres cada vez que cambia el estado del texto.
* Mostrar el número de caracteres en la página.
* Añadir un límite de caracteres para el texto ingresado (por ejemplo, 100 caracteres).
* Mostrar una advertencia cuando se alcance el límite de caracteres.
* Crear un componente que permita ingresar texto y mostrar el número de palabras ingresadas en tiempo real.
* Mostrar el número de palabras en la página.   
<br>
Debe utilizar el enrutador de React Router para manejar la navegación entre las páginas.La aplicación debe utilizar el estado de React para almacenar la lista de tareas y la información de cada tarea.La página de inicio debe mostrar una lista de tareas, con su título y una descripción corta. Cada tarea debe ser un enlace que lleva a su página de detalle correspondiente.La página de detalle debe mostrar la información completa de una tarea, incluyendo su título, descripción, fecha de creación y estado (completa o incompleta).La página de creación debe tener un formulario que permita al usuario ingresar un título, una descripción y marcar la tarea como completa o incompleta. Al enviar el formulario, la tarea debe agregarse a la lista de tareas.La aplicación debe ser responsive  y debe tener un diseño atractivo. (utilizar framework)Pasos sugeridosCrea una nueva aplicación de React utilizando Create React App.Instala React Router y las dependencias necesarias.Crea un archivo de datos para almacenar la lista de tareas y su información. Este archivo puede ser un simple array de objetos.Crea la página de inicio y la página de detalle, utilizando React Router para manejar la navegación entre ellas.Crea el componente de tarea que se utilizará en la página de inicio y en la página de detalle.Crea la página de creación y el formulario correspondiente.Añade estilos y asegúrate de que la aplicación sea responsive.

