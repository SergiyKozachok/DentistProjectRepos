import { Component, OnInit } from '@angular/core';
import {DentistProfileService} from '../../../services/dentist-prifile-service.service';

@Component({
  selector: 'app-first-subcategory-for-patient',
  templateUrl: './first-subcategory-for-patient.component.html',
  styleUrls: ['./first-subcategory-for-patient.component.css'],
  providers: [DentistProfileService]
})
export class FirstSubcategoryForPatientComponent implements OnInit {

  dentists = [];
  search: string = '';

  constructor(private dentistProfileService: DentistProfileService) { }

  ngOnInit() {
    this.dentists = this.dentistProfileService.dentists;
  }

}
