/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import SearchHook from './components/navbar/SearchHook';
import reducer, {
  setSelected,
  setSearch,
  setData,
  setIsError,
  setIsLoading,
  handleSongSelected,
  handleSongDeselected,
} from './redux/slices/songSlice';
import CardPlaylist from './components/card-playlist/index';

test('button search', () => {
  const { getByText } = render(<SearchHook />);
  const button = getByText('Search');
  userEvent.click(button);
});

test('input search', () => {
  const { getByPlaceholderText } = render(<SearchHook />);
  const input = getByPlaceholderText('Search');
  userEvent.type(input, 'hello');
});

test('setSearch', () => {
  const { getByPlaceholderText } = render(<SearchHook />);
  const input = getByPlaceholderText('Search');
  userEvent.type(input, 'hello');
  expect(input.value).toBe('hello');
});

// testing
test('setSelected', () => {
  const { getByText } = render(<CardPlaylist />);
  const button = getByText('Add to playlist');
  userEvent.click(button);
});

test('setData', () => {
  const { getByText } = render(<CardPlaylist />);
  const button = getByText('Add to playlist');
  userEvent.click(button);
});

test('setIsError', () => {
  const { getByText } = render(<CardPlaylist />);
  const button = getByText('Add to playlist');
  userEvent.click(button);
});