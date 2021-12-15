import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastService {

  constructor(private toastrService: ToastrService) { }

  error() {
    this.toastrService.error('El usuario no existe', 'Error', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }
  
}
