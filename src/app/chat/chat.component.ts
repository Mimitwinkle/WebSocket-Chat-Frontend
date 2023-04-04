import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms'
import { WebsocketService } from '../services/websocket.service';
import { ChatMessage } from '../models/chatMessage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(public websocketService: WebsocketService) { }

  ngOnInit(): void {
    this.websocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.websocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessage = new ChatMessage(sendForm.value.user, sendForm.value.message);
    this.websocketService.sendMessage(chatMessage);
    sendForm.controls['message'].reset();
  }

}