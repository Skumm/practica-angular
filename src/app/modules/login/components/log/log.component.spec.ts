import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogComponent } from './log.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Comprobamos que el formulario es INVALIDO cuando esta vacio', () => {
    component.formLogin.controls.user.setValue('');
    component.formLogin.controls.password.setValue('');
    expect(component.formLogin.valid).toBeFalsy();
  });

  it('Comprobamos que el campo usuario es INVALIDO cuando esta vacio', () => {
    component.formLogin.controls.user.setValue('');
    expect(component.formLogin.controls.user.valid).toBeFalsy();
  });

  it('Comprobamos que el campo usuario contiene el error required', () => {
    let errors = component.formLogin.controls.user.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('Comprobamos que al introducir un usuario el error required no está presente', () => {
    component.formLogin.controls.user.setValue('b');
    let errors = component.formLogin.controls.user.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('Comprobamos que el campo password es INVALIDO cuando esta vacio', () => {
    component.formLogin.controls.password.setValue('');
    expect(component.formLogin.controls.password.valid).toBeFalsy();
  });

  it('Comprobamos que el campo password contiene el error required', () => {
    let errors = component.formLogin.controls.password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('Comprobamos que al introducir un password el error required no está presente', () => {
    component.formLogin.controls.password.setValue('b');
    let errors = component.formLogin.controls.password.errors || {};
    expect(errors['required']).toBeFalsy();
  });
});
