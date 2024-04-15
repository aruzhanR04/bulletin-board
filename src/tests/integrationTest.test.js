import React from 'react';
import { render, fireEvent, waitFor, screen, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../store'; 
import App from '../App';

describe('Integration Test: User Flow', () => {
  test('adds, edits, saves, and deletes advertisement', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const titleInput = await screen.findByPlaceholderText('Title');
    fireEvent.change(titleInput, { target: { value: 'New Title' } });

    const descriptionInput = await screen.findByPlaceholderText('Description');
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } });

    fireEvent.click(screen.getByText('Add'));





    await waitFor(() => {
      expect(screen.getByText('New Title')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Edit'));

    const descriptionInputs = screen.getAllByPlaceholderText('Description');
    fireEvent.change(descriptionInputs[1], { target: { value: 'Edited Description' } });

    fireEvent.click(screen.getByText('Update'));


    // Проверяем, что изменения сохранены
    await waitFor(() => {
      expect(screen.getByText('Edited Description')).toBeInTheDocument();
    });

    // Удаляем объявление
    fireEvent.click(screen.getByText('Delete'));

    // Проверяем, что объявление успешно удалено
    await waitFor(() => {
      expect(screen.queryByText('Edited Description')).not.toBeInTheDocument();
    });
  });
});