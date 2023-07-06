import { createSignal } from "solid-js";

const Navbar = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen());
  };

  return (
    <nav class="navbar navbar-expand-lg sticky-top" style={{ "--bg-color": "var(--primary-color)" }}>
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="./src/assets/logo-trans.png" alt="Logo" width={"80px"}/>
        </a>

        <div class="d-lg-none ms-auto me-4">
          <a href="#top" class="navbar-icon bi-person smoothscroll"></a>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class={`collapse navbar-collapse ${isOpen() ? "show" : ""}`} id="navbarNav">
          <ul class="navbar-nav ms-lg-5 me-lg-auto">
            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_1">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_2">
                Konten
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_3">
                Metodologi
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_4">
                Gallery
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_5">
                Team
              </a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded={isOpen()}>
                Peta
              </a>

              <ul class={`dropdown-menu dropdown-menu-light ${isOpen() ? "show" : ""}`}>
                <li>
                  <a class="dropdown-item" href="topics-listing.html">
                    Tematik
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="contact.html">
                    Topografi
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div class="d-none d-lg-block">
            <a href="#top" class="navbar-icon bi-person smoothscroll"></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
