import Button from './index';
import { render, screen, fireEvent } from "@testing-library/react";

describe('<Button /> component', () => {
  const { rerender, getByTestId } = render(<Button text={'Button'} />);

  describe('when is initialized with text prop', () => {
    it('renders given text', () => {
      expect(screen.getByText('Button')).toBeInTheDocument();
    });
  });

  describe('when onClick prop exists', () => {
    const mock = jest.fn();

    rerender(<Button text={'Button'} onClick={mock} />);

    describe('and user clicks', () => {
      fireEvent.click(getByTestId('button-global'));

      it('renders given text', () => {
        expect(mock).toBeCalledTimes(1);
      });
    });
  });
})