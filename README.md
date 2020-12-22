# Brusa Music

Curso: React CODERHOUSE  
Entrega Final  
Camada: 11305  
Estudiante: José Miguel Molina  
Hosting: [Brusa Music](https://coder-ecommerce-1f345.web.app/)

## Descripción

En mi app se venden discos de rock para decadas pasadas  
El proyecto se encuentra en mi repositorio [React](https://github.com/jmmolinar/react)  
Los productos se toman desde Firebase [Coder Ecommerce 1f345](https://console.firebase.google.com/project/coder-ecommerce-1f345/firestore)  
Allí en [Coder Ecommerce 1f345](https://console.firebase.google.com/project/coder-ecommerce-1f345/firestore) también se registran las ventas  
Las imágenes de los productos se encuentran en repositorio [Images](https://github.com/jmmolinar/album/tree/main/images) desde donde se toman en un atributo de cada producto en el Firebase  
[Aquí](https://coder-ecommerce-1f345.web.app/) puedes probar mi App

## Componentes

- CartIcon.js
- Carts.js
- Category.js
- CategoryContainer.js
- CategoryList.js
- Container.js
- Home.js
- Item.js
- ItemCount.js
- ItemDetail.js
- ItemDetailContainer.js
- ItemList.js
- NavBar.js

## Context
    
- useCartContext.js

## Firebase

- index.js (conexión a las colecciones en firebase)

## Detalle de APP, Componentes, Context y Firebase

### `App.js`

- App.js contiene el AppProvider del context y el router con la configuración de URLs utilizadas por los componentes
- El estilo es otorgado con Bootstrap y el archivo de la carpeta css llamado container.css
- En la carpeta images solo se tiene un png para mostrarlo en la parte superior de la app

### `Componente CartIcon.js`

- Muestra la cantidad tomando del context useCartContext a sumarCantidadesAlCarrito

### `Componente Carts.js`

Subcomponente: Agrupados
    
- En el Carrito agrego el botón comprar
- Al hacer clic en él invoco a nuevaCompra
- En la función nuevaCompra invoco a las funciones de validaciones de los input
- Se validan: nombre, apellido, dirección, formato email y coincidencias, formato teléfono
- Luego invoco a ventasFirebase que la tengo en useCartContext
- ventasFirebase se encarga de crear la colección ventas en Firebase y agregar las compras
- Luego de hacer la compra exitosa consulta si quiere mantener los productos en el carrito o vaciarlo
- Se tienen funciones para eliminar por elemento del carrito y para vaciar el carrito
- Tengo un Subcomponente llamado Agrupados
- Agrupados utiliza sumarCantidadesAlCarrito traida del useCartContext
- Muestra los productos en una tabla
- Si no hay elementos agregados renderiza mensaje para ir a seleccionar en categorias o en productos elementos nuevos

### `Componente Category.js`

- Muestra el listado de categorías al ingresar al menu Categorías
- Es dinámico, se redenrizan las categorías (sin repetirlas) encontradas en todos los productos

### `Componente CategoryContainer.js`

- Contenedor de productos pertenecientes a una categoría específica
- Con el useParams obtengo de la url la categoriaID para filtrar
- La función mostrarDeLaCategoria usa categoriaID y se pasa a getProductosCategoria del useCartContext
- En getProductosCategoria del useCartContext se filtran los productos que tengan esa categoriaID
- Paso al componente Item, los productos específicos de una categoría

### `Componente CategoryList.js`

- Utiliza el arregloCategorias traido desde el useCartContext
- En ese arreglo tengo las categorías encontradas en los productos
- Se eliminan las categorías repetidas en el useCartContext para no listarlas de forma duplicada
- Paso al componente Category dichas categorías para que las muestre en el DOM

### `Componente Container.js`

- Contenedor de toda la App
- Tiene logo superior
- El resto de los componentes
- Pie de página

### `Componente Home.js`

- Componente de Inicio con mensaje de bienvenida

### `Componente Item.js`

-  Se muestra el listado de productos

### `Componente ItemCount.js`

- Se agregan las funciones para sumar y restar que toma el onAdd y le pasa el parámetro contador
- Con los botones - y + cambio el valor del contador entre min y max desde initial

### `Componente ItemDetail.js`

- Se muestra el producto seleccionado con todos sus detalles
- Se utiliza el componente ItemCount para sumar o restar la cantidad del producto a comprar
- El botón Agregar al carrito muestra el valor que se va sumando o restando
- Al hacer clic en Agregar al carrito se actualiza la cantidad en el CartIcon
- El botón Comprar muestra el valor que se va sumando o restando
- Al hacer clic en Comprar se actualiza la cantidad en el CartIcon y hace link to al Carrito
- La función agregarAlCarrito es usada por ambos botones
- La función agregarAlCarrito utiliza asignarProducto del useCartContext
- asignarProducto del useCartContext verifica si el producto ya está agregado
- Si ya está agregado solo actualiza la nueva cantidad solicitada
- Si no ha sido agregado lo suma al carrito junto con su cantidad

### `Componente ItemDetailContainer.js`

- Traigo los productos por context con productosFirebase y se filtra por el useParams
- Con el useParams obtengo el productoID que será asignado a ItemDetail


### `Componente ItemList.js`

- Traigo los productos por context con productosFirebase
- Se pasan los productos al componente Item para ser renderizados

### `Componente NavBar.js`

- Se tiene el menú con las opciones de la app

### `Context useCartContext.js`

- Se obtienen los productos de firebase
- Función ventasFirebase crea la colección en firebase y registra las ventas
- Muestra alert con el ID del documentos de firebas y demás datos de la compra y del comprador
- Luego de la compra exitosa consulta si quiere mantener los productos en el carrito o vaciarlo
- Los documentos de las ventas contienen: nombre, contacto, email, fechas, productos con sus cantidades, cantidad total y precio final
- Función getProductosCategoria obtiene los productos filtrados por categoría
- Función eliminarTodosProductos se usa para vaciar el carrito
- Función eliminarProducto se utiliza para eliminar uno específico del carrito
- Función asignarProducto agrega productos al carrito y los verifica para no tenerlos duplicados
- En caso de ya estar en el carrito le actualiza la cantidad junto con la nueva asignada
- Función agragarCategoriaArreglo llena un arreglo de categorias que utilizo para listarlas en la opción Categorías del menu de la app
- Las categorías se crean de forma dinámica pues se buscan en todos los productos y se crea un arreglo con éstas sin estar duplicadas
- Función sumarCantidadesAlCarrito actualiza las cantidades de productos agregados para mostrarlas en el CartIcon
- Este dato también lo utiliza Carts para renderizar productos si existen y si no indicar al cliente que los agregue

### `Firebase index.js`

- Se tienen el código para la conexión a las colecciones en firebase
