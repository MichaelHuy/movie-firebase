import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// <script src="https://www.gstatic.com/firebasejs/3.6.4/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAgIxkRI8pg0CTHQPmNBbEOCDF9OQjWRFw",
//     authDomain: "kidmovies-734f4.firebaseapp.com",
//     databaseURL: "https://kidmovies-734f4.firebaseio.com",
//     storageBucket: "kidmovies-734f4.appspot.com",
//     messagingSenderId: "760238858260"
//   };
//   firebase.initializeApp(config);
// </script>
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAgIxkRI8pg0CTHQPmNBbEOCDF9OQjWRFw",
  authDomain: "kidmovies-734f4.firebaseapp.com",
  databaseURL: "https://kidmovies-734f4.firebaseio.com",
  storageBucket: "kidmovies-734f4.appspot.com",
  messagingSenderId: "760238858260"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
