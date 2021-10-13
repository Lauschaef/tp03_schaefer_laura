import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecapComponent } from './recap/recap.component';
import { FormService } from './services/form.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PhonePipe } from './pipes/phone.pipe';
import { BookListComponent } from './bookList/bookList.component';
import { VariablesGlobales } from './variablesGlobales';
import { BookFilterPipe } from './pipes/gender-filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

const appRoutes: Routes = [
  { path: 'recap', component: RecapComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'products', component: BookListComponent },
  { path: '', component: FormulaireComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    HeaderComponent,
    FooterComponent,
    RecapComponent,
    PhonePipe,
    BookListComponent,
    BookFilterPipe,
    SearchPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FormService,
    VariablesGlobales
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    PhonePipe
  ]
})
export class AppModule { }
export class PriceModule { }
