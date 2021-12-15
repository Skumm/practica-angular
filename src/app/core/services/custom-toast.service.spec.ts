import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { CustomToastService } from './custom-toast.service';

describe('CustomToastService', () => {
  let service: CustomToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ToastrModule.forRoot()]
    });
    service = TestBed.inject(CustomToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
