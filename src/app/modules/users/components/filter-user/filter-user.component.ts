import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-filter-user',
  templateUrl: './filter-user.component.html',
  styleUrls: ['./filter-user.component.scss']
})
export class FilterUserComponent implements OnInit {
  inputList: any = [];
  controlList: any = {};
  @Output() searchData = new EventEmitter<any>();
  public searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
    this.searchForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.usersService.getUserList().subscribe(res => {
      this.inputList = Object.keys(res[0]);
      this.generateForm();
    });
  }

  private generateForm() {
    this.inputList.forEach((input: any) => {
      this.controlList[input] = new FormControl([])
    })
    console.log(this.controlList);
    this.searchForm = this.formBuilder.group(this.controlList);
  }

  public sendData(searchForm: FormGroup): void{
    this.searchData.emit(searchForm.value);
  }

}
