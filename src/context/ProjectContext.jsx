import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const ProjectContext = createContext(null)

export function ProjectProvider({ children }) {
  const [activeProject, setActiveProject] = useState(null)

  const openProject = useCallback((project) => {
    setActiveProject(project)
  }, [])

  const closeProject = useCallback(() => {
    setActiveProject(null)
  }, [])

  const value = useMemo(
    () => ({ activeProject, openProject, closeProject }),
    [activeProject, openProject, closeProject]
  )

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
}

export function useProject() {
  const context = useContext(ProjectContext)
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider')
  }
  return context
}
