import { useState } from "react";
import Swal from "sweetalert2";

const UseCalcularDescuento = () => {
  const [producto1, setProducto1] = useState('');
  const [producto2, setProducto2] = useState('');
  const [producto3, setProducto3] = useState('');
  const [producto4, setProducto4] = useState('');
  const [producto5, setProducto5] = useState('');
  const [descuento, setDescuento] = useState('');
  const [subtotal, setSubTotal] = useState('');
  const [total, setTotal] = useState('');

  const Calcular = () => {
    if (producto1 === '') {
      Alerta('Ingrese Producto 1');
    } else if (producto2 === '') {
      Alerta('Ingrese Producto 2');
    } else if (producto3 === '') {
      Alerta('Ingrese Producto 3');
    } else if (producto4 === '') {
      Alerta('Ingrese Producto 4');
    } else if (producto5 === '') {
      Alerta('Ingrese Producto 5');
    }else {
       let subtotal=Number(producto1)+Number(producto2)+Number(producto3)+Number(producto4)+Number(producto5);
        setSubTotal(subtotal);   

        let descuento=0;
        if (subtotal>0 && subtotal<999.99) {
            descuento=0
        } else if (subtotal>1000 && subtotal<4999.99) {
            descuento=10
        }else if (subtotal>5000 && subtotal<8999.99) {
            descuento=20
        }else if (subtotal>9000 && subtotal<12999.99) {
            descuento=20
        }else if (subtotal>13000) {
            descuento=30
        }
        setDescuento(descuento)
        let descuentoporc=descuento/100
        let totalsindes=subtotal*descuentoporc
        let total=subtotal-totalsindes
        setTotal(total)



    }

};


  const Limpiar = () => {
    setProducto1("");
    setProducto2('');
    setProducto3('');
    setProducto4('');
    setProducto5('');
    setDescuento('');
    setSubTotal('');
    setTotal('');

  };

  /**
   * Muestra una alerta de advertencia
   * @param {string} mensaje
   */

  const Alerta = (mensaje) => {
    Swal.fire({
      title: "Advertencia",
      text: mensaje,
      icon: "warning",
    });
  };

  return{
    producto1,
    setProducto1,
    producto2,
    setProducto2,
    producto3,
    setProducto3,
    producto4,
    setProducto4,
    producto5,
    setProducto5,
    descuento,
    setDescuento,
    subtotal,
    setSubTotal,
    total,
    setTotal,
    Calcular,
    Limpiar,
  }


}

export default UseCalcularDescuento;