import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor() { }

  my = [
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation 📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
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
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation 📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
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

  ngOnInit(): void {
  }

}
