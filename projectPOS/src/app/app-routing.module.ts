import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PosComponent } from './pos/pos.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: '',
    component: PosComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
      path: 'reports',
      component: ReportsComponent
  },
  {
      path: 'faq',
      component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
