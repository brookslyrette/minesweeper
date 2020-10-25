import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Tile from './Tile'

test('renders a tile closed tile', async () => {
  const item = {
    isOpen: false,
    adjacentBombCount: 6
  }
  render(<Tile item={item}/>)
  expect(screen.getAllByText('')[0]).toBeInTheDocument()
})

test('renders a tile open tile', async () => {
  const item = {
    isOpen: true,
    adjacentBombCount: 6
  }

  render(<Tile item={item}/>)
  expect(screen.getByText('6')).toBeInTheDocument()
})

test('renders a open bomb', async () => {
  const item = {
    isOpen: true,
    isBomb: true
  }

  render(<Tile item={item}/>)
  expect(screen.getByText('💥')).toBeInTheDocument()
})

test('renders a closed bomb on game over', async () => {
  const item = {
    isOpen: false,
    isBomb: true
  }

  render(<Tile isGameOver={true} item={item}/>)
  expect(screen.getByText('💣')).toBeInTheDocument()
})

test('renders a flagged', async () => {
  const item = {
    isOpen: false,
    isBomb: true,
    isFlagged: true,
  }

  render(<Tile item={item}/>)
  expect(screen.getByText('⛳')).toBeInTheDocument()
})


