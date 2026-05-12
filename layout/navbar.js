document.querySelector("header").innerHTML = `

<style>
  .dp-service-ribbon {
    clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%);
  }

  .dp-view-all-menu,
  .dp-mobile-menu {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
  }

  .dp-view-all-menu {
    transform: translateY(-8px);
  }

  .dp-view-all-menu.is-open,
  .dp-mobile-menu.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .dp-view-all-menu.is-open {
    transform: translateY(0);
  }

  .dp-services-overlay {
    opacity: 0;
    pointer-events: none;
  }

  .dp-services-overlay.is-open {
    opacity: 1;
    pointer-events: auto;
  }

  .dp-services-panel {
    transform: translateY(105%);
  }

  .dp-services-overlay.is-open .dp-services-panel {
    transform: translateY(0);
  }

  @keyframes dp-upload-sweep {
    0% { left: -35%; }
    100% { left: 120%; }
  }
</style>

<div class="relative z-50 w-full border-b border-[#e2e8f0]/20 bg-white">
  <div class="hidden lg:block bg-white">
    <div class="mx-auto flex min-h-[92px] max-w-[1400px] items-center px-6 py-5 xl:min-h-[101px] xl:px-8 2xl:px-0">
      <a href="index.html" aria-label="Digital Press Home" class="relative h-[42px] w-[177px] shrink-0 xl:h-[54px] xl:w-[230px]">
        <img src="assets/images/logo/logo-mark.svg" alt="" class="absolute left-0 top-[2px] h-[37px] w-[37px] xl:top-[3px] xl:h-[44px] xl:w-[44px]" />
        <img src="assets/images/logo/logo-main.svg" alt="" class="absolute left-[46px] top-0 h-[27px] w-[132px] xl:left-[57px] xl:h-[33px] xl:w-[173px]" />
        <img src="assets/images/logo/logo-text.svg" alt="Digital Press" class="absolute left-[46px] top-[31px] h-[10px] w-[132px] xl:left-[57px] xl:top-[37px] xl:h-[14px] xl:w-[173px]" />
      </a>

      <nav class="flex min-w-0 flex-1 items-center justify-center gap-1 xl:gap-3" aria-label="Primary">
        <a href="index.html" class="px-2 py-2 text-center text-[15px] leading-[22px] text-[#005299] xl:px-3 xl:text-[18px] xl:leading-[25.56px]">Home</a>
        <a href="about.html" class="px-2 py-2 text-center text-[15px] leading-[22px] text-[#1e293b] hover:text-[#005299] xl:px-3 xl:text-[18px] xl:leading-[25.56px]">About Us</a>
        <a href="case-studies.html" class="px-2 py-2 text-center text-[15px] leading-[22px] text-[#1e293b] hover:text-[#005299] xl:px-3 xl:text-[18px] xl:leading-[25.56px]">Case Studies</a>
        <a href="blogs.html" class="px-2 py-2 text-center text-[15px] leading-[22px] text-[#1e293b] hover:text-[#005299] xl:px-3 xl:text-[18px] xl:leading-[25.56px]">Blogs</a>
        <a href="faq.html" class="px-2 py-2 text-center text-[15px] leading-[22px] text-[#1e293b] hover:text-[#005299] xl:px-3 xl:text-[18px] xl:leading-[25.56px]">FAQ</a>
        <a href="contact.html" class="px-2 py-2 text-center text-[15px] leading-[22px] text-[#1e293b] hover:text-[#005299] xl:px-3 xl:text-[18px] xl:leading-[25.56px]">Contact Us</a>
      </nav>

      <div class="flex shrink-0 items-center justify-end gap-3 xl:gap-4">
        <a href="tel:1300377377" class="hidden xl:flex w-[125px] flex-col not-italic">
          <span class="text-[14px] font-medium leading-[19.88px] text-[#1e293b]">Call us toll free</span>
          <span class="font-heading text-[20px] font-bold leading-[26.4px] tracking-[-0.4px] text-[#005299]">1300 377 377</span>
        </a>
        <a href="contact.html" class="inline-flex min-h-11 w-[170px] items-center justify-center gap-1.5 rounded-full bg-[#005299] px-4 py-3 text-[16px] font-medium leading-[22px] text-white transition-colors hover:bg-[#004987] xl:w-[185px] xl:text-[18px] xl:leading-[25.56px]">
          <img src="assets/images/icons/mail.svg" alt="" class="h-5 w-5" />
          <span>Make an Enquiry</span>
        </a>
      </div>
    </div>

    <div class="relative border-y border-[#e2e8f0] bg-[#e5f3ff]">
      <div class="mx-auto flex h-[58px] max-w-[1400px] items-center justify-between gap-4 px-6 xl:px-8 2xl:px-0">
        <nav class="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none]" aria-label="Services">
          <a href="services.html" class="relative shrink-0 px-3 py-2 text-[15px] leading-[22px] text-[#1e293b] xl:text-[18px] xl:leading-[25.56px]">
            <span class="dp-service-ribbon absolute inset-y-1 left-0 w-[113px] bg-[#99cfff]"></span>
            <span class="relative">Our Services</span>
          </a>
          <a href="business-card.html" class="shrink-0 px-3 py-2 text-[15px] leading-[22px] text-[#1e293b] hover:text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Business Card</a>
          <a href="fast-document-printing.html" class="shrink-0 px-3 py-2 text-[15px] leading-[22px] text-[#1e293b] hover:text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Fast Document Printing</a>
          <a href="business-stationery.html" class="shrink-0 px-3 py-2 text-[15px] leading-[22px] text-[#1e293b] hover:text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Business Stationery</a>
          <a href="marketing-material.html" class="shrink-0 px-3 py-2 text-[15px] leading-[22px] text-[#1e293b] hover:text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Marketing Material</a>
          <a href="books-catalogues.html" class="shrink-0 px-3 py-2 text-[15px] leading-[22px] text-[#1e293b] hover:text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Books/Catalogues</a>
          <span class="shrink-0 px-1 text-[14px] leading-[19.88px] text-[#1e293b]">|</span>
          <button type="button" class="js-view-all-toggle shrink-0 px-3 py-2 text-[15px] leading-[22px] text-[#1e293b] hover:text-[#005299] xl:text-[18px] xl:leading-[25.56px]" aria-expanded="false" aria-controls="dp-view-all-menu">View All</button>
        </nav>

        <a href="#" class="group relative hidden min-h-10 shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-[#99cfff] px-3 py-2 md:inline-flex" style="background: linear-gradient(112.917deg, #e5f3ff 3.624%, #ffffff 109.39%);">
          <span aria-hidden="true" class="absolute top-0 h-full w-0.5 -skew-x-12 bg-[#99cfff]" style="animation: dp-upload-sweep 2.3s ease-in-out infinite alternate;"></span>
          <img src="assets/images/icons/upload-cloud.svg" alt="" class="relative h-5 w-5" />
          <span class="relative whitespace-nowrap text-[16px] font-medium leading-[22.72px] text-[#005299]">Upload Print file</span>
        </a>
      </div>

      <div id="dp-view-all-menu" class="dp-view-all-menu absolute left-0 right-0 top-full z-30 min-h-screen bg-black/80 transition-all duration-200">
        <div class="border border-[#f1f5f9] bg-white px-6 pb-[42px] pt-6 shadow-[0_45px_22.5px_rgba(0,0,0,0.11)] xl:px-8 2xl:px-0">
          <div class="mx-auto grid max-w-[1400px] grid-cols-3 gap-5 xl:grid-cols-6 xl:gap-6">
            <a href="business-card.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
              <img src="assets/images/services/business-cards.png" alt="" class="h-[184px] w-full object-cover xl:h-[184px]" />
              <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[16px] font-medium leading-[22.72px] text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Business Cards <span aria-hidden="true" class="text-[22px] leading-none">&#8250;</span></span>
            </a>
            <a href="fast-document-printing.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
              <img src="assets/images/services/fast-document-printing.png" alt="" class="h-[184px] w-full object-contain xl:h-[184px]" />
              <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[16px] font-medium leading-[22.72px] text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Fast Doc Printing <span aria-hidden="true" class="text-[22px] leading-none">&#8250;</span></span>
            </a>
            <a href="business-stationery.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
              <img src="assets/images/services/business-stationery.png" alt="" class="h-[184px] w-full object-cover xl:h-[184px]" />
              <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[16px] font-medium leading-[22.72px] text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Business Stationery <span aria-hidden="true" class="text-[22px] leading-none">&#8250;</span></span>
            </a>
            <a href="marketing-material.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
              <img src="assets/images/services/marketing-material.png" alt="" class="h-[184px] w-full object-contain xl:h-[184px]" />
              <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[16px] font-medium leading-[22.72px] text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Marketing Material <span aria-hidden="true" class="text-[22px] leading-none">&#8250;</span></span>
            </a>
            <a href="books-catalogues.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
              <img src="assets/images/services/books-catalogues.png" alt="" class="h-[184px] w-full object-contain xl:h-[184px]" />
              <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[16px] font-medium leading-[22.72px] text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Books/Catalogues <span aria-hidden="true" class="text-[22px] leading-none">&#8250;</span></span>
            </a>
            <a href="signage-poster.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
              <img src="assets/images/services/signage-poster.png" alt="" class="h-[184px] w-full object-contain xl:h-[184px]" />
              <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[16px] font-medium leading-[22.72px] text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Signage/Poster <span aria-hidden="true" class="text-[22px] leading-none">&#8250;</span></span>
            </a>
            <a href="#" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
              <img src="assets/images/services/design.png" alt="" class="h-[184px] w-full object-contain xl:h-[184px]" />
              <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[16px] font-medium leading-[22.72px] text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Design <span aria-hidden="true" class="text-[22px] leading-none">&#8250;</span></span>
            </a>
            <a href="#" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
              <img src="assets/images/services/boxes-packaging.png" alt="" class="h-[184px] w-full object-cover xl:h-[184px]" />
              <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[16px] font-medium leading-[22.72px] text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Boxes/ Packaging <span aria-hidden="true" class="text-[22px] leading-none">&#8250;</span></span>
            </a>
            <a href="invitations-events.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
              <img src="assets/images/services/invitations-events.png" alt="" class="h-[184px] w-full object-cover xl:h-[184px]" />
              <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[16px] font-medium leading-[22.72px] text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Invitations / Events <span aria-hidden="true" class="text-[22px] leading-none">&#8250;</span></span>
            </a>
            <a href="#" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
              <img src="assets/images/services/metallic-ink.png" alt="" class="h-[184px] w-full object-cover xl:h-[184px]" />
              <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[16px] font-medium leading-[22.72px] text-[#005299] xl:text-[18px] xl:leading-[25.56px]">Metallic Ink <span aria-hidden="true" class="text-[22px] leading-none">&#8250;</span></span>
            </a>
            <a href="#" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
              <img src="assets/images/services/white-ink.png" alt="" class="h-[184px] w-full object-cover xl:h-[184px]" />
              <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[16px] font-medium leading-[22.72px] text-[#005299] xl:text-[18px] xl:leading-[25.56px]">White Ink <span aria-hidden="true" class="text-[22px] leading-none">&#8250;</span></span>
            </a>
            <div class="flex h-60 flex-col justify-between rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc] p-6">
              <p class="font-heading text-[24px] font-bold leading-[31.68px] tracking-[-0.48px] text-[#0f172a]">Looking for something else? We can help.</p>
              <a href="contact.html" class="flex min-h-11 w-full items-center justify-center rounded-full border-2 border-white bg-[#005299] px-4 py-3 text-[18px] font-medium leading-[25.56px] text-white">Make an Enquiry</a>
            </div>
          </div>
        </div>
        <button type="button" class="js-view-all-close mx-auto mt-3 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white" aria-label="Close services menu">
          <span class="absolute h-[1.5px] w-[18px] rotate-45 bg-[#334155]"></span>
          <span class="absolute h-[1.5px] w-[18px] -rotate-45 bg-[#334155]"></span>
        </button>
      </div>
    </div>
  </div>

  <div class="relative lg:hidden bg-white px-4 py-6">
    <div class="flex items-center justify-between">
      <a href="index.html" aria-label="Digital Press Home" class="relative h-[42px] w-[181px] shrink-0 max-[340px]:w-[166px]">
        <img src="assets/images/logo/logo-mark.svg" alt="" class="absolute left-0 top-[2px] h-[37px] w-[37px] max-[340px]:h-[34px] max-[340px]:w-[34px]" />
        <img src="assets/images/logo/logo-main.svg" alt="" class="absolute left-[47px] top-0 h-[27px] w-[143px] max-[340px]:left-[42px] max-[340px]:w-[132px]" />
        <img src="assets/images/logo/logo-text.svg" alt="Digital Press" class="absolute left-[47px] top-[30px] h-3 w-[143px] max-[340px]:left-[42px] max-[340px]:w-[132px]" />
      </a>

      <button type="button" class="js-mobile-menu-toggle" aria-label="Open menu" aria-expanded="false" style="position:absolute;right:16px;top:24px;z-index:10;display:flex;width:44px;height:44px;align-items:center;justify-content:center;">
        <span class="js-mobile-menu-icon-open" aria-hidden="true" style="display:block;width:24px;height:18px;position:relative;">
          <span style="position:absolute;left:2px;right:2px;top:2px;height:1.5px;background:#1e293b;"></span>
          <span style="position:absolute;left:2px;right:2px;top:8px;height:1.5px;background:#1e293b;"></span>
          <span style="position:absolute;left:2px;right:2px;top:14px;height:1.5px;background:#1e293b;"></span>
        </span>
        <span class="js-mobile-menu-icon-close hidden" aria-hidden="true" style="width:28px;height:28px;position:relative;">
          <span style="position:absolute;left:4px;right:4px;top:13px;height:1.7px;background:#111827;transform:rotate(45deg);"></span>
          <span style="position:absolute;left:4px;right:4px;top:13px;height:1.7px;background:#111827;transform:rotate(-45deg);"></span>
        </span>
      </button>
    </div>

    <button type="button" class="js-mobile-services-open relative mt-4 flex min-h-11 w-full items-center px-3 py-2 text-left text-[18px] leading-[25.56px] text-[#1e293b]" aria-haspopup="dialog">
      <span class="dp-service-ribbon absolute left-0 top-1 h-[34px] w-[125px] bg-[#99cfff]"></span>
      <span class="relative">Our Services</span>
    </button>
  </div>

  <div class="dp-mobile-menu lg:hidden absolute left-0 right-0 top-full z-20 border-t border-[#f1f5f9] bg-white px-4 pb-6 pt-5 shadow-[0_24px_48px_rgba(15,23,42,0.10)] transition-all duration-200">
    <nav class="flex flex-col gap-3" aria-label="Mobile primary">
      <a href="index.html" class="min-h-11 px-3 py-2 text-[18px] leading-[25.56px] text-[#1e293b]">Home</a>
      <a href="about.html" class="min-h-11 px-3 py-2 text-[18px] leading-[25.56px] text-[#1e293b]">About Us</a>
      <a href="case-studies.html" class="min-h-11 px-3 py-2 text-[18px] leading-[25.56px] text-[#1e293b]">Case Studies</a>
      <a href="blogs.html" class="min-h-11 px-3 py-2 text-[18px] leading-[25.56px] text-[#1e293b]">Blogs</a>
      <a href="faq.html" class="min-h-11 px-3 py-2 text-[18px] leading-[25.56px] text-[#1e293b]">FAQ</a>
      <a href="contact.html" class="min-h-11 px-3 py-2 text-[18px] leading-[25.56px] text-[#1e293b]">Contact Us</a>
    </nav>

    <a href="#" class="relative mt-2 flex min-h-11 w-full items-center justify-center gap-1 overflow-hidden rounded-full border border-[#99cfff] px-3 py-2" style="background: linear-gradient(133.84deg, #e5f3ff 3.624%, #ffffff 109.39%);">
      <span aria-hidden="true" class="absolute top-0 h-full w-0.5 -skew-x-12 bg-[#99cfff]" style="animation: dp-upload-sweep 2.3s ease-in-out infinite alternate;"></span>
      <img src="assets/images/icons/upload-cloud.svg" alt="" class="relative h-5 w-5" />
      <span class="relative text-[16px] font-medium leading-[22.72px] text-[#005299]">Upload Print file</span>
    </a>

    <div class="mt-4 px-3">
      <p class="text-[14px] font-medium leading-[19.88px] text-[#1e293b]">Call us toll free</p>
      <a href="tel:1300377377" class="font-heading text-[20px] font-bold leading-[26.4px] tracking-[-0.4px] text-[#005299]">1300 377 377</a>
    </div>

    <a href="contact.html" class="mt-4 flex min-h-11 w-full items-center justify-center gap-1.5 rounded-full bg-[#005299] px-4 py-3 text-[18px] font-medium leading-[25.56px] text-white">
      <img src="assets/images/icons/mail.svg" alt="" class="h-5 w-5" />
      <span>Make an Enquiry</span>
    </a>
  </div>
</div>

<div class="dp-services-overlay fixed inset-0 z-[80] flex items-end justify-center bg-black/75 transition-opacity duration-300 lg:hidden" role="dialog" aria-modal="true" aria-label="Services">
  <div class="dp-services-panel flex max-h-[calc(100dvh-24px)] w-full flex-col items-center gap-3 transition-transform duration-300 ease-out">
    <button type="button" class="js-mobile-services-close flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-white" aria-label="Close services">
      <span class="absolute h-[1.5px] w-[18px] rotate-45 bg-[#334155]"></span>
      <span class="absolute h-[1.5px] w-[18px] -rotate-45 bg-[#334155]"></span>
    </button>

    <div class="w-full  rounded-t-[24px] border border-[#f1f5f9] bg-white px-4 pb-[42px] pt-6 shadow-[0_45px_22.5px_rgba(0,0,0,0.11)] max-[374px]:max-w-full">
      <div class="max-h-[min(567px,calc(100dvh-130px))] overflow-y-auto overflow-x-hidden pr-1">
        <div class="flex flex-col gap-4">
          <a href="business-card.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
            <img src="assets/images/services/business-cards.png" alt="" class="h-[184px] w-full object-cover max-[340px]:h-[166px]" />
            <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[18px] font-medium leading-[25.56px] text-[#005299]">Business Cards <span aria-hidden="true" class="text-[24px] leading-none">&#8250;</span></span>
          </a>
          <a href="fast-document-printing.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
            <img src="assets/images/services/fast-document-printing.png" alt="" class="h-[184px] w-full object-contain max-[340px]:h-[166px]" />
            <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[18px] font-medium leading-[25.56px] text-[#005299]">Fast Document Printing <span aria-hidden="true" class="text-[24px] leading-none">&#8250;</span></span>
          </a>
          <a href="business-stationery.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
            <img src="assets/images/services/business-stationery.png" alt="" class="h-[184px] w-full object-cover max-[340px]:h-[166px]" />
            <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[18px] font-medium leading-[25.56px] text-[#005299]">Business Stationery <span aria-hidden="true" class="text-[24px] leading-none">&#8250;</span></span>
          </a>
          <a href="marketing-material.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
            <img src="assets/images/services/marketing-material.png" alt="" class="h-[184px] w-full object-contain max-[340px]:h-[166px]" />
            <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[18px] font-medium leading-[25.56px] text-[#005299]">Marketing Material <span aria-hidden="true" class="text-[24px] leading-none">&#8250;</span></span>
          </a>
          <a href="books-catalogues.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
            <img src="assets/images/services/books-catalogues.png" alt="" class="h-[184px] w-full object-contain max-[340px]:h-[166px]" />
            <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[18px] font-medium leading-[25.56px] text-[#005299]">Books/Catalogues <span aria-hidden="true" class="text-[24px] leading-none">&#8250;</span></span>
          </a>
          <a href="signage-poster.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
            <img src="assets/images/services/signage-poster.png" alt="" class="h-[184px] w-full object-contain max-[340px]:h-[166px]" />
            <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[18px] font-medium leading-[25.56px] text-[#005299]">Signage/Poster <span aria-hidden="true" class="text-[24px] leading-none">&#8250;</span></span>
          </a>
          <a href="#" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
            <img src="assets/images/services/design.png" alt="" class="h-[184px] w-full object-contain max-[340px]:h-[166px]" />
            <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[18px] font-medium leading-[25.56px] text-[#005299]">Design <span aria-hidden="true" class="text-[24px] leading-none">&#8250;</span></span>
          </a>
          <a href="#" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
            <img src="assets/images/services/boxes-packaging.png" alt="" class="h-[184px] w-full object-cover max-[340px]:h-[166px]" />
            <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[18px] font-medium leading-[25.56px] text-[#005299]">Boxes/ Packaging <span aria-hidden="true" class="text-[24px] leading-none">&#8250;</span></span>
          </a>
          <a href="invitations-events.html" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
            <img src="assets/images/services/invitations-events.png" alt="" class="h-[184px] w-full object-cover max-[340px]:h-[166px]" />
            <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[18px] font-medium leading-[25.56px] text-[#005299]">Invitations / Events <span aria-hidden="true" class="text-[24px] leading-none">&#8250;</span></span>
          </a>
          <a href="#" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
            <img src="assets/images/services/metallic-ink.png" alt="" class="h-[184px] w-full object-cover max-[340px]:h-[166px]" />
            <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[18px] font-medium leading-[25.56px] text-[#005299]">Metallic Ink <span aria-hidden="true" class="text-[24px] leading-none">&#8250;</span></span>
          </a>
          <a href="#" class="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[#e2e8f0]">
            <img src="assets/images/services/white-ink.png" alt="" class="h-[184px] w-full object-cover max-[340px]:h-[166px]" />
            <span class="flex min-h-[56px] items-center gap-1 bg-white px-4 pb-4 pt-3 text-[18px] font-medium leading-[25.56px] text-[#005299]">White Ink <span aria-hidden="true" class="text-[24px] leading-none">&#8250;</span></span>
          </a>
          <div class="flex h-60 flex-col justify-between rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc] p-6">
            <p class="font-heading text-[24px] font-bold leading-[31.68px] tracking-[-0.48px] text-[#0f172a]">Looking for something else? We can help.</p>
            <a href="contact.html" class="flex min-h-11 w-full items-center justify-center rounded-full border-2 border-white bg-[#005299] px-4 py-3 text-[18px] font-medium leading-[25.56px] text-white">Make an Enquiry</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

`;

(function highlightActiveNav() {
  const norm = (s) => (s || '').toLowerCase().split('/').pop().replace(/\.html$/, '') || 'index';
  const current = norm(location.pathname);
  document.querySelectorAll('header a[href]').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) return;
    if (norm(href) === current) {
      a.classList.remove('text-[#1e293b]');
      a.classList.add('text-[#005299]');
    }
  });
})();
