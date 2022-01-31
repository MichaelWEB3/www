import React from "react";
import firebase from "firebase";
import { useHistory } from "react-router";

function processaPagamento() {

    const userId = firebase.auth().currentUser.uid;
    const history = new useHistory()

    if (userId) {

        firebase.database().ref('users/' + userId).update({
            signature: true
        })

        setTimeout(function () {

            let isSignature = firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/signature")
            
            isSignature.on('value', (snapshot) => {
                if (snapshot.val() === true) {
                  history.push("/espetaculos/assinante")
                }
            })
    
      })
    }

    


    return (
        <div></div>
    );
}

export default processaPagamento;
