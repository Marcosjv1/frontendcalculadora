# Calculadora (Frontend)

Frontend en React + Vite para registrar movimientos (ingresos/egresos) y calcular balance.

## Requisitos

- Node.js 18+
- Una API propia (diferente a la de otra persona) con los endpoints de gastos.

## Variables de entorno

Este proyecto toma la URL de la API desde `VITE_API_URL`.

- Local: crea un `.env` basado en `.env.example`
- En tu hosting: configura `VITE_API_URL` como variable de entorno

## Correr en local

1) Instalar dependencias:

`npm install`

2) Crear `.env` (ejemplo):

`VITE_API_URL=http://localhost:4000/api/gastos`

3) Ejecutar:

`npm run dev`

## API esperada

La app consume:

- `GET    /api/gastos` → lista de gastos (cada item debe traer `_id`, `descripcion`, `importe`)
- `POST   /api/gastos` → crea gasto (body JSON `{ descripcion, importe }`)
- `DELETE /api/gastos/:id` → elimina gasto
