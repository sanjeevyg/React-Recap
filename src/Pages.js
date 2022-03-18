import React from 'react'
import { icons } from 'react-icons';
import { Outlet } from 'react-router'
import { Link, useLocation} from 'react-router-dom';
import { BiArchive } from "react-icons/bi"



export  function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <BiArchive />
    </div>
  )
}
export  function About() {
  return (
    <>
    <div>About</div>
     <Outlet />
    </>
  )
}
export  function Location() {
  return (
    <div>Location</div>
  )
}
export  function History() {
  return (
    <div>History</div>
  )
}



export  function Contact() {
  return (
    <div>Contact</div>
  )
}
export  function Projects() {
  return (
    <div>Projects</div>
  )
}
export  function Whoops() {
  const location = useLocation()
  console.log(location)
  return (
    <div>{location.pathname} does not exist!</div>
  )
}
