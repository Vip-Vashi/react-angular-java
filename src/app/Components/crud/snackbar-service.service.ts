// snackbar.service.ts

import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) { }

  open(message: string, action: string = 'Close', duration: number = 3000): MatSnackBarRef<any> {
    return this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: 'right',  // You can adjust the horizontal position (start, center, end)
      verticalPosition: 'top'       // You can adjust the vertical position (top, bottom)
    });
  }
}