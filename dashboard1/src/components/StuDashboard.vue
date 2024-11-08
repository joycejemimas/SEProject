<template>
<div>
    <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
    <h2>Team XXX's Dashboard</h2>
    <p style="margin-left: auto;">Team's Score: 80/100</p>
  </div>

    <div>
    <!-- Student Data Table -->
    <div class="table-spacing">
      <EasyDataTable :headers="stu_headers" :items="stu_items"
            :hide-footer=true
            :alternating=true
            body-text-direction="center"
            header-text-direction="center"
            table-class-name="customize-table"/>
    </div>
        <break/>
    <!-- Milestone Data Table -->
    <div class="table-spacing">
        <EasyDataTable :headers="milestone_headers" :items="milestone_items"
        hide-footer="true"
        alternating="true"
        table-min-height="true"
        body-text-direction="center"
        header-text-direction="center"
        />
    </div>
</div>
</div>
  </template>

<script>

import axios from 'axios';
import EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import type { Header, Item } from "vue3-easy-data-table";

export default {
    name: 'StudentTeamsDashboard',

    data() {

        return {

          stu_headers:[],
          stu_items:[],
          milestone_headers: [],
          milestone_items: [],
          student_headers : [
    { text: "STUDENT NAME", value: "stu_name",  width: 400},
    { text: "STUDENT EMAIL", value: "stu_email" , width: 400},
    { text: "NUMBER of COMMITS", value: "number", width: 400 },
  ],
  localStuData:[
    { id:1, stu_name: "Stephen Curry", stu_email: "21f1001234@mail.com"},
    { id:2, stu_name: "Lebron James", stu_email: "21f1004321@mail.com"},
    { id:3, stu_name: "Kevin Durant", stu_email: "21f1001212@mail.com"},
    { id:4, stu_name: "Giannis Antetokounmpo", stu_email: "21f1001213@mail.com"},
    { id:5, stu_name: "Stephen Curry", stu_email: "21f1001234@mail.com"},
  ],
  localStuCommits: [
    { id: 1, user_id: 1, commits: 20 },
    { id: 2, user_id: 2, commits: 19 },
    { id: 3, user_id: 3, commits: 22 },
    { id: 4, user_id: 4, commits: 17 },
    { id: 5, user_id: 5, commits: 19 }
  ],
  miles_head:[
    { text: "MILESTONES", value: "details" },
    { text: "Milestone 1", value: "milestone1" },
    { text: "Milestone 2", value: "milestone2" },
    { text: "Milestone 3", value: "milestone3" },
    { text: "Milestone 4", value: "milestone4" },
    { text: "Milestone 5", value: "milestone5" , style: "width: 150px;"},
    { text: "Milestone 6", value: "milestone6", class: "number-commits-header"},
  ],
  localMilestones: [
    { id: 1, name: 'Milestone 1', 'deadline': '2024-10-20' },
    { id: 2, name: 'Milestone 2', 'deadline': '2024-10-20' },
    { id: 3, name: 'Milestone 3', 'deadline': '2024-11-10' },
    { id: 4, name: 'Milestone 4', 'deadline': '2024-11-17' },
    { id: 5, name: 'Milestone 5', 'deadline': '2024-11-27' },
    { id: 6, name: 'Milestone 6', 'deadline': '2024-12-08' },
  ],
  localMilestoneStatus:[
    { id: 1, milestone_id: 1, milestone_status: 'Missed'},
    { id: 2, milestone_id: 2, milestone_status: 'Submitted'},
    { id: 3, milestone_id: 3, milestone_status: 'Pending'},
    { id: 4, milestone_id: 4, milestone_status: 'Pending'},
    { id: 5, milestone_id: 5, milestone_status: 'Pending'},
    { id: 6, milestone_id: 6, milestone_status: 'Pending'},
  ],
        };

    },
    methods: {
        async fetchStuData() {
            try {
                const response = await axios.get('http://localhost:5000/{{team_id}}/student');
                this.StuData = response.data;
            } catch (error) {
                console.warn("Using local_student_items data due to error:", error);
                this.StuData = this.localStuData;
            }
        },
        async fetchStuCommits() {
            try {
                const response = await axios.get('http://localhost:5000/commits');
                this.StuCommits = response.data;
            } catch (error) {
                console.warn("Using local teams data due to error:", error);
                this.StuCommits = this.localStuCommits;
            }
        },
        async fetchMilestones() {
            try {
                const response = await axios.get('http://localhost:5000/milestones');
                this.milestones = response.data;
            } catch (error) {
                console.warn("Using local milestones data due to error:", error);
                this.milestones = this.localMilestones;
            }
        },
        async fetchMilestoneStatus() {
            try {
                const response = await axios.get('http://localhost:5000/milestonestatuses');
                this.milestone_status = response.data;
            } catch (error) {
                console.warn("Using local milestone status data due to error:", error);
                this.milestone_status = this.localMilestoneStatus;
            }
        },
        async create_team_data(){

            await this.fetchStuData();
            await this.fetchStuCommits();
            await this.fetchMilestones();
            await this.fetchMilestoneStatus();

            const stu_data = {};
            const milestone_data={};

            for (const stu of this.StuData){
                stu_data[stu.id] = {stu_id: stu.id, stu_name: stu['name'], stu_email: stu['email']};
            };

            for (const commit of this.StuCommits){
                stu_data[commit.stu_id] = commit['commits'];
            };

            for (const status of this.milestone_status){
                milestone_StatusData[status.milestone_id]=status['milestone_status']
            };
            for (const milestone of this.milestones){
              milestone_data[milestone.id]={milestone_name: milestone['name'], milestone_deadline:milestone['deadline']}
            }

            this.team_headers = [
                { text: "Student Name", value: "student_name" },
                { text: "Student Email", value: "student_email" },
                { text: "No of Commits", value: "commits_count" },
            ];

            this.milestone_headers=[

            ]

            Object.keys(dashboard_data).forEach(key => {
                this.dashboard_data_items.push(dashboard_data[key]);
            });

        }
    },
    mounted() {
        this.create_dashboard_data();
    },
}

</script>


  <style scoped>
  .table-spacing {
    margin-bottom: 50px; /* Adjust spacing as needed */
  }


  </style>
