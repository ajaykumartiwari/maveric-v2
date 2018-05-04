import { Component, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselStore, NguCarouselConfig } from '../carousel';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent {

  storeCarouselData: NguCarouselStore;
  rsts: any;
  stateCtrl: FormControl;
  categories: { name: string; img: string }[];
  imgags: string[];
  public carouselBannerItems: Array<any> = [];
  public carouselBanner: NguCarouselConfig;

  public carouselTileItems: Array<any> = [];
  public carouselTile: NguCarouselConfig;

  public carouselTileOneItems: Array<any> = [];
  public carouselTileOne: NguCarouselConfig;

  public carouselTileTwoItems: Array<any> = [];
  public carouselTileTwo: NguCarouselConfig;
  indexr = 0;

  @ViewChild('mybanners') mybanners: NguCarousel;

  constructor() {}

  ngOnInit() {
    // this.mybanners.
    this.imgags = [
      'assets/bg.jpg',
      'assets/car.png',
      'assets/canberra.jpg',
      'assets/holi.jpg'
    ];

    this.carouselTileOne = {
      grid: { xs: 2, sm: 3, md: 4, lg: 4, all: 0 },
      speed: 600,
      point: {
        visible: true,
        pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            background: #6b6b6b;
            padding: 5px;
            margin: 0 3px;
            transition: .4s;
          }
          .ngucarouselPoint li.active {
              border: 2px solid rgba(0, 0, 0, 0.55);
              transform: scale(1.2);
              background: transparent;
            }
        `
      },
      load: 2,
      loop: true,
      touch: true,
      easing: 'ease',
      animation: 'lazy'
    };

   
   // this.carouselBannerLoad();
    //this.carouselTileLoad();
   this.carouselTileOneLoad();
    this.carouselTileTwoLoad();

    this.categories = [
      {
        name: 'Entertainment',
        img: 'assets/bg.jpg'
      },
      {
        name: 'Technology',
        img: 'assets/canberra.jpg'
      },
      {
        name: 'Sports',
        img: 'assets/car.png'
      },
      {
        name: 'News',
        img: 'assets/holi.jpg'
      },
      {
        name: 'Environment',
        img: 'assets/bg.jpg'
      },
      {
        name: 'Finance',
        img: 'assets/car.png'
      },
      {
        name: 'Nobel',
        img: 'assets/canberra.jpg'
      },
      {
        name: 'Movies',
        img: 'assets/holi.jpg'
      },
      {
        name: 'Math',
        img: 'assets/bg.jpg'
      },
      {
        name: 'Science',
        img: 'assets/car.png'
      },
      {
        name: 'Astro',
        img: 'assets/canberra.jpg'
      },
      {
        name: 'History',
        img: 'assets/holi.jpg'
      },
      {
        name: 'Geography',
        img: 'assets/bg.jpg'
      },
      {
        name: 'Biology',
        img: 'assets/car.png'
      }
    ];
  }
  onMoveData(data) {
    console.log(data);
  }

  getCarouselData(ent) {
    this.storeCarouselData = ent;
  }

  filterStates(name: string) {
    return this.categories.filter(
      category => category.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
  }


  public carouselTileOneLoad() {
    const len = this.carouselTileOneItems.length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTileOneItems.push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
      console.log('adf');
    }
  }

  public carouselTileTwoLoad() {
    const len = this.carouselTileTwoItems.length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTileTwoItems.push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }
}
