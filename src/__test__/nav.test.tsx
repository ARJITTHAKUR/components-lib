/**
 * @jest-environment jsdom
 */
import {describe,expect,it} from "vitest"
import {render,screen,} from '@testing-library/react'
import SideNavigation from "../components/sideNav/sidenav"
import App from "../App"


describe("Checking for side navigation",()=>{
    it("it should have list of a tags",async()=>{
       render(<App/>)
        const nav = await screen.getByText((_, element)=>{
            return element.tagName.toLowerCase() === 'nav' && element.classList.contains("nav_container")
        })
        // console.log("tag type ====> ",nav.firstChild)
        expect(nav.firstChild.nodeType).toEqual(1)
    })
})