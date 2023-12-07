import { Component,OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {
  ProductList: Product[]=
  [
    { id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0 },
    { id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0 },
    { id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0 },

  ]
id=0
  constructor(private activateroute:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.activateroute.snapshot.params['id']
    

    
  }


}
