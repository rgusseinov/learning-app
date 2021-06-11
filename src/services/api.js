import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from './config'


export class API {

  constructor(){
    this.fb = firebase
    // Initialize Firebase
    this.fb.initializeApp(firebaseConfig)
  }

  async getTasks(){
    const snapshot = await this.fb.firestore().collection('tasks').get().then((res) => {      
      return res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }).then(data => data)
    return snapshot
  }



/*   getTasks(){
    const headers = new Headers()
    headers.append(`Authorization`, this._autorization)

    return fetch(`https://11.ecmascript.pages.academy/task-manager/tasks`, {headers})
      .then(response => response.json())
  }


  _load({url, method = Method.GET, body = null, headers = new Headers()}){
    headers.append(`Authorization`, this._autorization)

    return fetch(`${this._endPoint}/${url}`, {method, body, headers})
      .then(checkStatus)
      .catch((err) => {
        throw err
      })
  } */


}