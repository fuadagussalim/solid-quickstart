import { createSignal } from "solid-js";
import { createEffect } from "solid-js";

const HeroSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };
  

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
