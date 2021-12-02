import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ForumPosts } from '../models/ForumPosts';
import { Replies } from '../models/Replies';
import { RevAPIService } from '../services/rev-api.service';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  @Input()
  restId:number = 0;

  @Input()
  show2:boolean = false;

  listOfReplies:Replies[]=[];
  overallRating:number = 0;
  constructor(private http:RevAPIService)
  { 

  }

  ngOnChanges(changes: SimpleChanges): void {
this.listOfReplies=[];
this.http.ReplybyId(this.restId).subscribe((response) => {
  console.log(response);
  

  //It will set the show property to false to each element and also add it to our listOfUser
  response.forEach(element => {
    
    this.listOfReplies.push(element);
 
  }
);
});
  }

  ngOnInit(): void {
  }

}