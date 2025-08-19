# Dark Souls Items API

Esta API devuelve información detallada de los ítems del juego **Dark Souls** organizada por categorías.

## 📌 Formato de respuesta

La API devuelve un objeto JSON con la siguiente estructura:

```json
{
  "DarkSoulsItems": {
    "Consumibles": [ "..." ],
    "Herramientas": [ "..." ],
    "MaterialesMejora": [ "..." ],
    "Proyectiles": [ "..." ],
    "Municion": [ "..." ],
    "Almas": {
      "Normales": [ "..." ],
      "Jefes": [ "..." ]
    },
    "ObjetosClave": [ "..." ],
    "ObjetosMultijugador": [ "..." ],
    "OtrosObjetos": [ "..." ],
    "ObjetosDLC": [ "..." ]
  }
}
