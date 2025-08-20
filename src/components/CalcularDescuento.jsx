
const CalcularDescuento= () => {
    
    return(

       <div className="container mt-5">
        <h2>Calculadora de Descuentos</h2>
            <div className="col-6 mb-3">
                <label className="form-label">Ingrese Producto 1: </label>
                <input type="number" className="form-control" />
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Ingrese Producto 2: </label>
                <input type="number" className="form-control" />
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Ingrese Producto 3: </label>
                <input type="number" className="form-control" />
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Ingrese Producto 4: </label>
                <input type="number" className="form-control" />
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Ingrese Producto 5: </label>
                <input type="number" className="form-control" />
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Sub Total: </label>
                <input type="number" className="form-control" readOnly/>
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Descuento: </label>
                <input type="number" className="form-control" readOnly/>
            </div>
            <div className="col-6 mb-3">
                <label className="form-label">Total a Pagar: </label>
                <input type="number" className="form-control" readOnly/>
            </div>

       </div>
    )




};

export default CalcularDescuento;