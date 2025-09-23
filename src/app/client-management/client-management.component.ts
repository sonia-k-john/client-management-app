import { Component } from '@angular/core';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {

  client = {
    name: '',
    email: '',
    address: '',
    password: '',
    repeatPassword: ''
  };

  clientsList: any[] = [];

  addClient() {
    if (
      this.client.name &&
      this.client.email &&
      this.client.address &&
      this.client.password &&
      this.client.repeatPassword
    ) {
      if (this.client.password !== this.client.repeatPassword) {
        alert('Passwords do not match!');
        return;
      }

      this.clientsList.push({
        name: this.client.name,
        email: this.client.email,
        address: this.client.address
      });

      // Reset the form
      this.client = { name: '', email: '', address: '', password: '', repeatPassword: '' };

      alert(`Client ${this.client.name} added successfully!`);
    } else {
      alert('Please fill all the client details.');
    }
  }
}
