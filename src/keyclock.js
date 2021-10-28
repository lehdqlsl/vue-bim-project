import Keycloak from 'keycloak-js';


let initOptions = {
    url: `http://ssobim.injecloud.co.kr:50880/auth`,
    realm: `BIM`,
    clientId: `portal`
};

let keycloak = Keycloak(initOptions);

const init = {
    init(){
        keycloak.init({
            onLoad: 'login-required'
        }).then(function (authenticated) {
            console.log("토큰11:"+keycloak.idToken)
            console.log("토큰11:"+keycloak.token)
        })
    },
    logout(){
        keycloak.logout()
    }
}

export default{
    init
}
