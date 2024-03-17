import { render, screen, fireEvent } from "@testing-library/react";
import TopSection from "../components/TopSection/TopSection";


test("TopSection renders the text correctly", () => {
  render(<TopSection />);
  const message = screen.queryByText(/Sagittis/i);
  expect(message).toBeTruthy();
});


test('When you click the first arrow the first article flips', () => {
    const { container } = render(<TopSection />);
    
    const arrows = container.querySelectorAll('.arrow-image');
    const articles = container.querySelectorAll('.selector-card');
    
    fireEvent.click(arrows[0]);
    
    expect(articles[0].className.includes('flipped')).toBe(true);
  });

  test('When you click the second arrow the second article flips', () => {
    const { container } = render(<TopSection />);
    
    const arrows = container.querySelectorAll('.arrow-image');
    const articles = container.querySelectorAll('.selector-card');
    
    fireEvent.click(arrows[1]);
    
    expect(articles[1].className.includes('flipped')).toBe(true);
  });
