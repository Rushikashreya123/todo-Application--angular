import { Component, Input } from '@angular/core';
import { BodyServiceService } from '../header/inpfield/body-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  get:any=[];
  d:object={name:'',discription:''};
  constructor(private a:BodyServiceService){
    this.get=a.info;
  }
 
  remove(event:number)
  {
    
    this.a.info.splice(event,1);
    
  }
}
