import { ref } from 'vue'

export const activeProject = ref(null)

export const openProject = (project) => {
  activeProject.value = project
}

export const closeProject = () => {
  activeProject.value = null
}