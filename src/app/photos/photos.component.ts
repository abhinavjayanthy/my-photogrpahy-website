import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnChanges {

  private photosUrl = "assets/photos.json";

  @Input() photoType: string;
  static selected: string = 'all';

  @Input() imgJson: any = [];
  @Input() details: any = [];

  constructor( private _http?: Http ) { }

  ngOnInit() {
    this._http.get(this.photosUrl).map((res:Response) => res.json()).subscribe(data => {
        this.imgJson = data;
    });
  }

  ngOnChanges(){
  }


  setPhotoType(type: string){
    this.photoType = type;
  }

  isPhotoType(type: string){
      return this.photoType === type;
  }


  getList(){
    if(this.imgJson)
      return this.imgJson;
    else
      return [];
  }

  setSelected(type: string){
    console.log("selected = " + PhotosComponent.selected + " and type clicked is " + type);
    PhotosComponent.selected = type;
  }

  isSelected(type: string){
    if(PhotosComponent.selected === 'all')
        return true;
    
    return PhotosComponent.selected === type;
  }

}