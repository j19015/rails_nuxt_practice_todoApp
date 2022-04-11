import firebase from 'firebase'

const config={
    projectId: 'nuxt-todo-b6a16'
}

if(!firebase.apps.length){
    firebase.initializeApp(config)
}

export default firebase