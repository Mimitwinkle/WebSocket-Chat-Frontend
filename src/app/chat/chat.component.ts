import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor() { }

  ngOnInit(): void { }

  sendMessage(sendForm: NgForm) {
    console.log(sendForm.value)
  }

}