importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
   
firebase.initializeApp({
   
    apiKey: "AIzaSyAK9eWF44meaxUSg9Q7SfzjRg5ngdi67DU",
    projectId: "push-notification-f3548",
    messagingSenderId: "111240407668",
    appId: "1:111240407668:web:685386ff341ccb8348bf21"
});
  
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
});