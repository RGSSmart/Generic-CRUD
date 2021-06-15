
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  DAYS_IN_MONTH:any=[];
  DAYS_BY_NAME = ['Ponedeljak', 'Utorak', 'Sreda', 'Cetvrtak','Petak','Subota','Nedelja'];
  MONTH_BY_YEAR=['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar']
  CURRENT_MONTH="";
  prevDays:any[]|undefined;
  today:any|undefined;
  thisMonthDays:any[]|undefined;
  selectedDay:any|undefined;
  date = new Date();
  constructor() { }

  monthOffset=0;

  updateCalendar(){
    this.DAYS_IN_MONTH=[];
    let year = this.date.getFullYear()+this.monthOffset/12;
    let month = (this.date.getMonth()+this.monthOffset)%12+1;
    let day = new Date(year,month,0).getDate();
    this.CURRENT_MONTH= this.MONTH_BY_YEAR[month-1]; 

    for( let i = 1 ; i <= new Date(year,month,0).getDate();i++){      
      this.DAYS_IN_MONTH.push( {
        redniBroj: i,
        mesec: this.MONTH_BY_YEAR[month-1],
        danPoRedu: this.DAYS_BY_NAME[(day+i-1)%7],
      });
    }
  }
  previousMonth(){
    this.monthOffset--;
    this.updateCalendar();
  }
  nextMonth(){
    this.monthOffset++;
    this.updateCalendar();
  }
  showTimes(day:any){
    this.selectedDay = day;
  }

  ngOnInit(): void {
    this.date.setDate(1);
    this.updateCalendar();
    
  }

  

}
