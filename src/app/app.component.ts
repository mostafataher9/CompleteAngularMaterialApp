import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CompleteAngularMaterialApp';
  employees$: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    // Example: Reading data from Firebase
    this.employees$=this.db.list('employees').valueChanges();
    this.employees$.subscribe(data => {
      console.log(data);
    });
}
}
