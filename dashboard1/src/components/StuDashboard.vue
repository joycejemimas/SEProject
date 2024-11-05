<template>
<div>
    <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
    <h2>Team XXX's Dashboard</h2>
    <p style="margin-left: auto;">Team's Score: 80/100</p>
  </div>

    <div>
    <!-- Student Data Table -->
    <div class="table-spacing">
        <EasyDataTable
        :headers="stu_headers"
        :items="stu_items"     
        hide-footer="true"
        alternating="true"
        table-min-height="true"
        body-text-direction="center"
        header-text-direction="center"
        />
    </div>
        <break/>
    <!-- Milestone Data Table -->
    <div class="table-spacing">
        <EasyDataTable
        :headers="milestone_headers"
        :items="milestone_items"
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
  
  <script lang="ts" setup>
  import EasyDataTable from 'vue3-easy-data-table';
  import 'vue3-easy-data-table/dist/style.css';
  import type { Header, Item } from "vue3-easy-data-table";
  
  const stu_headers: Header[] = [
    { text: "STUDENT NAME", value: "stu_name",  width: 400},
    { text: "ROLL NUMBER", value: "stu_roll" , width: 400},
    { text: "NUMBER of COMMITS", value: "number", width: 400 },
    
  ];
  
  const stu_items: Item[] = [
    { stu_name: "Stephen Curry", stu_roll: "21f1001234", number: 30 },
    { stu_name: "Lebron James", stu_roll: "21f1004321", number: 6 },
    { stu_name: "Kevin Durant", stu_roll: "21f1001212", number: 7 },
    { stu_name: "Giannis Antetokounmpo", stu_roll: "21f1001213", number: 34 },
    { stu_name: "Stephen Curry", stu_roll: "21f1001234", number: 30 },
    { stu_name: "Lebron James", stu_roll: "21f1004321", number: 6 },
    { stu_name: "Kevin Durant", stu_roll: "21f1001212", number: 7 },
    { stu_name: "Giannis Antetokounmpo", stu_roll: "21f1001213", number: 34 },
  ];
  
  const milestone_headers: Header[] = [
    { text: "MILESTONES", value: "details" },
    { text: "Milestone 1", value: "milestone1" },
    { text: "Milestone 2", value: "milestone2" },
    { text: "Milestone 3", value: "milestone3" },
    { text: "Milestone 4", value: "milestone4" },
    { text: "Milestone 5", value: "milestone5" , style: "width: 150px;"},
    { text: "Milestone 6", value: "milestone6", class: "number-commits-header"},
  ];
  
  const milestone_items: Item[] = [
    { details: "Deadline", milestone1: "20 Oct 2024", milestone2: "20 Oct 2024", milestone3: "10 Nov 2024", milestone4: "17 Nov 2024", milestone5: "24 Nov 2024", milestone6: "01 Dec 2024" },
    { details: "Status", milestone1: "Missed", milestone2: "Completed", milestone3: "Pending", milestone4: "Pending", milestone5: "Pending", milestone6: "Pending" },
  ];
  </script>

  <style scoped>
  .table-spacing {
    margin-bottom: 50px; /* Adjust spacing as needed */
  }
  

  </style>