const urlExtApi = "https://iabackend.herokuapp.com/";
console.log("url", urlExtApi);

const urlWebServicesExterno = {

    //Login (Super usuario y administrador de encuestas)
    altatarjetaM: urlExtApi + "api/users/altatarjeta",
    altacomercioM: urlExtApi + "api/users/altacomercioM",
    getTarjetaCodigo: urlExtApi + "api/users/getTarjetaCodigo",
    getComercioCodigo: urlExtApi + "api/users/getComercioCodigo",
    
}

export default urlWebServicesExterno;