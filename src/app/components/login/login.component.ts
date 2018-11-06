import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  incorrectos:boolean = false;

  constructor(private auth:AngularFireAuth, private router:Router) { 
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5),Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(5)])
    });
    this.auth.auth.signOut();
  }

  ngOnInit() {
  }


  ingresar(){
    console.log(this.login);
    if(this.login.valid){ 
      this.auth.auth.signInWithEmailAndPassword(this.login.controls.email.value, this.login.controls.password.value)
                    .then(res =>{
                      this.router.navigate(['/home']);
                    })
                    .catch(err => {
                      console.log(err);
                      this.showMessage(2000);
                      this.login.reset();
                    });
    }else{
      console.log("Datos no validos");
      this.showMessage(2000);
      this.login.reset();
    }
  }

  showMessage(time:number){
    this.incorrectos = true;
    setTimeout(()=>{
      this.incorrectos = false;
    }, time);
  }

  
}
