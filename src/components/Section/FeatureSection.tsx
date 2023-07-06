
import { createEffect, createSignal, onMount  } from 'solid-js';


const FeaturedSection = () => {
  const [isImageReady, setIsImageReady] = createSignal(false);

  createEffect(() => {
    const img = new Image();
  
    img.onload = () => {
      setIsImageReady(true);
    };
  
    img.src = 'https://drive.google.com/uc?export=view&id=1a9M9RClIgU8vaxqBPWvW5grFdQZME-NB'; // Replace with your image URL
  });
  onMount(() => {
    // Set the visibility signal to true after a delay or based on certain conditions
    setTimeout(() => setIsVisible(true), 500); // Example: Set visibility after a 500ms delay
  });
  
  const [isVisible, setIsVisible] = createSignal(false);
  const fadeInStyle = {
    opacity: isVisible() ? 1 : 0,
    transition: 'opacity 0.5s',
  };
  
  return (
    <section class="featured-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-12 mb-4 mb-lg-0">
          {isImageReady() && (
            <div class="custom-block bg-white shadow-lg " style={fadeInStyle}>
              <a href="topics-detail.html">
                <div class="d-flex">
                  <div>
                    <h5 class="mb-2">Persiapan Data Geospasial</h5>
                    <p class="mb-0">
                      Pembuatan Peta Topografi DIY & JATENG Helai 3209 - 1 dan peta tematik kecamatan ngaglik
                    </p>
                  </div>
                  <span class="badge bg-design rounded-pill ms-auto">14</span>
                </div>
                
                   <img src="https://drive.google.com/uc?export=view&id=1a9M9RClIgU8vaxqBPWvW5grFdQZME-NB" class="custom-block-image img-fluid" alt="Image" />
                    
                
              </a>
            </div>
            )}
          </div>
          <div class="col-lg-6 col-12">
            <div class="custom-block custom-block-overlay">
              <div class="d-flex flex-column h-100">
                <img src="images/businesswoman-using-tablet-analysis.jpg" class="custom-block-image img-fluid" alt="" />
                <div class="custom-block-overlay-text d-flex">
                  <div>
                    <h5 class="text-white mb-2">Pengenalan Bentang Lahan</h5>
                    <p class="text-white">
                      Observasi Lapangan pada Bentang Lahan di Sabo Bronggang, Kali Code, Graben Bantul, Pesisir Parangtrits
                    </p>
                    <a href="" class="btn custom-btn mt-2 mt-lg-3">Selengkapnya</a>
                  </div>
                  <span class="badge bg-finance rounded-pill ms-auto">25</span>
                </div>
                <div class="social-share d-flex">
                  <p class="text-white me-4">Share:</p>
                  <ul class="social-icon">
                    <li class="social-icon-item">
                      <a href="#" class="social-icon-link bi-twitter"></a>
                    </li>
                    <li class="social-icon-item">
                      <a href="#" class="social-icon-link bi-facebook"></a>
                    </li>
                    <li class="social-icon-item">
                      <a href="#" class="social-icon-link bi-pinterest"></a>
                    </li>
                  </ul>
                  <a href="#" class="custom-icon bi-bookmark ms-auto"></a>
                </div>
                <div class="section-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
