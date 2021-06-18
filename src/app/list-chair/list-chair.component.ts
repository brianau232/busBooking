import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ChairComponent } from './chair/chair.component';

@Component({
  selector: 'app-list-chair',
  templateUrl: './list-chair.component.html',
  styleUrls: ['./list-chair.component.scss']
})
export class ListChairComponent implements OnInit {
  @ViewChildren(ChairComponent) tagListChair: QueryList<ChairComponent> = new QueryList()
  // @ViewChild('tongTien') tongTien:any= ElementRef
  mangGhe: any = [
    { SoGhe: '01', TenGhe: "số 1", Gia: 150, TrangThai: false, DaDat: false },
    { SoGhe: '02', TenGhe: "số 2", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '03', TenGhe: "số 3", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '04', TenGhe: "số 4", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '05', TenGhe: "số 5", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '06', TenGhe: "số 6", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '07', TenGhe: "số 7", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '08', TenGhe: "số 8", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '09', TenGhe: "số 9", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '11', TenGhe: "số 11", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '11', TenGhe: "số 11", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '10', TenGhe: "số 10", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '12', TenGhe: "số 12", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '13', TenGhe: "số 13", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '14', TenGhe: "số 14", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '15', TenGhe: "số 15", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '16', TenGhe: "số 16", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '17', TenGhe: "số 17", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '18', TenGhe: "số 18", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '19', TenGhe: "số 19", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '20', TenGhe: "số 20", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '21', TenGhe: "số 21", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '22', TenGhe: "số 22", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '23', TenGhe: "số 23", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '24', TenGhe: "số 24", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '25', TenGhe: "số 25", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '26', TenGhe: "số 26", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '27', TenGhe: "số 27", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '28', TenGhe: "số 28", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '29', TenGhe: "số 29", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '30', TenGhe: "số 30", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '31', TenGhe: "số 31", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '32', TenGhe: "số 32", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '33', TenGhe: "số 33", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '34', TenGhe: "số 34", Gia: 100, TrangThai: false, DaDat: false },
    { SoGhe: '35', TenGhe: "số 35", Gia: 100, TrangThai: false, DaDat: false },
  ];
  toTal : number = 0;
  constructor() {
  }

  ngOnInit(): void {

  }

  // Chọn ghế
  choiceChair(chair: any) {
    this.mangGhe.find((item: any) => {
      if (item.SoGhe === chair.SoGhe) {
        chair.TrangThai = !chair.TrangThai;
      };
    });
    this.tongTien()
  };

  // Đặt vé
  handleBooking() {
    this.tagListChair.forEach((item: any) => {
      if (item.chair.TrangThai === true) {
        item.chair.DaDat = true;
      };
    });
  }

  // Hủy đặt vé
  cancelBooking(id: number) {
    this.mangGhe.forEach((item: any, index: any) => {
      if (index === id) {
        item.TrangThai = !item.TrangThai;
        item.DaDat = false;
      };
    });
    this.tongTien()
  };

  // Tính tổng tiền
  tongTien() {
    let tongTien = 0;
    let X = this.mangGhe.filter((item: any) => {
      return item.TrangThai===true;
    },0);
    X.forEach((item:any) => {
     return tongTien+=item.Gia;
    });
    this.toTal = tongTien;
  }
};




