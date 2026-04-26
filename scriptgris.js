// ================= LOGOS EN BASE64 (IZQUIERDA Y DERECHA) =================

const LOGO_AXO_RIGHT_BASE64 = "iVBORw0KGgoAAAANSUhEUgAAAOYAAADqCAYAAAC2qDnAAAAACXBIWXMAABcRAAAXEQHKJvM/AAASa0lEQVR4nO2dT3LbRhaHf1Z5b9/AygmsnEDMCaI5geFNuIxSYbgdeItCVeglVqFOMPYJQp1grBOEOsFIJ9As+CBTYANE/8UD+PuqUrFBotEm8fF1N153v3p6egIhRBdnQ1eAEHIIxSREIRSTEIVQTEIUQjEJUQjFJEQhFJMQhVBMQhRCMQlRCMUkRCEUkxCFUExCFEIxCVEIxSREIRSTEIVQTEIUQjEJUQjFJEQhFJMQhVBMQhRCMQlRCMUkRCEUkxCFUExCFEIxCVEIxSREIRSTEIVQTEIUQjEJUQjFJEQhFJMQhVBMQhRCMQlRCMUkRCGvh64AACwX8xmACwBvAWyKstoMWiFCBubV09PTYBdfLuZXAFYA3jVeegSQF2W1Sl8rQoZnMDGXi/kKwK9H3nZTlFWWoDqEqGIQMaXp+nfPt/+rKKsvEatDiDqGGvzJLd7L5iw5OZKLKdHy0uKUd8vFPItTG0J0MkTEzB3OyQLXgRDVJO1jLhfzcwD/OJ7+Ex+jkFMhdcTMBzqXkFGRLGJ6RsuaH4qy2vrXhhDdpIyY1wHKyAOUQYh6kkTM5WL+FsAWwJsAxTFqksmTKmJeI4yUdVmETJpUYmYhy5IITMhkiS6mJAc0k9R9eANGTTJxUkTMPEKZFJNMmqhiyrSukNGy5g3T9MiUiR0xY0a2PGLZhAxKNDEdktVtYXI7mSwxI2aKfmCW4BqEJCdKgkGg9Lu+MLmdTI5YETN3PO8x4bUIUUvwiOkRLW/k/x8czmWaHpkUMSJm5njeGu7Rz/U8QlQSNGJ6JKvfFmU1kzLWYNQkJ07oiOmarJ7v/dl18S1mA5HJEFrMzOGc+/1R1aKsvgG4dbk2k9vJVAgmpkeyet7z2DGY3E4mQ8iImTucc1+U1bp5UCLonUN5FJNMgiBieiSrd/UnXfqaTG4nkyBUxHSJVI/YPSIxIpH03qHc3OEcQlThLaZHsvqqKKuHI+/JHcplcjsZPSEipmu/rk9T9Qvc0vQyh3MIUYOXmJJ+97PDqTc9oiXkPS59zUuJ5ISMEt+ImSc4bwUmt5MTw1lMiZYuqXM3NqlzEjVd9se8lDoSMjp8ImbmeN7a4Zzc8Vqu5xEyKE5J7CGS1R2uuQaT28mJ4BoxQySr28LkdnIyuIqZOZxz77MECJPbySlhLWbgZPUUZTC5nYwOl4iZO5xjTFa3hcnt5FSwEjNSsnqKspjcTkaFbcQMnqxuC5PbySnQW8zIyeq25A7nMLmdjAabiBkzWd0WJreTSdNLzNjJ6rYwuZ1Mnb4RM3cs3/W8PjC5nUyWo2KmSla3hcntZMr0iZiZY9lrx/NsyBOfR0gSOpPYh0hWt4XJ7WSKHIuYQySr28LkdjI5jomZOZTplaxuC5PbyRRpFXPgZPUU12RyO1FLV8TMHcoLkqxui0RolzQ9iklUYhRTSbK6LbnDOUxuJyppi5iDJ6vbwuR2MiUOxFSWrG5dB4dzmNxO1GGKmJqS1W1Zg8ntZAK8EFNbsrotTG4nU+F14++5Yzmu58VgBeDfDuflAGZBa0JICxIEz/cObfcz0Z5T8uSN/zhc46Yoq8y1gjFgmh7Rini2wq5legegbmmey5+vi7La7DdlM8drrR3Pi0me+DxC+lKP4fyA3eyoDYB1UVbn2Am7AiRijiFZ3RZGTaKR5WL+gF0QfADwN4BP2MmaF2W1ktcv6og5hmR1W9aO5zEbiMTkTVFWz/OIi7LKsYuSdd72NwDntZiZwwWSJqvbInVjcjtRzXIx32AXDDb7x89GlqxuS+5wDpPbSUpW2N1z2/2DZ3C7CQdJVrfFI7k9C1sTQp65l1x0AIA0a2/wPYhcAti+BvDeofCH5WL+VkNSQRfSJH2AfYvg3XIxP089CCT1XeN7f6PmW1FW0aO43DD719liN3yf9HteLubXAK72Dm2kLxai7LfYPa++QJjn1hvs+oWbnp/TF+w+42sAP8qxawBvl4t5jt2A6raZYNCX9wA2y8V8plVO+QI2cPvhAXbPlbaBqtOXLzDnKV8uF/NtUVax0x7PG9e/BHAlP1JJvuflYr4C8Gvj8AU8u07y/DCH20h9F8+f13Ixv8FudHXb8f6V1GMDYCujsHU5X+U1rx2laznVDZQEkBL4/uA3CXLjdE0eyBJUY43Dpv8bJMqDXi7mFziUEr7Xlwj8DeGlbPIBwDe5npGirLaSkHMOeUwi//1QlNVVPaD66o/ff9nCbfCn5g6AmsgZSMrHoqyS/uDIl/nnkbdFf8Yqg4F/GV76UZZxiXntDQ5/nO7l4btrmWvEF9KEV0bca+xsNX0RfVHTrA0kJTDMTJmsx3uuELluRVmtRc6mICtEzCWW/q2pxZB5lJmjW8p77LorG8ui32LXvD5He1D7IN2P3LJsAN8zf77B/2YeNHIGlDL5v6MlT/kOh/+Wu6KsLhLU5wLAfw0vfYw1Gr9czLc4vMm/FmV1dfjuXuXNsMusMfEVu76gdwtAPqsc7bOyfnJ53l/3MWdw2xB2n8H6nGOWUjDdfGsc9vfep1hFXm7Yz4aX8hjfr0S2ppSP8HuenLcc/yh9uSDN8qKsvsmPx0fLenRyJoU/YKRyTkBKwCzmF5i3gHCKIA7kOJx0/g6Bky/kh8ZU5sq1Py1RzNQs/i1WxJdyfzO85DTX93lUdoxyTkFK+Tc0b6I7uSnXhlOSiCmfhUmYfweO2jkO87TvPZ9bZoZjt7EfN0n5pjRQU306efG4ZExyTkFKoa0ZWzcpm83Zy1QtEokCphstyA0ukcQ0OJN5Fj0zHEs1oGe6zsy2kIPnmGOQc0JSAmYxNy1/7jonFrnh2M+BlmIxlX0bYHLEwX2xP6MjJi3XsX4caUww0CznlKSUf0tzNO++MTAxZD+zzje+Mby09im35ZEM4BktpX/ZxPc+tuWgldFSr1ZaM380yjklKYW2QZ9n5Be4OQjzc+LR72tDHd51Zbh0IXXPDS99CpBAYfpchv6eAXO9WulMydMk5wSlBHqI2XEsZdR8gFkk18cn1zhs3t1DxxKoKjiaK6tBzilK2dKMfWzpXw0qJvA84ti8B6zzaDsejySfxaKZXknsQ8o5RSmFmeFY2wDFxnDMZf1fX0xCfbDsP61w+HjkNtXgzFjoPbtkCDknLCXQvxlbf/Zfm8f3J9ymQKL5QT3QM2rKSK7pByVzrtREsZr2lVLOiUsJGMQ8EjUGb84KpoGgy577v5gEDjHgMzms52OmkHPqUkqkazbnTJFoHxViikQmwVZHfmgzHH6fHPBpwWmidEw5py6l0LsZWyP/joPBl9TNWalLDvOEauPjE/lOTQLmSr+fwXFewSCGnCciJeAgprDuWVYKMsOxtjzaa5gHfNaB6zQZfJYWCS4nTkDKlmbsncVCTk0GEbNjIGi9/xcR1bTJk1NywqngJSYQXM5JSynMDMfWfU6U/p2pOWsqMwUmuZrTnExN2M+xlykZO95iAkHl9GEMUgLuzdiaTc8yoyM/FJ8ML62B1scjjxjHYuGDEkRMYHA5RyGlPIg/SEWzfFywNhwbqp8J7CJicyDonaxKsDa8nxk+PQgmJjCYnKOQUsgMx6wyXlrmaL6znb0Qiq4J1Tj8EeKAT0+Cigkkl3NMUgIdk6ItMcmcOZQTBEmM6LOBEwd8ehJcTCCZnKOSsqMZ6zIIsjEcG7I5Cxz/YeCAjwVRxASiyzkqKYXMcGzjUlDLHM3BmrNA64jxPps0NZkG0cQEosk5RikBu9kkfVDzTBN4HoHtetyVp6nJNIgqJvBCzuYvvCtXY5NSHrI3b9pHz6lOqsTE8ZzX9z0T3QkSiCmY5uC58kXjRkZHMAmz8SzTdH6SBaGbtCSom4iyYPQUiS5mhE1d1O4y1kFmOOY1MbhtjiYSR82u9XuQYMHoqRJVzIg7LY1GzpZmLOApZkcZWYBybbiGebQ5h7l5ez2G721ooomZYPuzschpimBfA/WTTWIma852rd8DdE4P4xzMI0QRM+GehGOQMzMc24QouGWOJpB2f5Nj6/fkhvM+DNEXHhPBxRxgo1C1ckqdYjVja9aGY9HFlGempu853/9LxzYL6+CVmhBBxRxw916tcpoEubNMWj+GSfIU+5uYmqM3Lctv5oZjTrtgnQrBxBxQyhqNcvpO8TpKR8ZNtKgpQpm2N8hN7/ddXe8UeR2ikEBSPmK37bbPZGlt286blmo8lylRsblCvOaiqdzPR1oC1zj8PN4vF/OMM04O8RYzoJQz7MTcYBpytkWsVK2Kn5eL+dvQn4HsV2La/TnvOq8oq+1yMb/B4b8/Xy7mX4b+IdWGV1M2pJSyZXa01fcGYOjZHkDgOnQkE6x6inUNJh30wlnM0FLWB6YgZ0czNjWhfxxMq9313v1ZvlsmHfTAScxYUtZMQM5Z4uu1EezHoWO1u9yyKNNSJEw6aGDdx4wtZU1RVg8y+rfB+Pqcpkh1U5RVFuuC8uPzP8Pxq0Ab9uSGY9ZLhcj3mgP4q/HSh+VinnO7hB1WETOVlDUjjpzRH5M0iZnULj+QR5MJ+iIym77TtUt5U6S3mKmlrBmbnC0LOvvOvexLrDmaueHYbUsyQV9MAz5MOhB6iTmUlDUjkzN5tDxyHa/9TWSupSmZIHMtE3hOOjCl6rGviR5iDi1lzYjkHEzMSM3Z3HDsJlBf0BQ1fVc62BqOaRjxtRrf6BRTi5Q12uUcuBlbE6w5K4M0pmSCIM8d5Z64MbzkvNJByw/G+8Qj8wctDNv7v1VMbVLWKJdzZjiWUsq261nvbyKfi0nAvskEfckRPulgsKlwLd0G63vVKKZWKWsUyzlk/xJA0OZsDkMyAQL3ATs2wvVJOtgYjmWOZdli+kHZ2BZyIKZ2KWu0ydmxoHPqiAl4NmclmeBXw0uxNppd4TBq+iQdrA3HLiXPNxpSvmmgzFSfTl6IORYpa5TJmRmODSFl23VtFoQ2CXEfaxZIx/4nTisdyL1nGvH9M9YSmlLun4aXbl1ceBZzbFLWKJLTFJHW7tVxRz4T06BKduzclq3zep3rg0jfTNUD3KNmW3T8a7mYb0I9L10u5lfLxXyDw0ymY/Xo5NXT09Nopdwn4Dbxt0VZzSyvfQHgv43D90VZnXvWxRkZhPhP4/DROi0X8284/AytPxMXWuoMAD+5JDNI09IUxWoeAdT3q035M/n/BbrXS/6tKCunH5ZXf/z+S4Z22/syqJQ1AeX81HfGhFx3hcM+2eeirKL2aY6xXMwfcHjj/Nj2PUlzzHQvtJ4TGok+zX6a8w9Dy3eTAq/c6DP4P5NSISUQtFmbWb5/Zji29qxDCHoPAnXMtbxJ/N2a6nDp2jeUH8ePCLdFxzEeAXz0nbBwBr/ookbKmkByvus76NCyEt6dks9kbTg2a3nvFRxWJgiNNFmd+scdZa4BnAP4jHiCPmJX7/MQg2S+S4tcKbkBXyBTi64A/ONRzDnM6V2ma33C9xv+AQNuIrtPUVab5WL+ES/r09bn+dJ43wN227Jvo1Sug6KssuVivsXLHxGvEe69kd9rGfiZYddH9BmJf8Cuj/ot9GOxV3/8/suTx/kqt8QL1NdM1q8ipMkZzEPUfdGwts4LAkn5SCnJkJzBf5BCjZwBR2WDpp0RYsuZPBYY+uG8NwGlvAPFJANTZ/7MMGI5A0uprs9MTo8zQFVamzWUkkyR51zZMcpJKclUeTG7ZExyUkoyZQ7mY45BTkpJpo5xBQPNclJKcgq0rvmjUU5KSU6FzlXyNMlJKckpcXRdWQ1yUkpyavRaiX1IOSklOUV6710yhJyUkpwqVrt9pZSTUpJTxnrj2hRyUkpy6jjtKB1TTkpJiCxf6UpoieTPwcqjlGSseIkJBJcTgcqhlGTUeIsJBJXTF0pJJoFTH7NJwD6nD5SSTIYgYgKDy0kpyaQIJiYwmJyUkkyOoGICyeWklGSSBBcTSCYnpSSTJYqYQHQ5KSWZNNHEBKLJSSnJ5IkqJhBcTkpJToLoYgLB5KSU5GRIIibgLSelJCdFMjEBZzkpJTk5kooJWMtJKclJklxM4IWcXzvedgtKSU6UILNLfJBtt6+w23Yb2G2vvi7KajNQlQgZnMHFJIQcMkhTlhDSDcUkRCEUkxCFUExCFEIxCVEIxSREIRSTEIVQTEIUQjEJUQjFJEQhFJMQhVBMQhRCMQlRCMUkRCEUkxCFUExCFEIxCVEIxSREIRSTEIVQTEIUQjEJUQjFJEQhFJMQhVBMQhRCMQlRCMUkRCEUkxCFUExCFEIxCVEIxSREIRSTEIVQTEIUQjEJUQjFJEQhFJMQhfwfunfBBt+qpdcAAAAASUVORK5CYII=";








// ================= APIs DEL SCRIPT ORIGINAL =================
const API_ENVIAR_CASOS = "https://script.google.com/macros/s/AKfycbx7NImNojrebcKBbeMYd6q5Ka5jZvUBnJJtc1cS57mK_2Q6444G2uXHsSTEywzZN-fl/exec";
const API_CATALOGO = "https://script.googleusercontent.com/macros/echo?user_content_key=AY5xjrRqcoxn7gKz_NUfPOixOMRQYU0tUv_iWappFFxT6_SLSKPSOQuH7VGngcyoPmbX7NXbY6sJFzIxMfJK8UovKjUyNwnnfcelawnhEKzGbuOZFrCF8zT2Hp6cG1UT4xKGyeVIgw1v5ukU4_Z54vUu1FvdYT6lG-zNVLVWsVWt_YKjMgzfkUt7sL0H9Yv4uU0UXl28_cNksFgDBQZNWlac0TB8GGoV0QblK9AUr2qgDkaifl7wGhrr2RadulennvORlPapdLHdFtyHGkPyj6bGQ4HKuxmgmm5heyaGYGUy&lib=MAqmJ3qarrLAxEL0esSN-DZh31441PXwj";
const API_WIFFI = "https://script.googleusercontent.com/macros/echo?user_content_key=AWDtjMUixNfzuuYT48rQ1PQlZeZlUATI36koCH1E_5I2BWTg3_SITWWEdZEGG-zFkKVFVc07yJvS3rsxvFAKT6X7j_oyGybIaXPIX5M4CgDN6v0mVnuQ2RF1zxtkMpqXcDzmuFYbjrYwS47xiLK7JDUDZMue2TgHP1y70r4WLFcNFxOjMqnFiM8AxexkGx0aEIyGVnsxPrj_doylHLDb_oAhGwefIdgduvUpabGVAqVNPzyEiEUVP4E_qEpZteTiQAxiVFKaLOifuF2AD2Q9FjQHQC2pMXk7Zg&lib=Ma71qi93BNNEIcvdf7AYYGnvq73vH79U2";
const API_ESTRUCTURA = "https://script.googleusercontent.com/macros/echo?user_content_key=AWDtjMU6GsvkF8Pxm-X58vBinpa25FW8v3R91Ghq3RucIndXJH4ySodgeYSpVkKnhsFbM-NhY110HTfsK9fokCFXTT7curvHYxrPAoYYuu-zw9Ap0GbThXs3reznzRE9jdgGjDzgfPhxkXQWgYTmgDia1wdb9voxCZWq7Xm06S8dNSNi7HPBiMnL5Pk4dTQCyXPIFFnAykH4Eb7Rk0YBFGKlo7ZrCZlRlTwUqcfHYeOSrMv3I47hdh4wxCLtpt7_1Pswp_-Cd3hqSwFW6Z779pzPwBSITjh8pYJF7Hw7oywN&lib=MdAJgvkMQ3fL2GWlIQ1teDZh31441PXwj";
const API_INV_SIC = "https://script.google.com/macros/s/AKfycbxeG52ycMvziMBvc0XWhbRZa7EUTF9uWwfEXiS6jeh3_WQqWf8lQlYBLU5863OvJfmr/exec";
const API_IMPRESORAS = "https://script.google.com/macros/s/AKfycby5lgRvsJ6szfSmkcBYG3vvgEyyermRu4KjDbuHrvdfkjy2Km2FYgYMs6yMHL9UXpt5/exec";
const API_USUARIOS = "https://script.googleusercontent.com/macros/echo?user_content_key=AWDtjMXbPcIaEH1bv-BW00xV2qZQcCuZSLYXoI2PVAShWCLc0tw14y71Eikc1E5xtSvcB19bcFS3WmbCsEhKYGWDUkuAfOoKR441nzUU0KXT4rWp-Ao3MmZkv-YeOOlMYqGdU3WT8SWQ-_U6zZ15XkMAUXZwjdQsnBHFO4CBdcDUpPF88mw8lmMK9RT29noL0846ijErqRQYD_AO8utFnfrvTBnoIR9RflkX69tvCmxnd1pzZCAeAEdtiPrjf3uwm0fz4rX7cYiBN8ZC0sfGI7VvvQFq9gIr2w&lib=MmNsUys4zZp-lkbC3LSqsUHvq73vH79U2";


const INVENTARIO_SIC_HEADERS = [
  'NOMBRE COMERCIAL',
  'RAZON SOCIAL',
  'DIRECCION DE LA AFILIACION',
  'COLONIA DE LA AFILIACION',
  'DELEGACION O MUNICIPIO',
  'ESTADO',
  'CP',
  'RESPONSABLE',
  'TELEFONO',
  'No AFILIACION',
  'DETERMINANTE SUCURSAL',
  'Total de Dispositivos',
  'OBSERVACIONES',
  'MODELO',
  'NUMERO DE SERIE',
  'OBSERVACIONES VFN'
];

function remapInventarioSICRows(rows) {
  if (!Array.isArray(rows)) return [];
  return rows.map((row, index) => {
    if (!row || typeof row !== 'object' || Array.isArray(row)) return row;
    const rawKeys = Object.keys(row).filter(key => !String(key).startsWith('_'));
    const rawValues = rawKeys.map(key => row[key]);
    const mapped = {};
    INVENTARIO_SIC_HEADERS.forEach((header, i) => {
      mapped[header] = rawValues[i] ?? '';
    });
    if (row._rowIndex != null) mapped._rowIndex = row._rowIndex;
    return mapped;
  });
}

const DATA_SOURCES = {
  catalogo: { title: 'Catálogo', description: 'Servicios y catálogos conectados desde tu API original.', api: API_CATALOGO },
  estructura: { title: 'Estructura', description: 'Información de estructura organizacional.', api: API_ESTRUCTURA },
  wiffi: { title: 'Wiffi', description: 'Datos de red y conectividad.', api: API_WIFFI },
  inventarioSIC: { title: 'Inv. SIC', description: 'Inventario sincronizado desde SIC.', api: API_INV_SIC },
  impresoras: { title: 'Impresoras', description: 'Inventario y estado de impresoras.', api: API_IMPRESORAS }
};

const DEFAULT_ESCALATION_CHECKLIST = [
  'Se documentaron evidencias del caso',
  'Se confirmó validación con usuario o responsable',
  'Se registró comentario o aprobación del caso'
];

const SAP_PRINTER_CHECKLIST = [
  'Revisar que esté encendida y sin errores en pantalla',
  'Confirmar que haya papel y tóner/tinta',
  'Revisar atascos o bandejas mal colocadas',
  'Verificar cables de red o USB conectados',
  'Hacer prueba de impresión desde el panel de control',
  'Revisar que aparezca instalada en la PC',
  'Revisar nivel de tinta/tóner desde software de la impresora',
  'Confirmar que los controladores estén actualizados',
  'Validar que la cola de impresión no esté saturada',
  'Suspensión de energía inhabilitada en los puertos USB',
  'Validar si el multifuncional es propio o arrendado'
];

function getChecklistPresentation(serviceKey, checklistKey, items) {
  const count = Array.isArray(items) ? items.length : 0;
  const defaults = {
    checklist1: { title: 'Checklist de validación en sitio', subtitle: 'Validación operativa del caso' },
    checklist2: { title: 'Checklist de escalamiento y seguimiento', subtitle: 'Escalamiento opcional del caso' }
  };
  const serviceLabels = {
    'Red': {
      checklist1: { title: 'Checklist de validación de conectividad', subtitle: 'Validación operativa de red en sitio' },
      checklist2: { title: 'Checklist de escalamiento de red', subtitle: 'Escalamiento opcional y continuidad operativa' }
    },
    'SIC': {
      checklist1: { title: 'Checklist de validación de terminal', subtitle: 'Validación operativa del servicio SIC' },
      checklist2: { title: 'Checklist de escalamiento SIC', subtitle: 'Seguimiento opcional del caso' }
    },
    'Periféricos FST': {
      checklist1: { title: 'Checklist de validación operativa en sitio', subtitle: 'Validación técnica inicial del equipo en piso' },
      checklist2: { title: 'Checklist de escalamiento especializado', subtitle: 'Escalamiento técnico complementario del equipo' }
    },
    'SAP': {
      checklist1: { title: 'Checklist de validación de impresión SAP', subtitle: 'Validación operativa de impresión y conectividad' },
      checklist2: { title: 'Checklist de escalamiento de impresión SAP', subtitle: 'Escalamiento técnico de multifuncional y servicio arrendado' }
    },
    'Mibi': {
      checklist1: { title: 'Checklist de validación de multifuncional', subtitle: 'Validación operativa del equipo o servicio Mibi' },
      checklist2: { title: 'Checklist de escalamiento de multifuncional', subtitle: 'Escalamiento técnico del equipo arrendado o multifuncional' }
    },
    'Help Desk': {
      checklist1: { title: 'Checklist de atención documentada', subtitle: 'Sin checklist configurado para este servicio' },
      checklist2: { title: 'Checklist de seguimiento', subtitle: 'Sin checklist configurado para este servicio' }
    }
  };
  const chosen = (serviceLabels[serviceKey] && serviceLabels[serviceKey][checklistKey]) || defaults[checklistKey];
  return { title: chosen.title, subtitle: count ? chosen.subtitle : 'Opcional' };
}



const GENERAL_ESCALATION_CHECKLIST = [
  'Encendido / alimentación',
  'Conectividad / comunicación',
  'Limpieza / mantenimiento visual',
  'Daños visibles',
  'Prueba funcional'
];

const MULTIFUNCIONAL_ESCALATION_CHECKLIST = [
  'Revisar que esté encendida y sin errores en pantalla',
  'Confirmar que haya papel y tóner/tinta',
  'Revisar atascos o bandejas mal colocadas',
  'Verificar cables de red o USB conectados',
  'Hacer prueba de impresión desde el panel de control',
  'Revisar que aparezca instalada en la PC',
  'Revisar nivel de tinta/tóner desde software de la impresora',
  'Confirmar que los controladores estén actualizados',
  'Validar que la cola de impresión no esté saturada',
  'Suspensión de energía inhabilitada en los puertos USB',
  'Validar si el multifuncional es propio o arrendado'
];

const SAP_ESCALATION_CHECKLIST = [...MULTIFUNCIONAL_ESCALATION_CHECKLIST];
const MIBI_ESCALATION_CHECKLIST = [...MULTIFUNCIONAL_ESCALATION_CHECKLIST];

const PERIFERICOS_ESCALATION_BY_EQUIPO = {
  'Impresora multifuncional': MULTIFUNCIONAL_ESCALATION_CHECKLIST,
  'Impresora de tickets': [
    'Verificar que esté conectada a la corriente y encendida',
    'Revisar que tenga rollo de papel colocado correctamente',
    'Confirmar que no haya atascos de papel',
    'Revisar cable de datos bien conectado',
    'Imprimir página de prueba (generalmente botón "feed" + encendido)',
    'Validar que el driver esté instalado y la impresora predeterminada',
    'Revisar que el papel sea del tipo correcto (térmico)',
    'Confirmar que el cabezal no esté sucio (limpieza con alcohol isopropílico)',
    'Validar que no tenga LED de error (papel, tapa abierta, sobrecalentamiento)',
    'Probar impresión desde el software de ventas',
    'Validar que no se encuentre alarmada (foco led en color ámbar)',
    'Validar que la impresora esté correctamente configurada en StarPOS'
  ],
  'Biométrico': [
    'Confirmar que esté encendido',
    'Revisar que el sensor esté limpio',
    'Probar lectura con varios usuarios registrados',
    'Revisar fecha y hora correctas en el dispositivo',
    'Revisar que el firmware esté actualizado',
    'Probar conexión (Cambiar de puerto USB)',
    'Revisar que el usuario esté correctamente enrolado en el sistema'
  ],
  'Escáner alámbrico / inalámbrico': [
    'Revisar que encienda (LED o láser visible)',
    'Confirmar que el cable esté bien conectado',
    'Probar lectura con un código de barras impreso y en pantalla',
    'Probar en otra PC para descartar falla del software',
    'Escanear varios tipos de códigos (EAN, QR, Code128)',
    'Validar que no tenga polvo en la lente',
    'Confirmar que funcione en aplicaciones distintas (POS, Excel, bloc de notas)'
  ],
  'Mouse/Ratón (Genérico)': [
    'Revisar conexión (USB, inalámbrico, Bluetooth)',
    'Validar que se mueva el cursor',
    'Probar clic izquierdo, derecho y scroll',
    'Cambiar puerto USB o probar en otro equipo',
    'Revisar pilas o recarga si aplica',
    'Revisar que no tenga suciedad en el sensor',
    'Probar desplazamiento en distintas superficies',
    'Confirmar que el driver esté instalado correctamente',
    'Revisar que no tenga clics fantasma o botones pegados',
    'Revisar que no esté deshabilitado desde el Panel de Control'
  ],
  'Teclado': [
    'Confirmar conexión (USB, inalámbrico, Bluetooth)',
    'Revisar que las teclas respondan (probar en Bloc de notas)',
    'Validar que no esté bloqueada la tecla Num Lock si falla el pad numérico',
    'Probar en otro puerto USB o equipo',
    'Revisar pilas si es inalámbrico',
    'Revisar idioma/configuración de teclado en el sistema',
    'Validar que no tenga teclas trabadas o dañadas',
    'Revisar que no haya derrames de líquidos',
    'Limpiar con aire comprimido o paño seco'
  ],
  'Terminal Verifone': [
    'Encendido y funcionamiento',
    'Pantalla clara',
    'Limpieza',
    'Impresión de recibo de prueba',
    'Daños visibles',
    'Validar el tipo de terminal se reporta GPRS y/o respaldo, se reporta directamente al Call Center',
    'Validar que el cable de corriente se encuentre conectado',
    'Validar que el cable de red en el puerto Ethernet está bien conectado',
    'Validar que el cable RS232 esté bien conectado en el puerto marcado como RS232 en la Verifone',
    'Validar que el cable RS232 esté bien conectado vía USB al POS',
    'Validar que el driver se encuentre instalado',
    'Validar la configuración del driver sea correcta'
  ],
  'Monitor': [
    'Revisar que esté conectado a la corriente',
    'Validar cable de video esté bien conectado',
    'Probar encendido y que muestre logo o menú OSD',
    'Verificar que la PC esté encendida y enviando señal',
    'Probar con otro cable o equipo',
    'Ajustar brillo/contraste desde el menú',
    'Revisar que esté en el input correcto',
    'Validar resolución y frecuencia configurada en la PC',
    'Probar en otro enchufe o regulador',
    'Revisar estado físico del cable (doblado o dañado)'
  ],
  'Nobreak (UPS)': [
    'Confirmar que esté conectado a la corriente',
    'Revisar que cargue y muestre indicadores de batería',
    'Conectar un equipo y validar que reciba energía',
    'Probar respaldo desconectando de la luz (corte de energía controlado)',
    'Revisar que no haya alarmas o pitidos continuos',
    'Validar que los equipos conectados no excedan la capacidad',
    'Confirmar que no haya olor a quemado o sobrecalentamiento',
    'Verificar que el botón de encendido funcione',
    'Probar con otro equipo pequeño (lámpara o cargador)'
  ],
  'Desktop': [
    'Verificar que arranque el sistema operativo sin errores',
    'Confirmar que el equipo encienda y muestre imagen',
    'Revisar que el cargador/fuente de poder funcione (LED o prueba en otro equipo)',
    'Confirmar conexión de red (WiFi o cable)',
    'Probar periféricos básicos (teclado, mouse, pantalla)',
    'Revisar que no muestre mensajes de sobrecalentamiento o ventilador',
    'Probar inicio en modo seguro si no arranca',
    'Revisar en BIOS/UEFI que el disco y RAM se detecten',
    'Revisar que no haya sonidos de error al encender (beep codes)',
    'Probar con diferentes tomacorrientes'
  ],
  'Impresora Zebra': [
    'Encendido y prueba de impresión',
    'Limpieza de cabezal',
    'Nivel de rollo/etiquetas',
    'Alimentación de etiquetas correcta',
    'Daños físicos',
    '¿El driver se encuentra instalado y configurado?',
    '¿El cabezal se encuentra calibrado?'
  ],
  'Laptop': [
    'Confirmar que el equipo encienda y muestre imagen',
    'Revisar que el cargador/fuente de poder funcione (LED o prueba en otro equipo)',
    'Verificar que arranque el sistema operativo sin errores',
    'Confirmar conexión de red (WiFi o cable)',
    'Probar periféricos básicos (teclado, mouse, pantalla)',
    'Revisar que no muestre mensajes de sobrecalentamiento o ventilador',
    'Probar inicio en modo seguro si no arranca',
    'Revisar en BIOS/UEFI que el disco y RAM se detecten',
    'Probar con cargador alterno (en laptops)',
    'Revisar que no haya sonidos de error al encender (beep codes)',
    'Probar con diferentes tomacorrientes',
    'Realizar Power Reset para laptops Lenovo'
  ],
  'Cajón de Dinero': [
    'Revisar que esté conectada a la impresora o al POS',
    'Confirmar que la impresora funcione (la gaveta depende de ella)',
    'Probar apertura manual con llave',
    'Verificar en el sistema que la configuración de apertura esté habilitada',
    'Escuchar clic al mandar comando de apertura desde el software',
    'Confirmar que el cable RJ11 esté en buen estado',
    'Revisar que el software tenga configurada la gaveta correctamente',
    'Probar apertura en otro POS si es posible',
    'Validar que no tenga bloqueo mecánico interno',
    '¿Está bien conectado a través del RJ11 a la impresora de tickets?',
    'Validar que no tenga seguro manual activado con la llave'
  ],
  'POS': [
    'Encendido y función',
    'Limpieza de teclado/panel',
    'Conexión estable',
    'Daños visibles',
    'Validar que el cargador esté bien conectado al POS y tomacorriente',
    'Validar que la pantalla esté bien conectada al pedestal',
    'Probar conectando el POS a un tomacorriente diferente',
    'Confirmar que el equipo encienda y muestre imagen',
    'Verificar que el sistema operativo arranque sin errores',
    'Revisar en BIOS/UEFI que el disco duro y RAM se detecten'
  ]
};

const RED_ESCALATION_CHECKLIST = [
  'El rack y los equipos de telecomunicación están encendidos y conectados al break',
  'Los módems de Telmex y Totalplay cuentan con internet',
  'Se valida que la POS1 o SVR de tienda tengan conexión a servidores (Ejecutar sentencias de cmd ping y tracert)',
  'Navegación a internet de manera correcta en POS',
  'Bloqueo de página web por parte del Fortinet a una página específica',
  'POS sincronizadas correctamente en horario',
  'Validar que los cables de red no estén trozados (superficial)',
  'Usuario no accedió a brindar apoyo',
  'Se realiza validación de conexiones lógicas correctamente dependiendo si es tipo A o B'
];

const SIC_ESCALATION_CHECKLIST = [
  'Encendido y funcionamiento',
  'Pantalla clara',
  'Limpieza',
  'Impresión de recibo de prueba',
  'Daños visibles',
  'Validar el tipo de terminal se reporta GPRS y/o respaldo, se reporta directamente al Call Center',
  'Validar que el cable de corriente se encuentre conectado',
  'Validar que el cable de red en el puerto Ethernet está bien conectado',
  'Validar que el cable RS232 esté bien conectado en el puerto marcado como RS232 en la Verifone',
  'Validar que el cable RS232 esté bien conectado vía USB al POS',
  'Validar que el driver se encuentre instalado',
  'Validar la configuración del driver sea correcta'
];

const SERVICES = {
  'Periféricos FST': {
    fields: [
      { id: 'casoArea', label: 'Área', type: 'search', options: ['Oficina', 'Bodega', 'PDV'], required: true },
      { id: 'casoEquipo', label: 'Equipo', type: 'search', options: ['Impresora multifuncional', 'Impresora de tickets', 'Biométrico', 'Escáner alámbrico / inalámbrico', 'Mouse/Ratón (Genérico)', 'Teclado', 'Terminal Verifone', 'Monitor', 'Nobreak (UPS)', 'Desktop', 'Impresora Zebra', 'Laptop', 'Cajón de Dinero', 'POS'], required: true },
      { id: 'casoSerie', label: 'No. Serie', type: 'text', required: false },
      { id: 'casoDescripcion', label: 'Descripción del problema', type: 'textarea', required: true, full: true },
      { id: 'casoDiagnostico', label: 'Diagnóstico', type: 'textarea', required: true, full: true },
      { id: 'casoComentario', label: 'Comentario', type: 'textarea', required: false, full: true }
    ],
    checklist1: {
      byField: 'casoEquipo',
      data: {
        'Impresora multifuncional': ['Revisar que esté encendida y sin errores en pantalla', 'Confirmar que haya papel y tóner/tinta', 'Revisar atascos o bandejas mal colocadas', 'Verificar cables de red o USB conectados', 'Hacer prueba de impresión desde el panel de control'],
        'Impresora de tickets': ['Validar que tenga papel térmico correctamente colocado', 'Revisar cable USB / red / serial', 'Ejecutar prueba de impresión', 'Validar que el led de error no esté encendido'],
        'Biométrico': ['Revisar energía y encendido del biométrico', 'Confirmar conexión de red o USB', 'Verificar lectura de huella o identificación', 'Revisar fecha y hora del equipo'],
        'Escáner alámbrico / inalámbrico': ['Confirmar encendido o energía', 'Realizar lectura de código de barras', 'Validar conexión con base o receptor', 'Revisar cristal o lente sin daño'],
        'Mouse/Ratón (Genérico)': ['Revisar conexión USB, inalámbrica o Bluetooth', 'Validar movimiento del cursor', 'Probar clic izquierdo, derecho y scroll', 'Cambiar de puerto o probar en otro equipo'],
        'Teclado': ['Confirmar conexión del teclado', 'Validar respuesta de teclas', 'Probar en otro puerto o equipo', 'Revisar idioma/configuración del teclado'],
        'Terminal Verifone': ['Validar que la terminal encienda', 'Confirmar comunicación a red o línea', 'Probar lectura de tarjeta', 'Revisar carga de batería o fuente de poder'],
        'Monitor': ['Revisar alimentación eléctrica del monitor', 'Validar cable de video', 'Probar menú OSD o logo de arranque', 'Confirmar input correcto'],
        'Nobreak (UPS)': ['Confirmar que esté conectado a la corriente', 'Validar carga o indicadores de batería', 'Conectar un equipo y revisar suministro', 'Probar respaldo en corte controlado'],
        'Desktop': ['Confirmar encendido y video', 'Revisar alimentación y cables', 'Validar arranque del sistema operativo', 'Confirmar detección de red y periféricos'],
        'Impresora Zebra': ['Validar encendido y carga de etiquetas', 'Revisar calibración', 'Probar impresión de etiqueta', 'Confirmar conexión a red o USB'],
        'Laptop': ['Confirmar encendido y video', 'Probar cargador o batería', 'Validar arranque del sistema operativo', 'Confirmar red y periféricos básicos'],
        'Cajón de Dinero': ['Revisar conexión al POS o impresora', 'Probar apertura manual y automática', 'Validar que no haya obstrucciones físicas'],
        'POS': ['Confirmar que el POS encienda y muestre imagen', 'Revisar pedestal, pantalla y cableado', 'Validar arranque del sistema operativo', 'Revisar reconocimiento de disco y RAM']
      }
    },
    checklist2: {
      byField: 'casoEquipo',
      data: PERIFERICOS_ESCALATION_BY_EQUIPO,
      fallback: GENERAL_ESCALATION_CHECKLIST
    }
  },
  'Red': {
    fields: [
      { id: 'casoArea', label: 'Área', type: 'search', options: ['Site'], required: true, defaultValue: 'Site' },
      { id: 'casoProblemaRed', label: 'Descripción del problema', type: 'textarea', required: true, defaultValue: 'TIENDA SIN INTERNET', full: true },
      { id: 'casoSitio', label: 'Sitio o tienda', type: 'text', required: true },
      { id: 'casoTipoFalla', label: 'Tipo de falla', type: 'search', options: ['SIN INTERNET', 'SIN LINEA', 'AMBOS'], required: true },
      { id: 'casoGerente', label: 'Nombre del gerente', type: 'text', required: true },
      { id: 'casoContacto', label: 'Contacto del gerente', type: 'text', required: true },
      { id: 'casoHorario', label: 'Horario de trabajo', type: 'text', required: true },
      { id: 'casoComentario', label: 'Comentario', type: 'textarea', required: false, full: true }
    ],
    checklist1: {
      static: ['El rack y los equipos de telecomunicación están encendidos y conectados al break', 'Los módems de Telmex y Totalplay cuentan con internet', 'Se valida que la POS1 o SVR de tienda tengan conexión a servidores (Ejecutar sentencias de cmd ping y tracert)', 'Navegación a internet de manera correcta en POS', 'Bloqueo de página web por parte del Fortinet a una página específica', 'POS sincronizadas correctamente en horario', 'Validar que los cables de red no estén trozados (superficial)', 'Se realiza validación de conexiones lógicas correctamente dependiendo si es tipo A o B'],
    },
    checklist2: {
      static: RED_ESCALATION_CHECKLIST
    }
  },
  'SIC': {
    fields: [
      { id: 'casoArea', label: 'Área', type: 'search', options: ['Oficina', 'Bodega', 'PDV'], required: true },
      { id: 'casoEquipo', label: 'Equipo', type: 'search', options: ['Terminal Verifone', 'SIC'], required: true },
      { id: 'casoSerie', label: 'No. Serie', type: 'text', required: false },
      { id: 'casoAfiliacion', label: 'Número de afiliación', type: 'text', required: false },
      { id: 'casoReporteVerifone', label: 'Número de reporte Verifone', type: 'text', required: false },
      { id: 'casoDescripcion', label: 'Descripción del problema', type: 'textarea', required: true, full: true },
      { id: 'casoDiagnostico', label: 'Diagnóstico', type: 'textarea', required: true, full: true },
      { id: 'casoDireccion', label: 'Dirección exacta', type: 'textarea', required: false, full: true },
      { id: 'casoReferencias', label: 'Referencias físicas', type: 'textarea', required: false, full: true },
      { id: 'casoGerenteTurno', label: 'Nombre del gerente en turno', type: 'text', required: false },
      { id: 'casoTelefonoTurno', label: 'Número telefónico en turno', type: 'text', required: false },
      { id: 'casoHorarioVisita', label: 'Horario para visita', type: 'text', required: false },
      { id: 'casoComentario', label: 'Comentario', type: 'textarea', required: false, full: true }
    ],
    checklist1: { static: ['Validar encendido y operación de la terminal', 'Confirmar comunicación a red', 'Realizar transacción o prueba controlada', 'Revisar carga o fuente de poder'] },
    checklist2: { static: SIC_ESCALATION_CHECKLIST }
  },
  'Mibi': {
    fields: [
      { id: 'casoArea', label: 'Área', type: 'search', options: ['Oficina', 'Bodega', 'PDV'], required: true },
      { id: 'casoDescripcion', label: 'Descripción del problema', type: 'textarea', required: true, full: true },
      { id: 'casoDiagnostico', label: 'Diagnóstico', type: 'textarea', required: false, full: true },
      { id: 'casoComentario', label: 'Comentario', type: 'textarea', required: false, full: true }
    ],
    checklist1: { static: [] },
    checklist2: { static: MIBI_ESCALATION_CHECKLIST }
  },
  'SAP': {
    fields: [
      { id: 'casoArea', label: 'Área', type: 'search', options: ['Oficina', 'Bodega', 'PDV'], required: true },
      { id: 'casoDescripcion', label: 'Descripción del problema', type: 'textarea', required: true, full: true },
      { id: 'casoDiagnostico', label: 'Diagnóstico', type: 'textarea', required: false, full: true },
      { id: 'casoComentario', label: 'Comentario', type: 'textarea', required: false, full: true }
    ],
    checklist1: { static: [] },
    checklist2: { static: SAP_ESCALATION_CHECKLIST }
  },
  'Reset': {
    fields: [
      { id: 'casoArea', label: 'Área', type: 'search', options: ['Oficina', 'Bodega', 'PDV'], required: true },
      { id: 'casoUsuarioReset', label: 'Usuario', type: 'text', required: true },
      { id: 'casoSistemaReset', label: 'Sistema / Aplicativo', type: 'search', options: ['APTOS', 'SAP', 'Correo', 'VPN', 'Windows', 'Otro'], required: true },
      { id: 'casoTipoReset', label: 'Tipo de reseteo', type: 'search', options: ['Desbloqueo', 'Cambio de contraseña', 'Restablecimiento completo'], required: true },
      { id: 'casoDescripcion', label: 'Descripción del problema', type: 'textarea', required: true, full: true },
      { id: 'casoComentario', label: 'Comentario', type: 'textarea', required: false, full: true }
    ],
    checklist1: { static: [] },
    checklist2: { static: [] }
  },
  'Help Desk': {
    fields: [
      { id: 'casoArea', label: 'Área', type: 'search', options: ['Oficina', 'Bodega', 'PDV'], required: true },
      { id: 'casoDescripcion', label: 'Descripción del problema', type: 'textarea', required: true, full: true },
      { id: 'casoDiagnostico', label: 'Diagnóstico', type: 'textarea', required: false, full: true },
      { id: 'casoComentario', label: 'Comentario', type: 'textarea', required: false, full: true }
    ],
    checklist1: { static: [] },
    checklist2: { static: [] }
  }
};

const APP = {
  db: null,
  currentUser: '',
  currentTicketId: null,
  images: [],
  activeView: 'dataView',
  currentDataSource: 'catalogo',
  usersAPI: [],
  dataCache: { catalogo: [], estructura: [], wiffi: [], inventarioSIC: [], impresoras: [] },
  filteredData: [],
  remoteTickets: [],
  mergedTickets: [],
  currentLoginRecord: null,
  currentLoginUserKey: '',
  analyticsCharts: []
};

function $(id) { return document.getElementById(id); }
function safeText(value) { return (value || '').toString().trim(); }
function firstNonEmpty_() {
  for (let i = 0; i < arguments.length; i++) {
    const value = arguments[i];
    if (value !== null && value !== undefined && String(value).trim() !== '') return value;
  }
  return '';
}

const ANALYTICS_ALLOWED_USERS = ['pmendezm.ext', 'eserafin.ext', 'eserafin,ext'];
const STATUS_OPTIONS = ['Resuelta', 'Espera de visto bueno', 'Cerrada', 'Escalada'];
const PDF_PALETTE = {
  taupe: [74, 67, 66],
  olive: [168, 160, 124],
  cream: [226, 218, 205],
  sand: [212, 202, 188],
  line: [180, 171, 160],
  text: [48, 44, 43],
  subtle: [124, 116, 109]
};
const CHART_COLORS = ['#4f4744', '#6b615c', '#8b8177', '#ada07c', '#d4cabc', '#c8bca8', '#948d84'];
function rgba(hex, alpha) { const value = String(hex || '#000000').replace('#', ''); const normalized = value.length === 3 ? value.split('').map(ch => ch + ch).join('') : value.padEnd(6, '0').slice(0, 6); const intVal = parseInt(normalized, 16); const r = (intVal >> 16) & 255; const g = (intVal >> 8) & 255; const b = intVal & 255; return `rgba(${r}, ${g}, ${b}, ${alpha})`; }
function getChartPalette(total = 1) { return Array.from({ length: total }, (_, index) => CHART_COLORS[index % CHART_COLORS.length]); }
function chartBaseOptions() { return { responsive: true, maintainAspectRatio: false, animation: false, plugins: { legend: { labels: { color: '#4f4744', font: { family: 'Inter', size: 11, weight: '600' } } } }, scales: { x: { ticks: { color: '#6b615c', font: { family: 'Inter', size: 11 } }, grid: { color: 'rgba(79,71,68,0.12)' } }, y: { ticks: { color: '#6b615c', font: { family: 'Inter', size: 11 } }, grid: { color: 'rgba(79,71,68,0.12)' } } } }; }
function captureCanvasDataUrl(canvasId) { const canvas = $(canvasId); return canvas && canvas.toDataURL ? canvas.toDataURL('image/png', 1) : ''; }
function buildMetricsCharts(snapshot) {
  destroyAnalyticsCharts();
  const usersRows = snapshot.productivityRows || [];
  const chartUserRows = usersRows.filter(row => Number(row[1] || 0) > 0);
  const userLabels = chartUserRows.map(row => row[0]);
  const userTotals = chartUserRows.map(row => Number(row[1] || 0));
  const topLabel = userLabels[0] || 'Sin datos';
  const topValue = userTotals[0] || 0;
  const highlight = $('metricsTopPerformer');
  if (highlight) highlight.innerHTML = topValue ? `Usuario destacado: <strong>${escapeHtml(topLabel)}</strong> · ${topValue} ticket(s)` : 'Sin datos para el periodo.';
  const userColors = userLabels.map((_, index) => index === 0 ? '#4f4744' : '#ada07c');
  makeChart('metricsUsersChart', { type: 'bar', data: { labels: userLabels, datasets: [{ label: 'Tickets', data: userTotals, backgroundColor: userColors, borderRadius: 8, borderSkipped: false }] }, options: { ...chartBaseOptions(), indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, ticks: { color: '#6b615c', precision: 0 }, grid: { color: 'rgba(79,71,68,0.12)' } }, y: { ticks: { color: '#4f4744', font: { family: 'Inter', size: 11, weight: '600' } }, grid: { display: false } } } } });
  const statusRows = snapshot.statusRows || [];
  makeChart('metricsStatusChart', { type: 'doughnut', data: { labels: statusRows.map(row => row[0]), datasets: [{ data: statusRows.map(row => Number(row[1] || 0)), backgroundColor: getChartPalette(statusRows.length), borderColor: '#ffffff', borderWidth: 2 }] }, options: { responsive: true, maintainAspectRatio: false, animation: false, plugins: { legend: { position: 'bottom', labels: { color: '#4f4744', font: { family: 'Inter', size: 11, weight: '600' } } } } } });
  const timelineRows = snapshot.timelineRows || [];
  makeChart('metricsTimelineChart', { type: 'line', data: { labels: timelineRows.map(row => row[0]), datasets: [{ label: 'Tickets', data: timelineRows.map(row => Number(row[1] || 0)), borderColor: '#4f4744', backgroundColor: rgba('#ada07c', 0.25), fill: true, tension: 0.35, pointRadius: 4, pointBackgroundColor: '#8b8177' }] }, options: { ...chartBaseOptions(), plugins: { legend: { display: false } }, scales: { x: { ticks: { color: '#6b615c', maxRotation: 0, autoSkip: true }, grid: { color: 'rgba(79,71,68,0.12)' } }, y: { beginAtZero: true, ticks: { color: '#6b615c', precision: 0 }, grid: { color: 'rgba(79,71,68,0.12)' } } } } });
  const serviceRows = (snapshot.serviceRows || []).slice(0, 8);
  makeChart('metricsServiceChart', { type: 'bar', data: { labels: serviceRows.map(row => row[0]), datasets: [{ label: 'Tickets', data: serviceRows.map(row => Number(row[1] || 0)), backgroundColor: getChartPalette(serviceRows.length), borderRadius: 8, borderSkipped: false }] }, options: { ...chartBaseOptions(), plugins: { legend: { display: false } }, scales: { x: { ticks: { color: '#6b615c', maxRotation: 0, minRotation: 0, autoSkip: false, callback: function(value) { const label = this.getLabelForValue(value); return String(label).length > 12 ? String(label).slice(0, 12) + '…' : label; } }, grid: { display: false } }, y: { beginAtZero: true, ticks: { color: '#6b615c', precision: 0 }, grid: { color: 'rgba(79,71,68,0.12)' } } } } });
}
function normalizeUserKey(value) {
  return safeText(value).toLowerCase().replace(/[^a-z0-9]/g, '');
}
function isAnalyticsAllowedUser(value = APP.currentLoginUserKey || APP.currentLoginRecord?.Usuario || $('user')?.value || '') {
  const current = normalizeUserKey(value);
  return ANALYTICS_ALLOWED_USERS.map(normalizeUserKey).includes(current);
}
function getAnalyticsExcludedTechnicianKeys() {
  return new Set(ANALYTICS_ALLOWED_USERS.map(value => technicianKey(resolveDisplayName(value))));
}
function normalizeStatusLabel(value) {
  const raw = safeText(value).toLowerCase();
  if (!raw) return 'Sin estatus';
  if (raw.includes('escal')) return 'Escalada';
  if (raw.includes('visto')) return 'Espera de visto bueno';
  if (raw.includes('resuelt')) return 'Resuelta';
  if (raw.includes('cerrad')) return 'Cerrada';
  return value;
}
function updateStatusFieldVisibility() {
  const group = $('escaladaAreaGroup');
  const input = $('casoEscaladaArea');
  if (!group || !input) return;
  const show = safeText($('casoStatus')?.value) === 'Escalada';
  group.classList.toggle('hidden', !show);
  if (!show) input.value = '';
}
function getStatusDynamicFields() {
  const status = safeText($('casoStatus')?.value);
  const escaladaArea = safeText($('casoEscaladaArea')?.value);
  const rows = [];
  if (status) rows.push({ id: 'casoStatusSolicitud', label: 'Status de la solicitud', value: status, required: true });
  if (status === 'Escalada' && escaladaArea) rows.push({ id: 'casoAreaEscalada', label: 'Área a la que se escaló', value: escaladaArea, required: true });
  return rows;
}
function getTicketStatus(data) {
  return normalizeStatusLabel(firstNonEmpty_(data.status, findDynamicValue(data, ['casoStatusSolicitud'], ['status de la solicitud', 'estatus de la solicitud'])));
}
function getTicketEscaladaArea(data) {
  return safeText(firstNonEmpty_(data.escaladaArea, findDynamicValue(data, ['casoAreaEscalada'], ['área a la que se escaló', 'area a la que se escalo'])));
}
function updateAnalyticsAccess() {
  const allowed = isAnalyticsAllowedUser();
  document.querySelectorAll('.admin-only').forEach(el => el.classList.toggle('hidden', !allowed));
  if (!allowed && APP.activeView === 'metricsView') openView('dataView', 'Catálogo');
}

function escapeHtml(str) {
  return safeText(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
function todayISO() { return new Date().toISOString().slice(0, 10); }
function normalizeDateOnly(value) {
  const raw = safeText(value);
  if (!raw) return '';
  const direct = raw.match(/^(\d{4}-\d{2}-\d{2})/);
  if (direct) return direct[1];
  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return raw;
}
function formatDateHuman(date = new Date()) {
  return new Intl.DateTimeFormat('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}
function formatDateTimeHuman(date = new Date()) {
  return new Intl.DateTimeFormat('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date);
}
function normalizeName(name) {
  return safeText(name)
    .replace(/[._-]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
}
function getInitials(name) {
  const parts = normalizeName(name).split(' ').filter(Boolean);
  return parts.length ? parts.slice(0, 2).map(part => part.charAt(0).toUpperCase()).join('') : 'SD';
}
function sanitizeFilePart(value) {
  return safeText(value).replace(/[^a-zA-Z0-9_-]+/g, '_') || 'SIN_FOLIO';
}

function mapEquipoChecklist(value) {
  const raw = safeText(value);
  if (!raw) return '';
  const aliases = {
    'Mouse/Ratón': 'Mouse/Ratón (Genérico)',
    'Mouse/Raton': 'Mouse/Ratón (Genérico)',
    'Ratón': 'Mouse/Ratón (Genérico)',
    'Mouse': 'Mouse/Ratón (Genérico)',
    'Nobreak': 'Nobreak (UPS)',
    'UPS': 'Nobreak (UPS)',
    'Scanner de artículos': 'Escáner alámbrico / inalámbrico',
    'Scanner de articulos': 'Escáner alámbrico / inalámbrico',
    'Lector de barras': 'Escáner alámbrico / inalámbrico',
    'Verifone': 'Terminal Verifone',
    'Cash drawer': 'Cajón de Dinero',
    'Cajón de dinero': 'Cajón de Dinero',
    'No break': 'Nobreak (UPS)',
    'Impresora Multi': 'Impresora multifuncional'
  };
  return aliases[raw] || raw;
}
function sanitizeDigits(value) {
  return safeText(value).replace(/\D+/g, '');
}
function splitJoinedValues(value) {
  if (Array.isArray(value)) return value.map(item => safeText(item)).filter(Boolean);
  const raw = safeText(value);
  if (!raw) return [];
  return raw.split(/\s*\|\s*|\n+/).map(item => safeText(item)).filter(Boolean);
}
function extractDriveFileId(url) {
  const value = safeText(url);
  if (!value) return '';
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)/,
    /thumbnail\?id=([a-zA-Z0-9_-]+)/,
    /uc\?export=[^&]+&id=([a-zA-Z0-9_-]+)/
  ];
  for (const pattern of patterns) {
    const match = value.match(pattern);
    if (match && match[1]) return match[1];
  }
  return '';
}
function buildEvidencePreviewCandidates(urlOrId) {
  const value = safeText(urlOrId);
  if (!value) return [];
  const driveId = extractDriveFileId(value) || (/^[a-zA-Z0-9_-]{20,}$/.test(value) ? value : '');
  if (!driveId) return [value];
  return [
    `https://drive.google.com/thumbnail?id=${driveId}&sz=w1600`,
    `https://lh3.googleusercontent.com/d/${driveId}=w1600`,
    `https://drive.google.com/uc?export=view&id=${driveId}`,
    `https://drive.google.com/file/d/${driveId}/view?usp=sharing`,
    value
  ];
}
function normalizeEvidenceItem(item, index = 0) {
  if (!item) return null;
  if (typeof item === 'string') {
    const candidates = buildEvidencePreviewCandidates(item);
    return {
      name: `evidencia_${index + 1}.jpg`,
      dataUrl: '',
      sourceUrl: item,
      previewCandidates: candidates,
      previewUrl: candidates[0] || ''
    };
  }
  const sourceUrl = safeText(item.sourceUrl || item.url || item.link || item.href || item.fileUrl || item.viewUrl || item.previewUrl || item.thumbUrl || item.id);
  const previewCandidates = Array.isArray(item.previewCandidates) && item.previewCandidates.length
    ? item.previewCandidates.filter(Boolean)
    : buildEvidencePreviewCandidates(item.thumbUrl || item.previewUrl || item.viewUrl || sourceUrl || item.id || '');
  return {
    name: safeText(item.name) || `evidencia_${index + 1}.${String(item.dataUrl || '').includes('image/png') ? 'png' : 'jpg'}`,
    dataUrl: safeText(item.dataUrl),
    sourceUrl,
    previewCandidates,
    previewUrl: safeText(item.previewUrl || item.thumbUrl || item.viewUrl) || previewCandidates[0] || ''
  };
}
function extractEvidenceFromRecord(record) {
  const names = [
    ...splitJoinedValues(record.EVIDENCIASNOMBRES),
    ...splitJoinedValues(record.evidenciasNombres),
    ...splitJoinedValues(record.FOTOSDIAGNOSTICONOMBRES),
    ...splitJoinedValues(record.fotosDiagnosticoNombres)
  ];
  const ids = [
    ...splitJoinedValues(record.EVIDENCIASIDS),
    ...splitJoinedValues(record.evidenciasIds),
    ...splitJoinedValues(record.FOTOSDIAGNOSTICOIDS),
    ...splitJoinedValues(record.fotosDiagnosticoIds)
  ];
  const thumbs = [
    ...splitJoinedValues(record.EVIDENCIASTHUMBLINKS),
    ...splitJoinedValues(record.evidenciasThumbLinks),
    ...splitJoinedValues(record.FOTOSDIAGNOSTICOTHUMBLINKS),
    ...splitJoinedValues(record.fotosDiagnosticoThumbLinks)
  ];
  const views = [
    ...splitJoinedValues(record.EVIDENCIASVIEWLINKS),
    ...splitJoinedValues(record.evidenciasViewLinks),
    ...splitJoinedValues(record.FOTOSDIAGNOSTICOVIEWLINKS),
    ...splitJoinedValues(record.fotosDiagnosticoViewLinks)
  ];
  const links = [
    ...splitJoinedValues(record.EVIDENCIASLINKS),
    ...splitJoinedValues(record.evidenciasLinks),
    ...splitJoinedValues(record.FOTOSDIAGNOSTICOLINKS),
    ...splitJoinedValues(record.fotosDiagnosticoLinks)
  ];
  const total = Math.max(names.length, ids.length, thumbs.length, views.length, links.length);
  const items = [];
  for (let i = 0; i < total; i++) {
    const normalized = normalizeEvidenceItem({
      name: safeText(names[i]) || `Evidencia ${i + 1}`,
      id: safeText(ids[i]),
      thumbUrl: thumbs[i],
      previewUrl: thumbs[i] || views[i],
      viewUrl: views[i],
      sourceUrl: links[i] || views[i] || thumbs[i] || ids[i]
    }, i);
    if (normalized && (normalized.previewUrl || normalized.sourceUrl)) items.push(normalized);
  }
  return items;
}
function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error('No se pudo leer la imagen.'));
    reader.readAsDataURL(blob);
  });
}
async function fetchImageAsDataUrl(candidates = []) {
  for (const candidate of candidates) {
    const url = safeText(candidate);
    if (!url) continue;
    try {
      const response = await fetch(url, { method: 'GET', mode: 'cors', credentials: 'omit', cache: 'force-cache' });
      if (!response.ok) continue;
      const blob = await response.blob();
      if (!blob.type.startsWith('image/')) continue;
      return await blobToDataUrl(blob);
    } catch (error) {}
  }
  return '';
}
async function hydrateEvidenceDataUrls(evidencias = [], rerender = false) {
  let changed = false;
  for (const item of evidencias) {
    if (!item || item.dataUrl) continue;
    const fetched = await fetchImageAsDataUrl(item.previewCandidates || buildEvidencePreviewCandidates(item.previewUrl || item.sourceUrl || ''));
    if (fetched) {
      item.dataUrl = fetched;
      changed = true;
    }
  }
  if (changed && rerender) renderEvidence();
  return evidencias;
}

async function loadUsersAPI() {
  try {
    const response = await fetch(API_USUARIOS);
    const json = await response.json();
    const arr = Array.isArray(json) ? json : json.usuarios || json.data || json.catalogo || [];
    APP.usersAPI = Array.isArray(arr) ? arr : [];
  } catch (error) {
    APP.usersAPI = [];
  }
}

function findUserApiRecord(userInput, pass = '') {
  const raw = safeText(userInput).toLowerCase().replace(/\s+/g, ' ').trim();
  const rawKey = normalizeUserKey(userInput);
  if (!raw && !rawKey || !Array.isArray(APP.usersAPI) || !APP.usersAPI.length) return null;
  return APP.usersAPI.find(record => {
    const usuario = safeText(record?.Usuario || record?.usuario || record?.USER || record?.user).toLowerCase().replace(/\s+/g, ' ').trim();
    const usuarioKey = normalizeUserKey(usuario);
    if (!usuario || (usuario !== raw && usuarioKey !== rawKey)) return false;
    if (!pass) return true;
    const storedPass = safeText(record?.Contrasena || record?.contrasena || record?.Password || record?.password);
    return !!storedPass && storedPass === pass;
  }) || null;
}

function validateCredentials(userInput, pass) {
  const record = findUserApiRecord(userInput, pass);
  return record ? { valid: true, data: record } : { valid: false, data: null };
}

function resolveDisplayName(userInput) {
  const raw = safeText(userInput).toLowerCase().replace(/\s+/g, ' ').trim();
  const aliases = {
    'mmontiel ext': 'Mario Montiel Zapien',
    'mmontiel': 'Mario Montiel Zapien',
    'mario montiel': 'Mario Montiel Zapien',
    'mario montiel zapien': 'Mario Montiel Zapien',
    'mario montiel sapien': 'Mario Montiel Zapien',
    'm montiel': 'Mario Montiel Zapien',
    'montiel ext': 'Mario Montiel Zapien'
  };
  if (aliases[raw]) return aliases[raw];

  const exactRecord = findUserApiRecord(userInput);
  if (exactRecord) {
    return normalizeName(exactRecord.FondoGeneral || exactRecord.fondogeneral || exactRecord.Nombre || exactRecord.nombre || exactRecord.Usuario || userInput);
  }

  const normalized = normalizeName(userInput);
  const normalizedLower = normalized.toLowerCase();

  for (const record of APP.usersAPI) {
    const candidateNames = [
      record?.FondoGeneral,
      record?.fondogeneral,
      record?.Nombre,
      record?.nombre,
      record?.Usuario,
      record?.usuario
    ].map(value => normalizeName(value)).filter(Boolean);

    const exactName = candidateNames.find(value => {
      const v = value.toLowerCase();
      return v === raw || v === normalizedLower;
    });

    if (exactName) {
      const preferred = candidateNames.find(value => value.split(' ').length >= 2 && value.toLowerCase() !== raw) || exactName;
      return preferred;
    }
  }

  return normalized || 'Mario Montiel Zapien';
}

function syncResolvedUser(name) {
  const loginDisplay = normalizeName(
    APP.currentLoginRecord?.FondoGeneral ||
    APP.currentLoginRecord?.fondogeneral ||
    APP.currentLoginRecord?.Nombre ||
    APP.currentLoginRecord?.nombre ||
    ''
  );
  const resolved = loginDisplay || resolveDisplayName(name || APP.currentUser || 'mmontiel ext') || 'Mario Montiel Zapien';
  APP.currentUser = resolved;
  if ($('casoTecnico')) $('casoTecnico').value = resolved;
  if ($('sidebarUserName')) $('sidebarUserName').textContent = resolved;
  if ($('topbarUserName')) $('topbarUserName').textContent = resolved;
  const initials = getInitials(resolved);
  if ($('sidebarInitials')) $('sidebarInitials').textContent = initials;
  if ($('topbarInitials')) $('topbarInitials').textContent = initials;
  return resolved;
}

function technicianKey(name) {
  return resolveDisplayName(name).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}


function plainIdentityKey(value) {
  return safeText(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function getUserRecordLogin(record = {}) {
  return safeText(
    record.Usuario || record.usuario || record.USER || record.user ||
    record.Correo || record.correo || record.Email || record.email || ''
  );
}

function getUserRecordFullName(record = {}) {
  const preferred = safeText(
    record.FondoGeneral || record.fondogeneral ||
    record.NombreCompleto || record.nombreCompleto || record['Nombre completo'] ||
    record.Nombre || record.nombre || record.NOMBRE || ''
  );
  const normalizedPreferred = normalizeName(preferred);
  if (normalizedPreferred && normalizedPreferred.split(' ').length >= 2) return normalizedPreferred;

  const fallback = normalizeName(preferred || getUserRecordLogin(record));
  return fallback || '';
}

function buildNameAliasKeys(name) {
  const normalized = normalizeName(name);
  const parts = normalized.split(' ').filter(Boolean);
  const keys = new Set();
  if (!normalized) return keys;

  keys.add(plainIdentityKey(normalized));
  keys.add(plainIdentityKey(parts.join('')));

  if (parts.length >= 2) {
    const first = parts[0];
    const second = parts[1];
    const surname1 = parts.length >= 3 ? parts[2] : parts[1];
    const surname2 = parts.length >= 4 ? parts[3] : '';
    keys.add(plainIdentityKey(first));
    keys.add(plainIdentityKey(`${first}${surname1}`));
    keys.add(plainIdentityKey(`${first}${surname1.charAt(0)}`));
    keys.add(plainIdentityKey(`${first}${second.charAt(0)}`));
    keys.add(plainIdentityKey(parts.map(part => part.charAt(0)).join('')));
    keys.add(plainIdentityKey(`${first.charAt(0)}${surname1}${surname2.charAt(0)}`));
    keys.add(plainIdentityKey(`${first}${parts.slice(1).map(part => part.charAt(0)).join('')}`));
  }

  return keys;
}

function getMetricUserAliasMap() {
  const map = new Map();
  (APP.usersAPI || []).forEach(record => {
    const displayName = getUserRecordFullName(record);
    if (!displayName) return;

    const candidates = [
      getUserRecordLogin(record),
      record?.Usuario,
      record?.usuario,
      record?.USER,
      record?.user,
      record?.FondoGeneral,
      record?.fondogeneral,
      record?.NombreCompleto,
      record?.nombreCompleto,
      record?.['Nombre completo'],
      record?.Nombre,
      record?.nombre,
      displayName
    ];

    candidates.forEach(value => {
      const key = plainIdentityKey(value);
      if (key) map.set(key, displayName);
    });

    buildNameAliasKeys(displayName).forEach(key => {
      if (key) map.set(key, displayName);
    });
  });
  return map;
}

function resolveMetricDisplayName(value) {
  const raw = safeText(value);
  if (!raw) return '';

  const aliasMap = getMetricUserAliasMap();
  const directKey = plainIdentityKey(raw);
  if (directKey && aliasMap.has(directKey)) return aliasMap.get(directKey);

  const resolved = resolveDisplayName(raw);
  const resolvedKey = plainIdentityKey(resolved);
  if (resolvedKey && aliasMap.has(resolvedKey)) return aliasMap.get(resolvedKey);

  const normalized = normalizeName(resolved || raw);
  return normalized || raw;
}

function getMetricUsersMasterList() {
  const users = new Map();
  (APP.usersAPI || []).forEach(record => {
    const displayName = getUserRecordFullName(record);
    if (!displayName) return;
    users.set(plainIdentityKey(displayName), displayName);
  });
  return [...users.values()].sort((a, b) => a.localeCompare(b, 'es'));
}

function ticketBelongsToCurrentUser(ticket) {
  if (!APP.currentUser) return true;
  return technicianKey(ticket.tecnico) === technicianKey(APP.currentUser);
}

function resetFilterState(rows = null) {
  APP.activeFilters = {};
  APP.currentFilterColumn = '';
  if ($('activeFilters')) {
    $('activeFilters').innerHTML = '';
    $('activeFilters').classList.remove('show');
  }
  if ($('clearAllFilters')) $('clearAllFilters').style.display = 'none';
  if ($('globalSearch')) $('globalSearch').value = '';
  if (rows) APP.filteredData = [...rows];
}

function updateStats(totalRows = null) {
  const total = totalRows ?? ((APP.dataCache[APP.currentDataSource] || []).length);
  if ($('statsStrip')) $('statsStrip').textContent = `Mostrando ${APP.filteredData.length} de ${total} registros`;
}

function updateActiveFiltersDisplay() {
  const container = $('activeFilters');
  const clearBtn = $('clearAllFilters');
  const entries = Object.entries(APP.activeFilters).filter(([, values]) => Array.isArray(values) && values.length);
  if (!entries.length) {
    container.innerHTML = '';
    container.classList.remove('show');
    clearBtn.style.display = 'none';
    return;
  }
  container.innerHTML = '<strong>Filtros activos:</strong> ' + entries.map(([column, values]) =>
    `<span class="filter-tag">${escapeHtml(formatColumnName(column))}: ${values.length} <button type="button" class="remove-filter" onclick="removeFilter('${column.replace(/'/g, "\'")}')">×</button></span>`
  ).join('');
  container.classList.add('show');
  clearBtn.style.display = 'inline-flex';
}

function closeFilterModal() {
  if ($('filterModal')) $('filterModal').style.display = 'none';
}
window.closeFilterModal = closeFilterModal;

function openFilterModal(column) {
  APP.currentFilterColumn = column;
  const modal = $('filterModal');
  const title = $('filterModalTitle');
  const list = $('checkboxList');
  title.textContent = `Filtros de ${formatColumnName(column)}`;
  const currentRows = APP.filteredData.length ? APP.filteredData : (APP.dataCache[APP.currentDataSource] || []);
  const values = [...new Set(currentRows.map(row => safeText(row[column])).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
  const selected = APP.activeFilters[column] ? new Set(APP.activeFilters[column].map(v => safeText(v).toLowerCase())) : new Set(values.map(v => safeText(v).toLowerCase()));
  if (!values.length) {
    list.innerHTML = '<div class="empty-state">Sin valores para filtrar.</div>';
  } else {
    list.innerHTML = values.map((value, index) => `
      <div class="filter-checkbox-item">
        <input type="checkbox" id="flt_${index}" value="${escapeHtml(value)}" ${selected.has(value.toLowerCase()) ? 'checked' : ''}>
        <label for="flt_${index}">${escapeHtml(value)}</label>
      </div>
    `).join('');
  }
  $('selectAllCheckbox').checked = values.length > 0 && values.every(value => selected.has(value.toLowerCase()));
  $('selectAllCheckbox').onchange = function(){ list.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = this.checked); };
  $('filterSearch').value = '';
  $('filterSearch').oninput = function(){
    const term = safeText(this.value).toLowerCase();
    list.querySelectorAll('.filter-checkbox-item').forEach(item => {
      const label = item.querySelector('label');
      item.style.display = label.textContent.toLowerCase().includes(term) ? 'flex' : 'none';
    });
  };
  modal.style.display = 'flex';
}
window.openFilterModal = openFilterModal;

function applyAllFilters() {
  const sourceRows = APP.dataCache[APP.currentDataSource] || [];
  const term = safeText($('globalSearch').value).toLowerCase();
  APP.filteredData = sourceRows.filter(row => {
    const passesFilters = Object.entries(APP.activeFilters).every(([column, values]) => {
      if (!values || !values.length) return true;
      const cell = safeText(row[column]).toLowerCase();
      return values.some(value => safeText(value).toLowerCase() === cell);
    });
    if (!passesFilters) return false;
    if (!term) return true;
    return Object.values(row || {}).some(value => safeText(value).toLowerCase().includes(term));
  });
  renderDataTable(APP.filteredData);
  updateStats(sourceRows.length);
  updateActiveFiltersDisplay();
}
window.applyAllFilters = applyAllFilters;

function applyFilter() {
  const selected = Array.from(document.querySelectorAll('#checkboxList input[type="checkbox"]:checked')).map(cb => safeText(cb.value)).filter(Boolean);
  if (!selected.length && document.querySelectorAll('#checkboxList input[type="checkbox"]').length) {
    alert('Selecciona al menos un valor');
    return;
  }
  APP.activeFilters[APP.currentFilterColumn] = selected;
  applyAllFilters();
  closeFilterModal();
}
window.applyFilter = applyFilter;

function removeFilter(column) {
  delete APP.activeFilters[column];
  applyAllFilters();
}
window.removeFilter = removeFilter;

function clearAllFilters() {
  resetFilterState(APP.dataCache[APP.currentDataSource] || []);
  renderDataTable(APP.filteredData);
  updateStats((APP.dataCache[APP.currentDataSource] || []).length);
}
window.clearAllFilters = clearAllFilters;

function updateClocks() {
  const now = new Date();
  if ($('clockTime')) $('clockTime').textContent = now.toLocaleTimeString('es-MX');
  if ($('clockDate')) $('clockDate').textContent = formatDateHuman(now);
  if ($('sidebarUserTime')) $('sidebarUserTime').textContent = formatDateTimeHuman(now);
}
setInterval(updateClocks, 1000);
updateClocks();

function setLoggedInUI(isLoggedIn) {
  document.body.classList.toggle('logged-in', isLoggedIn);
}

function toggleDarkMode() {
  document.body.dataset.theme = document.body.dataset.theme === 'dark' ? '' : 'dark';
}
window.toggleDarkMode = toggleDarkMode;

function toggleSidebar() {
  $('appShell').classList.toggle('sidebar-hidden');
}

function setActiveNav(title) {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.title === title && !btn.dataset.url);
  });
}

function openView(viewId, title) {
  APP.activeView = viewId;
  document.querySelectorAll('.content-view').forEach(view => view.classList.remove('active'));
  $(viewId).classList.add('active');
  $('pageTitle').textContent = title;
  $('sidebarBrandTitle').textContent = title;
  setActiveNav(title);
  if (viewId === 'metricsView') renderMetricsDashboard();
  if (window.innerWidth <= 980) $('appShell').classList.add('sidebar-hidden');
}
window.openView = openView;

async function login() {
  const user = safeText($('user').value);
  const pass = safeText($('pass').value);
  if (!user || !pass) {
    $('loginError').textContent = '❌ Captura usuario y contraseña';
    $('loginError').style.display = 'block';
    return;
  }

  if (!APP.usersAPI.length) await loadUsersAPI();
  const resultado = validateCredentials(user, pass);
  if (!resultado.valid) {
    $('loginError').textContent = '❌ Credenciales incorrectas';
    $('loginError').style.display = 'block';
    return;
  }

  APP.currentLoginRecord = resultado.data;
  APP.currentLoginUserKey = normalizeUserKey(resultado.data.Usuario || resultado.data.usuario || user);
  const displayName = normalizeName(
    resultado.data.FondoGeneral ||
    resultado.data.fondogeneral ||
    resultado.data.Nombre ||
    resultado.data.nombre ||
    resultado.data.Usuario ||
    user
  );

  $('loginError').style.display = 'none';
  $('loginScreen').classList.add('hidden');
  $('appShell').classList.remove('hidden');
  $('appShell').classList.remove('sidebar-hidden');
  setLoggedInUI(true);
  updateAnalyticsAccess();

  syncResolvedUser(displayName);
  $('casoFecha').value = todayISO();
  openView('dataView', 'Catálogo');
  await loadDataSource('catalogo', true);
  await renderTicketsList();
}
window.login = login;

function logout() {
  APP.currentUser = '';
  APP.currentLoginRecord = null;
  APP.currentLoginUserKey = '';
  APP.currentTicketId = null;
  APP.images = [];
  $('user').value = '';
  $('pass').value = '';
  renderEvidence();
  nuevoCaso();
  $('appShell').classList.add('hidden');
  $('loginScreen').classList.remove('hidden');
  $('userMenu').classList.remove('open');
  setLoggedInUI(false);
  updateAnalyticsAccess();
}
window.logout = logout;

function extractArrayFromResponse(json) {
  if (Array.isArray(json)) return json;
  if (Array.isArray(json?.catalogo)) return json.catalogo;
  if (Array.isArray(json?.data)) return json.data;
  if (Array.isArray(json?.estructura)) return json.estructura;
  if (Array.isArray(json?.inventario)) return json.inventario;
  if (Array.isArray(json?.impresoras)) return json.impresoras;
  if (Array.isArray(json?.rows)) return json.rows;
  if (Array.isArray(json?.tickets)) return json.tickets;
  if (typeof json === 'object' && json) {
    const arr = Object.values(json).find(value => Array.isArray(value));
    if (Array.isArray(arr)) return arr;
  }
  return [];
}

function formatColumnName(name) {
  const value = safeText(name);
  if (APP.currentDataSource === 'inventarioSIC' && INVENTARIO_SIC_HEADERS.includes(value)) return value;
  return value.replace(/_/g, ' ').replace(/\b\w/g, chr => chr.toUpperCase());
}

function renderDataTable(rows) {
  const head = $('apiTableHead');
  const body = $('apiTableBody');
  if (!rows.length) {
    APP.currentColumns = [];
    head.innerHTML = '';
    body.innerHTML = '<tr><td class="empty-state">No hay datos disponibles.</td></tr>';
    updateStats(0);
    return;
  }

  const columns = Object.keys(rows[0]);
  APP.currentColumns = columns;
  head.innerHTML = `<tr>${columns.map(col => `
    <th title="${escapeHtml(formatColumnName(col))}">
      <div class="th-wrap">
        <span class="th-label">${escapeHtml(formatColumnName(col))}</span>
        <button type="button" class="filter-btn ${APP.activeFilters[col]?.length ? 'active' : ''}" onclick="openFilterModal('${col.replace(/'/g, "\'")}')" title="Filtrar ${formatColumnName(col)}"><i class="fas fa-filter"></i></button>
      </div>
    </th>`).join('')}</tr>`;
  body.innerHTML = rows.map(row => `<tr>${columns.map(col => `<td title="${escapeHtml(safeText(row[col]))}">${escapeHtml(row[col])}</td>`).join('')}</tr>`).join('');
  updateStats((APP.dataCache[APP.currentDataSource] || rows).length);
}

async function loadDataSource(source, force = false) {
  APP.currentDataSource = source;
  const config = DATA_SOURCES[source];
  $('dataViewTitle').textContent = config.title;
  $('dataViewDescription').textContent = config.description;
  $('apiTableBody').innerHTML = '<tr><td class="empty-state">Cargando...</td></tr>';

  if (!force && APP.dataCache[source].length) {
    resetFilterState(APP.dataCache[source]);
    APP.filteredData = [...APP.dataCache[source]];
    renderDataTable(APP.filteredData);
    return;
  }

  try {
    const response = await fetch(config.api);
    const json = await response.json();
    let extractedRows = extractArrayFromResponse(json);
    if (source === 'inventarioSIC') extractedRows = remapInventarioSICRows(extractedRows);
    APP.dataCache[source] = extractedRows;
    resetFilterState(APP.dataCache[source]);
    APP.filteredData = [...APP.dataCache[source]];
    renderDataTable(APP.filteredData);
  } catch (error) {
    $('apiTableHead').innerHTML = '';
    $('apiTableBody').innerHTML = `<tr><td class="empty-state">No fue posible cargar ${escapeHtml(config.title)}.</td></tr>`;
    $('statsStrip').textContent = 'Error de carga';
  }
}

async function refreshCurrentData() {
  await loadDataSource(APP.currentDataSource, true);
}
window.refreshCurrentData = refreshCurrentData;

function attachClearableBehavior(scope = document) {
  scope.querySelectorAll('.field-clear').forEach(btn => {
    btn.onclick = () => {
      const target = $(btn.dataset.target);
      if (!target) return;
      target.value = '';
      target.dispatchEvent(new Event('input', { bubbles: true }));
      if (target.id === 'casoServicio') renderDynamicForm();
      if (target.id === 'casoEquipo') renderChecklists();
      target.focus();
    };
  });

  scope.querySelectorAll('.clearable-input').forEach(input => {
    input.addEventListener('mousedown', () => {
      if (document.activeElement === input && input.value) input.dataset.clearOnClick = '1';
    });
    input.addEventListener('click', () => {
      if (input.dataset.clearOnClick === '1') {
        input.value = '';
        input.dataset.clearOnClick = '';
        input.dispatchEvent(new Event('input', { bubbles: true }));
        if (input.id === 'casoServicio') renderDynamicForm();
        if (input.id === 'casoEquipo') renderChecklists();
      }
    });
    input.addEventListener('blur', () => { input.dataset.clearOnClick = ''; });
  });
}

function buildField(field) {
  const isFull = field.full ? ' full' : '';
  const requiredMark = field.required ? ' <span>*</span>' : '';
  if (field.type === 'textarea') {
    return `<div class="field-group${isFull}"><label>${field.label}${requiredMark}</label><textarea id="${field.id}" data-required="${field.required ? '1' : '0'}" placeholder="${field.label}"></textarea></div>`;
  }
  if (field.type === 'search') {
    const listId = `${field.id}List`;
    return `<div class="field-group${isFull}"><label>${field.label}${requiredMark}</label><div class="search-field"><input list="${listId}" id="${field.id}" class="clearable-input" data-required="${field.required ? '1' : '0'}" placeholder="${field.label}"><button type="button" class="field-clear" data-target="${field.id}"><i class="fas fa-xmark"></i></button></div><datalist id="${listId}">${(field.options || []).map(option => `<option value="${escapeHtml(option)}"></option>`).join('')}</datalist></div>`;
  }
  return `<div class="field-group${isFull}"><label>${field.label}${requiredMark}</label><input type="text" id="${field.id}" data-required="${field.required ? '1' : '0'}" placeholder="${field.label}"></div>`;
}

function getSelectedServiceKey() {
  const value = safeText($('casoServicio').value).toLowerCase();
  return Object.keys(SERVICES).find(key => key.toLowerCase() === value) || '';
}

function hideChecklists() {
  const area = $('checklistsArea');
  if (area) area.classList.add('hidden');
}


function renderChecklistBody(container, items, checklistName) {
  if (container) container.innerHTML = '';
}


function getChecklistItems(definition) {
  return [];
}


function applyChecklistPresentation(serviceKey, checklistKey, items) {
  return { title: '', subtitle: '' };
}


function renderChecklists() {
  hideChecklists();
}


function toggleChecklistCard(cardId) { return; }
window.toggleChecklistCard = toggleChecklistCard;

function renderDynamicForm() {
  const serviceKey = getSelectedServiceKey();
  const dynamicFields = $('dynamicFields');
  if (!serviceKey) {
    dynamicFields.innerHTML = '<div class="placeholder-panel">Selecciona un tipo de servicio para mostrar el formulario dinámico.</div>';
    hideChecklists();
    return;
  }
  const service = SERVICES[serviceKey];
  dynamicFields.innerHTML = service.fields.map(buildField).join('');
  attachClearableBehavior(dynamicFields);
  service.fields.forEach(field => {
    const input = $(field.id);
    if (!input) return;
    if (field.defaultValue) input.value = field.defaultValue;
    input.addEventListener('input', () => {
      if (field.id === 'casoEquipo') renderChecklists();
    });
    input.addEventListener('change', () => {
      if (field.id === 'casoEquipo') renderChecklists();
    });
  });
  renderChecklists();
}

function renderEvidence() {
  $('evidenceCounter').textContent = `${APP.images.length} ${APP.images.length === 1 ? 'imagen' : 'imágenes'}`;
  $('evidenceGrid').innerHTML = APP.images.map((rawImage, index) => {
    const image = normalizeEvidenceItem(rawImage, index) || { name: `Evidencia ${index + 1}`, dataUrl: '', previewUrl: '', sourceUrl: '' };
    const previewSrc = safeText(image.dataUrl || image.previewUrl || image.sourceUrl);
    return `
      <div class="evidence-item ${previewSrc ? '' : 'no-preview'}">
        ${previewSrc ? `<img src="${escapeHtml(previewSrc)}" alt="Evidencia ${index + 1}" data-index="${index}">` : `<div class="evidence-placeholder">Sin vista previa</div>`}
        <button type="button" class="evidence-remove" data-index="${index}"><i class="fas fa-trash"></i></button>
        <div class="evidence-caption">${escapeHtml(safeText(image.name) || `Evidencia ${index + 1}`)}</div>
      </div>
    `;
  }).join('');

  $('evidenceGrid').querySelectorAll('img[data-index]').forEach(img => {
    img.onerror = () => {
      const idx = Number(img.dataset.index);
      const item = APP.images[idx];
      const candidates = Array.isArray(item?.previewCandidates) ? [...item.previewCandidates] : [];
      const current = safeText(img.getAttribute('src'));
      const next = candidates.find(url => safeText(url) && safeText(url) !== current);
      if (next) {
        img.src = next;
        item.previewCandidates = candidates.filter(url => safeText(url) !== next);
        item.previewUrl = next;
        return;
      }
      const wrapper = img.closest('.evidence-item');
      if (wrapper) {
        wrapper.classList.add('no-preview');
        img.remove();
        wrapper.insertAdjacentHTML('afterbegin', '<div class="evidence-placeholder">Sin vista previa</div>');
      }
    };
  });
}

function addFiles(files) {
  Array.from(files).filter(file => file.type.startsWith('image/')).forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      APP.images.push({ name: file.name, dataUrl: reader.result, previewUrl: reader.result, sourceUrl: '' });
      renderEvidence();
    };
    reader.readAsDataURL(file);
  });
}

function getDynamicFieldValues() {
  const serviceKey = getSelectedServiceKey();
  const service = SERVICES[serviceKey];
  const baseFields = service ? service.fields.map(field => ({
    id: field.id,
    label: field.label,
    value: safeText($(field.id)?.value),
    required: !!field.required
  })) : [];
  return [...baseFields, ...getStatusDynamicFields()];
}

function getChecklistResponses(listName, bodyEl) {
  return [];
}


function getAnsweredChecklistResponses() {
  return { checklist1: [], checklist2: [] };
}


function collectFormData() {
  const status = safeText($('casoStatus')?.value);
  const escaladaArea = safeText($('casoEscaladaArea')?.value);
  return {
    id: APP.currentTicketId,
    folio: sanitizeDigits($('casoFolio').value),
    fecha: normalizeDateOnly($('casoFecha').value),
    tecnico: safeText($('casoTecnico').value),
    marca: safeText($('casoMarca').value),
    tienda: safeText($('casoTienda').value),
    servicio: safeText($('casoServicio').value),
    status,
    escaladaArea,
    dynamicFields: getDynamicFieldValues(),
    checklists: getAnsweredChecklistResponses(),
    evidencias: APP.images.map((item, index) => normalizeEvidenceItem(item, index) || { ...item }),
    updatedAt: Date.now(),
    createdAt: Date.now()
  };
}


function buildFastEvidenceMeta(data) {
  const evidencias = Array.isArray(data.evidencias) ? data.evidencias.filter(item => item && (item.dataUrl || item.previewUrl || item.sourceUrl)) : [];
  const names = evidencias.map((item, index) => safeText(item.name) || `evidencia_${index + 1}.${String(item.dataUrl || '').includes('image/png') ? 'png' : 'jpg'}`);
  return {
    count: evidencias.length,
    names,
    namesJoined: names.join(' | ')
  };
}

async function compressImageDataUrl(dataUrl, maxWidth = 1280, quality = 0.78) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => reject(new Error('No se pudo comprimir la imagen.'));
    img.src = dataUrl;
  });
}

async function buildCompressedEvidenceForApi(evidencias = []) {
  const source = Array.isArray(evidencias) ? evidencias.map((item, index) => normalizeEvidenceItem(item, index)).filter(Boolean) : [];
  await hydrateEvidenceDataUrls(source);
  const compressed = [];

  for (let i = 0; i < source.length; i++) {
    const item = source[i];
    if (!item.dataUrl) continue;
    const jpgDataUrl = await compressImageDataUrl(item.dataUrl, 1280, 0.78);
    compressed.push({
      name: safeText(item.name) ? safeText(item.name).replace(/\.[^.]+$/, '.jpg') : `evidencia_${i + 1}.jpg`,
      dataUrl: jpgDataUrl
    });
  }

  return compressed;
}

async function buildApiPayloadForSave(data) {
  const payload = buildApiPayload(data);
  const compressedEvidence = await buildCompressedEvidenceForApi(data.evidencias || []);
  payload.evidencias = compressedEvidence;
  payload.fotosDiagnostico = compressedEvidence;
  payload.fotosSolucion = [];
  payload.EVIDENCIASCOUNT = compressedEvidence.length;
  payload.EVIDENCIASNOMBRES = compressedEvidence.map(item => item.name).join(' | ');
  payload.FOTOSDIAGNOSTICOCOUNT = compressedEvidence.length;
  payload.FOTOSDIAGNOSTICONOMBRES = payload.EVIDENCIASNOMBRES;
  return payload;
}

function stripImagesForPersistence(data) {
  const meta = buildFastEvidenceMeta(data);
  return {
    ...data,
    evidencias: (Array.isArray(data.evidencias) ? data.evidencias : []).map((item, index) => {
      const normalized = normalizeEvidenceItem(item, index);
      return normalized ? {
        name: normalized.name,
        dataUrl: '',
        previewUrl: normalized.previewUrl,
        sourceUrl: normalized.sourceUrl,
        previewCandidates: normalized.previewCandidates || []
      } : null;
    }).filter(Boolean),
    evidenciasCount: meta.count,
    evidenciasNombres: meta.namesJoined
  };
}

function validateFormData(data) {
  const missing = [];
  [['folio', 'Folio / Ticket'], ['fecha', 'Fecha'], ['tecnico', 'Técnico'], ['marca', 'Marca'], ['tienda', 'Tienda'], ['servicio', 'Tipo de servicio'], ['status', 'Status de la solicitud']].forEach(([key, label]) => {
    if (!safeText(data[key])) missing.push(label);
  });
  data.dynamicFields.forEach(field => {
    if (field.required && !safeText(field.value)) missing.push(field.label);
  });
  if (safeText(data.status) === 'Escalada' && !safeText(data.escaladaArea)) missing.push('Área a la que se escaló');
  return [...new Set(missing)];
}

function findDynamicValue(data, ids = [], labelsIncludes = []) {
  const found = data.dynamicFields.find(field => ids.includes(field.id) || labelsIncludes.some(label => field.label.toLowerCase().includes(label)));
  return found ? safeText(found.value) : '';
}

function buildApiPayload(data) {
  const checklist = JSON.stringify(data.checklists);
  const evidenceMeta = buildFastEvidenceMeta(data);

  return {
    FOLIO: data.folio,
    FECHA: normalizeDateOnly(data.fecha),
    TECNICO: data.tecnico,
    MARCA: data.marca,
    SUCURSAL: data.tienda,
    AREAUSUARIO: findDynamicValue(data, ['casoArea'], ['área']),
    TIPODEEQUIPO: findDynamicValue(data, ['casoEquipo'], ['equipo']),
    NUMEROSERIE: findDynamicValue(data, ['casoSerie'], ['serie']),
    DESCRIPCIONBREVE: findDynamicValue(data, ['casoDescripcion', 'casoProblemaRed'], ['descripción']),
    ERRORDETECTADO: findDynamicValue(data, ['casoTipoFalla'], ['falla']),
    DIAGNOSTICO: findDynamicValue(data, ['casoDiagnostico'], ['diagnóstico']),
    SOLUCION: findDynamicValue(data, ['casoComentario'], ['comentario']),
    CHECKLIST: '',
    CHECKLIST1: '[]',
    CHECKLIST2: '[]',
    CAMPOSDINAMICOS: JSON.stringify(data.dynamicFields || []),
    TIPOSERVICIO: data.servicio,
    EVIDENCIASCOUNT: evidenceMeta.count,
    EVIDENCIASNOMBRES: evidenceMeta.namesJoined,
    FOTOSDIAGNOSTICOCOUNT: evidenceMeta.count,
    FOTOSSOLUCIONCOUNT: 0,
    FOTOSDIAGNOSTICONOMBRES: evidenceMeta.namesJoined,
    FOTOSSOLUCIONNOMBRES: '',
    timestamp: new Date().toISOString(),
    usuario: APP.currentUser || data.tecnico || 'Mario Montiel Zapien'
  };
}

async function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ServiceDeskN1DB', 1);
    request.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('tickets')) {
        const store = db.createObjectStore('tickets', { keyPath: 'id', autoIncrement: true });
        store.createIndex('folio', 'folio', { unique: false });
        store.createIndex('updatedAt', 'updatedAt', { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveTicketLocal(ticket) {
  if (!APP.db) APP.db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = APP.db.transaction('tickets', 'readwrite');
    const store = tx.objectStore('tickets');
    const payload = stripImagesForPersistence(ticket);
    if (!payload.createdAt) payload.createdAt = Date.now();
    if (!payload.updatedAt) payload.updatedAt = Date.now();
    const numericId = Number(payload.id);
    if (!Number.isFinite(numericId) || numericId <= 0) {
      delete payload.id;
    } else {
      payload.id = numericId;
    }
    const request = payload.id ? store.put(payload) : store.add(payload);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAllLocalTickets() {
  if (!APP.db) APP.db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = APP.db.transaction('tickets', 'readonly');
    const store = tx.objectStore('tickets');
    const request = store.getAll();
    request.onsuccess = () => resolve((request.result || []).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0)));
    request.onerror = () => reject(request.error);
  });
}

async function getLocalTicket(id) {
  if (!APP.db) APP.db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = APP.db.transaction('tickets', 'readonly');
    const store = tx.objectStore('tickets');
    const request = store.get(Number(id));
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

function normalizeRemoteTicket(record, index) {
  const rawChecklist = record.CHECKLIST || record.checklist || record.CHECKLIST1 || '';
  let parsedChecklist = { checklist1: [], checklist2: [] };
  try {
    const parsed = JSON.parse(rawChecklist);
    if (parsed && typeof parsed === 'object') parsedChecklist = { checklist1: parsed.checklist1 || [], checklist2: parsed.checklist2 || [] };
  } catch (error) {}

  let dynamicFields = [];
  try {
    const parsed = JSON.parse(record.CAMPOSDINAMICOS || record.camposDinamicos || '[]');
    if (Array.isArray(parsed)) dynamicFields = parsed;
  } catch (error) {}

  if (!dynamicFields.length) {
    const flatPairs = [
      ['casoArea', 'Área', record.AREAUSUARIO || record.area],
      ['casoEquipo', 'Equipo', record.TIPODEEQUIPO || record.equipo],
      ['casoSerie', 'No. Serie', record.NUMEROSERIE || record.numeroSerie],
      ['casoDescripcion', 'Descripción del problema', record.DESCRIPCIONBREVE || record.descripcion],
      ['casoDiagnostico', 'Diagnóstico', record.DIAGNOSTICO || record.diagnostico],
      ['casoComentario', 'Comentario', record.SOLUCION || record.comentario]
    ];
    dynamicFields = flatPairs.filter(([, , value]) => safeText(value)).map(([id, label, value]) => ({ id, label, value, required: false }));
  }

  const status = normalizeStatusLabel(firstNonEmpty_(findDynamicValue({ dynamicFields }, ['casoStatusSolicitud'], ['status de la solicitud', 'estatus de la solicitud']), record.STATUSSOLICITUD, record.status));
  const escaladaArea = safeText(firstNonEmpty_(findDynamicValue({ dynamicFields }, ['casoAreaEscalada'], ['área a la que se escaló', 'area a la que se escalo']), record.AREAESCALADA, record.areaEscalada));

  return {
    id: `api:${index}`,
    source: 'api',
    folio: safeText(record.FOLIO || record.folio || record.Folio),
    fecha: normalizeDateOnly(record.FECHA || record.fecha || record.Fecha),
    tecnico: safeText(record.TECNICO || record.tecnico || record.Técnico),
    marca: safeText(record.MARCA || record.marca),
    tienda: safeText(record.SUCURSAL || record.TIENDA || record.tienda || record.sucursal),
    servicio: safeText(record.TIPOSERVICIO || record.servicio || record['Tipo de servicio']),
    status,
    escaladaArea,
    dynamicFields,
    checklists: parsedChecklist,
    evidencias: extractEvidenceFromRecord(record),
    updatedAt: Date.parse(record.timestamp || record.FECHA || '') || Date.now(),
    createdAt: Date.parse(record.timestamp || record.FECHA || '') || Date.now(),
    raw: record
  };
}

async function fetchTicketsFromAPI() {
  try {
    const response = await fetch(API_ENVIAR_CASOS);
    const text = await response.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch (error) {
      return [];
    }
    const rows = extractArrayFromResponse(json);
    return rows.map((row, index) => normalizeRemoteTicket(row, index)).filter(ticket => ticket.folio || ticket.fecha || ticket.tecnico || ticket.tienda || ticket.servicio);
  } catch (error) {
    return [];
  }
}

function mergeTickets(remoteTickets, localTickets) {
  const map = new Map();
  remoteTickets.forEach(ticket => {
    const key = `${safeText(ticket.folio).toLowerCase()}|${normalizeDateOnly(ticket.fecha).toLowerCase()}`;
    if (key !== '|') map.set(key, ticket);
  });
  localTickets.forEach(ticket => {
    const key = `${safeText(ticket.folio).toLowerCase()}|${normalizeDateOnly(ticket.fecha).toLowerCase()}`;
    const localTicket = { ...ticket, id: `local:${ticket.id}`, source: 'local' };
    if (key === '|') {
      map.set(`local:${ticket.id}`, localTicket);
      return;
    }
    const remoteTicket = map.get(key);
    if (remoteTicket) {
      localTicket.evidencias = (Array.isArray(localTicket.evidencias) && localTicket.evidencias.length)
        ? localTicket.evidencias
        : (Array.isArray(remoteTicket.evidencias) ? remoteTicket.evidencias : []);
      localTicket.dynamicFields = (Array.isArray(localTicket.dynamicFields) && localTicket.dynamicFields.length)
        ? localTicket.dynamicFields
        : (Array.isArray(remoteTicket.dynamicFields) ? remoteTicket.dynamicFields : []);
      localTicket.checklists = (localTicket.checklists && ((localTicket.checklists.checklist1 || []).length || (localTicket.checklists.checklist2 || []).length))
        ? localTicket.checklists
        : (remoteTicket.checklists || { checklist1: [], checklist2: [] });
      localTicket.raw = remoteTicket.raw || localTicket.raw;
    }
    map.set(key, localTicket);
  });
  return Array.from(map.values()).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
}

async function renderTicketsList() {
  const [remoteTickets, localTickets] = await Promise.all([fetchTicketsFromAPI(), getAllLocalTickets()]);
  APP.remoteTickets = remoteTickets;
  APP.mergedTickets = mergeTickets(remoteTickets, localTickets);

  const search = safeText($('ticketSearch').value).toLowerCase();
  const filtered = APP.mergedTickets.filter(ticket => {
    if (!ticketBelongsToCurrentUser(ticket)) return false;
    const text = [ticket.folio, ticket.tienda, ticket.servicio, ticket.tecnico].join(' ').toLowerCase();
    return !search || text.includes(search);
  });

  $('ticketsTableBody').innerHTML = filtered.length ? filtered.map(ticket => `
    <tr>
      <td>${escapeHtml(ticket.folio)}</td>
      <td>${escapeHtml(normalizeDateOnly(ticket.fecha))}</td>
      <td>${escapeHtml(resolveDisplayName(ticket.tecnico || APP.currentUser))}</td>
      <td>${escapeHtml(ticket.tienda)}</td>
      <td>${escapeHtml(ticket.servicio)}</td>
      <td>
        <div class="table-actions">
          <button class="action-btn" type="button" data-action="edit" data-ref="${escapeHtml(ticket.id)}"><i class="fas fa-pen"></i> Editar</button>
          <button class="action-btn" type="button" data-action="pdf" data-ref="${escapeHtml(ticket.id)}"><i class="fas fa-file-pdf"></i> PDF</button>
        </div>
      </td>
    </tr>
  `).join('') : '<tr><td colspan="6" class="empty-state">No hay tickets guardados para este técnico.</td></tr>';
}

async function getTicketByRef(ref) {
  if (safeText(ref).startsWith('local:')) {
    const id = safeText(ref).split(':')[1];
    return getLocalTicket(id);
  }
  if (safeText(ref).startsWith('api:')) {
    return APP.remoteTickets.find(ticket => ticket.id === ref) || null;
  }
  return null;
}

function restoreChecklistAnswers(checklists) {
  return;
}


async function editTicketByRef(ref) {
  const ticket = await getTicketByRef(ref);
  if (!ticket) return;
  APP.currentTicketId = safeText(ref).startsWith('local:') ? Number(safeText(ref).split(':')[1]) : null;
  $('casoFolio').value = sanitizeDigits(ticket.folio || '');
  $('casoFecha').value = normalizeDateOnly(ticket.fecha) || todayISO();
  syncResolvedUser(ticket.tecnico || APP.currentUser || 'mmontiel ext');
  $('casoMarca').value = ticket.marca || '';
  $('casoTienda').value = ticket.tienda || '';
  $('casoServicio').value = ticket.servicio || '';
  renderDynamicForm();
  (ticket.dynamicFields || []).forEach(field => { if ($(field.id)) $(field.id).value = field.value || ''; });
  if ($('casoStatus')) $('casoStatus').value = safeText(ticket.status || findDynamicValue(ticket, ['casoStatusSolicitud'], ['status de la solicitud']) || '');
  updateStatusFieldVisibility();
  if ($('casoEscaladaArea')) $('casoEscaladaArea').value = safeText(ticket.escaladaArea || findDynamicValue(ticket, ['casoAreaEscalada'], ['área a la que se escaló', 'area a la que se escalo']) || '');
  APP.images = (ticket.evidencias || []).map((item, index) => normalizeEvidenceItem(item, index) || { ...item });
  renderEvidence();
  hydrateEvidenceDataUrls(APP.images, true).catch(() => {});
  restoreChecklistAnswers(ticket.checklists || { checklist1: [], checklist2: [] });
  openView('casosView', 'Casos Técnicos');
}

async function downloadTicketByRef(ref) {
  const ticket = await getTicketByRef(ref);
  if (!ticket) return;
  await generarPDF(ticket);
}

async function enviarCasoAPI(internalData) {
  try {
    const payload = await buildApiPayloadForSave(internalData);
    const response = await fetch(API_ENVIAR_CASOS, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });

    const text = await response.text();
    let result = {};
    try { result = JSON.parse(text); } catch (error) { result = { raw: text }; }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    if (result && result.success === false) throw new Error(result.message || result.error || 'Error al guardar');
    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message || 'Error desconocido al enviar' };
  }
}
window.enviarCasoAPI = enviarCasoAPI;


function buildGeneralRows(data) {
  return [
    ['Folio', data.folio],
    ['Fecha', normalizeDateOnly(data.fecha)],
    ['Técnico', data.tecnico],
    ['Marca', data.marca],
    ['Tienda', data.tienda],
    ['Tipo de servicio', data.servicio],
    ['Status', getTicketStatus(data)]
  ].filter(([, value]) => safeText(value));
}

function getDynamicFieldMap(data) {
  return (data.dynamicFields || []).reduce((acc, field) => {
    if (field?.id) acc[field.id] = safeText(field.value);
    return acc;
  }, {});
}

function buildDetailRows(data) {
  return (data.dynamicFields || []).filter(field => safeText(field.value)).map(field => [field.label, field.value]);
}

function getPdfCaseTitle(data, legacy) {
  return safeText(legacy.DESCRIPCIONBREVE) || safeText(findDynamicValue(data, ['casoDescripcion', 'casoProblemaRed'], ['descripción'])) || 'Sin título';
}

function getPdfSubjectValue(data, legacy) {
  const map = getDynamicFieldMap(data);
  const service = safeText(data.servicio || legacy.TIPOSERVICIO);
  const byService = {
    'Periféricos FST': firstNonEmpty_(map.casoEquipo, map.casoArea),
    'Red': firstNonEmpty_(map.casoTipoFalla, map.casoProblemaRed),
    'SIC': firstNonEmpty_(map.casoEquipo, map.casoAfiliacion),
    'Mibi': firstNonEmpty_(map.casoArea, service),
    'SAP': firstNonEmpty_(map.casoArea, 'Impresión SAP'),
    'Reset': firstNonEmpty_(map.casoSistemaReset, map.casoTipoReset),
    'Help Desk': firstNonEmpty_(map.casoArea, service)
  };
  return safeText(byService[service]) || safeText(legacy.ERRORDETECTADO) || service || 'Sin asunto';
}

function buildPdfCaseRows(data, legacy) {
  const map = getDynamicFieldMap(data);
  const service = safeText(data.servicio || legacy.TIPOSERVICIO);
  const rows = [];

  const push = (label, value) => {
    const clean = safeText(value);
    if (clean) rows.push([label, clean]);
  };

  switch (service) {
    case 'Periféricos FST':
      push('Área', map.casoArea);
      push('Equipo', map.casoEquipo);
      push('N° Serie', map.casoSerie);
      break;
    case 'Red':
      push('Área', map.casoArea);
      push('Sitio o tienda', map.casoSitio);
      push('Tipo de falla', map.casoTipoFalla);
      push('Nombre del gerente', map.casoGerente);
      push('Contacto del gerente', map.casoContacto);
      push('Horario de trabajo', map.casoHorario);
      break;
    case 'SIC':
      push('Área', map.casoArea);
      push('Equipo', map.casoEquipo);
      push('N° Serie', map.casoSerie);
      push('Número de afiliación', map.casoAfiliacion);
      push('N° de reporte Verifone', map.casoReporteVerifone);
      push('Gerente en turno', map.casoGerenteTurno);
      push('Teléfono en turno', map.casoTelefonoTurno);
      push('Horario para visita', map.casoHorarioVisita);
      break;
    case 'Mibi':
      push('Área', map.casoArea);
      break;
    case 'SAP':
      push('Área', map.casoArea);
      break;
    case 'Reset':
      push('Área', map.casoArea);
      push('Usuario', map.casoUsuarioReset);
      push('Plataforma', map.casoSistemaReset);
      push('Tipo de reseteo', map.casoTipoReset);
      break;
    case 'Help Desk':
      push('Área', map.casoArea);
      break;
    default:
      push('Área', legacy.AREAUSUARIO);
      push('Equipo', legacy.TIPODEEQUIPO);
      push('N° Serie', legacy.NUMEROSERIE);
      break;
  }

  return rows;
}

function buildPdfComplementaryRows(data, legacy) {
  const map = getDynamicFieldMap(data);
  const service = safeText(data.servicio || legacy.TIPOSERVICIO);
  const skipIds = new Set([
    'casoArea', 'casoEquipo', 'casoSerie', 'casoDescripcion', 'casoProblemaRed', 'casoDiagnostico', 'casoComentario',
    'casoSitio', 'casoTipoFalla', 'casoGerente', 'casoContacto', 'casoHorario',
    'casoAfiliacion', 'casoReporteVerifone', 'casoGerenteTurno', 'casoTelefonoTurno', 'casoHorarioVisita',
    'casoUsuarioReset', 'casoSistemaReset', 'casoTipoReset', 'casoStatusSolicitud', 'casoAreaEscalada'
  ]);

  const serviceSpecific = [];
  const push = (label, value) => {
    const clean = safeText(value);
    if (clean) serviceSpecific.push([label, clean]);
  };

  push('Status de la solicitud', getTicketStatus(data));
  if (getTicketStatus(data) === 'Escalada') push('Área a la que se escaló', getTicketEscaladaArea(data));

  if (service === 'SIC') {
    push('Dirección exacta de la tienda', map.casoDireccion);
    push('Referencias físicas de la tienda', map.casoReferencias);
    push('Cargador', map.casoCargador);
  }

  const remaining = (data.dynamicFields || [])
    .filter(field => !skipIds.has(field.id))
    .filter(field => safeText(field.value))
    .map(field => [field.label, safeText(field.value)]);

  return [...serviceSpecific, ...remaining];
}

function getCurrentLoginEmailPrefix() {
  const raw = safeText(
    APP.currentLoginRecord?.Usuario ||
    APP.currentLoginRecord?.usuario ||
    APP.currentLoginRecord?.USER ||
    APP.currentLoginRecord?.user ||
    $('user')?.value ||
    ''
  );
  return raw.replace(/\s+/g, '').toLowerCase() || 'usuario';
}

function getCurrentFooterDisplayName() {
  return safeText(APP.currentUser || $('casoTecnico')?.value || 'Usuario');
}


function drawWatermark(doc) {
  try {
    if (!LOGO_AXO_RIGHT_BASE64 || LOGO_AXO_RIGHT_BASE64.length < 50) return;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const wmWidth = 74;
    const wmHeight = 68;
    const x = (pageWidth - wmWidth) / 2;
    const y = (pageHeight - wmHeight) / 2 - 8;
    const wmData = LOGO_AXO_RIGHT_BASE64.startsWith('data:image') ? LOGO_AXO_RIGHT_BASE64 : `data:image/png;base64,${LOGO_AXO_RIGHT_BASE64}`;
    if (typeof doc.GState === 'function' && typeof doc.setGState === 'function') {
      doc.setGState(new doc.GState({ opacity: 0.055 }));
    }
    doc.addImage(wmData, 'PNG', x, y, wmWidth, wmHeight, undefined, 'FAST', 0);

    const signatureLines = [
      getCurrentFooterDisplayName(),
      'Analista Service Desk',
      'Boulevard Manuel Ávila Camacho',
      'No.5, Torre C, Piso 22',
      'Col. Fraccionamiento Lomas de Sotelo,',
      'Municipio de Naucalpan de Juárez,',
      'Estado de México C.P. 53390',
      `${getCurrentLoginEmailPrefix()}@proveedoresga.com`,
      'www.grupoaxo.com'
    ];
    doc.setFont('times', 'normal');
    doc.setFontSize(6.2);
    doc.setTextColor(...PDF_PALETTE.subtle);
    let textY = y + wmHeight + 6;
    signatureLines.forEach(line => {
      doc.text(line, pageWidth / 2, textY, { align: 'center' });
      textY += 2.8;
    });
    if (typeof doc.GState === 'function' && typeof doc.setGState === 'function') {
      doc.setGState(new doc.GState({ opacity: 1 }));
    }
  } catch (error) {}
}

function normalizeBase64ImageForPdf(base64Value) {
  const raw = String(base64Value || '').trim();
  if (!raw) return '';
  return raw.startsWith('data:image') ? raw : `data:image/png;base64,${raw}`;
}
const LOGO_AXO_LEFT_BASE64 = LOGO_AXO_RIGHT_BASE64;
const whaterbase63 = LOGO_AXO_RIGHT_BASE64;

function drawWatermark(doc) {
  try {
    const wm = normalizeBase64ImageForPdf(whaterbase63);
    if (!wm || wm.length < 80) return;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const wmWidth = 118;
    const wmHeight = 36;
    const x = (pageWidth - wmWidth) / 2;
    const y = (pageHeight - wmHeight) / 2 - 4;
    if (typeof doc.GState === 'function' && typeof doc.setGState === 'function') doc.setGState(new doc.GState({ opacity: 0.08 }));
    doc.addImage(wm, 'PNG', x, y, wmWidth, wmHeight, undefined, 'FAST');
    if (typeof doc.GState === 'function' && typeof doc.setGState === 'function') doc.setGState(new doc.GState({ opacity: 1 }));
  } catch (error) { console.warn('No se pudo dibujar marca de agua del PDF:', error); }
}

function drawPdfHeader(doc, pageNumber, totalPages) {
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setFillColor(...PDF_PALETTE.taupe);
  doc.rect(0, 0, pageWidth, 35, 'F');
  const leftLogo = normalizeBase64ImageForPdf(LOGO_AXO_LEFT_BASE64);
  if (leftLogo && leftLogo.length > 80) {
    try { doc.addImage(leftLogo, 'PNG', 15, 7, 26, 26, undefined, 'FAST'); } catch (error) {}
  }
  doc.setTextColor(255, 255, 255);
  doc.setFont('times', 'bold');
  doc.setFontSize(14);
  doc.text('REPORTE TÉCNICO DE INCIDENCIA', 105, 17, { align: 'center' });
  doc.setFont('times', 'normal');
  doc.setFontSize(10);
  doc.text('GRUPO AXO', 105, 25, { align: 'center' });
  doc.setFont('times', 'bold');
  doc.setFontSize(13.5);
  doc.text('Help Desk N1', 105, 31, { align: 'center' });
}

function drawPdfFooter(doc, pageNumber, totalPages) {
  doc.setFont('times', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...PDF_PALETTE.subtle);
  doc.text(`Página ${pageNumber} de ${totalPages} • ${new Date().toLocaleDateString('es-MX')}`, 15, 290, { align: 'left' });
  doc.text('Documento generado por Help Desk N1 - Grupo Axo', 105, 290, { align: 'center' });
}

function addSectionTitle(doc, title, y) {
  doc.setFont('times', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(0, 0, 0);
  doc.text(title, 15, y);
}

function renderSummaryGroups(doc, rows, startY, fillColor = PDF_PALETTE.olive, headTextColor = [255, 255, 255]) {
  let currentY = startY;
  const groups = [];
  for (let i = 0; i < rows.length; i += 3) groups.push(rows.slice(i, i + 3));

  groups.forEach(group => {
    doc.autoTable({
      startY: currentY,
      theme: 'grid',
      styles: { fontSize: 9, cellPadding: 4, valign: 'middle', halign: 'left', lineColor: PDF_PALETTE.line, textColor: PDF_PALETTE.text, font: 'times' },
      headStyles: { fillColor, textColor: headTextColor, halign: 'center', fontSize: 9.5, fontStyle: 'bold', font: 'times' },
      head: [group.map(item => item[0])],
      body: [group.map(item => item[1])],
      margin: { left: 15, right: 15 }
    });
    currentY = doc.lastAutoTable.finalY;
  });

  return currentY;
}

function renderSingleTextSection(doc, title, text, startY, bodyFallback = 'Sin información registrada') {
  addSectionTitle(doc, title, startY);
  doc.autoTable({
    startY: startY + 8,
    theme: 'grid',
    styles: { fontSize: 9, cellPadding: 6, valign: 'top', lineColor: PDF_PALETTE.line, textColor: PDF_PALETTE.text, font: 'times' },
    body: [[safeText(text) || bodyFallback]],
    margin: { left: 15, right: 15 }
  });
  return doc.lastAutoTable.finalY;
}

async function generarPDF(data) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'mm', 'a4');
  const legacy = buildApiPayload(data);
  const serviceTitle = safeText(data.servicio || legacy.TIPOSERVICIO || '');
  const caseTitle = getPdfCaseTitle(data, legacy);
  const subjectValue = getPdfSubjectValue(data, legacy);
  const generalRows = buildGeneralRows(data);
  const caseRows = buildPdfCaseRows(data, legacy);
  const extraRows = buildPdfComplementaryRows(data, legacy);
  const checklistRows = [];

  const pageTop = 45;
  const contentBottom = 258;
  const sectionSpacing = 12;

  drawWatermark(doc);
  drawPdfHeader(doc, 1, 1);

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  if (serviceTitle) {
    const serviceLines = doc.splitTextToSize(serviceTitle, 175);
    doc.text(serviceLines, 105, 43, { align: 'center' });
  }

  const titleLines = doc.splitTextToSize(caseTitle, 175);
  doc.setFontSize(10.5);
  doc.text(titleLines, 105, serviceTitle ? 50 : 46, { align: 'center' });

  let startY = (serviceTitle ? 50 : 46) + (titleLines.length * 5) + 6;

  startY = renderSummaryGroups(doc, generalRows, startY, PDF_PALETTE.taupe, [255, 255, 255]);
  if (caseRows.length) startY = renderSummaryGroups(doc, caseRows, startY, PDF_PALETTE.olive, PDF_PALETTE.text);

  startY += sectionSpacing;
  addSectionTitle(doc, 'ASUNTO Y DESCRIPCIÓN', startY);
  doc.autoTable({
    startY: startY + 8,
    theme: 'grid',
    styles: { fontSize: 9, cellPadding: 6, valign: 'top', lineColor: PDF_PALETTE.line, textColor: PDF_PALETTE.text, font: 'times' },
    headStyles: { fillColor: PDF_PALETTE.cream, textColor: PDF_PALETTE.text, fontSize: 9.5, fontStyle: 'bold', font: 'times' },
    head: [['Asunto', 'Descripción']],
    body: [[subjectValue || serviceTitle || 'Sin asunto', legacy.DESCRIPCIONBREVE || 'Sin información registrada']],
    margin: { left: 15, right: 15 }
  });

  startY = doc.lastAutoTable.finalY + sectionSpacing;
  if (safeText(legacy.DIAGNOSTICO)) {
    startY = renderSingleTextSection(doc, 'DIAGNÓSTICO TÉCNICO', legacy.DIAGNOSTICO, startY);
    startY += sectionSpacing;
  }

  if (extraRows.length) {
    addSectionTitle(doc, 'DETALLES COMPLEMENTARIOS', startY);
    startY = renderSummaryGroups(doc, extraRows, startY + 8, PDF_PALETTE.sand, PDF_PALETTE.text);
    startY += sectionSpacing;
  }

  if (safeText(legacy.SOLUCION)) {
    const solutionTitle = ['Reset', 'Help Desk'].includes(serviceTitle) ? 'SOLUCIÓN APLICADA' : 'COMENTARIO / APROBACIÓN';
    startY = renderSingleTextSection(doc, solutionTitle, legacy.SOLUCION, startY);
    startY += sectionSpacing;
  }

  const images = Array.isArray(data.evidencias) ? data.evidencias.map((item, index) => normalizeEvidenceItem(item, index)).filter(Boolean) : [];
  await hydrateEvidenceDataUrls(images);
  if (images.length) {
    const imgWidth = 45;
    const imgHeight = 35;
    const gapX = 15;
    const labelGap = 8;
    const rowGap = 18;
    const startX = 18;
    const maxX = 192;

    if (startY + 55 > contentBottom) {
      doc.addPage();
      drawWatermark(doc);
      drawPdfHeader(doc, doc.internal.getNumberOfPages(), 1);
      startY = pageTop;
    }

    addSectionTitle(doc, 'EVIDENCIA', startY);
    let x = startX;
    let y = startY + 10;
    let lastImageBottom = y;

    for (let i = 0; i < images.length; i++) {
      if (x + imgWidth > maxX) {
        x = startX;
        y += imgHeight + labelGap + rowGap;
      }
      if (y + imgHeight + labelGap + 10 > contentBottom) {
        doc.addPage();
        drawWatermark(doc);
        drawPdfHeader(doc, doc.internal.getNumberOfPages(), 1);
        x = startX;
        y = pageTop;
      }
      try {
        const img = images[i].dataUrl;
        if (!img) continue;
        const format = img.includes('image/png') ? 'PNG' : 'JPEG';
        doc.addImage(img, format, x, y, imgWidth, imgHeight);
        doc.setFont('times', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text(`Foto ${i + 1}`, x + imgWidth / 2, y + imgHeight + labelGap, { align: 'center' });
        doc.setTextColor(0, 0, 0);
        lastImageBottom = Math.max(lastImageBottom, y + imgHeight + labelGap);
      } catch (error) {}
      x += imgWidth + gapX;
    }
    startY = lastImageBottom + 16;
  }

  if (checklistRows.length) {
    if (startY + 18 > contentBottom) {
      doc.addPage();
      drawWatermark(doc);
      drawPdfHeader(doc, doc.internal.getNumberOfPages(), 1);
      startY = pageTop;
    }
    addSectionTitle(doc, 'CHECKLIST DE VALIDACIÓN', startY);
    doc.autoTable({
      startY: startY + 8,
      head: [['Punto de Validación', 'Resultado']],
      body: checklistRows,
      theme: 'grid',
      styles: { fontSize: 8.5, cellPadding: 4, valign: 'middle', lineColor: [210, 210, 210], textColor: PDF_PALETTE.text, font: 'times' },
      headStyles: { fillColor: PDF_PALETTE.sand, textColor: [0, 0, 0], halign: 'center', fontSize: 9, fontStyle: 'bold', font: 'times' },
      columnStyles: { 0: { cellWidth: 130, halign: 'left' }, 1: { cellWidth: 50, halign: 'center', fontStyle: 'bold' } },
      margin: { top: pageTop, bottom: 34, left: 15, right: 15 },
      pageBreak: 'auto',
      rowPageBreak: 'auto',
      didParseCell: function(hook) {
        if (hook.section === 'body' && hook.column.index === 1) {
          if (hook.cell.raw === 'Sí') hook.cell.styles.textColor = [22, 163, 74];
          else if (hook.cell.raw === 'No') hook.cell.styles.textColor = [220, 38, 38];
          else if (hook.cell.raw === 'N/A') hook.cell.styles.textColor = [100, 100, 100];
        }
      }
    });
  }

  const totalPages = doc.internal.getNumberOfPages();
  for (let page = 1; page <= totalPages; page++) {
    doc.setPage(page);
    drawWatermark(doc);
    drawPdfHeader(doc, page, totalPages);
    drawPdfFooter(doc, page, totalPages);
  }

  const filename = `HelpDesk_N1_Reporte_${sanitizeFilePart(data.folio)}_${sanitizeFilePart(normalizeDateOnly(data.fecha) || todayISO())}.pdf`;
  doc.save(filename);
}

async function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ServiceDeskN1DB', 1);
    request.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('tickets')) {
        const store = db.createObjectStore('tickets', { keyPath: 'id', autoIncrement: true });
        store.createIndex('folio', 'folio', { unique: false });
        store.createIndex('updatedAt', 'updatedAt', { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveTicketLocal(ticket) {
  if (!APP.db) APP.db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = APP.db.transaction('tickets', 'readwrite');
    const store = tx.objectStore('tickets');
    const payload = stripImagesForPersistence(ticket);
    if (!payload.createdAt) payload.createdAt = Date.now();
    if (!payload.updatedAt) payload.updatedAt = Date.now();
    const numericId = Number(payload.id);
    if (!Number.isFinite(numericId) || numericId <= 0) {
      delete payload.id;
    } else {
      payload.id = numericId;
    }
    const request = payload.id ? store.put(payload) : store.add(payload);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAllLocalTickets() {
  if (!APP.db) APP.db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = APP.db.transaction('tickets', 'readonly');
    const store = tx.objectStore('tickets');
    const request = store.getAll();
    request.onsuccess = () => resolve((request.result || []).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0)));
    request.onerror = () => reject(request.error);
  });
}

async function getLocalTicket(id) {
  if (!APP.db) APP.db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = APP.db.transaction('tickets', 'readonly');
    const store = tx.objectStore('tickets');
    const request = store.get(Number(id));
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

function normalizeRemoteTicket(record, index) {
  const rawChecklist = record.CHECKLIST || record.checklist || record.CHECKLIST1 || '';
  let parsedChecklist = { checklist1: [], checklist2: [] };
  try {
    const parsed = JSON.parse(rawChecklist);
    if (parsed && typeof parsed === 'object') parsedChecklist = { checklist1: parsed.checklist1 || [], checklist2: parsed.checklist2 || [] };
  } catch (error) {}

  let dynamicFields = [];
  try {
    const parsed = JSON.parse(record.CAMPOSDINAMICOS || record.camposDinamicos || '[]');
    if (Array.isArray(parsed)) dynamicFields = parsed;
  } catch (error) {}

  if (!dynamicFields.length) {
    const flatPairs = [
      ['casoArea', 'Área', record.AREAUSUARIO || record.area],
      ['casoEquipo', 'Equipo', record.TIPODEEQUIPO || record.equipo],
      ['casoSerie', 'No. Serie', record.NUMEROSERIE || record.numeroSerie],
      ['casoDescripcion', 'Descripción del problema', record.DESCRIPCIONBREVE || record.descripcion],
      ['casoDiagnostico', 'Diagnóstico', record.DIAGNOSTICO || record.diagnostico],
      ['casoComentario', 'Comentario', record.SOLUCION || record.comentario]
    ];
    dynamicFields = flatPairs.filter(([, , value]) => safeText(value)).map(([id, label, value]) => ({ id, label, value, required: false }));
  }

  return {
    id: `api:${index}`,
    source: 'api',
    folio: safeText(record.FOLIO || record.folio || record.Folio),
    fecha: normalizeDateOnly(record.FECHA || record.fecha || record.Fecha),
    tecnico: safeText(record.TECNICO || record.tecnico || record.Técnico),
    marca: safeText(record.MARCA || record.marca),
    tienda: safeText(record.SUCURSAL || record.TIENDA || record.tienda || record.sucursal),
    servicio: safeText(record.TIPOSERVICIO || record.servicio || record['Tipo de servicio']),
    dynamicFields,
    checklists: parsedChecklist,
    evidencias: extractEvidenceFromRecord(record),
    updatedAt: Date.parse(record.timestamp || record.FECHA || '') || Date.now(),
    createdAt: Date.parse(record.timestamp || record.FECHA || '') || Date.now(),
    raw: record
  };
}

async function fetchTicketsFromAPI() {
  try {
    const response = await fetch(API_ENVIAR_CASOS);
    const text = await response.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch (error) {
      return [];
    }
    const rows = extractArrayFromResponse(json);
    return rows.map((row, index) => normalizeRemoteTicket(row, index)).filter(ticket => ticket.folio || ticket.fecha || ticket.tecnico || ticket.tienda || ticket.servicio);
  } catch (error) {
    return [];
  }
}

function mergeTickets(remoteTickets, localTickets) {
  const map = new Map();
  remoteTickets.forEach(ticket => {
    const key = `${safeText(ticket.folio).toLowerCase()}|${normalizeDateOnly(ticket.fecha).toLowerCase()}`;
    if (key !== '|') map.set(key, ticket);
  });
  localTickets.forEach(ticket => {
    const key = `${safeText(ticket.folio).toLowerCase()}|${normalizeDateOnly(ticket.fecha).toLowerCase()}`;
    const localTicket = { ...ticket, id: `local:${ticket.id}`, source: 'local' };
    if (key === '|') {
      map.set(`local:${ticket.id}`, localTicket);
      return;
    }
    const remoteTicket = map.get(key);
    if (remoteTicket) {
      localTicket.evidencias = (Array.isArray(localTicket.evidencias) && localTicket.evidencias.length)
        ? localTicket.evidencias
        : (Array.isArray(remoteTicket.evidencias) ? remoteTicket.evidencias : []);
      localTicket.dynamicFields = (Array.isArray(localTicket.dynamicFields) && localTicket.dynamicFields.length)
        ? localTicket.dynamicFields
        : (Array.isArray(remoteTicket.dynamicFields) ? remoteTicket.dynamicFields : []);
      localTicket.checklists = (localTicket.checklists && ((localTicket.checklists.checklist1 || []).length || (localTicket.checklists.checklist2 || []).length))
        ? localTicket.checklists
        : (remoteTicket.checklists || { checklist1: [], checklist2: [] });
      localTicket.raw = remoteTicket.raw || localTicket.raw;
    }
    map.set(key, localTicket);
  });
  return Array.from(map.values()).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
}

async function renderTicketsList() {
  const [remoteTickets, localTickets] = await Promise.all([fetchTicketsFromAPI(), getAllLocalTickets()]);
  APP.remoteTickets = remoteTickets;
  APP.mergedTickets = mergeTickets(remoteTickets, localTickets);

  const search = safeText($('ticketSearch').value).toLowerCase();
  const filtered = APP.mergedTickets.filter(ticket => {
    if (!ticketBelongsToCurrentUser(ticket)) return false;
    const text = [ticket.folio, ticket.tienda, ticket.servicio, ticket.tecnico].join(' ').toLowerCase();
    return !search || text.includes(search);
  });

  $('ticketsTableBody').innerHTML = filtered.length ? filtered.map(ticket => `
    <tr>
      <td>${escapeHtml(ticket.folio)}</td>
      <td>${escapeHtml(normalizeDateOnly(ticket.fecha))}</td>
      <td>${escapeHtml(resolveDisplayName(ticket.tecnico || APP.currentUser))}</td>
      <td>${escapeHtml(ticket.tienda)}</td>
      <td>${escapeHtml(ticket.servicio)}</td>
      <td>
        <div class="table-actions">
          <button class="action-btn" type="button" data-action="edit" data-ref="${escapeHtml(ticket.id)}"><i class="fas fa-pen"></i> Editar</button>
          <button class="action-btn" type="button" data-action="pdf" data-ref="${escapeHtml(ticket.id)}"><i class="fas fa-file-pdf"></i> PDF</button>
        </div>
      </td>
    </tr>
  `).join('') : '<tr><td colspan="6" class="empty-state">No hay tickets guardados para este técnico.</td></tr>';
}

async function getTicketByRef(ref) {
  if (safeText(ref).startsWith('local:')) {
    const id = safeText(ref).split(':')[1];
    return getLocalTicket(id);
  }
  if (safeText(ref).startsWith('api:')) {
    return APP.remoteTickets.find(ticket => ticket.id === ref) || null;
  }
  return null;
}

function restoreChecklistAnswers(checklists) {
  return;
}


async function editTicketByRef(ref) {
  const ticket = await getTicketByRef(ref);
  if (!ticket) return;
  APP.currentTicketId = safeText(ref).startsWith('local:') ? Number(safeText(ref).split(':')[1]) : null;
  $('casoFolio').value = sanitizeDigits(ticket.folio || '');
  $('casoFecha').value = normalizeDateOnly(ticket.fecha) || todayISO();
  syncResolvedUser(ticket.tecnico || APP.currentUser || 'mmontiel ext');
  $('casoMarca').value = ticket.marca || '';
  $('casoTienda').value = ticket.tienda || '';
  $('casoServicio').value = ticket.servicio || '';
  renderDynamicForm();
  (ticket.dynamicFields || []).forEach(field => { if ($(field.id)) $(field.id).value = field.value || ''; });
  APP.images = (ticket.evidencias || []).map((item, index) => normalizeEvidenceItem(item, index) || { ...item });
  renderEvidence();
  hydrateEvidenceDataUrls(APP.images, true).catch(() => {});
  restoreChecklistAnswers(ticket.checklists || { checklist1: [], checklist2: [] });
  openView('casosView', 'Casos Técnicos');
}

async function downloadTicketByRef(ref) {
  const ticket = await getTicketByRef(ref);
  if (!ticket) return;
  await generarPDF(ticket);
}

async function enviarCasoAPI(internalData) {
  try {
    const payload = await buildApiPayloadForSave(internalData);
    const response = await fetch(API_ENVIAR_CASOS, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });

    const text = await response.text();
    let result = {};
    try { result = JSON.parse(text); } catch (error) { result = { raw: text }; }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    if (result && result.success === false) throw new Error(result.message || result.error || 'Error al guardar');
    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message || 'Error desconocido al enviar' };
  }
}
window.enviarCasoAPI = enviarCasoAPI;

function buildGeneralRows(data) {
  return [
    ['Folio', data.folio],
    ['Fecha', normalizeDateOnly(data.fecha)],
    ['Técnico', data.tecnico],
    ['Marca', data.marca],
    ['Tienda', data.tienda],
    ['Tipo de servicio', data.servicio],
    ['Status', getTicketStatus(data)]
  ].filter(([, value]) => safeText(value));
}

function buildDetailRows(data) {
  return (data.dynamicFields || []).filter(field => safeText(field.value)).map(field => [field.label, field.value]);
}

function getPdfCaseTitle(data, legacy) {
  return safeText(legacy.DESCRIPCIONBREVE) || safeText(findDynamicValue(data, ['casoDescripcion', 'casoProblemaRed'], ['descripción'])) || 'Sin título';
}


function drawWatermark(doc) {
  try {
    if (!LOGO_AXO_RIGHT_BASE64 || LOGO_AXO_RIGHT_BASE64.length < 50) return;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const wmWidth = 74;
    const wmHeight = 68;
    const x = (pageWidth - wmWidth) / 2;
    const y = (pageHeight - wmHeight) / 2 - 8;
    const wmData = LOGO_AXO_RIGHT_BASE64.startsWith('data:image') ? LOGO_AXO_RIGHT_BASE64 : `data:image/png;base64,${LOGO_AXO_RIGHT_BASE64}`;
    if (typeof doc.GState === 'function' && typeof doc.setGState === 'function') {
      doc.setGState(new doc.GState({ opacity: 0.055 }));
    }
    doc.addImage(wmData, 'PNG', x, y, wmWidth, wmHeight, undefined, 'FAST', 0);

    const signatureLines = [
      getCurrentFooterDisplayName(),
      'Analista Service Desk',
      'Boulevard Manuel Ávila Camacho',
      'No.5, Torre C, Piso 22',
      'Col. Fraccionamiento Lomas de Sotelo,',
      'Municipio de Naucalpan de Juárez,',
      'Estado de México C.P. 53390',
      `${getCurrentLoginEmailPrefix()}@proveedoresga.com`,
      'www.grupoaxo.com'
    ];
    doc.setFont('times', 'normal');
    doc.setFontSize(6.2);
    doc.setTextColor(...PDF_PALETTE.subtle);
    let textY = y + wmHeight + 6;
    signatureLines.forEach(line => {
      doc.text(line, pageWidth / 2, textY, { align: 'center' });
      textY += 2.8;
    });
    if (typeof doc.GState === 'function' && typeof doc.setGState === 'function') {
      doc.setGState(new doc.GState({ opacity: 1 }));
    }
  } catch (error) {}
}

function drawPdfHeader(doc, pageNumber, totalPages) {
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setFillColor(...PDF_PALETTE.taupe);
  doc.rect(0, 0, pageWidth, 35, 'F');

  if (LOGO_AXO_LEFT_BASE64 && LOGO_AXO_LEFT_BASE64.length > 50) {
    try {
      const leftData = LOGO_AXO_LEFT_BASE64.startsWith('data:image') ? LOGO_AXO_LEFT_BASE64 : `data:image/png;base64,${LOGO_AXO_LEFT_BASE64}`;
      doc.addImage(leftData, 'PNG', 15, 7, 25, 25);
    } catch (error) {}
  }

  if (LOGO_AXO_RIGHT_BASE64 && LOGO_AXO_RIGHT_BASE64.length > 50) {
    try {
      const rightData = LOGO_AXO_RIGHT_BASE64.startsWith('data:image') ? LOGO_AXO_RIGHT_BASE64 : `data:image/png;base64,${LOGO_AXO_RIGHT_BASE64}`;
      doc.addImage(rightData, 'PNG', 170, 7, 25, 25);
    } catch (error) {}
  }

  doc.setTextColor(255, 255, 255);
  doc.setFont('times', 'bold');
  doc.setFontSize(14);
  doc.text('REPORTE TÉCNICO DE INCIDENCIA', 105, 18, { align: 'center' });
  doc.setFont('times', 'normal');
  doc.setFontSize(10);
  doc.text('GRUPO AXO', 105, 26, { align: 'center' });
  doc.setFont('times', 'bold');
  doc.setFontSize(14);
  doc.text('Help Desk N1', 105, 32, { align: 'center' });
}


function drawPdfFooter(doc, pageNumber, totalPages) {
  const displayName = getCurrentFooterDisplayName();
  const emailPrefix = getCurrentLoginEmailPrefix();
  const pageText = `Página ${pageNumber} de ${totalPages} • ${new Date().toLocaleDateString('es-MX')}`;

  doc.setFont('times', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(95, 95, 95);
  doc.text(pageText, 15, 290, { align: 'left' });
  doc.text('Documento generado por Help Desk N1 - Grupo Axo', 105, 290, { align: 'center' });

  const signatureLines = [
    displayName,
    'Analista Service Desk',
    'Boulevard Manuel Ávila Camacho',
    'No.5, Torre C, Piso 22',
    'Col. Fraccionamiento Lomas de Sotelo,',
    'Municipio de Naucalpan de Juárez,',
    'Estado de México C.P. 53390',
    `${emailPrefix}@proveedoresga.com`,
    'www.grupoaxo.com'
  ];

  doc.setFont('times', 'normal');
  doc.setFontSize(6.4);
  doc.setTextColor(125, 125, 125);
  let y = 260.4;
  signatureLines.forEach(line => {
    doc.text(line, 195, y, { align: 'right' });
    y += 2.9;
  });

  if (LOGO_AXO_RIGHT_BASE64 && LOGO_AXO_RIGHT_BASE64.length > 50) {
    try {
      const img = LOGO_AXO_RIGHT_BASE64.startsWith('data:image') ? LOGO_AXO_RIGHT_BASE64 : `data:image/png;base64,${LOGO_AXO_RIGHT_BASE64}`;
      if (typeof doc.GState === 'function' && typeof doc.setGState === 'function') {
        doc.setGState(new doc.GState({ opacity: 0.22 }));
      }
      doc.addImage(img, 'PNG', 176, 286.3, 16, 5);
      if (typeof doc.GState === 'function' && typeof doc.setGState === 'function') {
        doc.setGState(new doc.GState({ opacity: 1 }));
      }
    } catch (error) {}
  }
}

function addSectionTitle(doc, title, y) {
  doc.setFont('times', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(0, 0, 0);
  doc.text(title, 15, y);
}

async function generarPDF(data) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'mm', 'a4');
  const legacy = buildApiPayload(data);
  const serviceTitle = safeText(data.servicio || legacy.TIPOSERVICIO || '');
  const caseTitle = getPdfCaseTitle(data, legacy);
  const caseRows = buildPdfCaseRows(data, legacy);
  const complementaryRows = buildPdfComplementaryRows(data, legacy);
  const subjectValue = getPdfSubjectValue(data, legacy);
  const descriptionValue = safeText(legacy.DESCRIPCIONBREVE) || 'Sin información registrada';
  const diagnosticValue = safeText(legacy.DIAGNOSTICO) || 'Sin información registrada';
  const commentValue = safeText(legacy.SOLUCION);
  const checklistRows = [];

  const sectionSpacing = 14;
  const sectionTableGap = 8;
  const pageTop = 45;
  const contentBottom = 268;
  let startY;

  const ensurePageSpace = (needed = 18) => {
    if ((startY || pageTop) + needed > contentBottom) {
      doc.addPage();
      startY = pageTop;
    }
  };

  const drawInfoChunks = (rows, headFillColor, options = {}) => {
    if (!rows.length) return;
    const headTextColor = options.headTextColor || [0, 0, 0];
    const bodyFillColor = options.bodyFillColor || [255, 255, 255];
    const bodyTextColor = options.bodyTextColor || PDF_PALETTE.text;
    for (let i = 0; i < rows.length; i += 3) {
      const chunk = rows.slice(i, i + 3);
      ensurePageSpace(18 + (i === 0 ? 0 : 4));
      doc.autoTable({
        startY,
        theme: 'grid',
        styles: { fontSize: 9, cellPadding: 4, valign: 'middle', halign: 'left', lineColor: PDF_PALETTE.line, textColor: bodyTextColor, font: 'times' },
        headStyles: { fillColor: headFillColor, textColor: headTextColor, halign: 'center', fontSize: 9.2, fontStyle: 'bold', font: 'times' },
        bodyStyles: { fillColor: bodyFillColor, textColor: bodyTextColor },
        head: [chunk.map(item => item[0])],
        body: [chunk.map(item => item[1])],
        margin: { left: 15, right: 15 }
      });
      startY = doc.lastAutoTable.finalY;
    }
  };

  drawWatermark(doc);
  drawPdfHeader(doc, 1, 1);

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  if (serviceTitle) {
    const serviceLines = doc.splitTextToSize(serviceTitle, 175);
    doc.text(serviceLines, 105, 43, { align: 'center' });
  }

  const titleLines = doc.splitTextToSize(caseTitle, 175);
  doc.setFontSize(10.5);
  doc.text(titleLines, 105, serviceTitle ? 50 : 46, { align: 'center' });
  startY = (serviceTitle ? 50 : 46) + (titleLines.length * 5) + 6;

  doc.autoTable({
    startY,
    theme: 'grid',
    styles: { fontSize: 9, cellPadding: 4, valign: 'middle', halign: 'left', lineColor: PDF_PALETTE.line, textColor: PDF_PALETTE.text, font: 'times' },
    headStyles: { fillColor: PDF_PALETTE.taupe, textColor: [255, 255, 255], halign: 'center', fontSize: 9.5, fontStyle: 'bold', font: 'times' },
    head: [['Folio', 'Fecha', 'Técnico', 'Sucursal']],
    body: [[legacy.FOLIO || '', legacy.FECHA || '', legacy.TECNICO || '', legacy.SUCURSAL || '']],
    margin: { left: 15, right: 15 }
  });
  startY = doc.lastAutoTable.finalY;

  if (caseRows.length) {
    startY += 1;
    drawInfoChunks(caseRows, PDF_PALETTE.olive);
  }

  startY += sectionSpacing;
  ensurePageSpace(28);
  addSectionTitle(doc, 'ASUNTO Y DESCRIPCIÓN', startY);
  doc.autoTable({
    startY: startY + sectionTableGap,
    theme: 'grid',
    styles: { fontSize: 9, cellPadding: 6, valign: 'top', lineColor: PDF_PALETTE.line, textColor: PDF_PALETTE.text, font: 'times' },
    headStyles: { fillColor: PDF_PALETTE.cream, textColor: PDF_PALETTE.text, fontSize: 9.5, fontStyle: 'bold', font: 'times' },
    head: [['Asunto', 'Descripción']],
    body: [[subjectValue || 'Sin información registrada', descriptionValue]],
    margin: { left: 15, right: 15 }
  });
  startY = doc.lastAutoTable.finalY + sectionSpacing;

  ensurePageSpace(22);
  addSectionTitle(doc, 'DIAGNÓSTICO TÉCNICO', startY);
  doc.autoTable({
    startY: startY + sectionTableGap,
    theme: 'grid',
    styles: { fontSize: 9, cellPadding: 6, valign: 'top', lineColor: PDF_PALETTE.line, textColor: PDF_PALETTE.text, font: 'times' },
    body: [[diagnosticValue]],
    margin: { left: 15, right: 15 }
  });
  startY = doc.lastAutoTable.finalY + sectionSpacing;

  if (complementaryRows.length) {
    ensurePageSpace(20);
    addSectionTitle(doc, 'DATOS COMPLEMENTARIOS', startY);
    startY += sectionTableGap;
    drawInfoChunks(complementaryRows, [255, 255, 255], { headTextColor: [0, 0, 0], bodyFillColor: [255, 255, 255] });
    startY += sectionSpacing;
  }

  if (commentValue) {
    ensurePageSpace(22);
    const commentTitle = ['Reset', 'Help Desk'].includes(serviceTitle) ? 'SOLUCIÓN APLICADA' : 'COMENTARIO / APROBACIÓN';
    addSectionTitle(doc, commentTitle, startY);
    doc.autoTable({
      startY: startY + sectionTableGap,
      theme: 'grid',
      styles: { fontSize: 9, cellPadding: 6, valign: 'top', lineColor: PDF_PALETTE.line, textColor: PDF_PALETTE.text, font: 'times' },
      body: [[commentValue]],
      margin: { left: 15, right: 15 }
    });
    startY = doc.lastAutoTable.finalY + 18;
  }

  const images = Array.isArray(data.evidencias) ? data.evidencias.map((item, index) => normalizeEvidenceItem(item, index)).filter(Boolean) : [];
  await hydrateEvidenceDataUrls(images);
  if (images.length) {
    const imgWidth = 45;
    const imgHeight = 35;
    const gapX = 15;
    const labelGap = 8;
    const rowGap = 18;
    const startX = 18;
    const maxX = 192;
    const titleHeight = 10;

    if (startY + titleHeight + imgHeight + labelGap + 10 > contentBottom) {
      doc.addPage();
      startY = pageTop;
    }

    addSectionTitle(doc, 'EVIDENCIA', startY);
    let x = startX;
    let y = startY + 10;
    let lastImageBottom = y;

    for (let i = 0; i < images.length; i++) {
      if (x + imgWidth > maxX) {
        x = startX;
        y += imgHeight + labelGap + rowGap;
      }
      if (y + imgHeight + labelGap + 10 > contentBottom) {
        doc.addPage();
        x = startX;
        y = pageTop;
      }
      try {
        const img = images[i].dataUrl;
        if (!img) continue;
        const format = img.includes('image/png') ? 'PNG' : 'JPEG';
        doc.addImage(img, format, x, y, imgWidth, imgHeight);
        doc.setFont('times', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text(`Foto ${i + 1}`, x + imgWidth / 2, y + imgHeight + labelGap, { align: 'center' });
        doc.setTextColor(0, 0, 0);
        lastImageBottom = Math.max(lastImageBottom, y + imgHeight + labelGap);
      } catch (error) {}
      x += imgWidth + gapX;
    }
    startY = lastImageBottom + 20;
  }

  if (checklistRows.length) {
    ensurePageSpace(20);
    addSectionTitle(doc, 'CHECKLIST DE VALIDACIÓN', startY);
    doc.autoTable({
      startY: startY + sectionTableGap,
      head: [['Punto de Validación', 'Resultado']],
      body: checklistRows,
      theme: 'grid',
      styles: { fontSize: 8.5, cellPadding: 4, valign: 'middle', lineColor: [210, 210, 210], textColor: PDF_PALETTE.text, font: 'times' },
      headStyles: { fillColor: PDF_PALETTE.sand, textColor: [0, 0, 0], halign: 'center', fontSize: 9, fontStyle: 'bold', font: 'times' },
      columnStyles: { 0: { cellWidth: 130, halign: 'left' }, 1: { cellWidth: 50, halign: 'center', fontStyle: 'bold' } },
      margin: { top: pageTop, bottom: 26, left: 15, right: 15 },
      pageBreak: 'auto',
      rowPageBreak: 'auto',
      didParseCell: function(hook) {
        if (hook.section === 'body' && hook.column.index === 1) {
          if (hook.cell.raw === 'Sí') hook.cell.styles.textColor = [22, 163, 74];
          else if (hook.cell.raw === 'No') hook.cell.styles.textColor = [220, 38, 38];
          else if (hook.cell.raw === 'N/A') hook.cell.styles.textColor = [100, 100, 100];
        }
      }
    });
  }

  const totalPages = doc.internal.getNumberOfPages();
  for (let page = 1; page <= totalPages; page++) {
    doc.setPage(page);
    drawWatermark(doc);
    drawPdfHeader(doc, page, totalPages);
    drawPdfFooter(doc, page, totalPages);
  }

  const filename = `HelpDesk_N1_Reporte_${sanitizeFilePart(data.folio)}_${sanitizeFilePart(normalizeDateOnly(data.fecha) || todayISO())}.pdf`;
  doc.save(filename);
}
async function guardarCasoPDF() {
  const data = collectFormData();
  const missing = validateFormData(data);
  if (missing.length) {
    alert(`⚠️ Campos obligatorios pendientes:\n\n• ${missing.join('\n• ')}`);
    return;
  }

  const button = $('guardarPdfBtn');
  const originalHtml = button.innerHTML;
  button.disabled = true;
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Guardando...';

  try {
    const [apiResult, savedId] = await Promise.all([
      enviarCasoAPI(data),
      saveTicketLocal(data)
    ]);
    if (!apiResult.success) throw new Error(apiResult.error || 'No se pudo registrar en la API');
    APP.currentTicketId = Number(savedId);
    await generarPDF({ ...data, id: APP.currentTicketId });
    await renderTicketsList();
    alert(`✅ Caso guardado correctamente\n\nFolio: ${data.folio}`);
    nuevoCaso();
  } catch (error) {
    alert(`❌ Error al guardar el caso:\n\n${error.message || error}`);
  } finally {
    button.disabled = false;
    button.innerHTML = originalHtml;
  }
}
window.guardarCasoPDF = guardarCasoPDF;

function nuevoCaso() {
  APP.currentTicketId = null;
  $('casoFolio').value = '';
  $('casoFecha').value = todayISO();
  syncResolvedUser(APP.currentUser || 'mmontiel ext');
  $('casoMarca').value = '';
  $('casoTienda').value = '';
  $('casoServicio').value = '';
  if ($('casoStatus')) $('casoStatus').value = '';
  if ($('casoEscaladaArea')) $('casoEscaladaArea').value = '';
  updateStatusFieldVisibility();
  APP.images = [];
  renderEvidence();
  renderDynamicForm();
}
window.nuevoCaso = nuevoCaso;

let chatbotLoaded = false;
function toggleChatbot() {
  const win = $('chatbotWindow');
  const iframe = $('voiceflowIframe');
  win.classList.toggle('active');
  if (win.classList.contains('active') && !chatbotLoaded) {
    iframe.src = 'https://creator.voiceflow.com/share/693afada764078aca74405a8/development';
    chatbotLoaded = true;
  }
}
window.toggleChatbot = toggleChatbot;

function toggleComms() {
  $('commsWindow').classList.toggle('active');
}
window.toggleComms = toggleComms;

function closeFloatingPopups(event) {
  const commsWindow = $('commsWindow');
  const commsBtn = document.querySelector('.btn-comms');
  if (commsWindow.classList.contains('active') && !commsWindow.contains(event.target) && commsBtn && !commsBtn.contains(event.target)) {
    commsWindow.classList.remove('active');
  }
  const chatbotWindow = $('chatbotWindow');
  const chatbotBtn = document.querySelector('.btn-chat');
  if (chatbotWindow.classList.contains('active') && !chatbotWindow.contains(event.target) && chatbotBtn && !chatbotBtn.contains(event.target)) {
    chatbotWindow.classList.remove('active');
  }
}

function handleSidebarNavClick(event) {
  const btn = event.target.closest('.nav-item');
  if (!btn) return;
  const { view, title, source, url } = btn.dataset;
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }
  if (view === 'ticketsView') {
    openView('ticketsView', title);
    renderTicketsList();
    return;
  }
  if (view === 'casosView') {
    openView('casosView', title);
    return;
  }
  if (view === 'metricsView') {
    if (!isAnalyticsAllowedUser()) return;
    openView('metricsView', title);
    renderMetricsDashboard();
    return;
  }
  if (view === 'dataView' && source) {
    openView('dataView', title);
    loadDataSource(source, true);
  }
}

function handleTicketsTableClick(event) {
  const btn = event.target.closest('[data-action]');
  if (!btn) return;
  const ref = btn.dataset.ref;
  const action = btn.dataset.action;
  if (action === 'edit') editTicketByRef(ref);
  if (action === 'pdf') downloadTicketByRef(ref);
}


function getMetricsDateRange() {
  const mode = safeText($('metricsRangeMode')?.value || 'month');
  const today = new Date();
  let start = new Date(today.getFullYear(), today.getMonth(), 1);
  let end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  if (mode === 'year') {
    const year = Number($('metricsYearFilter')?.value || today.getFullYear());
    start = new Date(year, 0, 1);
    end = new Date(year, 11, 31);
  } else if (mode === 'custom') {
    start = new Date(($('metricsStartDate')?.value || todayISO()) + 'T00:00:00');
    end = new Date(($('metricsEndDate')?.value || todayISO()) + 'T23:59:59');
  } else {
    const monthValue = safeText($('metricsMonthFilter')?.value);
    if (monthValue) {
      const [year, month] = monthValue.split('-').map(Number);
      start = new Date(year, month - 1, 1);
      end = new Date(year, month, 0);
    }
  }
  return { mode, start, end };
}
function updateMetricsRangeFields() {
  const mode = safeText($('metricsRangeMode')?.value || 'month');
  $('metricsMonthWrap')?.classList.toggle('hidden', mode !== 'month');
  $('metricsYearWrap')?.classList.toggle('hidden', mode !== 'year');
  const custom = mode !== 'custom';
  $('metricsStartWrap')?.classList.toggle('hidden', custom);
  $('metricsEndWrap')?.classList.toggle('hidden', custom);
}
function getTicketMetricStatus(ticket) {
  return normalizeStatusLabel(getTicketStatus(ticket));
}
function getTicketMetricDate(ticket) {
  const normalized = normalizeDateOnly(ticket.fecha);
  const fromDate = normalized ? new Date(normalized + 'T12:00:00') : null;
  if (fromDate && !Number.isNaN(fromDate.getTime())) return fromDate;
  const fallback = new Date(ticket.updatedAt || ticket.createdAt || Date.now());
  return Number.isNaN(fallback.getTime()) ? new Date() : fallback;
}
function getTicketMetricUser(ticket) {
  const raw = ticket?.raw || {};
  const candidates = [
    ticket?.tecnico,
    raw.TECNICO,
    raw.tecnico,
    raw.Técnico,
    raw['Técnico'],
    raw.FondoGeneral,
    raw.fondogeneral,
    raw.NombreCompleto,
    raw.nombreCompleto,
    raw['Nombre completo'],
    raw.Nombre,
    raw.nombre,
    raw.USUARIO,
    raw.Usuario,
    raw.usuario,
    ticket?.usuario,
    ticket?.user
  ];

  for (const candidate of candidates) {
    const resolved = resolveMetricDisplayName(candidate);
    if (safeText(resolved)) return resolved;
  }

  return 'Sin usuario';
}
function populateMetricsFilters(tickets) {
  const userSelect = $('metricsUserFilter');
  const statusSelect = $('metricsStatusFilter');
  if (!userSelect || !statusSelect) return;

  const masterUsers = getMetricUsersMasterList();
  const ticketUsers = [...new Set((tickets || []).map(getTicketMetricUser).filter(Boolean))];
  const usersMap = new Map();
  [...masterUsers, ...ticketUsers].forEach(user => {
    const key = plainIdentityKey(user);
    if (key) usersMap.set(key, user);
  });

  const users = [...usersMap.values()].sort((a, b) => a.localeCompare(b, 'es'));
  const statuses = [...new Set((tickets || []).map(getTicketMetricStatus).filter(Boolean))];
  const currentUser = safeText(userSelect.value);
  const currentStatus = safeText(statusSelect.value);
  const statusOptions = [...new Set([...STATUS_OPTIONS, ...statuses])];

  userSelect.innerHTML = '<option value="">Todos</option>' + users.map(user => `<option value="${escapeHtml(user)}">${escapeHtml(user)}</option>`).join('');
  statusSelect.innerHTML = '<option value="">Todos</option>' + statusOptions.map(status => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join('');
  if (currentUser && users.includes(currentUser)) userSelect.value = currentUser;
  if (currentStatus && statusOptions.includes(currentStatus)) statusSelect.value = currentStatus;
}
function filterTicketsForMetrics(tickets) {
  const { start, end } = getMetricsDateRange();
  const selectedUser = safeText($('metricsUserFilter')?.value);
  const selectedStatus = normalizeStatusLabel(safeText($('metricsStatusFilter')?.value));
  return (tickets || []).filter(ticket => {
    const date = getTicketMetricDate(ticket);
    const inRange = date >= start && date <= end;
    const userMatch = !selectedUser || getTicketMetricUser(ticket) === selectedUser;
    const statusMatch = !selectedStatus || getTicketMetricStatus(ticket) === selectedStatus;
    return inRange && userMatch && statusMatch;
  });
}
function buildTimelineGroups(tickets, mode, start, end) {
  const groups = new Map();
  const dayMs = 24 * 60 * 60 * 1000;
  const spanDays = Math.max(1, Math.round((end - start) / dayMs));
  const grouping = mode === 'year' || spanDays > 90 ? 'month' : (spanDays > 31 ? 'week' : 'day');
  tickets.forEach(ticket => {
    const date = getTicketMetricDate(ticket);
    let label = '';
    if (grouping === 'month') {
      label = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    } else if (grouping === 'week') {
      const firstDay = new Date(date);
      firstDay.setDate(date.getDate() - date.getDay() + 1);
      label = `Sem ${firstDay.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit' })}`;
    } else {
      label = date.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit' });
    }
    groups.set(label, (groups.get(label) || 0) + 1);
  });
  return { labels: [...groups.keys()], values: [...groups.values()] };
}
function destroyAnalyticsCharts() {
  (APP.analyticsCharts || []).forEach(chart => { try { chart.destroy(); } catch (error) {} });
  APP.analyticsCharts = [];
}
function makeChart(canvasId, config) {
  const ctx = $(canvasId)?.getContext('2d');
  if (!ctx || typeof Chart === 'undefined') return null;
  const chart = new Chart(ctx, config);
  APP.analyticsCharts.push(chart);
  return chart;
}
async function ensureMetricsTickets() {
  if (!APP.usersAPI.length) await loadUsersAPI();
  const [remoteTickets, localTickets] = await Promise.all([fetchTicketsFromAPI(), getAllLocalTickets()]);
  APP.remoteTickets = remoteTickets;
  APP.mergedTickets = mergeTickets(remoteTickets, localTickets);
  return APP.mergedTickets;
}

function renderSimpleMetricsTable(tbodyId, rows, colSpan) {
  const tbody = $(tbodyId);
  if (!tbody) return;
  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="${colSpan}" class="empty-state">Sin datos para el periodo.</td></tr>`;
    return;
  }
  tbody.innerHTML = rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(String(cell ?? ''))}</td>`).join('')}</tr>`).join('');
}
function buildMetricsProductivityRows(tickets, selectedUser = '') {
  const users = new Map();
  const selected = safeText(selectedUser);
  const masterUsers = getMetricUsersMasterList();
  const baseUsers = selected ? [selected] : masterUsers;

  baseUsers.forEach(user => {
    if (!safeText(user)) return;
    users.set(user, { total: 0, escalados: 0, resueltos: 0, pendientes: 0 });
  });

  (tickets || []).forEach(ticket => {
    const user = getTicketMetricUser(ticket) || 'Sin usuario';
    if (selected && user !== selected) return;
    const stats = users.get(user) || { total: 0, escalados: 0, resueltos: 0, pendientes: 0 };
    const status = getTicketMetricStatus(ticket);
    stats.total += 1;
    if (status === 'Escalada') stats.escalados += 1;
    if (status === 'Resuelta' || status === 'Cerrada') stats.resueltos += 1;
    else stats.pendientes += 1;
    users.set(user, stats);
  });

  return [...users.entries()]
    .sort((a, b) => b[1].total - a[1].total || a[0].localeCompare(b[0], 'es'))
    .map(([user, stats]) => [user, String(stats.total), String(stats.escalados), String(stats.resueltos), String(stats.pendientes)]);
}
function buildSimpleCountRows(map, labelFallback = 'Sin dato') {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), 'es'))
    .map(([label, value]) => [label || labelFallback, String(value)]);
}
async function renderMetricsDashboard() {
  if (!isAnalyticsAllowedUser()) return;
  updateMetricsRangeFields();
  const allTickets = await ensureMetricsTickets();
  populateMetricsFilters(allTickets);
  const filtered = filterTicketsForMetrics(allTickets);
  const productivityRows = buildMetricsProductivityRows(filtered, safeText($('metricsUserFilter')?.value));
  const statusMap = new Map();
  filtered.forEach(ticket => {
    const status = getTicketMetricStatus(ticket);
    statusMap.set(status, (statusMap.get(status) || 0) + 1);
  });
  const serviceMap = new Map();
  filtered.forEach(ticket => {
    const service = safeText(ticket.servicio) || 'Sin servicio';
    serviceMap.set(service, (serviceMap.get(service) || 0) + 1);
  });
  const range = getMetricsDateRange();
  const timeline = buildTimelineGroups(filtered, range.mode, range.start, range.end);

  $('metricsTotalTickets').textContent = String(filtered.length);
  $('metricsEscalados').textContent = String(statusMap.get('Escalada') || 0);
  $('metricsResueltos').textContent = String((statusMap.get('Resuelta') || 0) + (statusMap.get('Cerrada') || 0));
  $('metricsPendientes').textContent = String(filtered.filter(ticket => !['Resuelta', 'Cerrada'].includes(getTicketMetricStatus(ticket))).length);

  const statusRows = buildSimpleCountRows(statusMap, 'Sin status');
  const timelineRows = timeline.labels.map((label, index) => [label, String(timeline.values[index] || 0)]);
  const serviceRows = buildSimpleCountRows(serviceMap, 'Sin servicio');

  renderSimpleMetricsTable('metricsUsersTableBody', productivityRows, 5);

  APP.metricsSnapshot = {
    filtered,
    productivityRows,
    statusRows,
    timelineRows,
    serviceRows,
    rangeText: `${range.start.toLocaleDateString('es-MX')} - ${range.end.toLocaleDateString('es-MX')}`
  };
  buildMetricsCharts(APP.metricsSnapshot);
}
window.renderMetricsDashboard = renderMetricsDashboard;
async function exportMetricsPDF() {
  if (!isAnalyticsAllowedUser()) return;
  try {
    await renderMetricsDashboard();
    const snapshot = APP.metricsSnapshot || { filtered: [], productivityRows: [], statusRows: [], timelineRows: [], serviceRows: [], rangeText: '' };
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    drawWatermark(doc);
    drawPdfHeader(doc, 1, 1);
    doc.setFont('times', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...PDF_PALETTE.text);
    doc.text('MÉTRICAS OPERATIVAS', 105, 44, { align: 'center' });
    doc.setFont('times', 'normal');
    doc.setFontSize(9);
    doc.text(`Rango: ${snapshot.rangeText || ''}`, 105, 50, { align: 'center' });
    doc.autoTable({
      startY: 58,
      theme: 'grid',
      styles: { fontSize: 9, cellPadding: 5, lineColor: PDF_PALETTE.line, textColor: PDF_PALETTE.text, font: 'times' },
      headStyles: { fillColor: PDF_PALETTE.olive, textColor: [255,255,255], font: 'times', fontStyle: 'bold' },
      head: [['Indicador', 'Valor']],
      body: [
        ['Total tickets', String(snapshot.filtered.length)],
        ['Escalados', String(snapshot.filtered.filter(t => getTicketMetricStatus(t) === 'Escalada').length)],
        ['Resueltos', String(snapshot.filtered.filter(t => ['Resuelta', 'Cerrada'].includes(getTicketMetricStatus(t))).length)],
        ['Pendientes', String(snapshot.filtered.filter(t => !['Resuelta', 'Cerrada'].includes(getTicketMetricStatus(t))).length)]
      ],
      margin: { left: 15, right: 15 }
    });
    let y = doc.lastAutoTable.finalY + 8;
    const chartSpecs = [
      ['Productividad por usuario', captureCanvasDataUrl('metricsUsersChart'), 180, 55],
      ['Distribución por estatus', captureCanvasDataUrl('metricsStatusChart'), 180, 70],
      ['Flujo de tickets', captureCanvasDataUrl('metricsTimelineChart'), 180, 55],
      ['Servicios con mayor carga', captureCanvasDataUrl('metricsServiceChart'), 180, 55]
    ];
    for (const [title, img, width, height] of chartSpecs) {
      if (!img) continue;
      if (y + height + 18 > 260) {
        doc.addPage();
        drawWatermark(doc);
        drawPdfHeader(doc, doc.internal.getNumberOfPages(), 1);
        y = 42;
      }
      addSectionTitle(doc, title.toUpperCase(), y);
      doc.addImage(img, 'PNG', 15, y + 5, width, height, undefined, 'FAST');
      y += height + 12;
    }
    if (y + 40 > 260) {
      doc.addPage();
      drawWatermark(doc);
      drawPdfHeader(doc, doc.internal.getNumberOfPages(), 1);
      y = 42;
    }
    addSectionTitle(doc, 'DETALLE POR USUARIO', y);
    doc.autoTable({
      startY: y + 6,
      theme: 'grid',
      styles: { fontSize: 8.5, cellPadding: 4, lineColor: PDF_PALETTE.line, textColor: PDF_PALETTE.text, font: 'times' },
      headStyles: { fillColor: PDF_PALETTE.taupe, textColor: [255,255,255], font: 'times', fontStyle: 'bold' },
      head: [['Usuario', 'Total', 'Escalados', 'Resueltos', 'Pendientes']],
      body: snapshot.productivityRows.length ? snapshot.productivityRows : [['Sin datos', '0', '0', '0', '0']],
      margin: { left: 15, right: 15 }
    });
    const totalPages = doc.internal.getNumberOfPages();
    for (let page = 1; page <= totalPages; page++) {
      doc.setPage(page);
      drawWatermark(doc);
      drawPdfHeader(doc, page, totalPages);
      drawPdfFooter(doc, page, totalPages);
    }
    doc.save(`HelpDesk_N1_Metricas_${todayISO()}.pdf`);
  } catch (error) {
    console.error('Error al generar PDF de métricas:', error);
    alert(`❌ Error al generar el PDF de métricas:

${error.message || error}`);
  }
}
window.exportMetricsPDF = exportMetricsPDF;

document.addEventListener('DOMContentLoaded', async () => {
  APP.db = await initDB();
  await loadUsersAPI();
  $('casoFecha').value = todayISO();
  const folioInput = $('casoFolio');
  const sanitizeFolioInput = () => {
    const cleaned = sanitizeDigits(folioInput.value);
    if (folioInput.value !== cleaned) folioInput.value = cleaned;
  };
  folioInput.setAttribute('inputmode', 'numeric');
  folioInput.setAttribute('pattern', '[0-9]*');
  folioInput.addEventListener('input', sanitizeFolioInput);
  folioInput.addEventListener('paste', event => {
    event.preventDefault();
    const pasted = sanitizeDigits((event.clipboardData || window.clipboardData).getData('text'));
    const start = folioInput.selectionStart || 0;
    const end = folioInput.selectionEnd || 0;
    folioInput.value = sanitizeDigits(folioInput.value.slice(0, start) + pasted + folioInput.value.slice(end));
  });
  folioInput.addEventListener('keydown', event => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const allowed = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End'];
    if (allowed.includes(event.key)) return;
    if (!/^[0-9]$/.test(event.key)) event.preventDefault();
  });
  const defaultTech = syncResolvedUser('mmontiel ext');
  attachClearableBehavior();
  renderEvidence();
  renderDynamicForm();
  updateClocks();

  $('menuToggle').addEventListener('click', toggleSidebar);
  $('sidebarNav').addEventListener('click', handleSidebarNavClick);
  $('userMenuBtn').addEventListener('click', () => $('userMenu').classList.toggle('open'));
  document.addEventListener('click', event => {
    if (!$('userMenu').contains(event.target)) $('userMenu').classList.remove('open');
    closeFloatingPopups(event);
  });
  $('globalSearch').addEventListener('input', () => {
    const term = safeText($('globalSearch').value).toLowerCase();
    const src = APP.dataCache[APP.currentDataSource] || [];
    APP.filteredData = src.filter(row => !term || Object.values(row || {}).some(value => safeText(value).toLowerCase().includes(term)));
    renderDataTable(APP.filteredData);
  });
  $('ticketSearch').addEventListener('input', renderTicketsList);
  $('casoServicio').addEventListener('input', renderDynamicForm);
  $('casoServicio').addEventListener('change', renderDynamicForm);
  $('casoImagenes').addEventListener('change', event => {
    addFiles(event.target.files || []);
    $('casoImagenes').value = '';
  });
  $('casoStatus')?.addEventListener('change', updateStatusFieldVisibility);
  document.querySelectorAll('.analytics-filter').forEach(el => el.addEventListener('change', renderMetricsDashboard));
  $('metricsRefreshBtn')?.addEventListener('click', renderMetricsDashboard);
  $('metricsPdfBtn')?.addEventListener('click', exportMetricsPDF);
  const now = new Date();
  if ($('metricsMonthFilter')) $('metricsMonthFilter').value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  if ($('metricsYearFilter')) $('metricsYearFilter').value = String(now.getFullYear());
  if ($('metricsStartDate')) $('metricsStartDate').value = todayISO();
  if ($('metricsEndDate')) $('metricsEndDate').value = todayISO();
  updateStatusFieldVisibility();
  $('evidenceGrid').addEventListener('click', event => {
    const btn = event.target.closest('.evidence-remove');
    if (!btn) return;
    APP.images.splice(Number(btn.dataset.index), 1);
    renderEvidence();
  });
  ['dragenter', 'dragover'].forEach(type => $('dropzone').addEventListener(type, event => {
    event.preventDefault();
    $('dropzone').classList.add('dragover');
  }));
  ['dragleave', 'drop'].forEach(type => $('dropzone').addEventListener(type, event => {
    event.preventDefault();
    $('dropzone').classList.remove('dragover');
  }));
  $('dropzone').addEventListener('drop', event => addFiles(event.dataTransfer.files || []));
  document.addEventListener('paste', event => {
    if (APP.activeView !== 'casosView') return;
    const files = Array.from(event.clipboardData?.items || []).filter(item => item.type.startsWith('image/')).map(item => item.getAsFile()).filter(Boolean);
    if (files.length) addFiles(files);
  });
  $('ticketsTableBody').addEventListener('click', handleTicketsTableClick);
  $('pass').addEventListener('keypress', event => { if (event.key === 'Enter') login(); });

  if (window.innerWidth <= 980) $('appShell').classList.add('sidebar-hidden');
  await renderTicketsList();
});


