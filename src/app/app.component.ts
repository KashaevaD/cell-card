import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  size:number = 4;
  data:any[];
  currentOpened:any[] = [];

  constructor() {
    this.data = this.createTable();
  }

  images:{src:string, id:number, isOpen:boolean, isHidden:boolean}[]  = [                             //images in table
    {
      src: 'assets/img/0.jpg',
      id: 0,
      isOpen: false,
      isHidden: false
    },
    {
      src: 'assets/img/1.jpg',
      id: 1,
      isOpen: false,
      isHidden: false
    },
    {
      src: 'assets/img/2.jpg',
      id: 2,
      isOpen: false,
      isHidden: false
    },
    {
      src: 'assets/img/3.jpg',
      id: 3,
      isOpen: false,
      isHidden: false
    }
  ];


  private createArray():any[] {                       //create array with img
    let arr = [];
    let count = 0;

    for (let i = 0; i < Math.pow(this.size,2); i++) {
      arr.push({
        src: this.images[count].src,
        id: i,
        isOpen: this.images[count].isOpen
      });
      count++;
      if (count >= this.images.length) {
          count = 0;
      } 
    }
    return arr;
  }

   private createRandomImage(array):any[] {           //random order in array
    return array.sort(function() {
        return 0.5 - Math.random();
    });
  }
  
  public createTable():any[][] {                     //create double array
    let current = this.createArray();
    console.log(current);
    let currentArray = this.createRandomImage(current);
    return currentArray;
  }

  public deleteCard(elem:any) {
    console.log(elem);
    if (this.currentOpened.indexOf(elem) === -1){
      this.currentOpened.push(elem);
      if (this.currentOpened.length == 2) {
        setTimeout(()=>{
          if (this.currentOpened[0].src === this.currentOpened[1].src) {
            console.log("equal");
            this.currentOpened[0].isHidden = true;
            this.currentOpened[1].isHidden = true;
          }else {
            //this.currentOpened[0].isOpen = false;
            //this.currentOpened[1].isOpen = false;
            console.log("diff");
          }
          this.currentOpened[0].isOpen = false;
          this.currentOpened[1].isOpen = false;
          this.currentOpened = [];
        },500);
      } 
    }



    // if (!this.tempSell.class) {
    //   this.tempSell = cell;

    // } else {
    //   this.stopClick = true;
    //   setTimeout(() => {
    //     if (this.tempSell === cell) {
    //       cell.isOpen = false;

    //     } else if (this.tempSell.class === cell.class) {
    //       this.tempSell.isHidden = !this.tempSell.isHidden;
    //       cell.isHidden = !cell.isHidden;
    //       this.count += 2;
    //       if (this.count === this.list.length) {
    //         this.checkTimer = false;
    //         this.showField = false;
    //       }
    //     } else {
    //       this.tempSell.isOpen = false;
    //       cell.isOpen = false;
    //     }
    //     this.tempSell = {};
    //     this.stopClick = false;
    //   }, 300);
    // }

  }


}
