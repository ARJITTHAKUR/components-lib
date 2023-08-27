import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GlobalLayout } from './layout/global/global';
import TestComponent from './components/testComponent/testComponent';
import AutocompletePage from './pages/autocomplete/autocompletePage';
import ButtonsPage from './pages/buttonsPage/buttonsPage';
import CheckBoxPage from './pages/checkbox/checkboxPage';
import RadioGroupPage from './pages/radioGroup/radioGroupPage';
import RatingPage from './pages/rating/ratingPage';
import Tree from './pages/tree/treepage';
import TabsPage from './pages/tabs/tabspage';

const router = createBrowserRouter([
  {
    path: "/components-lib/",
    element: <GlobalLayout/>,
    children :[
      {
        path : '',
        element : <AutocompletePage/>
      },
      {
        path : '*',
        element : <AutocompletePage/>
      },
      {
        path : "test",
        element : <TestComponent/>
      },
      {
        path : "button",
        element : <ButtonsPage/>
      },
      {
        path : "checkbox",
        element : <CheckBoxPage/>
      },
      {
        path : "radiogroup",
        element : <RadioGroupPage/>
      },
      {
        path : "rating",
        element : <RatingPage/>
      },
      {
        path : "tree",
        element : <Tree/>
      },
      {
        path : "tabs",
        element : <TabsPage/>
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
