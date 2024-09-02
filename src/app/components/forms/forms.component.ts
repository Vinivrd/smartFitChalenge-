import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent  implements OnInit{
  results = [];
  formGroup! : FormGroup;
  
  constructor(private formBuilder:FormBuilder){}
  
  ngOnInit(): void {
      this.formGroup = this.formBuilder.group({
        hour:'',
        showClosed: false
      })
  }

  onSubmit():void{
    console.log("Submit: ", this.formGroup.value);
  }
  onClean():void{
    this.formGroup.reset();
  }
}
