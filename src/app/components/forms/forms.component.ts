import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from "../../types/location.interface"
import { first, last, retry } from 'rxjs';
import { FilterUnitsService } from './../../services/filter-units.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  results: Location[] = [];
  filteredResults: Location[] = []

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService,
    private filterUnitsService: FilterUnitsService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    });
 
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });

  }
  
  onSubmit(): void {
    let {showClosed,hour} = this.formGroup.value
    this.filteredResults = this.filterUnitsService.filter(this.results,showClosed,hour)
  }

  onClean(): void {
    this.formGroup.reset();
  }

}
