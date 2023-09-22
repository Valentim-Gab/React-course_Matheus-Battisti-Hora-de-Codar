import React from 'react'
import { Home } from '../components/pages/Home.tsx'
import { Projects } from '../components/pages/Projects.tsx'
import { Company } from '../components/pages/Company.tsx'
import { Contact } from '../components/pages/Contact.tsx'
import { NewProject } from '../components/pages/NewProject.tsx'
import { ProjectPage } from '../components/pages/ProjectPage.tsx'

interface Routes {
  path: string,
  element: React.JSX.Element
}

export const routes: Routes[] = [
  {
    path: '/',
    element: <Home />
  },{
    path: '/projects',
    element: <Projects />
  },{
    path: '/company',
    element: <Company />
  },{
    path: '/contact',
    element: <Contact />
  },{
    path: '/newproject',
    element: <NewProject />
  },{
    path: '/project/:id',
    element: <ProjectPage />
  }
]