import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-scheduling',
  templateUrl: './meeting-scheduling.component.html',
  styleUrls: ['./meeting-scheduling.component.css']
})
export class MeetingSchedulingComponent {

  meeting = {
    topic: '',
    numberOfPeople: 1,
    date: '',
    time: '',
    duration: ''
  };

  meetingsList: any[] = [];

  addMeeting() {
    if (
      this.meeting.topic &&
      this.meeting.numberOfPeople &&
      this.meeting.date &&
      this.meeting.time &&
      this.meeting.duration
    ) {
      this.meetingsList.push({ ...this.meeting });

      this.meeting = { topic: '', numberOfPeople: 1, date: '', time: '', duration: '' };

      alert(`Meeting ${this.meeting.topic} scheduled successfully!`);
    } else {
      alert('Please fill all fields.');
    }
  }

}
