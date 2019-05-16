import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../users/auth.service";
import { ChatService } from "../../../shared/chat/chat.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  userChats$;
  constructor(public auth: AuthService, public cs: ChatService) { }

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
  }
}
