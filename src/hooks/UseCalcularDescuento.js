import  { useState } from "react";
import Swal from "sweetalert2";

const CalculadoraDescuento = () => {
  const [productos, setProductos] = useState(Array(5).fill("")); // 5 productos
  const [subtotal, setSubtotal] = useState(0);
  const [descuentoPorcentaje, setDescuentoPorcentaje] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [total, setTotal] = useState(0);

  const calcularDescuento = () => {
    // Validar los productos
    for (let value of productos) {
      if (value === "" || isNaN(value) || value < 0) {
        Swal.fire(
          "Error",
          "Por favor ingrese valores numéricos válidos en todos los campos.",
          "error"
        );
        return;
      }
    }

    const valores = productos.map((p) => parseFloat(p));
    const sub = valores.reduce((acc, val) => acc + val, 0);

    let porc = 0;
    if (sub >= 1000 && sub < 5000) porc = 10;
    else if (sub >= 5000 && sub < 9000) porc = 20;
    else if (sub >= 9000 && sub < 13000) porc = 30;
    else if (sub >= 13000) porc = 40;

    const desc = (sub * porc) / 100;
    const tot = sub - desc;

    setSubtotal(sub);
    setDescuentoPorcentaje(porc);
    setDescuento(desc);
    setTotal(tot);
  };

  const limpiar = () => {
    setProductos(Array(5).fill(""));
    setSubtotal(0);
    setDescuentoPorcentaje(0);
    setDescuento(0);
    setTotal(0);
  };
   };

   export default CalculadoraDescuento;