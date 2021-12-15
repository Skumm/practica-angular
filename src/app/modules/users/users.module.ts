import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './pages/users/users.component';
import {HomeModule} from '../home/home.module';
import { CoreModule } from 'src/app/core/core.module';
import { FilterUserComponent } from './components/filter-user/filter-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    FilterUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HomeModule,
    CoreModule,
    ReactiveFormsModule 
  ]
})
export class UsersModule { }
