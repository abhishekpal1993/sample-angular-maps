import { NgModule } from '@angular/core';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    FilterPipe,
  ],
  exports: [
    FilterPipe,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
