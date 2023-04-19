import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inpfield',
  templateUrl: './inpfield.component.html',
  styleUrls: ['./inpfield.component.css']
})
export class InpfieldComponent {
@Input() placeholder: string = '';
@Output() getval=new EventEmitter<string>(); 

getData(event:any){
    
  this.getval.emit(event.target.value);
  
}

}
