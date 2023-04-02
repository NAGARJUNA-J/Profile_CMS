import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProfileComponent>,public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }
  editForm:any;
  editData:any
 

  ngOnInit(): void {
    this.editData = this.data
    console.log(this.data)
    this.editForm = this.fb.group({
      name:['',[Validators.required]],
      domain:['',[Validators.required]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      phoneNo:['',[Validators.required]],
      location:['',[Validators.required]]
    })
    this.editForm.get('name').patchValue(this.editData.name)
    this.editForm.get('domain').patchValue(this.editData?.domain)
    this.editForm.get('gender').patchValue(this.editData?.gender)
    this.editForm.get('dob').patchValue(this.editData?.dob)
    this.editForm.get('phoneNo').patchValue(this.editData?.phone)
    this.editForm.get('location').patchValue(this.editData?.location)
  }


  onCancel(){
    const data={
      name:this.editForm.get('name').value,
      domain:this.editForm.get('domain').value,
      gender: this.editForm.get('gender').value,
      dob: this.editForm.get('dob').value,
      phone: this.editForm.get('phoneNo').value,
      location:this.editForm.get('location').value
    }
    this.dialogRef.close(data)
  }

  

}
