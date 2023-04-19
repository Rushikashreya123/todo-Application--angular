import { Component, Output } from '@angular/core';
import { BodyServiceService } from './inpfield/body-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  add:string='add';
  name:string='';
  discription:string='';
  constructor(private a:BodyServiceService){
    
  }
  
  Name(event:string)
  {
    this.name=event;
  
  }
  Discription(event:string)
  {
    this.discription=event;
  
  }
  addfunc()
  {
    this.a.info.push({name:this.name,discription:this.discription});
    console.log(this.name)
  }
 

}
