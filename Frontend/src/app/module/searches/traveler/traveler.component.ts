import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-traveler',
  imports: [CommonModule, FormsModule, Select, FloatLabel],
  templateUrl: './traveler.component.html',
  styleUrl: './traveler.component.css',
})
export class TravelerComponent {
  count: number = 1;
  times: number[] = [];
  age: any[] = Array.from({ length: 17 }, (_, i) => ({
    name: i == 0 ? 'Less then 1 year' : `${i} years`,
    value: i,
  }));
  value2: any;
  children: number = 8;

  // room
  room: number = 1;

  rooms: any[] = [{ id: 1, adults: 1, children: 0 }];
  nextRoomId = 2;
  display = true;
  toggle() {
    this.display = !this.display;
  }

  plus(room: any) {
    room.adults++;
  }

  minus(room: any) {
    if (room.adults > 1) room.adults--;
  }

  childPlus(room: any) {
    room.children++;
  }

  childMinus(room: any) {
    if (room.children > 0) room.children--;
  }

  plusRooms() {
    if (this.rooms.length < 8) {
      this.rooms.push({ id: this.nextRoomId++, adults: 1, children: 0 });
    }
  }

  removeRoom(room: any) {
    if (this.rooms.length > 1) {
      this.rooms = this.rooms.filter((r) => r.id !== room.id);
    }
  }
}
