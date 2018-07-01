import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyList:Array<Company> =[];
  constructor(private cs:CompanyService) { }

  ngOnInit() {
  }
  getCompanies(){
    this.cs.getConpanies().subscribe(
      list=>{
        this.companyList = list;
      },
      error=>{
        console.log(error);
      }
    )
  }
}
