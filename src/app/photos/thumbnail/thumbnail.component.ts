import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit, OnChanges {

  @Input() imgLoc: string;
  @Input() imgType: string;
  @Input() imgName: string;
  @Output() clickedImg = new EventEmitter();

  imgLocModal: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){

  }


  onClickImg(imgLoc: string){
    this.clickedImg.emit({imgLocModal: imgLoc});
  }

}
