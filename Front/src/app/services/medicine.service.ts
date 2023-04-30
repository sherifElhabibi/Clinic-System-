import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from '../models/medicine';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  constructor(public http: HttpClient) {}
  base = environment.baseHttp + 'medicine';
  getAllMedicine() {
    return this.http.get<{ message: String; data: Medicine[] }>(this.base);
  }
  addMedicine(med: Medicine) {
    return this.http.post<Medicine>(this.base, med);
  }
  deleteMedicine(id: number) {
    return this.http.delete<Medicine>(this.base + id);
  }
  updateMedicine(med: Medicine) {
    return this.http.put<Medicine>(this.base + med._id, med);
  }
  getMedicineById(id: number) {
    return this.http.get<Medicine>(this.base + '/' + id);
  }
}
