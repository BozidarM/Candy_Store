import { Component,Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Products, UpdatingStars, Comment} from 'src/app/services/products.service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rate-comment',
  templateUrl: './rate-comment.component.html',
  styleUrls: ['./rate-comment.component.css']
})
export class RateCommentComponent implements OnInit {

  currentRate: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productsService: Products, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){

    console.log(this.currentRate)

    if(!isNaN(this.currentRate)){
      console.log(this.currentRate)
      this.updateStars(this.data.candyId, this.currentRate);
      console.log(this.currentRate)
    }

    if (form.value.comment != ""){
      this.insertComment(this.data.candyId, this.data.username, form.value.comment, new Date());
    }

    if(!isNaN(this.currentRate) || form.value.comment != ""){
      this._snackBar.open("Thank you for your feedback!","",{duration: 3000});
    }
  }

  public insertComment(candyId: string, username: string, content: string, date: Date){
    var model: Comment = {
      "candiesId": candyId,
      "username": username,
      "content": content,
      "postedAt": date
    }
    this.productsService.insertComment(model).subscribe(value => {});
  }

  public updateStars(id: string, rating: number){
    var model: UpdatingStars = {
      "id": id,
      "rating": rating
    }
    this.productsService.updateStars(model).subscribe(value => {});
  }
}

