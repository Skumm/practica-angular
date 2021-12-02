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

  it('El numero de input coincide con los existentes en FormGroup', () => {
    const loginFormGroupLength = Object.keys(component.formLogin.controls).length;
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(loginFormGroupLength);
  });

  it('Comprobamos validacion con datos INCORRECTOS', () => {
    component.formLogin.controls.email.setValue('a.-@hotmail.com');
    component.formLogin.controls.password.setValue('1234');
    expect(component.formLogin.valid).toBeFalsy();
  });

  it('Comprobamos validacion con datos CORRECTOS', () => {
    component.formLogin.controls.email.setValue('joseantonio@hotmail.com');
    component.formLogin.controls.password.setValue('123456');
    expect(component.formLogin.valid).toBeTruthy();
  });

  it('Comprobamos que el boton permanece deshabilitado con datos INCORRECTOS', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputElements = formElement.querySelectorAll('input');
    const buttonElement = formElement.querySelector('button');
    inputElements[0].value = 'a.-+@hotmail.com';
    expect(buttonElement.disabled).toBeTruthy();
  });

  it('Comprobamos que el boton permanece habilitado con datos CORRECTOS', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputElements = formElement.querySelectorAll('input');
    const buttonElement = formElement.querySelector('button');
    inputElements[0].value = 'joseantonio@hotmail.com';
    inputElements[1].value = '123456';
    expect(buttonElement.attributes.getNamedItem('ng-reflect-is-disabled')?.value).toBeFalsy();
  });
});
