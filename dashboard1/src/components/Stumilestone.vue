<template>
    <h2>Team XXX's Dashboard</h2>
    <p> Team's Score: 80/100 </p>
    
    <!-- Horizontal Milestone Data Table -->
    <EasyDataTable
      :headers="horizontal_milestone_headers"
      :items="horizontal_milestone_items"
    />
  </template>
  
  <script lang="ts" setup>
  import EasyDataTable from 'vue3-easy-data-table';
  import 'vue3-easy-data-table/dist/style.css';
  import type { Header, Item } from "vue3-easy-data-table";
  
  const horizontal_milestone_headers: Header[] = [
    { text: "MILESTONES", value: "details" },
    { text: "Milestone 1", value: "milestone1" },
    { text: "Milestone 2", value: "milestone2" },
    { text: "Milestone 3", value: "milestone3" },
    { text: "Milestone 4", value: "milestone4" },
    { text: "Milestone 5", value: "milestone5" },
    { text: "Milestone 6", value: "milestone6" },
  ];
  
  const horizontal_milestone_items: Item[] = [
    { details: "Deadline", milestone1: "20 Oct 2024", milestone2: "20 Oct 2024", milestone3: "10 Nov 2024", milestone4: "17 Nov 2024", milestone5: "24 Nov 2024", milestone6: "01 Dec 2024" },
    { details: "Status", milestone1: "Missed", milestone2: "Completed", milestone3: "Pending", milestone4: "Pending", milestone5: "Pending", milestone6: "Pending" }
  ];
  </script>
  

  <template>
    <div class="table-spacing">
      <table>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.value">{{ header.text }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in mockItems" :key="item.id">
            <td v-for="header in headers" :key="header.value">
              <div>{{ item[header.value].date }}</div>
              <div>{{ item[header.value].status }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
          { text: "MILESTONE 1", value: "milestone1" },
          { text: "MILESTONE 2", value: "milestone2" },
          { text: "MILESTONE 3", value: "milestone3" },
          { text: "MILESTONE 4", value: "milestone4" },
          { text: "MILESTONE 5", value: "milestone5" },
          { text: "MILESTONE 6", value: "milestone6" }
        ],
        mockItems: [
          {
            milestone1: { date: "20 October 2024", status: "Pending" },
            milestone2: { date: "20 October 2024", status: "Completed" },
            milestone3: { date: "10 November 2024", status: "Pending" },
            milestone4: { date: "17 November 2024", status: "Pending" },
            milestone5: { date: "24 November 2024", status: "Pending" },
            milestone6: { date: "01 December 2024", status: "Pending" }
          }
        ]
      };
    }
  };
  </script>
  