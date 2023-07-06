import { createSignal } from "solid-js";
import { createEffect } from "solid-js";

const HeroSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };
  createEffect(() => {
    const linkElement1 = document.createElement("link");
    linkElement1.rel = "stylesheet";
    linkElement1.href = "./src/components/css/bootstrap-icons.css";
    document.head.appendChild(linkElement1);

    const linkElement2 = document.createElement("link");
    linkElement2.rel = "stylesheet";
    linkElement2.href = "./src/components/css/bootstrap.min.css";
    document.head.appendChild(linkElement2);

    const linkElement3 = document.createElement("link");
    linkElement3.rel = "stylesheet";
    linkElement3.href = "./src/components/css/templatemo-topic-listing.css";
    document.head.appendChild(linkElement3);

    return () => {
      linkElement1.remove();
      linkElement2.remove();
      linkElement3.remove();
    };
  });

  return (
    <section class="hero-section d-flex justify-content-center align-items-center" id="section_1">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12 mx-auto">
            <h1 class="text-white text-center">PKL 1 - SIG 2022</h1>
            <h6 class="text-center">Persiapan Data Geospasial & Pengenalan Bentanglahan</h6>

            <form class="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search" onSubmit={handleSubmit}>
              <div class="input-group input-group-lg">
                <span class="input-group-text bi-search" id="basic-addon1"></span>
                <input type="search" class="form-control" id="keyword" placeholder="Topografi, Ekonomi,Bentang Lahan ..." aria-label="Search" />
                <button type="submit" class="form-control">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
