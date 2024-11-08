import { mainAxios } from '@/helpers/ApiHelpers'
import TeamDashboardApiHelpersJson from './TeamDashboardApiHelpers.json' assert { type: 'json' }


export class TeamDashboardApiHelpers {
  static async fetchStudentHeaders() {
    try {
      const response = await mainAxios.get('/StudentHeader')
      return response.data
    } catch (error) {
      console.warn('Using local pending user data due to error:', error)
      // TODO: REMOVE local data
      return TeamDashboardApiHelpersJson.stu_headers

    }
  }

  static async fetchStudentItems() {
    try {
      const response = await mainAxios.get('/StudentItems')
      return response.data
    } catch (error) {
      console.warn('Using local uploads data due to error:', error)
      // TODO: REMOVE local data
      return TeamDashboardApiHelpersJson.stu_items
    }
  }

  static async fetchMilestoneHeaders() {
    try {
      const response = await mainAxios.get('/MilestoneHeaders')
      return response.data
    } catch (error) {
      console.warn('Using local commit data due to error:', error)
      // TODO: REMOVE local data
      return TeamDashboardApiHelpersJson.milestone_headers
    }
  }

  static async fetchMilestoneItems() {
    try {
      const response = await mainAxios.get('/MilestoneItems')
      return response.data
    } catch (error) {
      console.warn('Using local milestone completion data due to error:', error)
      // TODO: REMOVE local data
      return TeamDashboardApiHelpersJson.milestone_items
    }
  }
}
