import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

export const db = {
  apiKey: 'AIzaSyB37B2seJZgMXreBabbwkmBgTrwyeMhI00',
  authDomain: 'denunciabacalar.firebaseapp.com',
  databaseURL: 'https://denunciabacalar.firebaseio.com',
  projectId: 'denunciabacalar',
  storageBucket: 'denunciabacalar.appspot.com',
  messagingSenderId: '756767372502',
  appId: '1:756767372502:web:7af09c41f7dd14ccf90577',
};
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(db, 'denunciabacalar'),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
