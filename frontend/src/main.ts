import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { UserListComponent } from './app/users/user-list.component'; // Adjust path if necessary
import { routes } from './app/app.routes';

bootstrapApplication(UserListComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes), // Add routes if needed
  ],
}).catch((err) => console.error(err));
