import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../users.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
users: string[];

  constructor(private userService : UserService) {};
  
  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
