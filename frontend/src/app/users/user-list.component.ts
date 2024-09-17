import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { UserService } from '../../service/user.service'; // Adjust path if necessary
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include CommonModule here
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  newUser = { name: '', surname: '', dob: '', gender: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addUser(): void {
    if (
      this.newUser.name &&
      this.newUser.surname &&
      this.newUser.dob &&
      this.newUser.gender
    ) {
      this.userService.addUser(this.newUser).subscribe((user) => {
        this.users.push(user); // Add the new user to the list
        this.newUser = { name: '', surname: '', dob: '', gender: '' }; // Reset form
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== id); // Remove deleted user from list
    });
  }
}
