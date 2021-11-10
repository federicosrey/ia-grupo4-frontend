import urlWebServices from '../controller/webServices.js';

// Login de usuarios
export const login = async function (login) {

    let url = urlWebServices.login;

    const formData = new URLSearchParams();
    formData.append('email', login.email);
    formData.append('password', login.password);

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });

        let rdo = response.status;
        let data = await response.json();
        switch (rdo) {
            case 201:
                {
                    localStorage.setItem("x", data.loginUser.token);
                    let user = data.loginUser.user;
                    localStorage.setItem("nombre", user.name);
                    localStorage.setItem("email", user.email);
                    localStorage.setItem("cuilcuit", user.cuilcuit);
                    localStorage.setItem("apellido", user.lastname);


                    if (user.root === "A") {
                        return ({ rdo: 2, mensaje: "Ok" });//Es root
                    }
                    else if (user.root === "N") {
                        return ({ rdo: 3, mensaje: "Ok neg"});//Es Negocio
                    }
                    else {
                        return ({ rdo: 0, mensaje: "Ok" });//correcto
                    }

                }
            case 202:
                {
                    return ({ rdo: 1, mensaje: "El mail ingresado no existe en nuestra base." });
                }
            case 203:
                {
                    return ({ rdo: 1, mensaje: "La contraseña no es correcta." });
                }
            default:
                {
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
                }
        }
    }
    catch (error) {
        console.log("error", error);
    };
}

//Contacto
export const guardarContacto = async function (razonsocial, email, region, tamaño) {
    let url = urlWebServices.contacto;

    const formData = new URLSearchParams();
    formData.append('razonsocial', razonsocial);
    formData.append('email', email);
    formData.append('region', region);
    formData.append('tamaño', tamaño);

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
            return true;
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

// Guardar usuario
export const guardarUsuario = async function (name, lastname, email, cuilcuit, root, password) {
    let url = urlWebServices.guardarUsuario;
    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('cuilcuit', cuilcuit);
    formData.append('root', root);
    formData.append('password', password);

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
            return true;
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

// Recupero usuarios
export const getUsuario = async function () {
    let url = urlWebServices.getUsuario;

    try {
        let response = await fetch(url, {
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        if (response.status === 200) {
            let data = await response.json();

            let listaUsuarios = data.data.docs;
            return listaUsuarios;
        }
        else {
            let vacio = [];
            console.log("No hay usuarios")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

// Borro usuarios
export const deleteUsuario = async function (id_user) {
    let url = urlWebServices.deleteUsuario;
    const formData = new URLSearchParams();
    formData.append('id', id_user);

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

            return true;

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

// Acutualizo usuarios
export const updateUsuario = async function (id, cuilcuit, name, lastname, email, root, password) {
    let url = urlWebServices.updateUsuario;
    const formData = new URLSearchParams();

    formData.append('id', id);
    formData.append('cuilcuit', cuilcuit);
    formData.append('name', name);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('root', root);
    formData.append('password', password);

    try {
        let response = await fetch(url, {
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        if (response.status === 200) {
            return true;
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

// Agregar Tarjeta
export const agregarTarjeta = async function (descripcion, limite, prefijo) {
    let url = urlWebServices.agregarTarjeta;
    const formData = new URLSearchParams();
    formData.append('descripcion', descripcion);
    formData.append('limite', limite);
    formData.append('prefijo', prefijo);

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
            console.log("agrego bien la tarjeta");
            return true;
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

// Asignar Tarjeta
export const asignarTarjeta = async function (cuilUsuario, tarjeta, codigoSeguridad, fechaCierre, fechaVencimiento) {
    let url = urlWebServices.asignarTarjeta;
    const formData = new URLSearchParams();
    formData.append('cuilcuit', cuilUsuario);
    formData.append('tarjeta', tarjeta);
    formData.append('codigoseguridad', codigoSeguridad);
    formData.append('fechacierre', fechaCierre);
    formData.append('fechavencimiento', fechaVencimiento);

    //try {
        console.log("respue ");
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
        console.log("jr ", response.body);    
        if (response.status === 201) {
            let data = await response.json();
            
            let listarliqui = data.message;
            return listarliqui;
            
        }
        else {
            return false;
        }
    /* }
    catch (error) {
        console.log("error", error);
        return false;
    }; */
}

// Recupero tarjetas
export const getTarjetas = async function () {
    let url = urlWebServices.getTarjetas;

    try {
        let response = await fetch(url, {
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        if (response.status === 200) {
            let data = await response.json();

            let listaTarjetas = data.data.docs;
            console.log("controlador: ",listaTarjetas);
            return listaTarjetas;
        }
        else {
            let vacio = [];
            console.log("No hay tarjetas")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

// Agregar movimiento
export const agregarMovimiento = async function (usuario, negocio, tarjeta,codigoseguridad, monto) {
    let url = urlWebServices.agregarMovimiento;
    const formData = new URLSearchParams();
    formData.append('dnicuilUsuario', usuario);
    formData.append('cuitNegocio', negocio);
    formData.append('numerotarjeta', tarjeta);
    formData.append('codigoseguridad', codigoseguridad);
    formData.append('monto', monto);

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


        
        //if (response.status === 201) {
            let data = await response.json();
            console.log(data)
            return data;
            
        //}
       /*  else {
            return "no es 201";
        } */
    }
    catch (error) {
        console.log("error", error);
        return false;
    };
}

// Recupero movimientos de usuarios
export const getMovimientos = async function () {
    let url = urlWebServices.getMovimientos;

    try {
        let response = await fetch(url, {
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        if (response.status === 200) {
            let data = await response.json();
            
            let listarmovim = data.data;
            return listarmovim;
        }
        else {
            let vacio = [];
            console.log("No hay usuarios")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

// Recupero movimientos de negocios
export const getNMovimientos = async function (cuitNegocio) {
    
        let url = urlWebServices.getNMovimientos;
        const formData = new URLSearchParams();
        formData.append('cuitNegocio', cuitNegocio);
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
                body:formData
            });
            if (response.status === 200) {
                let data = await response.json();
                let listarliqui = data.data.docs;
                return listarliqui;
            }
            else {
                let vacio = [];
                console.log("No hay liquidaciones")
                console.log("No hay movimientos de negocios")
                return (vacio);
    
            }
        }
        catch (error) {
            console.log("error", error);
        };
    }

export const getLiquidaciones = async function (cuilUsuario) {
    let url = urlWebServices.getLiquidaciones;
    const formData = new URLSearchParams();
    formData.append('cuilUsuario', cuilUsuario);
    
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
            body:formData
        });

        if (response.status === 200) {
            let data = await response.json();
            
            let listarliqui = data.data;
            return listarliqui;
        }
        else {
            let vacio = [];
            console.log("No hay liquidaciones")
            console.log("No hay movimientos de negocios")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

export const getInfoUsuario = async function (cuilUsuario) {
    let url = urlWebServices.getInfoUsuario;
    const formData = new URLSearchParams();
    formData.append('cuilUsuario', cuilUsuario);
    
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
            body:formData
        });

        if (response.status === 200) {
            let data = await response.json();
            
            let listarliqui = data.data;
            return listarliqui;
        }
        else {
            let vacio = [];
            console.log("No hay liquidaciones")
            console.log("No hay movimientos de negocios")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}
export const getUMovimientos = async function (cuilUsuario) {
    let url = urlWebServices.getUMovimientos;
    const formData = new URLSearchParams();
    formData.append('cuilUsuario', cuilUsuario);
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
            body:formData
        });
        if (response.status === 200) {
            let data = await response.json();
            let listarliqui = data.data.docs;
            return listarliqui;
        }
        else {
            let vacio = [];
            console.log("No hay liquidaciones")
            console.log("No hay movimientos de negocios")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

export const postLiquidaciones = async function (movimientos) {
    let url = urlWebServices.postLiquidaciones;
    const formData = new URLSearchParams();
    formData.append('cuilUsuario', movimientos.cuilUsuario);
    formData.append('numerotarjeta', movimientos.numeroTarjeta);
    formData.append('total', movimientos.total);
                

                 
                
            
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
            
                        
                        
                        return data.data;
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

export const postPagos = async function (movimientos) {
    let url = urlWebServices.postPagos;
    const formData = new URLSearchParams();
    formData.append('cuitNegocio', movimientos.cuitNegocio);
    formData.append('total', movimientos.total);
   

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
            
                        
                        
                        return data.data;
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

export const postCobros = async function (liquidacion) {
    let url = urlWebServices.postCobros;
    const formData = new URLSearchParams();
    formData.append('cuilUsuario', liquidacion.cuilUsuario);
    formData.append('total', liquidacion.total);
    

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
            
                        
                        
                        return data.data;
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

export const UpdateidLiquidacionMovimiento = async function (idMovimiento, idLiquidacion) {
    let url = urlWebServices.UpdateidLiquidacionMovimiento;
    const formData = new URLSearchParams();
    formData.append('idmovimiento', idMovimiento);
    formData.append('idliquidacion', idLiquidacion);

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
                        
                        return true;
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

export const UpdateidPagoMovimiento = async function (idMovimiento, idPago) {
    let url = urlWebServices.UpdateidPagoMovimiento;
    const formData = new URLSearchParams();
    formData.append('idmovimiento', idMovimiento);
    formData.append('idpago', idPago);

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
                        
                        return true;
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

export const UpdateidCobroLiquidacion = async function (idLiquidacion, idCobro) {
    let url = urlWebServices.UpdateidCobroLiquidacion;
    const formData = new URLSearchParams();
    formData.append('idLiquidacion', idLiquidacion);
    formData.append('idCobro', idCobro);

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
                        
                        return true;
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

export const getMontosaPagaraEstablecimientos = async function () {
    let url = urlWebServices.getMontosaPagaraEstablecimientos;

    try {
        let response = await fetch(url, {
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        if (response.status === 200) {
            let data = await response.json();
            
            let listarmovim = data.data;
            return listarmovim;
        }
        else {
            let vacio = [];
            console.log("No hay usuarios")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

//Crear encuestas
export const guardarEncuesta = async function (titulo, sector, tamaño, questions, valorReferencia) {

    let url = urlWebServices.guardarEncuesta;
    const formData = new URLSearchParams();
    formData.append('titulo', titulo);
    formData.append('sector', sector);
    formData.append('tamaño', tamaño);

    var i = 0;
    var j = 0;
    var numeroRespuesta = 1;
    var numeroPregunta = 1;
    var cantidadRes = 1;
    var cantidadPreguntasRef = 1;

    for (i = 0; i < questions.length; i++) {
        const newQuestion = { questionText: questions[i].questionText }
        formData.append("pregunta" + numeroPregunta, newQuestion.questionText)
        numeroPregunta = numeroPregunta + 1;
        formData.append("P" + cantidadPreguntasRef + "valorref1", valorReferencia[i])

        for (j = 0; j < questions[i].options.length; j++) {
            const newAnswer = { options: questions[i].options[j].optionText }
            formData.append("P" + cantidadRes + "respuesta" + numeroRespuesta, newAnswer.options)
            numeroRespuesta = numeroRespuesta + 1;

        }
        cantidadPreguntasRef = cantidadPreguntasRef + 1;
        numeroRespuesta = 1;
        cantidadRes = cantidadRes + 1;
    };

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        if (response.status === 201) {
            return true;
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

//Crear encuestas respuesta
export const guardarEncuestaResp = async function (encuesta,resp1,resp2,resp3,resp4,resp5, idbusqueda ) {

    let url = urlWebServices.guardarEncuestaResp;
    const formData = new URLSearchParams();
    formData.append('titulo', encuesta.titulo);
    formData.append('sector', encuesta.sector);
    formData.append('tamaño', encuesta.tamaño);
    formData.append('idbusqueda', idbusqueda);
    if (resp1) {
        formData.append('pregunta1', encuesta.pregunta1);
        formData.append('P1respuesta', resp1);
        formData.append('P1valorref', encuesta.P1valorref1);
    }
    if (resp2) {
        formData.append('pregunta2', encuesta.pregunta2);
        formData.append('P2respuesta', resp2);
        formData.append('P2valorref', encuesta.P2valorref1);
    }
    if (resp3) {
        formData.append('pregunta3', encuesta.pregunta3);
        formData.append('P3respuesta', resp3);
        formData.append('P3valorref', encuesta.P3valorref1);
    }
    if (resp4) {
        formData.append('pregunta4', encuesta.pregunta4);
        formData.append('P4respuesta', resp4);
        formData.append('P4valorref', encuesta.P4valorref1);
    }
    if (resp5) {
        formData.append('pregunta5', encuesta.pregunta5);
        formData.append('P5respuesta', resp5);
        formData.append('P5valorref', encuesta.P5valorref1);
    }

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        if (response.status === 201) {
            return true;
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

// Traer encuestas
export const getEncuesta = async function () {
    let url = urlWebServices.getEncuesta;

    try {
        let response = await fetch(url, {
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        if (response.status === 200) {
            let data = await response.json();

            let listaUsuarios = data.data.docs;
            return listaUsuarios;
        }
        else {
            let vacio = [];
            console.log("No hay encuestas")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

// Traer encuestas por ID
export const getEncuestaID = async function (_id) {
    let url = urlWebServices.getEncuestaID;
    const formData = new URLSearchParams();

    formData.append('_id', _id);

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

            let listaEncuestaID = data.data.docs;
            return listaEncuestaID;
        }
        else {
            let vacio = [];
            console.log("No hay encuestas por ese ID")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

// Traer encuestas por ID
export const getEncuestaRespID = async function (idbusqueda) {
    let url = urlWebServices.getEncuestaRespID;
    const formData = new URLSearchParams();
    formData.append('idbusqueda', idbusqueda);

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

            let listaEncuestaID = data.data.docs;
            return listaEncuestaID;
        }
        else {
            let vacio = [];
            console.log("No hay encuestas por ese ID")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

//Editar encuestas
export const updateEncuesta = async function (id, titulo, sector, tamaño) {
    let url = urlWebServices.updateEncuesta;
    const formData = new URLSearchParams();

    formData.append('id', id);
    formData.append('titulo', titulo);
    formData.append('sector', sector);
    formData.append('tamaño', tamaño);

    try {
        let response = await fetch(url, {
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        if (response.status === 201) {
            return true;
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

//Borrar encuestas
export const deleteEncuesta = async function (id_encuesta) {
    let url = urlWebServices.deleteEncuesta;
    const formData = new URLSearchParams();
    formData.append('id', id_encuesta);

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
            return true;

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