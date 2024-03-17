import { render, screen, fireEvent } from "@testing-library/react";
import TopSection from "../components/TopSection/TopSection";


test("TopSection renders the text correctly", () => {
  render(<TopSection />);
  const message = screen.queryByText(/Sagittis/i);
  expect(message).toBeTruthy();
});


test('When you click the arrow the article flips', () => {
    const { container } = render(<TopSection />);
    
    const arrows = container.querySelectorAll('.arrow-image');
    const articles = container.querySelectorAll('.selector-card');
    
    fireEvent.click(arrows[0]);
    
    expect(articles[0].className.includes('flipped')).toBe(true);
  });
