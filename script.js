// ================= CONFIGURACIÓN APIs =================
const API_CATALOGO = "https://script.googleusercontent.com/macros/echo?user_content_key=AY5xjrRqcoxn7gKz_NUfPOixOMRQYU0tUv_iWappFFxT6_SLSKPSOQuH7VGngcyoPmbX7NXbY6sJFzIxMfJK8UovKjUyNwnnfcelawnhEKzGbuOZFrCF8zT2Hp6cG1UT4xKGyeVIgw1v5ukU4_Z54vUu1FvdYT6lG-zNVLVWsVWt_YKjMgzfkUt7sL0H9Yv4uU0UXl28_cNksFgDBQZNWlac0TB8GGoV0QblK9AUr2qgDkaifl7wGhrr2RadulennvORlPapdLHdFtyHGkPyj6bGQ4HKuxmgmm5heyaGYGUy&lib=MAqmJ3qarrLAxEL0esSN-DZh31441PXwj";
const API_WIFFI = "https://script.googleusercontent.com/macros/echo?user_content_key=AWDtjMUixNfzuuYT48rQ1PQlZeZlUATI36koCH1E_5I2BWTg3_SITWWEdZEGG-zFkKVFVc07yJvS3rsxvFAKT6X7j_oyGybIaXPIX5M4CgDN6v0mVnuQ2RF1zxtkMpqXcDzmuFYbjrYwS47xiLK7JDUDZMue2TgHP1y70r4WLFcNFxOjMqnFiM8AxexkGx0aEIyGVnsxPrj_doylHLDb_oAhGwefIdgduvUpabGVAqVNPzyEiEUVP4E_qEpZteTiQAxiVFKaLOifuF2AD2Q9FjQHQC2pMXk7Zg&lib=Ma71qi93BNNEIcvdf7AYYGnvq73vH79U2";
const API_ESTRUCTURA = "https://script.googleusercontent.com/macros/echo?user_content_key=AWDtjMU6GsvkF8Pxm-X58vBinpa25FW8v3R91Ghq3RucIndXJH4ySodgeYSpVkKnhsFbM-NhY110HTfsK9fokCFXTT7curvHYxrPAoYYuu-zw9Ap0GbThXs3reznzRE9jdgGjDzgfPhxkXQWgYTmgDia1wdb9voxCZWq7Xm06S8dNSNi7HPBiMnL5Pk4dTQCyXPIFFnAykH4Eb7Rk0YBFGKlo7ZrCZlRlTwUqcfHYeOSrMv3I47hdh4wxCLtpt7_1Pswp_-Cd3hqSwFW6Z779pzPwBSITjh8pYJF7Hw7oywN&lib=MdAJgvkMQ3fL2GWlIQ1teDZh31441PXwj";
const API_INV_SIC = "https://script.google.com/macros/s/AKfycbxeG52ycMvziMBvc0XWhbRZa7EUTF9uWwfEXiS6jeh3_WQqWf8lQlYBLU5863OvJfmr/exec";
const API_IMPRESORAS = "https://script.google.com/macros/s/AKfycby5lgRvsJ6szfSmkcBYG3vvgEyyermRu4KjDbuHrvdfkjy2Km2FYgYMs6yMHL9UXpt5/exec";
const API_USUARIOS = "https://script.googleusercontent.com/macros/echo?user_content_key=AWDtjMXbPcIaEH1bv-BW00xV2qZQcCuZSLYXoI2PVAShWCLc0tw14y71Eikc1E5xtSvcB19bcFS3WmbCsEhKYGWDUkuAfOoKR441nzUU0KXT4rWp-Ao3MmZkv-YeOOlMYqGdU3WT8SWQ-_U6zZ15XkMAUXZwjdQsnBHFO4CBdcDUpPF88mw8lmMK9RT29noL0846ijErqRQYD_AO8utFnfrvTBnoIR9RflkX69tvCmxnd1pzZCAeAEdtiPrjf3uwm0fz4rX7cYiBN8ZC0sfGI7VvvQFq9gIr2w&lib=MmNsUys4zZp-lkbC3LSqsUHvq73vH79U2";

// ================= VARIABLES GLOBALES =================
let dataCatalogo = [], dataWiffi = [], dataEstructura = [], dataInventarioSIC = [], dataImpresoras = [];
let filteredData = [], columns = [], activeFilters = {}, currentFilterColumn = null, chatbotLoaded = false, currentDataSource = 'catalogo';
let currentUser = '', currentPass = '', feelsocialLoaded = false, feelsocialRefreshInterval = null;
let usuariosAPI = [];
let casoImagenesBase64 = [];
let checklistVisible = true;

const COLS_CATALOGO = ["categoria", "subcategoria", "articulo", "grupoResolutorN1", "owner1", "grupoResolutorN2", "owner2", "descripcion", "tipoSolicitud", "prioridad"];
const COLS_WIFFI = ["tienda", "plaza", "SSID", "contraseña"];

const equiposConSerial = ["Impresora de tickets", "Terminal Verifone", "POS", "Cajón de dinero", "Impresora multifuncional", "Impresora Zebra"];

// ================= CATÁLOGO DE EQUIPOS =================
const catalogoEquipos = {
    "Etiquetadora": {
        mensaje: "Se realiza validación inicial del equipo etiquetador, verificando encendido, impresión, conectividad, batería y alimentación de consumibles para descartar fallas físicas, lógicas o de operación.",
        checklist: [
            {label:"Encendido y prueba de impresión", na:false},
            {label:"Limpieza del mecanismo / cabezal", na:false},
            {label:"Nivel de cinta/etiquetas", na:true},
            {label:"Daños visibles", na:false},
            {label:"Validar que esté conectada a la WiFi, en la pantalla inicial te debe dar una IP 10.X.X.X", na:true},
            {label:"Validar que tenga bien colocado el rollo de etiquetas", na:true},
            {label:"Validar que el porcentaje de carga y/o pila sea de al menos 25% o más", na:true}
        ]
    },
    "Handheld (lectores de mano)": {
        mensaje: "Se valida funcionalidad del handheld mediante revisión de encendido, conectividad, escaneo, estado físico y nivel de carga, a fin de confirmar si la incidencia corresponde a hardware, configuración o red.",
        checklist: [
            {label:"Encendido y escaneo/prueba", na:false},
            {label:"Limpieza", na:false},
            {label:"Conexión a base o red", na:false},
            {label:"Daños visibles", na:false},
            {label:"Validar que esté conectada a la WiFi de la tienda (SSID = Marca + Centro Comercial)", na:true},
            {label:"Pila cargada al menos al 25% o más", na:true}
        ]
    },
    "Impresora de tickets": {
        mensaje: "Se realiza diagnóstico operativo de impresora de tickets validando energía, papel, cabezal, cableado, drivers, software y estado físico del equipo. **Número de serie obligatorio**.",
        checklist: [
            {label:"Verificar que esté conectada a la corriente y encendida", na:true},
            {label:"Revisar que tenga rollo de papel colocado correctamente", na:true},
            {label:"Confirmar que no haya atascos de papel", na:true},
            {label:"Revisar cable de datos bien conectado", na:true},
            {label:'Imprimir página de prueba (generalmente botón "feed" + encendido)', na:true},
            {label:"Validar que el driver esté instalado y la impresora predeterminada", na:true},
            {label:"Revisar que el papel sea del tipo correcto (térmico)", na:true},
            {label:"Confirmar que el cabezal no esté sucio (limpieza con alcohol isopropílico)", na:true},
            {label:"Validar que no tenga LED de error (papel, tapa abierta, sobrecalentamiento)", na:true},
            {label:"Probar impresión desde el software de ventas", na:true},
            {label:"Validar que no se encuentre alarmada (foco led en color ámbar)", na:true},
            {label:"Validar que la impresora esté correctamente configurada en StarPOS", na:true}
        ]
    },
    "Impresora multifuncional": {
        mensaje: "Se verifica funcionalidad de multifuncional en aspectos de energía, impresión, conectividad, consumibles, cola de impresión y estado de controladores. **Número de serie obligatorio**.",
        checklist: [
            {label:"Revisar que esté encendida y sin errores en pantalla", na:true},
            {label:"Confirmar que haya papel y tóner/tinta", na:true},
            {label:"Revisar atascos o bandejas mal colocadas", na:true},
            {label:"Verificar cables de red o USB conectados", na:true},
            {label:"Hacer prueba de impresión desde el panel de control", na:true},
            {label:"Revisar que aparezca instalada en la PC", na:true},
            {label:"Revisar nivel de tinta/tóner desde software de la impresora", na:true},
            {label:"Confirmar que los controladores estén actualizados", na:true},
            {label:"Validar que la cola de impresión no esté saturada", na:true},
            {label:"Suspensión de energía inhabilitada en los puertos USB", na:true},
            {label:"Validar si el multifuncional es propio o arrendado", na:false}
        ]
    },
    "Biométrico": {
        mensaje: "Se valida funcionamiento del biométrico mediante revisión de encendido, limpieza del sensor, enrolamiento de usuarios y conectividad con el sistema.",
        checklist: [
            {label:"Confirmar que esté encendido", na:true},
            {label:"Revisar que el sensor esté limpio", na:true},
            {label:"Probar lectura con varios usuarios registrados", na:true},
            {label:"Revisar fecha y hora correctas en el dispositivo", na:true},
            {label:"Revisar que el firmware esté actualizado", na:true},
            {label:"Probar conexión (Cambiar de puerto USB)", na:true},
            {label:"Revisar que el usuario esté correctamente enrolado en el sistema", na:true}
        ]
    },
    "Cajón de dinero": {
        mensaje: "Se verifica la apertura física y lógica del cajón de dinero, así como su dependencia con impresora, cableado RJ11 y configuración del sistema. **Número de serie obligatorio**.",
        checklist: [
            {label:"Revisar que esté conectada a la impresora o al POS", na:true},
            {label:"Confirmar que la impresora funcione (la gaveta depende de ella)", na:true},
            {label:"Probar apertura manual con llave", na:true},
            {label:"Verificar en el sistema que la configuración de apertura esté habilitada", na:true},
            {label:"Escuchar clic al mandar comando de apertura desde el software", na:true},
            {label:"Confirmar que el cable RJ11 esté en buen estado", na:true},
            {label:"Revisar que el software tenga configurada la gaveta correctamente", na:true},
            {label:"Probar apertura en otro POS si es posible", na:true},
            {label:"Validar que no tenga bloqueo mecánico interno", na:true},
            {label:"¿Está bien conectado a través del RJ11 a la impresora de tickets?", na:true},
            {label:"Validar que no tenga seguro manual activado con la llave", na:true}
        ]
    },
    "Cámara(s)": {
        mensaje: "Se revisa estado de alimentación, visión, limpieza de lente, cableado y condiciones físicas de las cámaras.",
        checklist: [
            {label:"Encendida y visión clara", na:false},
            {label:"Limpieza de lente", na:false},
            {label:"Conexión de alimentación o cable", na:false},
            {label:"Daños visibles", na:false}
        ]
    },
    "Desktop": {
        mensaje: "Se realiza revisión integral del equipo de escritorio validando arranque, video, periféricos, red, energía, BIOS y síntomas de hardware.",
        checklist: [
            {label:"Verificar que arranque el sistema operativo sin errores", na:true},
            {label:"Confirmar que el equipo encienda y muestre imagen", na:true},
            {label:"Revisar que el cargador/fuente de poder funcione (LED o prueba en otro equipo)", na:true},
            {label:"Confirmar conexión de red (WiFi o cable)", na:true},
            {label:"Probar periféricos básicos (teclado, mouse, pantalla)", na:true},
            {label:"Revisar que no muestre mensajes de sobrecalentamiento o ventilador", na:true},
            {label:"Probar inicio en modo seguro si no arranca", na:true},
            {label:"Revisar en BIOS/UEFI que el disco y RAM se detecten", na:true},
            {label:"Revisar que no haya sonidos de error al encender (beep codes)", na:true},
            {label:"Probar con diferentes tomacorrientes", na:true}
        ]
    },
    "Escáner alámbrico / inalámbrico": {
        mensaje: "Se valida el escáner mediante revisión de encendido, cableado, lectura de códigos, lente y pruebas cruzadas en software y equipos distintos.",
        checklist: [
            {label:"Revisar que encienda (LED o láser visible)", na:true},
            {label:"Confirmar que el cable esté bien conectado", na:true},
            {label:"Probar lectura con un código de barras impreso y en pantalla", na:true},
            {label:"Probar en otra PC para descartar falla del software", na:true},
            {label:"Escanear varios tipos de códigos (EAN, QR, Code128)", na:true},
            {label:"Validar que no tenga polvo en la lente", na:true},
            {label:"Confirmar que funcione en aplicaciones distintas (POS, Excel, bloc de notas)", na:true}
        ]
    },
    "Impresora Zebra": {
        mensaje: "Se revisa la impresora Zebra considerando cabezal, rollo, calibración, impresión de prueba, driver y alimentación correcta de etiquetas. **Número de serie obligatorio**.",
        checklist: [
            {label:"Encendido y prueba de impresión", na:false},
            {label:"Limpieza de cabezal", na:false},
            {label:"Nivel de rollo/etiquetas", na:true},
            {label:"Alimentación de etiquetas correcta", na:false},
            {label:"Daños físicos", na:false},
            {label:"¿El driver se encuentra instalado y configurado?", na:true},
            {label:"¿El cabezal se encuentra calibrado?", na:true}
        ]
    },
    "iPad o tableta": {
        mensaje: "Se valida funcionalidad general de la tableta, incluyendo desbloqueo, red inalámbrica, pantalla táctil, carga y correspondencia con operación en tienda.",
        checklist: [
            {label:"Encendido y pantalla táctil funcional", na:false},
            {label:"Limpieza", na:false},
            {label:"Conexión Wi Fi/carga", na:false},
            {label:"Daños visibles", na:false},
            {label:"¿Cuentan con el código de desbloqueo de la pantalla inicial?", na:true},
            {label:"¿Se encuentra conectada a la WiFi de la tienda?", na:true},
            {label:"¿La tableta corresponde a Pasillo Infinito?", na:true}
        ]
    },
    "Laptop": {
        mensaje: "Se realiza diagnóstico general de laptop validando energía, video, arranque, BIOS, cargador, red, periféricos y procedimientos de recuperación.",
        checklist: [
            {label:"Confirmar que el equipo encienda y muestre imagen", na:true},
            {label:"Revisar que el cargador/fuente de poder funcione (LED o prueba en otro equipo)", na:true},
            {label:"Verificar que arranque el sistema operativo sin errores", na:true},
            {label:"Confirmar conexión de red (WiFi o cable)", na:true},
            {label:"Probar periféricos básicos (teclado, mouse, pantalla)", na:true},
            {label:"Revisar que no muestre mensajes de sobrecalentamiento o ventilador", na:true},
            {label:"Probar inicio en modo seguro si no arranca", na:true},
            {label:"Revisar en BIOS/UEFI que el disco y RAM se detecten", na:true},
            {label:"Probar con cargador alterno (en laptops)", na:true},
            {label:"Revisar que no haya sonidos de error al encender (beep codes)", na:true},
            {label:"Probar con diferentes tomacorrientes", na:true},
            {label:"Realizar Power Reset para laptops Lenovo", na:true}
        ]
    },
    "Modem": {
        mensaje: "Se valida estado general del módem mediante revisión de energía, conexión a internet, limpieza externa y condiciones físicas del equipo.",
        checklist: [
            {label:"Encendido y luz de conexión", na:false},
            {label:"Conectividad a internet", na:false},
            {label:"Limpieza externa", na:false},
            {label:"Daños visibles", na:false}
        ]
    },
    "Monitor": {
        mensaje: "Se realiza revisión de monitor verificando alimentación, señal de video, entrada seleccionada, resolución, cableado y funcionamiento general.",
        checklist: [
            {label:"Revisar que esté conectado a la corriente", na:true},
            {label:"Validar cable de video esté bien conectado", na:true},
            {label:"Probar encendido y que muestre logo o menú OSD", na:true},
            {label:"Verificar que la PC esté encendida y enviando señal", na:true},
            {label:"Probar con otro cable o equipo", na:true},
            {label:"Ajustar brillo/contraste desde el menú", na:true},
            {label:"Revisar que esté en el input correcto", na:true},
            {label:"Validar resolución y frecuencia configurada en la PC", na:true},
            {label:"Probar en otro enchufe o regulador", na:true},
            {label:"Revisar estado físico del cable (doblado o dañado)", na:true}
        ]
    },
    "Mouse/Ratón (Genérico)": {
        mensaje: "Se valida funcionalidad del dispositivo de apuntado (mouse/ratón) comprobando conexión, desplazamiento, clics, sensor, puertos y controladores. Aplica para cualquier marca o modelo genérico.",
        checklist: [
            {label:"Revisar conexión (USB, inalámbrico, Bluetooth)", na:true},
            {label:"Validar que se mueva el cursor", na:true},
            {label:"Probar clic izquierdo, derecho y scroll", na:true},
            {label:"Cambiar puerto USB o probar en otro equipo", na:true},
            {label:"Revisar pilas o recarga si aplica", na:true},
            {label:"Revisar que no tenga suciedad en el sensor", na:true},
            {label:"Probar desplazamiento en distintas superficies", na:true},
            {label:"Confirmar que el driver esté instalado correctamente", na:true},
            {label:"Revisar que no tenga clics fantasma o botones pegados", na:true},
            {label:"Revisar que no esté deshabilitado desde el Panel de Control", na:true}
        ]
    },
    "Nobreak (UPS)": {
        mensaje: "Se verifica funcionalidad del UPS revisando respaldo, batería, alarmas, sobrecarga, alimentación y comportamiento ante corte controlado.",
        checklist: [
            {label:"Confirmar que esté conectado a la corriente", na:true},
            {label:"Revisar que cargue y muestre indicadores de batería", na:true},
            {label:"Conectar un equipo y validar que reciba energía", na:true},
            {label:"Probar respaldo desconectando de la luz (corte de energía controlado)", na:true},
            {label:"Revisar que no haya alarmas o pitidos continuos", na:true},
            {label:"Validar que los equipos conectados no excedan la capacidad", na:true},
            {label:"Confirmar que no haya olor a quemado o sobrecalentamiento", na:true},
            {label:"Verificar que el botón de encendido funcione", na:true},
            {label:"Probar con otro equipo pequeño (lámpara o cargador)", na:true}
        ]
    },
    "POS": {
        mensaje: "Se realiza validación operativa del POS revisando encendido, conexión, energía, imagen, pedestal, arranque de sistema y reconocimiento de hardware. **Número de serie obligatorio**.",
        checklist: [
            {label:"Encendido y función", na:false},
            {label:"Limpieza de teclado/panel", na:false},
            {label:"Conexión estable", na:false},
            {label:"Daños visibles", na:false},
            {label:"Validar que el cargador esté bien conectado al POS y tomacorriente", na:true},
            {label:"Validar que la pantalla esté bien conectada al pedestal", na:true},
            {label:"Probar conectando el POS a un tomacorriente diferente", na:true},
            {label:"Confirmar que el equipo encienda y muestre imagen", na:true},
            {label:"Verificar que el sistema operativo arranque sin errores", na:true},
            {label:"Revisar en BIOS/UEFI que el disco duro y RAM se detecten", na:true}
        ]
    },
    "Proyector": {
        mensaje: "Se valida funcionamiento del proyector revisando lente, proyección, cableado, alimentación y estado físico del equipo.",
        checklist: [
            {label:"Encendido y proyección clara", na:false},
            {label:"Limpieza de lente", na:false},
            {label:"Cableado de video", na:false},
            {label:"Daños visibles", na:false}
        ]
    },
    "Scanner de artículos": {
        mensaje: "Se revisa el scanner de artículos mediante validación de encendido, lectura, ventilación, cableado y estado físico general.",
        checklist: [
            {label:"Encendido y prueba", na:false},
            {label:"Limpieza de vent", na:false},
            {label:"Escaneo correcto", na:false},
            {label:"Cableado", na:false},
            {label:"Daños visibles", na:false}
        ]
    },
    "SD": {
        mensaje: "Se realiza validación del caso SD mediante pruebas secuenciales establecidas en procedimiento técnico.",
        checklist: [
            {label:"Check SD", na:false},
            {label:"Prueba 1", na:false},
            {label:"Prueba 2", na:false},
            {label:"Prueba 3", na:false}
        ]
    },
    "Teclado": {
        mensaje: "Se valida el teclado revisando conexión, respuesta de teclas, idioma, puertos, estado físico y limpieza general.",
        checklist: [
            {label:"Confirmar conexión (USB, inalámbrico, Bluetooth)", na:true},
            {label:"Revisar que las teclas respondan (probar en Bloc de notas)", na:true},
            {label:"Validar que no esté bloqueada la tecla Num Lock si falla el pad numérico", na:true},
            {label:"Probar en otro puerto USB o equipo", na:true},
            {label:"Revisar pilas si es inalámbrico", na:true},
            {label:"Revisar idioma/configuración de teclado en el sistema", na:true},
            {label:"Validar que no tenga teclas trabadas o dañadas", na:true},
            {label:"Revisar que no haya derrames de líquidos", na:true},
            {label:"Limpiar con aire comprimido o paño seco", na:true}
        ]
    },
    "Telco": {
        mensaje: "Se realiza validación de telecomunicaciones revisando rack, enlaces, navegación, sincronización, cableado y rutas lógicas de conectividad.",
        checklist: [
            {label:"El rack y los equipos de telecomunicación están encendidos y conectados al break", na:true},
            {label:"Los módems de Telmex y Totalplay cuentan con internet", na:true},
            {label:"Se valida que la POS1 o SVR de tienda tengan conexión a servidores (Ejecutar sentencias de cmd ping y tracert)", na:true},
            {label:"Navegación a internet de manera correcta en POS", na:true},
            {label:"Bloqueo de página web por parte del Fortinet a una página específica", na:true},
            {label:"POS sincronizadas correctamente en horario", na:true},
            {label:"Validar que los cables de red no estén trozados (superficial)", na:false},
            {label:"Usuario no accedió a brindar apoyo", na:false},
            {label:"Se realiza validación de conexiones lógicas correctamente dependiendo si es tipo A o B", na:true}
        ]
    },
    "Terminal Verifone": {
        mensaje: "Se valida operación de terminal Verifone considerando energía, pantalla, red, comunicación RS232, drivers y configuración lógica. **Número de serie obligatorio**.",
        checklist: [
            {label:"Encendido y funcionamiento", na:false},
            {label:"Pantalla clara", na:false},
            {label:"Limpieza", na:false},
            {label:"Impresión de recibo de prueba", na:true},
            {label:"Daños visibles", na:false},
            {label:"Validar el tipo de terminal se reporta GPRS y/o respaldo, se reporta directamente al Call Center", na:true},
            {label:"Validar que el cable de corriente se encuentre conectado", na:true},
            {label:"Validar que el cable de red en el puerto Ethernet está bien conectado", na:true},
            {label:"Validar que el cable RS232 esté bien conectado en el puerto marcado como RS232 en la Verifone", na:true},
            {label:"Validar que el cable RS232 esté bien conectado vía USB al POS", na:true},
            {label:"Validar que el driver se encuentre instalado", na:true},
            {label:"Validar la configuración del driver sea correcta", na:true}
        ]
    },
    "Verificador de precio": {
        mensaje: "Se revisa el verificador de precio validando pantalla, red, sistema, alimentación y estado físico general.",
        checklist: [
            {label:"Encendido y pantalla/función correcta", na:false},
            {label:"Limpieza de pantalla o carcasa", na:false},
            {label:"Conexión a red/sistema", na:false},
            {label:"Daños visibles", na:false}
        ]
    },
    "Otro equipo / caso general": {
        mensaje: "Se realiza revisión general del equipo reportado, documentando condiciones de operación, pruebas ejecutadas, diagnóstico y acciones realizadas.",
        checklist: [
            {label:"Encendido / alimentación", na:true},
            {label:"Conectividad / comunicación", na:true},
            {label:"Limpieza / mantenimiento visual", na:true},
            {label:"Daños visibles", na:true},
            {label:"Prueba funcional", na:true}
        ]
    }
};

// ================= COOKIES =================
function setCookie(n,v,d){const e=new Date(Date.now()+d*864e5).toUTCString();document.cookie=`${n}=${encodeURIComponent(v)};expires=${e};path=/;SameSite=Lax`;}
function getCookie(n){const m=document.cookie.match(new RegExp('(^| )'+n+'=([^;]+)'));return m?decodeURIComponent(m[2]):null;}
function delCookie(n){document.cookie=`${n}=;expires=Thu,01Jan197000:00:00GMT;path=/`;}

// ================= MODO NOCTURNO =================
function toggleDarkMode(){
    const html=document.documentElement;const btn=document.getElementById('themeToggleButton');
    const isDark=html.getAttribute('data-theme')==='dark';
    if(isDark){html.removeAttribute('data-theme');btn.classList.remove('moon-mode');btn.classList.add('sun-mode');localStorage.setItem('darkMode','false');}
    else{html.setAttribute('data-theme','dark');btn.classList.remove('sun-mode');btn.classList.add('moon-mode');localStorage.setItem('darkMode','true');}
}
function initDarkMode(){
    const saved=localStorage.getItem('darkMode');const btn=document.getElementById('themeToggleButton');
    if(saved==='true'){document.documentElement.setAttribute('data-theme','dark');btn.classList.remove('sun-mode');btn.classList.add('moon-mode');}
}

// ================= TOGGLE CHECKLIST =================
function toggleChecklistVisibility(){
    checklistVisible=!checklistVisible;
    const btn=document.getElementById('checklistToggleBtn');const table=document.getElementById('checklistTable');
    if(checklistVisible){btn.classList.remove('active');table.classList.remove('hidden');table.style.maxHeight='none';table.style.opacity='1';}
    else{btn.classList.add('active');table.classList.add('hidden');table.style.maxHeight='0';table.style.opacity='0';table.style.overflow='hidden';}
}

// ================= CARGAR USUARIOS =================
async function cargarUsuariosAPI(){
    const loading=document.getElementById('loginBtn');const apiStatus=document.getElementById('apiStatus');
    loading.disabled=true;loading.innerHTML='<i class="fas fa-spinner fa-spin"></i> Cargando...';
    try{
        const res=await fetch(API_USUARIOS,{mode:'cors',cache:'no-store'});
        if(!res.ok) throw new Error('HTTP '+res.status);
        const json=await res.json();
        if(json.catalogo && Array.isArray(json.catalogo)){
            usuariosAPI=[];
            for(let i=0;i<json.catalogo.length;i++){
                const r=json.catalogo[i];
                if(r.Usuario && r.Contrasena){
                    usuariosAPI.push({Usuario:r.Usuario,Contrasena:r.Contrasena,FondoGeneral:(r.FondoGeneral&&r.FondoGeneral.trim())?r.FondoGeneral:'#f5f5f5'});
                }
            }
        }
        if(apiStatus) apiStatus.classList.add('show');
        loading.disabled=false;loading.innerHTML='<i class="fas fa-sign-in-alt"></i> Ingresar';
        return true;
    }catch(e){console.error('❌ Error:',e);loading.disabled=false;loading.innerHTML='<i class="fas fa-sign-in-alt"></i> Ingresar';usuariosAPI=[];return false;}
}

function validarCredenciales(user,pass){
    const usuario=usuariosAPI.find(u=>u.Usuario?.trim().toLowerCase()===user.trim().toLowerCase()&&u.Contrasena===pass);
    return usuario?{valid:true,data:usuario}:{valid:false};
}

// ================= RELOJ =================
function updateClock(){
    const now=new Date();
    const timeEl=document.getElementById('clockTime');const dateEl=document.getElementById('clockDate');
    if(timeEl) timeEl.textContent=now.toLocaleTimeString('es-MX');
    if(dateEl){const opts={weekday:'long',year:'numeric',month:'long',day:'numeric'};const d=now.toLocaleDateString('es-MX',opts);dateEl.textContent=d.charAt(0).toUpperCase()+d.slice(1);}
}
setInterval(updateClock,1000);updateClock();

// ================= LOGIN =================
async function login(){
    const u=document.getElementById("user").value.trim();const p=document.getElementById("pass").value;
    const error=document.getElementById("loginError");const btn=document.getElementById("loginBtn");
    error.style.display="none";btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Validando...';
    const resultado=validarCredenciales(u,p);
    if(resultado.valid){
        currentUser=resultado.data.Usuario;currentPass=resultado.data.Contrasena;
        const tecnicoField=document.getElementById('casoTecnico');
        if(resultado.data.FondoGeneral && tecnicoField) tecnicoField.value=resultado.data.FondoGeneral.trim();
        const headerTitle=document.getElementById('headerTitle');
        headerTitle.textContent=`Bienvenido ${resultado.data.FondoGeneral?.trim()||currentUser}`;
        document.getElementById("loginScreen").style.display="none";
        document.getElementById("app").style.display="flex";
        document.getElementById("chatbotContainer").style.display="block";
        document.getElementById("feelsocialContainer").style.display="block";
        document.getElementById("commsContainer").style.display="block";
        document.getElementById("themeToggleContainer").style.display="block";
        initDarkMode();cargarCatalogo();
    }else{error.style.display="block";error.textContent='❌ Credenciales incorrectas';setTimeout(()=>error.style.display="none",3000);}
    btn.disabled=false;btn.innerHTML='<i class="fas fa-sign-in-alt"></i> Ingresar';
}

// ================= DATOS =================
function resetFilterState(s){document.getElementById('globalSearch').value='';activeFilters={};filteredData=s?[...s]:[];updateActiveFiltersDisplay();}

async function cargarCatalogo(){resetFilterState();currentDataSource='catalogo';document.getElementById('headerTitle').textContent='Catálogo de Servicios - Grupo Axo';document.getElementById('btnBackCatalog').classList.remove('visible');document.getElementById('tableView').style.display='block';document.getElementById('iframeView').classList.remove('active');document.getElementById('casosContent').classList.remove('active');document.getElementById('searchContainer').style.display='block';document.getElementById('statsContainer').style.display='block';document.getElementById('tableBody').innerHTML='<tr><td colspan="10" class="no-data">Cargando...</td></tr>';try{if(!dataCatalogo.length){const r=await fetch(API_CATALOGO);const j=await r.json();dataCatalogo=j.catalogo||[];}filteredData=[...dataCatalogo];columns=COLS_CATALOGO.filter(c=>dataCatalogo[0]?.hasOwnProperty(c));renderTable('catalogo');updateStats();updateActiveFiltersDisplay();}catch(e){console.error(e);document.getElementById("tableBody").innerHTML='<tr><td colspan="10" class="no-data">❌ Error de conexión</td></tr>';}}

async function cargarWiffi(){resetFilterState();currentDataSource='wiffi';document.getElementById('headerTitle').textContent='Wiffi - Red';document.getElementById('btnBackCatalog').classList.add('visible');document.getElementById('tableView').style.display='block';document.getElementById('iframeView').classList.remove('active');document.getElementById('casosContent').classList.remove('active');document.getElementById('searchContainer').style.display='block';document.getElementById('statsContainer').style.display='block';document.getElementById('tableBody').innerHTML='<tr><td colspan="4" class="no-data">Cargando...</td></tr>';try{if(!dataWiffi.length){const r=await fetch(API_WIFFI);const j=await r.json();dataWiffi=j.catalogo||j.data||j||[];if(!Array.isArray(dataWiffi))dataWiffi=[];}filteredData=[...dataWiffi];columns=COLS_WIFFI.filter(c=>dataWiffi[0]?.hasOwnProperty(c));if(!columns.length)columns=COLS_WIFFI;renderTable('wiffi');updateStats();updateActiveFiltersDisplay();}catch(e){console.error(e);document.getElementById("tableBody").innerHTML='<tr><td colspan="4" class="no-data">❌ Error</td></tr>';}}

async function cargarEstructura(){resetFilterState();currentDataSource='estructura';document.getElementById('headerTitle').textContent='Estructura Organizacional';document.getElementById('btnBackCatalog').classList.add('visible');document.getElementById('tableView').style.display='block';document.getElementById('iframeView').classList.remove('active');document.getElementById('casosContent').classList.remove('active');document.getElementById('searchContainer').style.display='block';document.getElementById('statsContainer').style.display='block';document.getElementById('tableBody').innerHTML='<tr><td colspan="6" class="no-data">Cargando...</td></tr>';try{if(!dataEstructura.length){const r=await fetch(API_ESTRUCTURA);const j=await r.json();dataEstructura=j.catalogo||j.data||j.estructura||j||[];if(!Array.isArray(dataEstructura))dataEstructura=[];}filteredData=[...dataEstructura];columns=dataEstructura[0]?Object.keys(dataEstructura[0]):["area","departamento","puesto","responsable","email","telefono"];renderTable('estructura');updateStats();updateActiveFiltersDisplay();}catch(e){console.error(e);document.getElementById("tableBody").innerHTML='<tr><td colspan="6" class="no-data">❌ Error</td></tr>';}}

async function cargarInventarioSIC(){resetFilterState();currentDataSource='inventarioSIC';document.getElementById('headerTitle').textContent='Inventario SIC';document.getElementById('btnBackCatalog').classList.add('visible');document.getElementById('tableView').style.display='block';document.getElementById('iframeView').classList.remove('active');document.getElementById('casosContent').classList.remove('active');document.getElementById('searchContainer').style.display='block';document.getElementById('statsContainer').style.display='block';document.getElementById('tableBody').innerHTML='<tr><td colspan="9" class="no-data">Cargando...</td></tr>';try{if(!dataInventarioSIC.length){const r=await fetch(API_INV_SIC);const j=await r.json();dataInventarioSIC=j.catalogo||j.data||j.inventario||j.items||j||[];if(!Array.isArray(dataInventarioSIC))dataInventarioSIC=[];}filteredData=[...dataInventarioSIC];columns=dataInventarioSIC[0]?Object.keys(dataInventarioSIC[0]):["codigo","descripcion","categoria","ubicacion","cantidad","estado","responsable","fecha","numeroSerie"];renderTable('inventarioSIC');updateStats();updateActiveFiltersDisplay();}catch(e){console.error(e);document.getElementById("tableBody").innerHTML='<tr><td colspan="9" class="no-data">❌ Error</td></tr>';}}

async function cargarImpresoras(){resetFilterState();currentDataSource='impresoras';document.getElementById('headerTitle').textContent='Impresoras';document.getElementById('btnBackCatalog').classList.add('visible');document.getElementById('tableView').style.display='block';document.getElementById('iframeView').classList.remove('active');document.getElementById('casosContent').classList.remove('active');document.getElementById('searchContainer').style.display='block';document.getElementById('statsContainer').style.display='block';document.getElementById('tableBody').innerHTML='<tr><td colspan="9" class="no-data">Cargando...</td></tr>';try{if(!dataImpresoras.length){const r=await fetch(API_IMPRESORAS);const j=await r.json();dataImpresoras=j.catalogo||j.data||j.impresoras||j.items||j||[];if(!Array.isArray(dataImpresoras))dataImpresoras=[];}filteredData=[...dataImpresoras];columns=dataImpresoras[0]?Object.keys(dataImpresoras[0]):["ubicacion","modelo","marca","ip","serial","estado","responsable","fechaInstalacion","numeroSerie"];renderTable('impresoras');updateStats();updateActiveFiltersDisplay();}catch(e){console.error(e);document.getElementById("tableBody").innerHTML='<tr><td colspan="9" class="no-data">❌ Error</td></tr>';}}

function renderTable(src){
    const head=document.getElementById('tableHead');const body=document.getElementById('tableBody');const table=document.getElementById('dataTable');
    table.classList.remove('wiffi-table','estructura-table','sic-table','impresoras-table');
    if(src==='wiffi')table.classList.add('wiffi-table');if(src==='estructura')table.classList.add('estructura-table');if(src==='inventarioSIC')table.classList.add('sic-table');if(src==='impresoras')table.classList.add('impresoras-table');
    if(!columns.length){body.innerHTML='<tr><td colspan="4" class="no-data">Sin columnas</td></tr>';return;}
    head.innerHTML='<tr>'+columns.map(c=>`<th>${formatColumnName(c)}<button class="filter-btn" onclick="openFilterModal('${c}')">▼</button></th>`).join('')+'</tr>';
    if(!filteredData.length){body.innerHTML=`<tr><td colspan="${columns.length}" class="no-data">Sin registros</td></tr>`;}
    else{body.innerHTML=filteredData.map(row=>'<tr>'+columns.map(c=>{let v=row[c];if(v==null)v='';else v=v.toString();if(c==='contraseña'&&v&&document.getElementById('loginScreen').style.display!=='none')v='••••••••';const cls=c==='contraseña'?' class="contrasena-cell"':'';return `<td${cls} title="${v}">${v}</td>`}).join('')+'</tr>').join('');}
}
function formatColumnName(c){if(c==='contraseña')return'Contraseña';if(c==='numeroSerie')return'N° Serie';return c.charAt(0).toUpperCase()+c.slice(1).replace(/([A-Z])/g,' $1').trim();}

// ================= FILTROS =================
function openFilterModal(col){currentFilterColumn=col;const modal=document.getElementById('filterModal');document.getElementById('filterModalTitle').textContent=`Filtros de ${formatColumnName(col)}`;const list=document.getElementById('checkboxList');const vals=[...new Set(filteredData.map(r=>r[col]).filter(v=>v!=null&&v.toString().trim()!=='').map(v=>v.toString().trim()))].sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));const selected=activeFilters[col]?new Set(activeFilters[col].map(v=>v.toString().trim().toLowerCase())):new Set(vals.map(v=>v.toString().trim().toLowerCase()));list.innerHTML='';if(!vals.length){list.innerHTML='<div style="padding:10px;text-align:center;color:#666;font-size:13px">Sin valores para filtrar</div>';}else{vals.forEach(val=>{const item=document.createElement('div');item.className='filter-checkbox-item';const cb=document.createElement('input');cb.type='checkbox';cb.id=`chk_${Math.random().toString(36).substr(2,9)}`;cb.value=val;cb.checked=selected.has(val.toString().trim().toLowerCase());const lbl=document.createElement('label');lbl.htmlFor=cb.id;lbl.textContent=val;lbl.style.cursor='pointer';lbl.style.flex='1';item.appendChild(cb);item.appendChild(lbl);list.appendChild(item);});}document.getElementById('selectAllCheckbox').checked=vals.length>0&&vals.every(v=>selected.has(v.toString().trim().toLowerCase()));document.getElementById('selectAllCheckbox').onchange=function(){list.querySelectorAll('input[type="checkbox"]').forEach(cb=>cb.checked=this.checked);};document.getElementById('filterSearch').value='';document.getElementById('filterSearch').oninput=function(){const t=this.value.toLowerCase();list.querySelectorAll('.filter-checkbox-item').forEach(it=>{const l=it.querySelector('label');it.style.display=l.textContent.toLowerCase().includes(t)?'flex':'none';});};modal.style.display='flex';}
function closeFilterModal(){document.getElementById('filterModal').style.display='none';}
function applyFilter(){const cbs=document.querySelectorAll('#checkboxList input[type="checkbox"]:checked');const selected=Array.from(cbs).map(cb=>cb.value.trim());if(!selected.length&&document.querySelectorAll('#checkboxList input[type="checkbox"]').length){alert('Selecciona al menos un valor');return;}activeFilters[currentFilterColumn]=selected;applyAllFilters();closeFilterModal();updateActiveFiltersDisplay();}
function applyAllFilters(){const term=document.getElementById('globalSearch').value.toLowerCase().trim();let src=currentDataSource==='wiffi'?dataWiffi:currentDataSource==='estructura'?dataEstructura:currentDataSource==='inventarioSIC'?dataInventarioSIC:currentDataSource==='impresoras'?dataImpresoras:dataCatalogo;filteredData=src.filter(row=>Object.keys(activeFilters).every(c=>!activeFilters[c]||!activeFilters[c].length||((row[c]??'').toString().trim().toLowerCase()&&activeFilters[c].some(f=>f.toString().trim().toLowerCase()===(row[c]??'').toString().trim().toLowerCase())))&&(term===''||Object.values(row).some(v=>v&&v.toString().toLowerCase().includes(term))));renderTable(currentDataSource);updateStats();}
function updateActiveFiltersDisplay(){const c=document.getElementById('activeFilters');const b=document.getElementById('clearAllFilters');if(!Object.keys(activeFilters).length){c.classList.remove('show');b.style.display='none';return;}let h='<strong>Filtros activos:</strong> ';Object.keys(activeFilters).forEach(col=>{const n=col==='contraseña'?'Contraseña':formatColumnName(col);h+=`<span class="filter-tag">${n}: ${activeFilters[col].length} <span class="remove-filter" onclick="removeFilter('${col}')">×</span></span>`;});c.innerHTML=h;c.classList.add('show');b.style.display='block';}
function removeFilter(c){delete activeFilters[c];applyAllFilters();updateActiveFiltersDisplay();}
function clearAllFilters(){resetFilterState();let s=currentDataSource==='wiffi'?dataWiffi:currentDataSource==='estructura'?dataEstructura:currentDataSource==='inventarioSIC'?dataInventarioSIC:currentDataSource==='impresoras'?dataImpresoras:dataCatalogo;filteredData=[...s];renderTable(currentDataSource);updateStats();}
function updateStats(){let t=currentDataSource==='wiffi'?dataWiffi.length:currentDataSource==='estructura'?dataEstructura.length:currentDataSource==='inventarioSIC'?dataInventarioSIC.length:currentDataSource==='impresoras'?dataImpresoras.length:dataCatalogo.length;document.getElementById('statsText').textContent=`Mostrando ${filteredData.length} de ${t} registros`;}
function setActiveNav(id){document.querySelectorAll('.nav-pill').forEach(p=>p.classList.remove('active'));if(id){const n=document.getElementById(id);if(n)n.classList.add('active');}}

// ================= IFRAME =================
let iframeHistory=[],iframeHistoryIndex=-1;
function abrirEnIframe(url,title){document.getElementById('tableView').style.display='none';document.getElementById('iframeView').classList.add('active');document.getElementById('casosContent').classList.remove('active');document.getElementById('headerTitle').textContent=title;document.getElementById('btnBackCatalog').classList.add('visible');document.getElementById('btnBackText').textContent='Datos';document.getElementById('searchContainer').style.display='none';document.getElementById('statsContainer').style.display='none';document.getElementById('activeFilters').classList.remove('show');const iframe=document.getElementById('contentFrame');const loading=document.getElementById('iframeLoading');const fallback=document.getElementById('iframeFallback');const fallbackLink=document.getElementById('fallbackLink');loading.style.display='block';fallback.style.display='none';iframe.style.display='block';fallbackLink.href=url;fallbackLink.target="_blank";iframe.onload=function(){loading.style.display='none';};iframe.onerror=function(){loading.style.display='none';fallback.style.display='block';};setTimeout(()=>{try{if(iframe.contentDocument&&iframe.contentDocument.body.innerHTML===""&&loading.style.display!=='none'){loading.style.display='none';fallback.style.display='block';}}catch(e){loading.style.display='none';fallback.style.display='block';}},4000);iframe.src=url;document.getElementById('iframeUrl').textContent=url.length>55?url.substring(0,52)+'...':url;if(iframeHistoryIndex<iframeHistory.length-1)iframeHistory=iframeHistory.slice(0,iframeHistoryIndex+1);iframeHistory.push(url);iframeHistoryIndex=iframeHistory.length-1;}
function iframeBack(){if(iframeHistoryIndex>0){iframeHistoryIndex--;abrirEnIframeDirecto(iframeHistory[iframeHistoryIndex]);}}
function iframeForward(){if(iframeHistoryIndex<iframeHistory.length-1){iframeHistoryIndex++;abrirEnIframeDirecto(iframeHistory[iframeHistoryIndex]);}}
function iframeRefresh(){document.getElementById('contentFrame').contentWindow.location.reload();}
function iframeOpenNew(){const url=document.getElementById('contentFrame').src;if(url&&url!=='about:blank')window.open(url,'_blank','noopener,noreferrer');}
function abrirEnIframeDirecto(url){const iframe=document.getElementById('contentFrame');const loading=document.getElementById('iframeLoading');const fallback=document.getElementById('iframeFallback');loading.style.display='block';fallback.style.display='none';iframe.style.display='block';document.getElementById('iframeUrl').textContent=url.length>55?url.substring(0,52)+'...':url;iframe.onload=function(){loading.style.display='none';};iframe.src=url;}

// ================= VOLVER AL CATÁLOGO =================
function volverADatos(){if(document.getElementById('iframeView').classList.contains('active')){document.getElementById('iframeView').classList.remove('active');document.getElementById('tableView').style.display='block';document.getElementById('searchContainer').style.display='block';document.getElementById('statsContainer').style.display='block';document.getElementById('activeFilters').classList.remove('show');document.getElementById('btnBackCatalog').classList.remove('visible');renderTable(currentDataSource);updateStats();return;}if(document.getElementById('casosContent').classList.contains('active')){document.getElementById('casosContent').classList.remove('active');document.getElementById('tableView').style.display='block';document.getElementById('searchContainer').style.display='block';document.getElementById('statsContainer').style.display='block';document.getElementById('activeFilters').classList.remove('show');document.getElementById('btnBackCatalog').classList.remove('visible');currentDataSource='catalogo';document.getElementById('headerTitle').textContent='Catálogo de Servicios - Grupo Axo';document.querySelectorAll('.nav-pill').forEach(p=>p.classList.remove('active'));document.getElementById('navCatalogo').classList.add('active');renderTable('catalogo');updateStats();return;}document.getElementById('tableView').style.display='block';document.getElementById('searchContainer').style.display='block';document.getElementById('statsContainer').style.display='block';document.getElementById('btnBackCatalog').classList.remove('visible');currentDataSource='catalogo';document.getElementById('headerTitle').textContent='Catálogo de Servicios - Grupo Axo';document.querySelectorAll('.nav-pill').forEach(p=>p.classList.remove('active'));document.getElementById('navCatalogo').classList.add('active');renderTable('catalogo');updateStats();}

// ================= CASOS TÉCNICOS =================
function abrirCasosTecnicos(){document.getElementById('tableView').style.display='none';document.getElementById('iframeView').classList.remove('active');document.getElementById('casosContent').classList.add('active');document.getElementById('searchContainer').style.display='none';document.getElementById('statsContainer').style.display='none';document.getElementById('activeFilters').classList.remove('show');document.getElementById('headerTitle').textContent='📋 Sistema de Casos Técnicos';document.getElementById('btnBackCatalog').classList.add('visible');document.getElementById('btnBackText').textContent='Catálogo';document.getElementById('casoFecha').valueAsDate=new Date();cargarOpcionesEquiposCasos();cargarChecklistCasos();}
function cargarOpcionesEquiposCasos(){const select=document.getElementById('casoTipoEquipo');select.innerHTML='<option value="">-- Seleccionar equipo --</option>';Object.keys(catalogoEquipos).forEach(equipo=>{const option=document.createElement('option');option.value=equipo;option.textContent=equipo;select.appendChild(option);});}

// Toggle serial input
function toggleSerialInput(mostrar){const container=document.getElementById('serialInputContainer');const input=document.getElementById('casoNumeroSerie');if(mostrar){container.style.display='block';input.required=true;}else{container.style.display='none';input.required=false;input.value='';}}

function cargarChecklistCasos(){
    const tipo=document.getElementById('casoTipoEquipo').value;const data=catalogoEquipos[tipo];
    const fieldSerial=document.getElementById('fieldNumeroSerie');
    if(equiposConSerial.includes(tipo)){fieldSerial.style.display='flex';document.querySelector('input[name="casoTieneSerial"][value="no"]').checked=true;toggleSerialInput(false);}
    else{fieldSerial.style.display='none';document.getElementById('casoNumeroSerie').required=false;document.getElementById('casoNumeroSerie').value='';}
    if(data){
        document.getElementById('casoMensajePredeterminado').textContent=data.mensaje;
        const body=document.getElementById('casoChecklistBody');body.innerHTML='';
        data.checklist.forEach((item,index)=>{const key='caso_item_'+index;const tr=document.createElement('tr');tr.innerHTML=`<td>${item.label}</td><td><div class="casos-radio-group"><label class="casos-radio-label"><input type="radio" name="${key}" value="Sí"> Sí</label><label class="casos-radio-label"><input type="radio" name="${key}" value="No"> No</label>${item.na?'<label class="casos-radio-label"><input type="radio" name="'+key+'" value="N/A"> N/A</label>':''}</div></td>`;body.appendChild(tr);});
    }
}

// Imágenes - conservar al agregar nuevas
document.getElementById('casoImagenes').addEventListener('change',function(e){
    const files=Array.from(e.target.files);const maxImages=15;const currentCount=casoImagenesBase64.length;
    if(currentCount+files.length>maxImages){alert(`Máximo ${maxImages} imágenes permitidas. Ya tienes ${currentCount} cargadas.`);e.target.value='';return;}
    const previewContainer=document.getElementById('casoPreviewContainer');
    if(previewContainer.querySelector('p[style*="color:#718096"]')) previewContainer.innerHTML='';
    files.forEach((file,index)=>{
        const reader=new FileReader();
        reader.onload=function(ev){
            casoImagenesBase64.push(ev.target.result);
            const wrapper=document.createElement('div');wrapper.style.position='relative';wrapper.style.display='flex';wrapper.style.flexDirection='column';wrapper.style.alignItems='center';
            wrapper.innerHTML=`<img src="${ev.target.result}" class="casos-preview-img" alt="Evidencia ${casoImagenesBase64.length}" style="cursor:pointer" onclick="eliminarImagen(${casoImagenesBase64.length-1})"><div style="font-size:11px;color:var(--text-general);margin-top:5px;display:flex;align-items:center;gap:5px">Evidencia ${casoImagenesBase64.length}<i class="fas fa-times-circle" style="color:#e74c3c;cursor:pointer" onclick="eliminarImagen(${casoImagenesBase64.length-1});event.stopPropagation()" title="Eliminar"></i></div>`;
            previewContainer.appendChild(wrapper);
        };reader.readAsDataURL(file);
    });e.target.value='';
});

function eliminarImagen(index){
    casoImagenesBase64.splice(index,1);
    const previewContainer=document.getElementById('casoPreviewContainer');previewContainer.innerHTML='';
    if(casoImagenesBase64.length===0){previewContainer.innerHTML='<p style="color:#718096;width:100%">No hay imágenes cargadas.</p>';}
    else{casoImagenesBase64.forEach((img,i)=>{const wrapper=document.createElement('div');wrapper.style.position='relative';wrapper.style.display='flex';wrapper.style.flexDirection='column';wrapper.style.alignItems='center';wrapper.innerHTML=`<img src="${img}" class="casos-preview-img" alt="Evidencia ${i+1}" style="cursor:pointer" onclick="eliminarImagen(${i})"><div style="font-size:11px;color:var(--text-general);margin-top:5px;display:flex;align-items:center;gap:5px">Evidencia ${i+1}<i class="fas fa-times-circle" style="color:#e74c3c;cursor:pointer" onclick="eliminarImagen(${i});event.stopPropagation()" title="Eliminar"></i></div>`;previewContainer.appendChild(wrapper);});}
}

function obtenerChecklistCasos(){const tipo=document.getElementById('casoTipoEquipo').value;const data=catalogoEquipos[tipo];const resultado={};if(data?.checklist){data.checklist.forEach((item,index)=>{const seleccionado=document.querySelector(`input[name="caso_item_${index}"]:checked`);resultado[item.label]=seleccionado?seleccionado.value:'Sin responder';});}return resultado;}

// Validación
function validarCamposObligatorios(){
    const errores=[];const campos=[{id:'casoFolio',nombre:'Folio del Ticket'},{id:'casoFecha',nombre:'Fecha'},{id:'casoTecnico',nombre:'Técnico'},{id:'casoSucursal',nombre:'Sucursal/Tienda o Corporativo/Cedis'},{id:'casoAreaUsuario',nombre:'Área/Usuario'},{id:'casoTipoEquipo',nombre:'Tipo de Equipo'},{id:'casoDescripcionBreve',nombre:'Descripción breve'},{id:'casoErrorDetectado',nombre:'Error detectado'}];
    campos.forEach(campo=>{const el=document.getElementById(campo.id);if(!el?.value?.trim()){errores.push(campo.nombre);if(el)el.classList.add('error');}else{if(el)el.classList.remove('error');}});
    const tipoEquipo=document.getElementById('casoTipoEquipo').value;
    if(equiposConSerial.includes(tipoEquipo)){const tieneSerial=document.querySelector('input[name="casoTieneSerial"]:checked')?.value;const serial=document.getElementById('casoNumeroSerie');if(tieneSerial==='si'&&!serial?.value?.trim()){errores.push('Número de Serie');if(serial)serial.classList.add('error');}else{if(serial)serial.classList.remove('error');}}
    if(casoImagenesBase64.length<1){errores.push('Al menos 1 imagen de evidencia');document.getElementById('casoImagenes')?.classList.add('error');}else{document.getElementById('casoImagenes')?.classList.remove('error');}
    return errores;
}

// ================= PDF HEADER/FOOTER =================
function drawPDFHeader(doc,pageNumber,totalPages){doc.setFillColor(0,40,85);doc.rect(0,0,210,40,'F');doc.setTextColor(255,255,255);doc.setFont('helvetica','bold');doc.setFontSize(14);doc.text('GRUPO AXO',15,18);doc.setFontSize(10);doc.setFont('helvetica','normal');doc.text('Service Desk N1',15,26);doc.setFontSize(14);doc.setFont('helvetica','bold');doc.text('REPORTE TÉCNICO DE INCIDENCIA',105,35,{align:'center'});doc.setDrawColor(0,169,165);doc.setLineWidth(0.6);doc.line(15,38,195,38);}
function drawPDFFooter(doc,pageNumber,totalPages){doc.setDrawColor(0,169,165);doc.setLineWidth(0.5);doc.line(15,285,195,285);doc.setFontSize(8);doc.setTextColor(80,80,80);doc.setFont('helvetica','italic');doc.text('Documento generado por Service Desk N1 - Grupo Axo',105,290,{align:'center'});doc.setFont('helvetica','normal');doc.text(`Página ${pageNumber} de ${totalPages} • ${new Date().toLocaleDateString('es-MX')}`,195,290,{align:'right'});}

// ================= GENERAR PDF =================
async function generarPDF(caso){
    try{
        const{jsPDF}=window.jspdf;const doc=new jsPDF('p','mm','a4');
        function addWatermark(doc){doc.setTextColor(235,235,235);doc.setFont('helvetica','bold');doc.setFontSize(90);doc.text('KENOS',105,150,{align:'center',angle:-35,opacity:0.12});}
        drawPDFHeader(doc,1,1);doc.setTextColor(15,15,15);doc.setFont('helvetica','normal');doc.setFontSize(9);
        
        // TÍTULO DEL CASO (usando Descripción breve)
        doc.setFont('helvetica','bold');doc.setFontSize(12);doc.setTextColor(0,40,85);
        const tituloLines=doc.splitTextToSize(caso.DESCRIPCIONBREVE||'Sin título',175);
        doc.text(tituloLines,105,50,{align:'center'});
        
        let startY=60;
        doc.autoTable({startY:startY,theme:'grid',styles:{fontSize:9,cellPadding:4,valign:'middle',halign:'left',lineColor:[210,210,210],textColor:[15,15,15]},headStyles:{fillColor:[0,169,165],textColor:[255,255,255],halign:'center',fontSize:9.5,fontStyle:'bold'},head:[['Folio','Fecha','Técnico','Sucursal/Tienda o Corporativo/Cedis']],body:[[caso.FOLIO,caso.FECHA,caso.TECNICO,caso.SUCURSAL]],margin:{left:15,right:15}});
        startY=doc.lastAutoTable.finalY;
        doc.autoTable({startY:startY,theme:'grid',styles:{fontSize:9,cellPadding:4,valign:'middle',halign:'left',lineColor:[210,210,210],textColor:[15,15,15]},headStyles:{fillColor:[0,169,165],textColor:[255,255,255],halign:'center',fontSize:9.5,fontStyle:'bold'},head:[['Área/Usuario','Equipo','N° Serie']],body:[[caso.AREAUSUARIO||'N/A',caso.TIPODEEQUIPO,caso.NUMEROSERIE!=='N/A'?caso.NUMEROSERIE:'-']],margin:{left:15,right:15}});
        
        // DESCRIPCIÓN DEL CASO
        startY=doc.lastAutoTable.finalY+10;
        doc.setFont('helvetica','bold');doc.setFontSize(10.5);doc.setTextColor(0,40,85);doc.text('1. DESCRIPCIÓN DEL CASO',15,startY);
        doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(15,15,15);
        doc.autoTable({startY:startY+5,theme:'grid',styles:{fontSize:9,cellPadding:5,valign:'top',lineColor:[210,210,210],textColor:[15,15,15]},headStyles:{fillColor:[245,248,250],textColor:[0,40,85],fontSize:9.5,fontStyle:'bold'},head:[['Descripción','Error Detectado']],body:[[caso.DESCRIPCIONBREVE,caso.ERRORDETECTADO]],margin:{left:15,right:15}});
        doc.autoTable({startY:doc.lastAutoTable.finalY,theme:'grid',styles:{fontSize:9,cellPadding:5,valign:'top',lineColor:[210,210,210],textColor:[15,15,15]},headStyles:{fillColor:[245,248,250],textColor:[0,40,85],fontSize:9.5,fontStyle:'bold'},head:[['Diagnóstico Técnico','Acciones Realizadas']],body:[[caso.DIAGNOSTICO||'Sin información registrada',caso.ACCIONESREALIZADAS||'Sin información registrada']],margin:{left:15,right:15}});
        
        // CHECKLIST (opcional)
        let currentY=doc.lastAutoTable.finalY+10;
        if(checklistVisible&&caso.checklistObj&&Object.keys(caso.checklistObj).length>0){
            if(currentY>200){doc.addPage();addWatermark(doc);drawPDFHeader(doc,doc.internal.getNumberOfPages(),1);currentY=50;}
            doc.setFont('helvetica','bold');doc.setFontSize(10.5);doc.setTextColor(0,40,85);doc.text('2. CHECKLIST DE VALIDACIÓN',15,currentY);
            const checklistRows=Object.entries(caso.checklistObj).map(([k,v])=>[k,v]);
            doc.autoTable({startY:currentY+5,head:[['Punto de Validación','Resultado']],body:checklistRows,theme:'grid',styles:{fontSize:8.5,cellPadding:3,valign:'middle',lineColor:[210,210,210],textColor:[15,15,15]},headStyles:{fillColor:[0,169,165],textColor:[255,255,255],halign:'center',fontSize:9,fontStyle:'bold'},columnStyles:{0:{cellWidth:130,halign:'left'},1:{cellWidth:50,halign:'center',fontStyle:'bold'}},margin:{left:15,right:15},didParseCell:function(data){if(data.section==='body'&&data.column.index===1){if(data.cell.raw==='Sí')data.cell.styles.textColor=[22,163,74];else if(data.cell.raw==='No')data.cell.styles.textColor=[220,38,38];else if(data.cell.raw==='N/A')data.cell.styles.textColor=[100,100,100];}}});
            currentY=doc.lastAutoTable.finalY+10;
        }
        
        // IMÁGENES
        if(caso.imagenes&&caso.imagenes.length>0){
            if(currentY>200){doc.addPage();addWatermark(doc);drawPDFHeader(doc,doc.internal.getNumberOfPages(),1);currentY=50;}
            doc.setFont('helvetica','bold');doc.setFontSize(10.5);doc.setTextColor(0,40,85);doc.text('3. EVIDENCIA FOTOGRÁFICA',15,currentY);
            doc.setFont('helvetica','normal');doc.setFontSize(8.5);doc.setTextColor(30,30,30);doc.text(`Total de evidencias: ${caso.imagenes.length}`,15,currentY+5);
            currentY+=14;let x=18,y=currentY,imgWidth=52,imgHeight=40,margin=10;
            for(let j=0;j<caso.imagenes.length;j++){
                try{
                    const img=caso.imagenes[j];const format=img.includes('image/png')?'PNG':'JPEG';
                    if(y+imgHeight+20>280){doc.addPage();addWatermark(doc);drawPDFHeader(doc,doc.internal.getNumberOfPages(),1);x=18;y=50;}
                    doc.setDrawColor(220,220,220);doc.setLineWidth(0.4);doc.rect(x-2,y-2,imgWidth+4,imgHeight+4);
                    doc.addImage(img,format,x,y,imgWidth,imgHeight);
                    doc.setFontSize(7.5);doc.setTextColor(80,80,80);doc.text(`Evidencia ${j+1}`,x+imgWidth/2,y+imgHeight+7,{align:'center'});
                    x+=imgWidth+margin;if(x+imgWidth>192){x=18;y+=imgHeight+22;}
                }catch(e){console.warn("Imagen no agregada:",e);}
            }
        }
        
        // FOOTER EN TODAS LAS PÁGINAS
        const totalPages=doc.internal.getNumberOfPages();
        for(let p=1;p<=totalPages;p++){doc.setPage(p);drawPDFFooter(doc,p,totalPages);addWatermark(doc);}
        
        const nombreArchivo=`ServiceDesk_N1_Reporte_${caso.FOLIO}_${new Date().toISOString().slice(0,10)}.pdf`;
        doc.save(nombreArchivo);console.log(`✅ PDF generado: ${nombreArchivo}`);
    }catch(e){console.error('❌ Error generando PDF:',e);throw e;}
}

async function guardarCasoPDF(){
    const folio=document.getElementById('casoFolio').value.trim().toUpperCase();const fecha=document.getElementById('casoFecha').value;
    const tecnico=document.getElementById('casoTecnico').value.trim();const sucursal=document.getElementById('casoSucursal').value.trim();
    const areaUsuario=document.getElementById('casoAreaUsuario').value.trim();const tipoEquipo=document.getElementById('casoTipoEquipo').value;
    const tieneSerial=document.querySelector('input[name="casoTieneSerial"]:checked')?.value;
    const numeroSerie=tieneSerial==='si'?document.getElementById('casoNumeroSerie').value.trim():'N/A';
    const descripcionBreve=document.getElementById('casoDescripcionBreve').value.trim();const errorDetectado=document.getElementById('casoErrorDetectado').value.trim();
    const diagnostico=document.getElementById('casoDiagnostico').value.trim();const acciones=document.getElementById('casoAcciones').value.trim();
    const checklist=obtenerChecklistCasos();const mensajePredeterminado=catalogoEquipos[tipoEquipo]?.mensaje||"";
    const errores=validarCamposObligatorios();
    if(errores.length>0){alert(`⚠️ Campos obligatorios pendientes:\n\n• ${errores.join('\n• ')}\n\nPor favor completa los campos marcados para continuar.`);return;}
    const casoData={FOLIO:folio,FECHA:fecha,TECNICO:tecnico,SUCURSAL:sucursal,AREAUSUARIO:areaUsuario,TIPODEEQUIPO:tipoEquipo,NUMEROSERIE:numeroSerie,DESCRIPCIONBREVE:descripcionBreve,ERRORDETECTADO:errorDetectado,DIAGNOSTICO:diagnostico,ACCIONESREALIZADAS:acciones,MENSAJEPREDETEMINADO:mensajePredeterminado,CHECKLIST:JSON.stringify(checklist),IMAGEN:casoImagenesBase64[0]||'',checklistObj:checklist,imagenes:[...casoImagenesBase64]};
    const btn=document.querySelector('.btn-casos-save');const origBtn=btn.innerHTML;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Generando...';btn.disabled=true;
    try{await generarPDF(casoData);alert('✅ Reporte generado exitosamente');}catch(e){console.warn('⚠️ Error generando PDF:',e);alert('⚠️ Error al generar el PDF. Verifica la consola para más detalles.');}finally{setTimeout(()=>{btn.innerHTML=origBtn;btn.disabled=false;},800);}}

function limpiarFormularioCasos(resetFecha=true){document.getElementById('casoFolio').value='';document.getElementById('casoTecnico').value='';document.getElementById('casoSucursal').value='';document.getElementById('casoAreaUsuario').value='';document.getElementById('casoDescripcionBreve').value='';document.getElementById('casoErrorDetectado').value='';document.getElementById('casoDiagnostico').value='';document.getElementById('casoAcciones').value='';document.getElementById('casoNumeroSerie').value='';document.getElementById('casoImagenes').value='';casoImagenesBase64=[];if(resetFecha)document.getElementById('casoFecha').valueAsDate=new Date();document.getElementById('casoPreviewContainer').innerHTML='<p style="color:#718096;width:100%">No hay imágenes cargadas.</p>';document.querySelectorAll('.casos-field input, .casos-field select, .casos-field textarea').forEach(el=>el.classList.remove('error'));cargarChecklistCasos();}

// ================= EVENTOS =================
document.getElementById('globalSearch').addEventListener('input',applyAllFilters);
window.onclick=e=>{if(e.target===document.getElementById('filterModal'))closeFilterModal();};
document.getElementById('pass').addEventListener('keypress',e=>{if(e.key==='Enter')login();});

// ================= CHATBOT =================
function toggleChatbot(){const w=document.getElementById('chatbotWindow');const f=document.getElementById('voiceflowIframe');w.classList.toggle('active');if(w.classList.contains('active')&&!chatbotLoaded){f.src='https://creator.voiceflow.com/share/693afada764078aca74405a8/development';chatbotLoaded=true;}}
document.addEventListener('click',e=>{const c=document.querySelector('.chatbot-container');const w=document.getElementById('chatbotWindow');const b=document.querySelector('.chatbot-button');if(b&&b.contains(e.target))return;if(c&&!c.contains(e.target)&&w.classList.contains('active'))w.classList.remove('active');});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.getElementById('chatbotWindow').classList.remove('active');if(document.getElementById('filterModal').style.display==='flex')closeFilterModal();}});

// ================= FEELSOCIAL =================
function toggleFeelSocial(){const w=document.getElementById('feelsocialWindow');w.classList.toggle('active');if(w.classList.contains('active')&&!feelsocialLoaded){const iframe=document.getElementById('feelsocialFrame');const overlay=document.getElementById('fsOverlay');overlay.classList.remove('hidden');iframe.onload=function(){overlay.classList.add('hidden');};iframe.src='https://feelsocial.app/chat';feelsocialLoaded=true;feelsocialRefreshInterval=setInterval(()=>{if(w.classList.contains('active'))iframe.contentWindow.location.reload();},60000);}else{if(feelsocialRefreshInterval){clearInterval(feelsocialRefreshInterval);feelsocialRefreshInterval=null;}}}
function minimizeFeelSocial(){document.getElementById('feelsocialWindow').classList.remove('active');if(feelsocialRefreshInterval){clearInterval(feelsocialRefreshInterval);feelsocialRefreshInterval=null;}}
function refreshFeelSocial(){const iframe=document.getElementById('feelsocialFrame');iframe.contentWindow.location.reload();}
function toggleAutoRefresh(enabled){if(feelsocialRefreshInterval){clearInterval(feelsocialRefreshInterval);feelsocialRefreshInterval=null;}if(enabled&&document.getElementById('feelsocialWindow').classList.contains('active')){feelsocialRefreshInterval=setInterval(()=>{refreshFeelSocial();},60000);}}
function openFeelSocialNew(){window.open('https://feelsocial.app/chat','_blank','noopener,noreferrer');}

// ================= COMUNICACIONES =================
function toggleComms(){const w=document.getElementById('commsWindow');w.classList.toggle('active');}
document.addEventListener('click',e=>{const c=document.querySelector('.comms-container');const w=document.getElementById('commsWindow');const b=document.querySelector('.comms-button');if(b&&b.contains(e.target))return;if(c&&!c.contains(e.target)&&w.classList.contains('active'))w.classList.remove('active');});

// ================= EXTERNAS =================
function abrirNuevaPestana(url){window.open(url,'_blank','noopener,noreferrer');}

// ================= INICIALIZACIÓN =================
document.addEventListener('DOMContentLoaded',async()=>{await cargarUsuariosAPI();updateClock();console.log('✅ Sistema listo - Usuarios disponibles:',usuariosAPI.length);});

// Exportar funciones globales
window.cargarCatalogo=cargarCatalogo;window.cargarWiffi=cargarWiffi;window.cargarEstructura=cargarEstructura;window.cargarInventarioSIC=cargarInventarioSIC;window.cargarImpresoras=cargarImpresoras;window.abrirNuevaPestana=abrirNuevaPestana;window.toggleFeelSocial=toggleFeelSocial;window.abrirCasosTecnicos=abrirCasosTecnicos;window.toggleComms=toggleComms;window.toggleDarkMode=toggleDarkMode;window.toggleChecklistVisibility=toggleChecklistVisibility;window.toggleSerialInput=toggleSerialInput;window.eliminarImagen=eliminarImagen;