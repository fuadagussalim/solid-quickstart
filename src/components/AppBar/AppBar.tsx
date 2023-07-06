import { JSX, onCleanup, createSignal } from 'solid-js';

interface AppBarProps {
  title: string;
}

const AppBar = (props: AppBarProps) => {
  const { title } = props;
  const [isMobile, setIsMobile] = createSignal(false);
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  onCleanup(() => {
    window.removeEventListener('resize', handleResize);
  });

  window.addEventListener('resize', handleResize);

  return (
    <header class="app-bar">
      <h1 class="app-bar-title">{title}</h1>
      {isMobile() ? (
        <div class="hamburger-icon" onClick={toggleMenu}>
          <div class={`line ${isMenuOpen() ? 'active' : ''}`}></div>
          <div class={`line ${isMenuOpen() ? 'active' : ''}`}></div>
          <div class={`line ${isMenuOpen() ? 'active' : ''}`}></div>
        </div>
      ) : (
        <nav class="app-bar-nav">
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default AppBar;
