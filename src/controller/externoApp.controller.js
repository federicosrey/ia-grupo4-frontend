import urlWebServicesExterno from '../controller/webServicesExterno.js';
import dateFormat from "dateformat";

//Envio las liquidaciones al banco
export const postLiquidacionesExterno = async function (movimientos, idLiquidacion) {
    let url = urlWebServicesExterno.altatarjetaM;
    const formData = new URLSearchParams();
    /* "cuit": "string",
  "codigotransaccion": "string",
  "importe": 0,
  "fechaVencimiento": "string",
  "pagado": "string",
  "cuitEmpresa": "string",
  "descripcion": "string" */
    formData.append('cuit', movimientos.cuilUsuario.toString());
    formData.append('codigotransaccion', idLiquidacion.toString());
    formData.append('importe', movimientos.total);
    formData.append('fechaVencimiento', movimientos.fechaVencimiento);  
    formData.append('pagado', "0");          
    formData.append('cuitEmpresa', "20378353622");
    formData.append('descripcion', "Resumen GIPEY".concat(' ',dateFormat(Date.now(),"dd/mm/yyyy").toString()));

                 
                
            
                try {
                    let response = await fetch(url, {
                        method: 'POST', // or 'PUT'
                        mode: "cors",
                        headers: {
                            'Accept': 'application/x-www-form-urlencoded',
                            'x-access-token': localStorage.getItem('x'),
                            'Origin': 'http://localhost:3000',
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
            
                    if (response.status === 201) {
                        let data = await response.json();
            
                                            
                        return data;
                    }
                    else {
                        return false;
                    }
                }
                catch (error) {
                    console.log("error", error);
                    return false;
                };
    
}

export const postPagosExterno = async function (movimientos, idPago) {
    let url = urlWebServicesExterno.altacomercioM;
    const formData = new URLSearchParams();
    /*
        "cuit": "string",
        "codigotransaccion": "string",
        "importe": 0,
        "fechaPago": "string",
        "pagado": "string",
        "cuitEmpresa": "string",
        "descripcion": "string"
    */
    formData.append('cuit', movimientos.cuitNegocio.toString());
    formData.append('codigotransaccion', idPago.toString());
    formData.append('importe', movimientos.total);
    formData.append('fechaPago', movimientos.fechaVencimiento);  
    formData.append('pagado', "0");          
    formData.append('cuitEmpresa', "20378353622");
    formData.append('descripcion', "Pago GIPEY".concat(' ',dateFormat(Date.now(),"dd/mm/yyyy").toString()));

                 
                
            
                try {
                    let response = await fetch(url, {
                        method: 'POST', // or 'PUT'
                        mode: "cors",
                        headers: {
                            'Accept': 'application/x-www-form-urlencoded',
                            'x-access-token': localStorage.getItem('x'),
                            'Origin': 'http://localhost:3000',
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
            
                    if (response.status === 201) {
                        let data = await response.json();
            
                                            
                        return data;
                    }
                    else {
                        return false;
                    }
                }
                catch (error) {
                    console.log("error", error);
                    return false;
                };
    
}

export const getTarjetaCodigo = async function (idLiquidacion) {
    let url = urlWebServicesExterno.getTarjetaCodigo;
    const formData = new URLSearchParams();
    /*
        {
            "codigotransaccion": "string"
        }
    */
    
    formData.append('codigotransaccion', idLiquidacion.toString());           
                
            
                try {
                    let response = await fetch(url, {
                        method: 'POST', // or 'PUT'
                        mode: "cors",
                        headers: {
                            'Accept': 'application/x-www-form-urlencoded',
                            'x-access-token': localStorage.getItem('x'),
                            'Origin': 'http://localhost:3000',
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
            
                    if (response.status === 200) {
                        let data = await response.json();
                        
                                            
                        return data.data.docs;
                    }
                    else {
                        return false;
                    }
                }
                catch (error) {
                    console.log("error", error);
                    return false;
                };
    
}



export const getComercioCodigo = async function (idPago) {
    let url = urlWebServicesExterno.getComercioCodigo;
    const formData = new URLSearchParams();
    /*
        {
            "codigotransaccion": "string"
        }
    */
    
    formData.append('codigotransaccion', idPago.toString());           
                
            
                try {
                    let response = await fetch(url, {
                        method: 'POST', // or 'PUT'
                        mode: "cors",
                        headers: {
                            'Accept': 'application/x-www-form-urlencoded',
                            'x-access-token': localStorage.getItem('x'),
                            'Origin': 'http://localhost:3000',
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
            
                    if (response.status === 200) {
                        let data = await response.json();
                        
                                            
                        return data.data.docs;
                    }
                    else {
                        return false;
                    }
                }
                catch (error) {
                    console.log("error", error);
                    return false;
                };
    
}