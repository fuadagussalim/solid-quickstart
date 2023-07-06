import { createSignal } from "solid-js";

const ExploreSection = () => {
  return (
    <section class="explore-section section-padding" id="section_2">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="mb-4">Konten</h2>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="design-tab" data-bs-toggle="tab" data-bs-target="#design-tab-pane" type="button" role="tab" aria-controls="design-tab-pane" aria-selected="true">
                Kepadatan Penduduk
              </button>
            </li>
            
            {/* Rest of the tab buttons */}
          </ul>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="design-tab-pane" role="tabpanel" aria-labelledby="design-tab" tabindex="0">
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Kepadatan Penduduk</h5>
                            <p class="mb-0">Kepadatan Penduduk blafbadjfhao</p>
                          </div>
                          <span class="badge bg-design rounded-pill ms-auto">14</span>
                        </div>
                        <img src="images/topics/undraw_Remote_design_team_re_urdx.png" class="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                  </div>

                  {/* Rest of the design topics */}
                </div>
              </div>

              {/* Rest of the tab panes */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
