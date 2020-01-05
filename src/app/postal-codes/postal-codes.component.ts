import { Component, OnInit } from '@angular/core';
import { PostalCode } from '../shared/models/postal-code.model';
import { PostalCodeService } from '../core/services/postal-code.service';

@Component({
  selector: 'app-postal-codes',
  templateUrl: './postal-codes.component.html',
  styleUrls: ['./postal-codes.component.scss']
})
export class PostalCodesComponent implements OnInit {
  searchText: string;
  postalCodes: PostalCode[];

  constructor(private pcs: PostalCodeService) {
    console.log('Loaded PostalCodesComponent!');
  }

  ngOnInit() {
    this.pcs.getAll()
      .subscribe(data => {
        this.postalCodes = data;
      });
  }
}
