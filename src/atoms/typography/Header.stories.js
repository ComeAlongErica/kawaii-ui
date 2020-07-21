import React from 'react'
import Header from '../../../components/atoms/Headers'

export default { title: 'Typography/Header Text', component: Header }

export const pageTitle = () => {
  return (
    <Header element={'h1'} isPageTitle>
      The five boxing wizards jump quickly.
    </Header>
  )
}

export const headingOne = () => {
  return (
    <Header element={'h1'}>
      The five boxing wizards jump quickly.
    </Header>
  )
}

export const headingTwo = () => {
  return (
    <Header element={'h2'}>
      The five boxing wizards jump quickly.
    </Header>
  )
}

export const headingThree = () => {
  return (
    <Header element={'h3'}>
      The five boxing wizards jump quickly.
    </Header>
  )
}

export const headingFour = () => {
  return (
    <Header element={'h4'}>
      The five boxing wizards jump quickly.
    </Header>
  )
}

export const headingFive = () => {
  return (
    <Header element={'h5'}>
      The five boxing wizards jump quickly.
    </Header>
  )
}

export const headingSix = () => {
  return (
    <Header element={'h6'}>
      The five boxing wizards jump quickly.
    </Header>
  )
}
