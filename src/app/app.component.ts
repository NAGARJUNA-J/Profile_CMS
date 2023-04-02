import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from './dialog/edit-profile/edit-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CMS';
  profileData ={
    name:'Nagarjuna',
    domain:'www.nagdur.com',
    gender:'M',
    dob:'1996-08-09',
    phone:'9505344178',
    location:'gayatri naga'
  }
  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  openEdit() {
    let dialogRef = this.dialog.open(EditProfileComponent, {
      data: { ...this.profileData },
      height: '500px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((res:any) => {
      console.log('out data',res);
      this.profileData = res
    });
  }
}
