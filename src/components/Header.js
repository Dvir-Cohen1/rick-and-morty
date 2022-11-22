import React from 'react'
import { MainNavbar } from './common/MainNavbar';
import { Button } from './common/Button';
import morty from '../assets/images/rick.png'

function Header() {
  return (
    <MainNavbar>
      <img width="50px" src={morty} alt={"asd"}></img>
      Rick & Morty
      <Button >Download</Button>
    </MainNavbar>
  )
}

export default Header