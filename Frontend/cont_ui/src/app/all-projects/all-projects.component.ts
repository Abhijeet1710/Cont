import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  variable = "";
  // my = [
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin", "Java", "Android", "Kotlin", "Java", "Android", "Kotlin", "Java", "Android"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["C++", "Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   }

  // ]
  filtered : any;
  @Input() my;  

  constructor(private dashboardService : DashboardService) { 
    
    
   }

  ngOnInit(): void {
    this.filtered = this.my; 
    console.log(this.my);
  }

  filterData(newVal: any) {

    if(newVal.trim() == "") { 

      this.filtered = this.my;
      return;
    }

    newVal = newVal.toLowerCase();
    this.filtered = this.my.filter((proj : any) => {

      let n = proj.name.toLowerCase();
      let d = proj.description.toLowerCase();
      let t = proj.tech;

      if(n.includes(newVal) || d.includes(newVal)) return true;

      for(let tech of t) {
        if(tech.toLowerCase().includes(newVal)) return true;
      }

      return false;
    })

  }

  clearFilter() {
    this.variable = "";
    this.filtered = this.my;
  }

}
