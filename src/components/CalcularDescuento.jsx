import UseCalcularDescuento from "../hooks/UseCalcularDescuento";

const CalcularDescuento= () => {
        const{
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
        }=UseCalcularDescuento();
    
    return(

       <div className="container mt-5">
        <h2>Calculadora de Descuentos</h2>
     
            <div className="col-6 mb-3">
                <label className="form-label">Ingrese Producto 1: </label>
                <input type="number" className="form-control" onChange={(e)=>setProducto1(e.target.value)} />
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Ingrese Producto 2: </label>
                <input type="number" className="form-control" onChange={(e)=>setProducto2(e.target.value)}/>
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Ingrese Producto 3: </label>
                <input type="number" className="form-control" onChange={(e)=>setProducto3(e.target.value)} />
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Ingrese Producto 4: </label>
                <input type="number" className="form-control" onChange={(e)=>setProducto4(e.target.value)}/>
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Ingrese Producto 5: </label>
                <input type="number" className="form-control" onChange={(e)=>setProducto5(e.target.value)}/>
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Sub Total: </label>
                <input className="form-control" value={subtotal} readOnly/>
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Descuento: </label>
                <input className="form-control" value={descuento} readOnly/>
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Total a Pagar: </label>
                <input className="form-control" value={total} readOnly/>
            </div>
            <div className="col-6 mb-3">
                <button className="btn btn-success" onClick={Calcular}>Calcular</button>
                <button className="btn btn-danger" onClick={Limpiar}>Limpiar</button>
            </div>
            
 
       </div>
    )

};

export default CalcularDescuento;