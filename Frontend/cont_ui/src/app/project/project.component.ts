import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  userData: any;
  projectId: any;
  projectData: any;
  isCurrTeamOpen = false;
  isRequestsOpen = false;
  isLikedByOpen = false;

  // contributors: any = [
  //   {
  //     "_id": "63999a353c8a62c825baa788",
  //     "userId": 1,
  //     "name": "Abhijeet",
  //     "userName": "Abhijeet@1710",
  //     "email": "abhijeetkhamkar30@gmail.com",
  //     "password": "Abhijeet@1710",
  //     "phoneNumber": "7558348607",
  //     "address": "Sakori Belhe",
  //     "myProjects": [],
  //     "participatedProjects": [],
  //     "profilePicture": "https://avatars.githubusercontent.com/u/52439127?v=4",
  //     "connections": [],
  //     "connectionRequests": [],
  //     "tagLine": "Goals give u focus, Dreams give u power",
  //     "liked": [],
  //     "aboutMe": "Hey user add here anything about your personal and professional life. For Ex. ,\n 💖 India,\n 🎓DSE (MEAN Stack Developer) at Infosys,\n💖 India,\n 🎓DSE (MEAN Stack Developer) at Infosys,\n💖 India,\n 🎓DSE (MEAN Stack Developer) at Infosys\n",
  //     "company": "DSE @ Infosys",
  //     "location": "",
  //     "link": "https://github.com/Abhijeet1710",
  //     "twitter": "abhikhamkar30",
  //     "chat": [],
  //     "createdAt": "2022-12-14T09:41:10.008Z",
  //     "updatedAt": "2022-12-15T04:05:33.113Z",
  //     "__v": 0
  //     },
  //     {
  //     "_id": "6399e800d6788daa8d33d640",
  //     "userId": 2,
  //     "name": "Aditya",
  //     "userName": "Adi",
  //     "email": "ad@g.com",
  //     "password": "ad",
  //     "phoneNumber": "",
  //     "address": "",
  //     "myProjects": [
  //     6
  //     ],
  //     "participatedProjects": [],
  //     "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo3luud5KPZknLR5zdUUwzvYBztWgTxrkbA&usqp=CAU",
  //     "connections": [],
  //     "connectionRequests": [],
  //     "tagLine": "Chasing Excellence | Leetcoder",
  //     "liked": [],
  //     "aboutMe": "Hey user add here anything about your personal and professional life. For Ex. , 💖 India, 🎓DSE (MEAN Stack Developer) at Infosys",
  //     "company": "",
  //     "location": "",
  //     "link": "",
  //     "twitter": "",
  //     "chat": [],
  //     "createdAt": "2022-12-14T15:13:04.155Z",
  //     "updatedAt": "2022-12-15T03:45:48.276Z",
  //     "__v": 0
  //     },
  //     {
  //     "_id": "639a9c772917acd3d23e9b8a",
  //     "userId": 3,
  //     "name": "pk",
  //     "userName": "pk",
  //     "email": "pk",
  //     "password": "pk",
  //     "phoneNumber": "",
  //     "address": "",
  //     "myProjects": [],
  //     "participatedProjects": [],
  //     "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo3luud5KPZknLR5zdUUwzvYBztWgTxrkbA&usqp=CAU",
  //     "connections": [],
  //     "connectionRequests": [],
  //     "tagLine": "",
  //     "liked": [],
  //     "aboutMe": "Hey user add here anything about your personal and professional life. For Ex. , 💖 India, 🎓DSE (MEAN Stack Developer) at Infosys",
  //     "company": "",
  //     "location": "",
  //     "link": "",
  //     "twitter": "",
  //     "chat": [],
  //     "createdAt": "2022-12-15T04:03:03.568Z",
  //     "updatedAt": "2022-12-15T04:03:03.568Z",
  //     "__v": 0
  //     }
  // ];
  contributors: any = [];
  likedBy: any = [];
  requests: any = [];

  isAdmin = false;
  isContributor = false;
  isUser = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private projectService: ProjectService) {
    const user = JSON.parse(localStorage.getItem('user'));

    this.userData = { ...user };

    if (!user) {
      router.navigate(['SignIn'])
    }
  }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.paramMap.get('projectId');

    // Get Project
    this.projectService.getProject(this.projectId).subscribe(
      (res) => {
        console.log(res.data[0]);
        this.projectData = res.data[0];
        
        this.isAdmin = this.projectData.projectAdmin == this.userData.userId;
        this.isContributor = this.projectData.projectContributors.includes(this.userData.userId);

        // Get Contributors
        this.projectService.getUsersPresentInArray(this.projectData.projectContributors).subscribe(
          (res) => {
            console.log(res);
            this.contributors = res.data;
          },
          (err) => {
            console.log(err);
          }
        )

        //
        
        // Get Requests Bys
        this.projectService.getUsersPresentInArray(this.projectData.requests).subscribe(
          (res) => {
            console.log(res);
            this.requests = res.data;
          },
          (err) => {
            console.log(err);
          }
        )
        // Get Liked Bys
        this.projectService.getUsersPresentInArray(this.projectData.liked).subscribe(
          (res) => {
            console.log(res);
            this.likedBy = res.data;
          },
          (err) => {
            console.log(err);
          }
        )
      },
      (err) => {
        console.log(err);
      }
    )
   
  }

  hasSentRequest() {
    return this.projectData.requests.includes(this.userData.userId);
  }

  hasAccesToSendRequest() {
    return (!this.isAdmin && !this.isContributor);
  }

  hasAccesToAcceptRequest() {
    return (this.isAdmin);
  }

  sendRequest() {
    this.projectService.sendRequest(this.projectData.projectId, this.userData.userId).subscribe(
      (res) => {
        console.log(res);
        this.ngOnInit();
      },
      (err) => {
        console.log(err);

      }
    )
  }

  acceptRequest(user) {
    this.projectService.acceptRequest(this.projectData.projectId, user.userId).subscribe(
      (res) => {
        console.log(res);
        // this.ngOnInit();
      },
      (err) => {
        console.log(err);

      }
    )
  }
}
