import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

const setup = () => {
  render(<App />);
}

describe('Component: List', () => {
  beforeEach(() => {
    setup();
  })

  describe('when loaded', () => {
    it('should render items', () => {
      expect(screen.getAllByTestId('item')).toHaveLength(800);
    })

    it('should correct item text', () => {
      expect(screen.getByText('tiny navy apple')).toBeInTheDocument();
    })
  })

  describe('when user clicks on first item in the list of items', () => {
    it('should add item name to list of selected items', () => {
      fireEvent.click(screen.getAllByTestId('item')[0]);

      expect(screen.getByTestId('selected')).toHaveTextContent('tiny navy apple')
    })
  })

  describe('when user clicks on a selected item in the list of items', () => {
    it('should remove item name to list of selected items', () => {
      // Click on the item twice
      fireEvent.click(screen.getAllByTestId('item')[0]);
      fireEvent.click(screen.getAllByTestId('item')[0]);

      expect(screen.getByTestId('selected')).not.toHaveTextContent('tiny navy apple')
    })
  })

  describe('when user clicks on multiple items in the list of items', () => {
    it('should add item name to list of selected items', () => {
      fireEvent.click(screen.getAllByTestId('item')[0]);
      fireEvent.click(screen.getAllByTestId('item')[5]);
      fireEvent.click(screen.getAllByTestId('item')[12]);

      expect(screen.getByTestId('selected')).toHaveTextContent('tiny navy appletiny green appletiny purple apple')
    })
  })
});
