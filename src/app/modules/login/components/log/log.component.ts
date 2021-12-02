import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  @Output() loginData = new EventEmitter<any>();
  public formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: new FormControl([],
        [Validators.required]),
      password: new FormControl([],
        [Validators.minLength(6), Validators.maxLength(10), Validators.required])
    });
  }

  public sendData(formLogin: FormGroup): void{
    this.loginData.emit(formLogin.value);
  }

}
