
import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EmployeelistComponent} from './employeelist/employeelist.component';
import {AddemployeeComponent} from './addemployee/addemployee.component';


export const routes:Route[]=[{
    path:'home',
    component:HomeComponent
},
{
    path:'employeelist',
    component:EmployeelistComponent
},
{
    path:'addemployee',
    component:AddemployeeComponent
},
{

   path:'**',
   component:HomeComponent,pathMatch:'full'
}
]
