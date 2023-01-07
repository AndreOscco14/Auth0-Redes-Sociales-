import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-afidyxba3wv2vel4.us.auth0.com',
      clientId: 'aQRmsWh8WbT7iDDae8jXTjepntCE7hxt'
    }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

// 158