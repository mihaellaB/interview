import { Pipe } from '@angular/core';

@Pipe({
  name: 'notAdmin'
})
export class NotAdminPipe {
  // Should return 'Is not an ADMIN' if user type is not 'Admin'
}
