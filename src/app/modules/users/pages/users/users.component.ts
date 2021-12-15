import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: Array<any> = [];
  usersInTable: Array<any> = [];
  pages: any = [];
  maxRow: number = 5;
  initialPage: number = 1;
  currentPage: number = 1;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUserList().subscribe(res => {
      this.userList = res;
      this.pagesList(this.userList, this.maxRow);
      this.usersInTable = this.userList.slice(0, this.maxRow);
    })
  }

  pagesList(users: any, rows: number): void {
    for(let i = 1; i <=  Math.ceil(users.length / rows); i++) {
      this.pages.push(i)
    }
  }

  setPage(index: number) {
    this.usersInTable = this.userList.slice(this.maxRow * (index - 1), this.maxRow * index);
    this.currentPage = index;
  }

  filter(data: any) {
    console.log(data);
  }
}
