import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  agents!: any[];

  representatives!: any[];

  statuses!: any[];
  items: MenuItem[] | undefined;
  @ViewChild('menu') menu :any

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private router: Router) {}

  AddCard(){
    this.router.navigate(['card/cardform']);
  }

  
  update():void {
    
   
    // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
}
delete(){}

  ngOnInit() {
    this.items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'QR Code',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.update();
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.delete();
                    }
                }
            ]
        },
        {
            
        }
    ];
    
      this.agents = [
          {
              "id": 1022,
              "name": "Rajesh Kapoor",
              "state": {
                  "name": "Maharashtra",
                  "code": "mh"
              },
              "company": "Metro Logistics",
              "date": "2023-03-15",
              "status": "Active",
              "verified": true,
              "activity": 22,
              "representative": {
                  "name": "Anita Sharma",
                  "image": "anitasharma.png"
              },
              "cashback": 400
          },
          {
              "id": 1023,
              "name": "Neha Verma",
              "state": {
                  "name": "Uttar Pradesh",
                  "code": "up"
              },
              "company": "Speedy Deliveries",
              "date": "2023-07-10",
              "status": "Active",
              "verified": true,
              "activity": 18,
              "representative": {
                  "name": "Vikram Choudhary",
                  "image": "vikramchoudhary.png"
              },
              "cashback": 300
          },
          {
              "id": 1024,
              "name": "Amit Patel",
              "state": {
                  "name": "Gujarat",
                  "code": "gj"
              },
              "company": "Express Connect",
              "date": "2023-12-05",
              "status": "Inactive",
              "verified": true,
              "activity": 15,
              "representative": {
                  "name": "Sonia Mehta",
                  "image": "soniamehta.png"
              },
              "cashback": 200
          },
          {
              "id": 1025,
              "name": "Vivek Singh",
              "state": {
                  "name": "Bihar",
                  "code": "br"
              },
              "company": "Rapid Dispatch",
              "date": "2023-08-22",
              "status": "Active",
              "verified": true,
              "activity": 27,
              "representative": {
                  "name": "Preeti Verma",
                  "image": "preetiverma.png"
              },
              "cashback": 500
          },
          {
              "id": 1026,
              "name": "Ananya Gupta",
              "state": {
                  "name": "West Bengal",
                  "code": "wb"
              },
              "company": "Eastern Express",
              "date": "2023-04-17",
              "status": "Active",
              "verified": true,
              "activity": 24,
              "representative": {
                  "name": "Rajat Kapoor",
                  "image": "rajatkapoor.png"
              },
              "cashback": 50
          },
          {
              "id": 1027,
              "name": "Shivani Mishra",
              "state": {
                  "name": "Madhya Pradesh",
                  "code": "mp"
              },
              "company": "Central Cargo",
              "date": "2023-11-30",
              "status": "Inactive",
              "verified": true,
              "activity": 20,
              "representative": {
                  "name": "Avinash Sharma",
                  "image": "avinashsharma.png"
              },
              "cashback": 400
          },
          {
              "id": 1028,
              "name": "Rahul Joshi",
              "state": {
                  "name": "Rajasthan",
                  "code": "rj"
              },
              "company": "Desert Deliveries",
              "date": "2023-01-12",
              "status": "Active",
              "verified": true,
              "activity": 18,
              "representative": {
                  "name": "Kavita Singh",
                  "image": "kavitasingh.png"
              },
              "cashback": 490
          },
          {
              "id": 1029,
              "name": "Divya Reddy",
              "state": {
                  "name": "Telangana",
                  "code": "tg"
              },
              "company": "Tech Transport",
              "date": "2023-06-05",
              "status": "Active",
              "verified": true,
              "activity": 23,
              "representative": {
                  "name": "Arjun Gupta",
                  "image": "arjungupta.png"
              },
              "cashback": 550
          },
          {
              "id": 1030,
              "name": "Kunal Mehta",
              "state": {
                  "name": "Haryana",
                  "code": "hr"
              },
              "company": "North Star Logistics",
              "date": "2023-10-18",
              "status": "Inactive",
              "verified": true,
              "activity": 16,
              "representative": {
                  "name": "Neha Kapoor",
                  "image": "nehakapoor.png"
              },
              "cashback": 380
          },
          {
              "id": 1031,
              "name": "Sneha Jain",
              "state": {
                  "name": "Karnataka",
                  "code": "ka"
              },
              "company": "Southern Express",
              "date": "2023-04-25",
              "status": "Active",
              "verified": true,
              "activity": 26,
              "representative": {
                  "name": "Vishal Agarwal",
                  "image": "vishalagarwal.png"
              },
              "cashback": 400
          },
          {
              "id": 1032,
              "name": "Alok Gupta",
              "state": {
                  "name": "Uttarakhand",
                  "code": "ut"
              },
              "company": "Himalayan Haulers",
              "date": "2023-08-14",
              "status": "Active",
              "verified": true,
              "activity": 21,
              "representative": {
                  "name": "Ritu Sharma",
                  "image": "ritusharma.png"
              },
              "cashback": 510
          },
          {
              "id": 1033,
              "name": "Suresh Kumar",
              "state": {
                  "name": "Tamil Nadu",
                  "code": "tn"
              },
              "company": "Chennai Express Logistics",
              "date": "2023-12-30",
              "status": "Inactive",
              "verified": true,
              "activity": 19,
              "representative": {
                  "name": "Anjali Reddy",
                  "image": "anjalireddy.png"
              },
              "cashback": 440
          },
          {
              "id": 1034,
              "name": "Manisha Singh",
              "state": {
                  "name": "Punjab",
                  "code": "pb"
              },
              "company": "Amrit Logistics",
              "date": "2023-02-08",
              "status": "Active",
              "verified": true,
              "activity": 28,
              "representative": {
                  "name": "Rahul Verma",
                  "image": "rahulverma.png"
              },
              "cashback": 530
          },
          {
              "id": 1035,
              "name": "Harish Sharma",
              "state": {
                  "name": "Andhra Pradesh",
                  "code": "ap"
              },
              "company": "Coastal Couriers",
              "date": "2023-05-31",
              "status": "Active",
              "verified": true,
              "activity": 25,
              "representative": {
                  "name": "Meera Patel",
                  "image": "meerapatel.png"
              },
              "cashback": 570
          },
          {
              "id": 1036,
              "name": "Sanjay Yadav",
              "state": {
                  "name": "Jharkhand",
                  "code": "jh"
              },
              "company": "Jharkhand Jets",
              "date": "2023-10-05",
              "status": "Inactive",
              "verified": true,
              "activity": 17,
              "representative": {
                  "name": "Priyank Khanna",
                  "image": "priyankkhanna.png"
              },
              "cashback": 40
          },
          {
              "id": 1037,
              "name": "Ayesha Khan",
              "state": {
                  "name": "Kerala",
                  "code": "kl"
              },
              "company": "Kochi Connections",
              "date": "2023-06-19",
              "status": "Active",
              "verified": true,
              "activity": 22,
              "representative": {
                  "name": "Aditya Nair",
                  "image": "adityanair.png"
              },
              "cashback": 49
          },
          {
              "id": 1038,
              "name": "Rohan Desai",
              "state": {
                  "name": "Goa",
                  "code": "ga"
              },
              "company": "Goan Express",
              "date": "2023-01-23",
              "status": "Active",
              "verified": true,
              "activity": 20,
              "representative": {
                  "name": "Simran Kapoor",
                  "image": "simrankapoor.png"
              },
              "cashback": 46
          },
          {
              "id": 1039,
              "name": "Meenakshi Sharma",
              "state": {
                  "name": "Odisha",
                  "code": "od"
              },
              "company": "Oriental Logistics",
              "date": "2023-11-07",
              "status": "Inactive",
              "verified": true,
              "activity": 18,
              "representative": {
                  "name": "Sushil Tiwari",
                  "image": "sushiltiwari.png"
              },
              "cashback": 42
          },
          {
              "id": 1040,
              "name": "Akash Chauhan",
              "state": {
                  "name": "Assam",
                  "code": "as"
              },
              "company": "Assam Airlift",
              "date": "2023-09-05",
              "status": "Active",
              "verified": true,
              "activity": 26,
              "representative": {
                  "name": "Nandini Das",
                  "image": "nandinidas.png"
              },
              "cashback": 58
          },
          {
              "id": 1041,
              "name": "Prateek Tiwari",
              "state": {
                  "name": "Chhattisgarh",
                  "code": "cg"
              },
              "company": "Chhattisgarh Carriers",
              "date": "2023-04-12",
              "status": "Active",
              "verified": true,
              "activity": 23,
              "representative": {
                  "name": "Swati Dubey",
                  "image": "swatidubey.png"
              },
              "cashback": 54
          },
          {
              "id": 1042,
              "name": "Rajat Malhotra",
              "state": {
                  "name": "Himachal Pradesh",
                  "code": "hp"
              },
              "company": "Himalayan Haulers",
              "date": "2023-12-28",
              "status": "Inactive",
              "verified": true,
              "activity": 19,
              "representative": {
                  "name": "Aanchal Thakur",
                  "image": "aanchalthakur.png"
              },
              "cashback": 430
          },
          {
              "id": 1043,
              "name": "Nikhil Yadav",
              "state": {
                  "name": "Meghalaya",
                  "code": "ml"
              },
              "company": "Meghalaya Movers",
              "date": "2023-02-15",
              "status": "Active",
              "verified": true,
              "activity": 29,
              "representative": {
                  "name": "Ankita Das",
                  "image": "ankitadas.png"
              },
              "cashback": 61
          }

      ];

      // this.agentService.getagentsLarge().then((agents) => {
      //     this.agents = agents;
      //     this.loading = false;

      //     this.agents.forEach((agent) => (agent.date = new Date(<Date>agent.date)));
      // });

      // this.representatives = [
      //     { name: 'Amy Elsner', image: 'amyelsner.png' },
      //     { name: 'Anna Fali', image: 'annafali.png' },
      //     { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      //     { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      //     { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      //     { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      //     { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      //     { name: 'Onyama Limba', image: 'onyamalimba.png' },
      //     { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      //     { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
      // ];

      this.statuses = [
          { label: 'inactive', value: 'inactive' },
          { label: 'active', value: 'active' },
          { label: 'New', value: 'new' },
          { label: 'Negotiation', value: 'negotiation' },
          { label: 'Renewal', value: 'renewal' },
          { label: 'Proposal', value: 'proposal' },
      ];
  }

  clear(table: Table) {
      table.clear();
  }

  getSeverity(status: string) {
      switch (status.toLowerCase()) {
          case 'inactive':
              return 'danger';

          case 'active':
              return 'success';

          case 'new':
              return 'info';

          case 'negotiation':
              return 'warning';

          case 'renewal':
              return null;
              default:
                  return null
      }
  }

}
