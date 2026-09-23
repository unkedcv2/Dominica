# PROMPT 1 MAESTRO — REGLAS GENERALES DE DESARROLLO

## 1. CONFIGURACIÓN Y ALCANCE
Trabajá sobre el proyecto existente utilizando:
- React
- TypeScript
- Vite
- CSS / sistema de estilos existente
- Firebase, si ya está integrado
- Routing existente
- Configuración de build y deployment existente

### Regla principal
NO modificar, eliminar, reemplazar ni reinterpretar funcionalidades existentes que no hayan sido solicitadas expresamente.
Esto incluye, entre otras cosas:
- Firebase
- autenticación
- usuarios
- contraseñas
- bases de datos
- reglas de seguridad
- APIs
- formularios
- lógica de negocio
- rutas
- componentes
- configuraciones de Vite
- configuración de deployment
- dominios
- integraciones existentes

Si algo ya funciona, conservarlo.

## 2. REGLA FUNDAMENTAL: NO HACER CAMBIOS NO SOLICITADOS
Cada modificación debe responder directamente a una necesidad indicada en el pedido.
No:
- agregar funcionalidades por iniciativa propia
- cambiar estructuras porque "podrían estar mejor"
- reemplazar tecnologías
- migrar Firebase
- cambiar autenticación
- modificar usuarios existentes
- cambiar contraseñas
- eliminar configuraciones
- reorganizar componentes sin necesidad
- modificar diseño por criterio propio

Si una mejora técnica no es necesaria para resolver el pedido, no realizarla.

## 3. NO TOMAR DECISIONES CREATIVAS
El sistema no debe inventar decisiones de diseño.
No modificar por iniciativa propia:
- colores
- tipografías
- tamaños
- estilos
- composición
- espaciados
- imágenes
- videos
- iconografía
- logos
- estructura visual
- contenido
- textos
- tono de comunicación

Si el usuario no lo solicita, conservar lo existente.

## 4. IMÁGENES, VIDEOS Y RECURSOS VISUALES
No inventar imágenes, videos, logos, fotografías ni recursos visuales.
No utilizar:
- imágenes placeholder
- imágenes genéricas
- fotografías inventadas
- logos inventados
- recursos de otras empresas
- assets de proyectos anteriores
- imágenes externas no solicitadas

Utilizar únicamente:
- recursos entregados por el usuario
- recursos existentes dentro del proyecto
- recursos específicamente indicados en el pedido

Si un recurso necesario no existe, no reemplazarlo automáticamente por otro.

## 5. ESTRUCTURA DE ASSETS
Todos los recursos de interfaz deben estar organizados dentro de `src/assets/`.
Utilizar esta estructura:
```
src/
└── assets/
    ├── images/
    │   ├── general/
    │   ├── backgrounds/
    │   └── og/
    ├── logos/
    ├── icons/
    ├── videos/
    ├── fonts/
    └── documents/
```

### Uso de cada carpeta:
- `images/general/`: fotografías, imágenes de contenido, imágenes de secciones, galerías
- `images/backgrounds/`: fondos, imágenes utilizadas específicamente como background
- `images/og/`: imágenes destinadas a Open Graph, imágenes para compartir el sitio en redes sociales
- `logos/`: logotipos, isotipos, variantes de marca
- `icons/`: íconos propios, SVG de interfaz, recursos gráficos pequeños
- `videos/`: videos, videos hero, videos de fondo
- `fonts/`: fuentes locales del proyecto
- `documents/`: PDFs u otros documentos que formen parte de la interfaz

## 6. IMPORTACIÓN DE ASSETS
Los assets de `src/assets/` deben ser importados desde React/Vite.
Ejemplo:
```typescript
import logo from '@/assets/logos/logo.svg';
import heroImage from '@/assets/images/general/hero.jpg';
```
Utilizar las rutas generadas por Vite.
No construir manualmente rutas absolutas del tipo `/assets/imagen.jpg` para recursos que pertenecen a `src/assets`.

## 7. ARCHIVOS TÉCNICOS EN PUBLIC/
La carpeta `public/` no debe utilizarse para almacenar recursos normales de la interfaz.
Los recursos visuales de la interfaz deben permanecer en `src/assets/`.
Sin embargo, `public/` puede utilizarse para archivos técnicos que necesitan una URL pública estable y directa.
Ejemplo:
```
public/
├── favicon.png
├── apple-touch-icon.png
├── robots.txt
├── sitemap.xml
└── manifest.webmanifest
```
Estos archivos pueden ser accesibles directamente desde la raíz del dominio.
No mover imágenes de la interfaz a `public/` sin una razón técnica concreta.

## 8. FAVICON — REGLAS PERMANENTES
El favicon debe tratarse como un recurso técnico independiente del logo principal del sitio.
Si el proyecto ya posee un favicon funcional, no reemplazarlo ni generar otro sin que sea solicitado.
Preferentemente utilizar `public/favicon.png` como favicon estable.
El HTML debe utilizar una referencia clara y estable, por ejemplo:
```html
<link rel="icon" type="image/png" href="/favicon.png" />
```
Si existe `apple-touch-icon.png`, puede utilizarse:
```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```
No agregar referencias a archivos que no existen.
No inventar `/favicon.ico` o `/favicon.svg` si esos archivos no están realmente presentes.

## 9. FAVICON Y GOOGLE SEARCH
El favicon debe:
- ser cuadrado
- tener relación 1:1
- tener suficiente resolución
- ser accesible públicamente
- responder correctamente
- no estar bloqueado por `robots.txt`
- mantener una URL estable
- representar claramente la identidad del sitio

No cambiar constantemente el favicon ni su URL con parámetros de versión (ej. `/favicon.png?v=2`). Mantener una URL estable.
La visualización del favicon en Google Search depende también del procesamiento y actualización de Google, por lo que no asumir que un cambio aparece inmediatamente en resultados.

## 10. VERIFICACIÓN TÉCNICA DEL FAVICON
Antes de finalizar un proyecto verificar:
`https://dominio.com/favicon.png`
Debe:
- existir
- devolver correctamente el archivo
- no generar 404
- no generar redirecciones innecesarias
- ser accesible públicamente

También verificar que el HTML tenga la referencia correcta.
No confundir favicon, logo de marca, Open Graph image, imagen de redes sociales o logo de datos estructurados. Son recursos diferentes y pueden utilizar archivos diferentes.

## 11. FAVICON, LOGO Y METADATOS
No utilizar automáticamente el favicon como `og:image` ni como `logo` del JSON-LD.
Cuando exista un logo real del proyecto, utilizar el logo correspondiente (por ejemplo: `src/assets/logos/logo.svg`).
- El favicon representa la identificación pequeña del sitio.
- El logo representa la identidad visual de la marca.
- La imagen Open Graph representa la imagen utilizada al compartir el sitio.

## 12. SEO TÉCNICO GENERAL
Cada página debe tener, cuando corresponda:
- `<title>`
- meta description
- canonical
- Open Graph
- Twitter Card
- idioma correcto
- viewport
- estructura semántica adecuada

No duplicar títulos o descriptions innecesariamente.
Los títulos deben ser específicos para cada página.

## 13. SEO SIN INVENTAR INFORMACIÓN
No inventar información para mejorar SEO.
No inventar: servicios, ubicaciones, años de experiencia, cantidad de clientes, certificaciones, premios, características, testimonios, nombres, direcciones, teléfonos, horarios, palabras clave no relacionadas.
Utilizar únicamente información proporcionada o existente en el proyecto.

## 14. DATOS ESTRUCTURADOS / JSON-LD
Utilizar JSON-LD únicamente cuando exista información suficiente y real.
El tipo de Schema debe corresponder al negocio o contenido real.
No agregar propiedades inventadas.
Cuando exista un logo real, utilizar el logo real y no el favicon.
Verificar que el JSON sea válido, las URLs sean correctas, no existan datos ficticios y no se generen datos contradictorios con el contenido visible.

## 15. IMÁGENES Y SEO
Cuando corresponda, las imágenes deben tener alt descriptivo, nombres de archivo razonables, dimensiones apropiadas, formato adecuado y carga optimizada.
No utilizar textos de alt artificialmente cargados de palabras clave. Los alt deben describir realmente la imagen.

## 16. ROUTING
Mantener el sistema de routing existente.
No crear rutas manuales innecesarias.
Las rutas deben funcionar correctamente tanto desde navegación interna, acceso directo, URL copiada y refresh del navegador.
No modificar el sistema de routing existente salvo que sea necesario para resolver el pedido.

## 17. DEPLOYMENT
No modificar innecesariamente la configuración de deployment.
Conservar: Vercel, Hostinger, GitHub, Firebase, variables de entorno, configuración de build, configuración existente del proyecto.
No cambiar el proveedor de hosting.
No cambiar el dominio.
No modificar variables de entorno sin necesidad.

## 18. RUTAS Y DEPLOYMENT
Después de cualquier modificación verificar que el build continúe funcionando.
Comprobar especialmente `/`, rutas internas, assets, imágenes, videos, fuentes, favicon, `robots.txt`, `sitemap.xml`.
No asumir que una ruta funciona solamente porque funciona dentro del entorno de desarrollo.

## 19. RESPONSIVE
Mantener comportamiento responsive.
Verificar como mínimo: desktop, tablet, mobile.
No cambiar el diseño existente salvo que el pedido lo indique.
Si se agrega una nueva sección o componente, debe integrarse correctamente al comportamiento responsive existente.

## 20. PERFORMANCE
Evitar recursos innecesariamente pesados.
No incorporar librerías innecesarias, imágenes gigantes, videos pesados, scripts externos sin necesidad o dependencias que no aporten.
Mantener el proyecto liviano y eficiente. No sacrificar funcionalidades existentes por optimizaciones no solicitadas.

## 21. ACCESIBILIDAD
Mantener buenas prácticas básicas de accesibilidad: textos alternativos, HTML semántico, botones correctamente definidos, labels en formularios, contraste razonable, navegación mediante teclado y estados visibles de interacción.
No alterar el diseño visual para implementar mejoras que no hayan sido solicitadas, salvo que sean necesarias para accesibilidad funcional.

## 22. CÓDIGO LIMPIO Y MANTENIBLE
Mantener componentes reutilizables, nombres claros, estructura ordenada, código legible, imports correctos y ausencia de código innecesario.
No duplicar lógica sin necesidad.
No eliminar código existente si no es necesario para el cambio solicitado.

## 23. RESPETAR EL CONTEXTO EXISTENTE
Antes de modificar algo, analizar cómo está construido actualmente.
No asumir que una implementación determinada es incorrecta simplemente porque existe otra forma de hacerlo.
Si ya existe una solución funcional: conservarla.
Modificar solamente lo necesario.

## 24. CAMBIOS INCREMENTALES
Cuando el pedido sea específico, realizar el cambio de manera localizada.
Modificar únicamente lo solicitado y verificar el resultado.

## 25. SEGURIDAD Y ESTABILIDAD
No modificar reglas de Firebase, autenticación, permisos, usuarios, contraseñas, tokens, variables privadas, API keys o bases de datos salvo que el pedido lo solicite expresamente.
Nunca eliminar usuarios existentes ni cambiar métodos de autenticación por iniciativa propia.

## 26. INFORMACIÓN FALTANTE
Si falta información crítica para realizar correctamente una modificación: no inventarla.
Utilizar la información disponible y mantener el resto sin cambios.
Si la información faltante impide continuar correctamente, indicarlo antes de tomar una decisión irreversible.

## 27. ESTABILIDAD DEL PROYECTO
Cada modificación debe mantener: build funcional, rutas funcionales, assets funcionando, Firebase funcionando, autenticación funcionando, formularios funcionando, responsive funcionando, deployment funcionando.

## 28. VERIFICACIÓN FINAL DE ASSETS
Antes de finalizar, verificar `src/assets/` y `public/`.
Comprobar que no existan assets duplicados, rutas rotas ni archivos placeholder no solicitados.

## 29. NO ASUMIR
No asumir: nombres de empresas, nombres de clientes, logos, colores, textos, servicios, URLs, redes sociales, direcciones, teléfonos, imágenes, videos, estructura de Firebase, credenciales, usuarios, contraseñas. Todo debe surgir del proyecto o de las instrucciones recibidas.

## 30. REGLA ESPECIAL PARA REMIX / REUTILIZACIÓN
Cuando el proyecto sea creado a partir de otro proyecto, eliminar referencias al proyecto anterior (nombres, logos, imágenes, textos, metadatos) sobre la identidad, sin eliminar funcionalidades técnicas necesarias.

## 31. CAMBIOS FUTUROS
No realizar modificaciones adicionales que no formen parte del pedido actual. Cada nuevo pedido debe considerarse un cambio independiente.

## 32. PRINCIPIO FINAL
La prioridad es:
`ESTABILIDAD → EXACTITUD → CONSISTENCIA → PERFORMANCE → SEO TÉCNICO → ACCESIBILIDAD`
No agregar complejidad innecesaria. No improvisar. No inventar. No modificar lo que funciona. Modificar únicamente lo solicitado y mantener todo lo demás estable.
