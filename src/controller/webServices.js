//const urlApi = "http://localhost:4000/";
const urlApi = "https://ia-grupo4-backend.herokuapp.com/";
console.log("url", urlApi);

const urlWebServices = {

    //Login (Super usuario y administrador de encuestas)
    login: urlApi + "api/users/login",

    //Informacion de contacto
    contacto: urlApi + "api/users/contacto",

    //ABM Usuarios
    guardarUsuario: urlApi + "api/users/registration",
    getUsuario: urlApi + "api/users/tusuarios",
    deleteUsuario: urlApi + "api/users/usr",
    updateUsuario: urlApi + "api/users/actualizacion",
    getInfoUsuario: urlApi + "api/users/getInfoUsuario",

    //Agregar Tarjetas
    agregarTarjeta: urlApi + "api/users/tarjeta",
    getTarjetas: urlApi + "api/users/getTarjetas",
    asignarTarjeta: urlApi + "api/users/asignarTarjeta",

    //Agregar Movimientos
    agregarMovimiento: urlApi + "api/users/agregarMovimiento",
    getMovimientos: urlApi + "api/users/getMovimientos",
    getNMovimientos: urlApi + "api/users/getNMovimientos",
    UpdateidLiquidacionMovimiento: urlApi + "api/users/UpdateidLiquidacionMovimiento",
    
    getUMovimientos: urlApi + "api/users/getUMovimientos",
    UpdateidPagoMovimiento: urlApi + "api/users/UpdateidPagoMovimiento",

    //Liquidaciones
    postLiquidaciones: urlApi + "api/users/postLiquidaciones",
    getLiquidaciones: urlApi + "api/users/getLiquidaciones",
    UpdateidCobroLiquidacion: urlApi + "api/users/UpdateidCobroLiquidacion",

    //Pagos
    postPagos: urlApi + "api/users/agregarPago",
    getMontosaPagaraEstablecimientos: urlApi + "api/users/getMontosaPagaraEstablecimientos",

    //Cobros
    postCobros: urlApi + "api/users/agregarCobro",

    //Encuestas
    getEncuestaID: urlApi + "api/users/encuestaid",
    getEncuesta: urlApi + "api/users/tencuesta",
    deleteEncuesta: urlApi + "api/users/bencuesta",
    guardarEncuesta: urlApi + "api/users/encuesta",
    guardarEncuestaResp: urlApi + "api/users/encuestaResp",
    getEncuestaRespID: urlApi + "api/users/encuestarepid",

}

export default urlWebServices;
