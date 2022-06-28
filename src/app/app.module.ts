import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactComponent } from './react/react.component';
import { TemplateComponent } from './template/template.component';
import { LocalComponent } from './local/local.component';
import { TdfComponent } from './tdf/tdf.component';
import { NestedformComponent } from './nestedform/nestedform.component';
import { ReactOnlineComponent } from './Component/react-online/react-online.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateFormComponent } from './Arc/template-form/template-form.component';
import { DynamicComponent } from './Arc/dynamic/dynamic.component';



@NgModule({
  declarations: [
    AppComponent,
    ReactComponent,
    TemplateComponent,
    LocalComponent,
    TdfComponent,
    NestedformComponent,
    ReactOnlineComponent,
    TemplateFormComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
