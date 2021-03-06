import { RiddlesComponent } from './riddles/riddles.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EndComponent } from './end/end.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'riddles', component: RiddlesComponent },
  { path: 'end', component: EndComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
