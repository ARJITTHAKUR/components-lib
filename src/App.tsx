import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GlobalLayout } from './layout/global/global';
import TestComponent from './components/testComponent/testComponent';
import AutocompletePage from './pages/autocomplete/autocompletePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout/>,
    children :[
      {
        path : '/autocomplete',
        element : <AutocompletePage/>
      },
      {
        path : "/test",
        element : <TestComponent/>
      }
    ]
  }
]);
function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App