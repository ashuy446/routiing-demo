import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AdminModule  } from './admin/admin.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomstyleDirective } from './customstyle.directive';
import { UsersdataService } from './usersdata.service';
import { HttpClientModule } from '@angular/common/http';
import { UserModule} from './user/user.module';
import { FormsModule,ReactiveFormsModule } from  '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PageNotFoundComponent,
    CustomstyleDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
