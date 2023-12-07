import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  constructor(private acr:ActivatedRoute){}
  formProduct!:FormGroup

id=0

  ngOnInit(): void {
    this.id=this.acr.snapshot.params['id']
    this.formProduct=new FormGroup({

 
      id:new FormControl('',Validators.required),
      title:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
      quantity:new FormControl('',Validators.required),
      like:new FormControl('',Validators.required),

    }) }

get numappart(){return this.formProduct.get('numAppart')}
get description(){return this.formProduct.get('description')}
    add(){
      console.log("notre form"+JSON.stringify(this.formProduct.value))
    }
}
