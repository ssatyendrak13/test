import React from 'react'
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import dp from '../../Assets/dp.jpg'

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <div className='name-text'>
        <img src={dp} alt="" />
        <div >Sonali</div>
        </div>
        <ul>
          <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}><li><span>Home</span></li></NavLink>
          <a href='https://satyekuma.github.io/1-10-pics-to-drag/' target='_blank' className={({ isActive }) => isActive ? "active" : ""}><li><span>First Surpise</span></li></a>
          <NavLink to='/diwali24' className={({ isActive }) => isActive ? "active" : ""}><li><span>Diwali-24</span></li></NavLink>
          <NavLink to='/love-symbol' className={({ isActive }) => isActive ? "active" : ""}><li><span>Birthday-24</span></li></NavLink>
          <NavLink to='/rotate360' className={({ isActive }) => isActive ? "active" : ""}><li><span>Rotate360</span></li></NavLink>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar