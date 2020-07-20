import React from 'react'
import Header from '../../../components/atoms/Headers'

export default { title: 'Typography/Header', component: Header }

export const pageTitle = () => {
  return (
    <Header element={'h1'} isPageTitle>
      The Quick Brown Fox Jumps Over the Lazy Dog
    </Header>
  )
}

export const headingOne = () => {
  return (
    <Header element={'h1'}>
      The Quick Brown Fox Jumps Over the Lazy Dog
    </Header>
  )
}

export const headingTwo = () => {
  return (
    <Header element={'h2'}>
      The Quick Brown Fox Jumps Over the Lazy Dog
    </Header>
  )
}

export const headingThree = () => {
  return (
    <Header element={'h3'}>
      The Quick Brown Fox Jumps Over the Lazy Dog
    </Header>
  )
}

export const headingFour = () => {
  return (
    <Header element={'h4'}>
      The Quick Brown Fox Jumps Over the Lazy Dog
    </Header>
  )
}

export const headingFive = () => {
  return (
    <Header element={'h5'}>
      The Quick Brown Fox Jumps Over the Lazy Dog
    </Header>
  )
}

export const headingSix = () => {
  return (
    <Header element={'h6'}>
      The Quick Brown Fox Jumps Over the Lazy Dog
    </Header>
  )
}

export const headingSeven = () => {
  return (
    <Header element={'h7'}>
      The Quick Brown Fox Jumps Over the Lazy Dog
    </Header>
  )
}