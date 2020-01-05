import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostalCode } from '../../shared/models/postal-code.model';

@Injectable({ providedIn: 'root' })
export class PostalCodeService {
  constructor(private http: HttpClient) {
    console.log('Loaded PostalCodeService!');
  }

  getAll() {
    return this.http.get<PostalCode[]>('https://service.who-cares.com/postal-codes');
  }
}
