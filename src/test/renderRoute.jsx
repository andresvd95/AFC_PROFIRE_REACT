import { render } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'

// Monta una página dentro del <Layout> real, en la ruta indicada.
export function renderRoute(initialPath, routePath, element) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routePath} element={element} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
}
