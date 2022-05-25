import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { NavElement } from 'src/app/shared/classes/navelement.class';




@Component({
  selector: 'app-main-editor',
  templateUrl: './main-editor.component.html',
  styleUrls: ['./main-editor.component.scss'],

})
export class MainEditorComponent implements OnInit {
  @ViewChild('preview', { static: false }) image : ElementRef; 

  isAutoTileSet = false;
  fileControl: FormControl;

  selectedImage: string | ArrayBuffer;
  tileSetWidth: number;
  tileSetHeight: number;

  public tileSetFile;
  constructor() {
    this.fileControl = new FormControl(this.tileSetFile, [
     
    ]);

   }



  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((files: any) => {
      this.tileSetFile = !Array.isArray(files) ? [files] : files;        
      this.onUpload();
    });
  }

  onUpload(){

    let file: File = this.tileSetFile[0];
    let reader = new FileReader();

    //In Service Packen
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
			this.selectedImage = reader.result; 
      this.getImageDimension(_event).subscribe(
        response => { 
          this.tileSetWidth = response.width as number;
          this.tileSetHeight = response.height as number;          
        }
     );
		}
  }

  // onUpload(imageInput: any){

  //   console.log(imageInput);
  //   let file: File = imageInput;
  //   let reader = new FileReader();

  //   //In Service Packen
  //   reader.readAsDataURL(file);
  //   reader.onload = (_event) => {
	// 		this.selectedImage = reader.result; 
  //     this.getImageDimension(_event).subscribe(
  //       response => { 
  //         this.tileSetWidth = response.width as number;
  //         this.tileSetHeight = response.height as number;          
  //       }
  //    );
	// 	}
    
  // }

  getDimension(){
    console.log(this.tileSetWidth)
    console.log(this.tileSetHeight)
  }

  //In Service Packen
  private getImageDimension(image): Observable<any> {
    return new Observable(observer => {
        const img = new Image();
        img.onload = function (event) {
            const loadedImage: any = event.currentTarget;
            image.width = loadedImage.width;
            image.height = loadedImage.height;
            observer.next(image);
            observer.complete();
        }
        img.src =	this.selectedImage as string;
    });
}

  // test(){
  //   console.log((this.image.nativeElement as HTMLImageElement).width);
  // }

}
