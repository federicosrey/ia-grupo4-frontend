const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-benchmark-back.herokuapp.com/";
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

    //Agregar Tarjetas
    agregarTarjeta: urlApi + "api/users/tarjeta",
    getTarjetas: urlApi + "api/users/getTarjetas",
    asignarTarjeta: urlApi + "api/users/asignarTarjeta",

    //Encuestas
    getEncuestaID: urlApi + "api/users/encuestaid",
    getEncuesta: urlApi + "api/users/tencuesta",
    deleteEncuesta: urlApi + "api/users/bencuesta",
    guardarEncuesta: urlApi + "api/users/encuesta",
    guardarEncuestaResp: urlApi + "api/users/encuestaResp",
    getEncuestaRespID: urlApi + "api/users/encuestarepid",

}

export default urlWebServices;