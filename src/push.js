import firebase from 'firebase'

export default function(){
    console.log('working')
 
    if('serviceWorker' in navigator){
        //configurando
        navigator.serviceWorker.register('./static/firebase-messaging-sw.js')
        .then(registration => {
            //Pedindo permissao
            const messaging = firebase.messaging()

            let getToken = ()=>{
                messaging.getToken()
                .then((currentToken)=>{
                    if(currentToken){
                        console.log('enviar isso para um servidor: ', currentToken)
                        return currentToken
                    }
                    console.warn('Nenhum id disponivel.')
                });
            }
            
            messaging.useServiceWorker(registration)

            messaging.requestPermission()
            .then(()=>{
                getToken()
            })
        })
        .catch(err =>{
            console.warn('Erro >-', err);
            
        })
    }
}