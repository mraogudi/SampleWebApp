import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleWebApp';
  closeResult!: string;
  loginForm!: FormGroup;
  forgotForm!: FormGroup;
  username!: FormControl;
  password!: FormControl;
  rpassword!: FormControl;
  uname!: FormControl;
  pwd!: FormControl;

  constructor(private formBuilder: FormBuilder, 
    private ngbModal: NgbModal, private route: ActivatedRoute, private router: Router) {  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      uname: new FormControl(''),
      pwd: new FormControl('')
    });

    this.forgotForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl(''),
      rpassword: new FormControl('')
    });
  }

  onSubmit(): void {
    /*this.appService.authenticateUser(this.loginForm.controls['uname'].value, 
      this.loginForm.controls['pwd'].value)
      .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
        alert('Invalid credentials');
        return of();
      })).subscribe((data: Users ) => {
        this.user = data;
        this.router.navigate(['/user']);
    });
    this.loginForm.reset();*/
  }

  open(conentet: any) {
    this.ngbModal.open(conentet, {ariaLabelledBy:'modal-basic-title'});
  }

  updatePassword(): void {
    let username = this.forgotForm.controls['username'].value;
    let password = this.forgotForm.controls['password'].value;
    let rpassword = this.forgotForm.controls['rpassword'].value;

    if (password == rpassword) {
      /*this.appService.updatePassword(username, password)
        .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
          alert('Password not updated');
          return of();
        }))
        .subscribe((data => {
          alert('Password is updated')
          this.forgotForm.reset();
          this.ngbModal.dismissAll();
        }));*/
    } else {
      alert('Both passowrd(s) is not same')
    }
  }

  clearForm() {
    this.loginForm.reset();
  }

  clearPasswordForm() {
    this.forgotForm.reset();
  }

}
