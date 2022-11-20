import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor(private router : Router) { }

  variable = "";
// my = []
  my = [
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: ["Kotlin", "Java", "Android", "Kotlin", "Java", "Android", "Kotlin", "Java", "Android"],
      likes: 20
    },
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: ["Kotlin"],
      likes: 20
    },
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: ["C++", "Kotlin"],
      likes: 20
    },
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: ["Kotlin"],
      likes: 20
    },
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: ["Kotlin"],
      likes: 20
    },
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: ["Kotlin"],
      likes: 20
    },
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: ["Kotlin"],
      likes: 20
    },
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: ["Kotlin"],
      likes: 20
    }

  ]

  filtered : any = this.my;

  ngOnInit(): void {
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

  openNewPageToCreateNewProject(){
    this.router.navigate(['/new']);
  }

}
