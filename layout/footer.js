document.querySelector("footer").innerHTML = `

<style>
  .footer-roll { display: block; overflow: hidden; }
  .roll-wrap { display: block; position: relative; transition: transform 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
  .footer-roll:hover .roll-wrap { transform: translateY(-100%); }
  .roll-wrap > span { display: block; padding: 8px 12px; }
  .roll-wrap > span:last-child { position: absolute; top: 100%; left: 0; width: 100%; }
</style>

<div class="bg-[#e5f3ff] w-full">

  <!-- ═══ MAIN BODY ═══ -->
  <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0
              pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-[70px]
              flex flex-col gap-8 lg:gap-[69px]">

    <!-- ── Row 1: Logo + Social ── -->
    <div class="flex flex-col items-center gap-6
                lg:flex-row lg:items-center lg:justify-between">

      <!-- Logo (3-part SVG composition, matches Figma grid layout) -->
      <a href="/" aria-label="Digital Press Home"
         class="relative flex-shrink-0"
         style="width:190px; height:42px;">
        <!-- Mark (left accent) -->
        <img src="assets/images/logo/logo-mark.svg" alt=""
             class="absolute pointer-events-none"
             style="left:0; top:2.7px; width:37px; height:37px;" />
        <!-- Main DP wordmark -->
        <img src="assets/images/logo/logo-main.svg" alt=""
             class="absolute pointer-events-none"
             style="left:46px; top:0; width:144px; height:26px;" />
        <!-- "DIGITAL PRESS" text row -->
        <img src="assets/images/logo/logo-text.svg" alt="Digital Press"
             class="absolute pointer-events-none"
             style="left:46px; top:30px; width:143px; height:12px;" />
      </a>

      <!-- Social icons -->
      <div class="flex items-center gap-3 sm:gap-4 lg:gap-2 justify-center">

        <a href="#" aria-label="Facebook"
           class="relative flex-shrink-0 w-8 h-8 lg:w-8 lg:h-8 rounded-[4px] bg-[#e2e8f0] flex items-center justify-center hover:bg-[#d1d5db] transition-colors">
          <img src="assets/images/social/facebook.svg" alt="Facebook" class="w-4 h-4" />
        </a>
        <a href="#" aria-label="Twitter / X"
           class="relative flex-shrink-0 w-8 h-8 rounded-[4px] bg-[#e2e8f0] flex items-center justify-center hover:bg-[#d1d5db] transition-colors">
          <img src="assets/images/social/twitter.svg" alt="Twitter" class="w-4 h-4" />
        </a>
        <a href="#" aria-label="Instagram"
           class="relative flex-shrink-0 w-8 h-8 rounded-[4px] bg-[#e2e8f0] flex items-center justify-center hover:bg-[#d1d5db] transition-colors">
          <img src="assets/images/social/instagram.svg" alt="Instagram" class="w-4 h-4" />
        </a>
        <a href="#" aria-label="LinkedIn"
           class="relative flex-shrink-0 w-8 h-8 hover:opacity-80 transition-opacity">
          <img src="assets/images/social/linkedin.svg" alt="LinkedIn" class="w-full h-full" />
        </a>
        <a href="#" aria-label="YouTube"
           class="relative flex-shrink-0 w-8 h-8 hover:opacity-80 transition-opacity">
          <img src="assets/images/social/youtube.svg" alt="YouTube" class="w-full h-full" />
        </a>

      </div>
    </div>

    <!-- ── Row 2: Nav columns + Contact ── -->
    <div class="flex flex-col items-center gap-8
                lg:flex-row lg:justify-between">

      <!-- Nav columns wrapper -->
      <div class="flex flex-col gap-8 sm:flex-row sm:gap-16 lg:gap-20 flex-shrink-0 text-center lg:text-left">

        <!-- Quick Links -->
        <div class="flex flex-col gap-3">
          <p class="px-3 text-[18px] font-semibold text-[#1e293b] leading-[25.56px]">Quick Links</p>
          <ul class="flex flex-col">
            <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Home</span><span aria-hidden="true">Home</span></span></a></li>
            <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>About Us</span><span aria-hidden="true">About Us</span></span></a></li>
            <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Case Studies</span><span aria-hidden="true">Case Studies</span></span></a></li>
            <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Blogs</span><span aria-hidden="true">Blogs</span></span></a></li>
            <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>FAQ</span><span aria-hidden="true">FAQ</span></span></a></li>
            <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Contact Us</span><span aria-hidden="true">Contact Us</span></span></a></li>
          </ul>
        </div>

        <!-- Service Category -->
        <div class="flex flex-col gap-3">
          <p class="px-3 text-[18px] font-semibold text-[#1e293b] leading-[25.56px]">Service Category</p>

          <!-- Mobile: single stacked list | Desktop: 2 columns side by side -->
          <div class="flex gap-4 lg:gap-8">

            <!-- Column 1 (always visible) -->
            <ul class="flex flex-col">
              <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Business Cards</span><span aria-hidden="true">Business Cards</span></span></a></li>
              <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Business Stationery</span><span aria-hidden="true">Business Stationery</span></span></a></li>
              <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Fast Document Printing</span><span aria-hidden="true">Fast Document Printing</span></span></a></li>
              <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Marketing Material</span><span aria-hidden="true">Marketing Material</span></span></a></li>
              <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Books / Catalogues</span><span aria-hidden="true">Books / Catalogues</span></span></a></li>
              <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Signage / Posters</span><span aria-hidden="true">Signage / Posters</span></span></a></li>
              <!-- Mobile only: col 2 items -->
              <li class="lg:hidden"><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Ready Design</span><span aria-hidden="true">Ready Design</span></span></a></li>
              <li class="lg:hidden"><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Invitations / Events</span><span aria-hidden="true">Invitations / Events</span></span></a></li>
              <li class="lg:hidden"><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Metallic Ink</span><span aria-hidden="true">Metallic Ink</span></span></a></li>
              <li class="lg:hidden"><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Boxes / Packaging</span><span aria-hidden="true">Boxes / Packaging</span></span></a></li>
              <li class="lg:hidden"><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>White Ink</span><span aria-hidden="true">White Ink</span></span></a></li>
            </ul>

            <!-- Column 2 (desktop only) -->
            <ul class="hidden lg:flex flex-col">
              <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Ready Design</span><span aria-hidden="true">Ready Design</span></span></a></li>
              <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Invitations / Events</span><span aria-hidden="true">Invitations / Events</span></span></a></li>
              <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Metallic Ink</span><span aria-hidden="true">Metallic Ink</span></span></a></li>
              <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Boxes / Packaging</span><span aria-hidden="true">Boxes / Packaging</span></span></a></li>
              <li><a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>White Ink</span><span aria-hidden="true">White Ink</span></span></a></li>
            </ul>

          </div>
        </div>

      </div>

      <!-- ── Contact Block ── -->
      <div class="w-full lg:w-[320px] flex flex-col gap-8 lg:gap-0 lg:h-full lg:justify-between">

        <!-- Phone -->
        <div class="flex flex-col items-center lg:items-start not-italic">
          <p class="text-[16px] text-[#1e293b] leading-[22.72px] font-medium w-[125px] text-center lg:text-left">Call us toll free</p>
          <a href="tel:1300377377"
             class="text-[24px] font-bold text-[#005299] leading-[31.68px] tracking-[-0.48px] whitespace-nowrap ">
            1300 377 377
          </a>
        </div>

        <!-- Email newsletter form -->
        <div class="flex flex-col gap-3 w-full">
          <div class="flex flex-col gap-2 w-full">
            <label class="text-[14px] text-[#334155] leading-[19.88px]">Email Address</label>
            <div class="border-b border-[#e2e8f0] flex items-center h-9 px-2">
              <input type="email"
                     placeholder="Enter your email"
                     class="flex-1 bg-transparent text-[14px] text-[#94a3b8] leading-[19.88px] outline-none placeholder:text-[#94a3b8] min-w-0" />
            </div>
          </div>
          <button type="button"
                  class="bg-[#005299] text-white rounded-full px-4 py-3 flex items-center gap-1.5 w-[200px] justify-center hover:bg-[#004080] transition-colors">
            <span class="w-5 h-5 flex items-center justify-center flex-shrink-0">
              <img src="assets/images/icons/mail.svg" alt="" class="w-full h-full" />
            </span>
            <span class="text-[18px] font-medium leading-[25.56px] whitespace-nowrap">Make an Enquiry</span>
          </button>
        </div>

        <!-- Decorative divider line (hidden on mobile) -->
        <div class="hidden my-0 md:my-6  lg:block w-full border-t border-[#99cfff] opacity-60"></div>

        <!-- Upload print file button -->
        <div class="flex justify-center lg:justify-start">
          <button type="button"
                  class="relative overflow-hidden border border-[#99cfff] rounded-full px-3 py-2 flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style="background: linear-gradient(112.917deg, #e5f3ff 3.62%, #ffffff 109.39%);">
            <span class="w-5 h-5 flex items-center justify-center flex-shrink-0">
              <img src="assets/images/icons/upload-cloud.svg" alt="" class="w-full h-full" />
            </span>
            <span class="text-[16px] font-medium text-[#005299] leading-[22.72px] whitespace-nowrap">Upload Print file</span>
          </button>
        </div>

      </div>
    </div>

  </div>

  <!-- ═══ BOTTOM BAR ═══ -->
  <div class="border-t border-[#f1f5f9] mt-8 lg:mt-[68px]">
    <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0
                py-6 lg:py-[34px]
                flex flex-col items-center gap-4
                lg:flex-row lg:items-center lg:justify-between">

      <!-- Copyright -->
      <p class="text-[16px] text-[#334155] leading-[22.72px] whitespace-nowrap order-2 lg:order-1">
        All Right Reserved | @2026 - Digital Press
      </p>

      <!-- Legal links -->
      <nav class="flex items-center order-3 lg:order-2" aria-label="Legal">
        <a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Terms</span><span aria-hidden="true">Terms</span></span></a>
        <a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Privacy</span><span aria-hidden="true">Privacy</span></span></a>
        <a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Cookies</span><span aria-hidden="true">Cookies</span></span></a>
        <a href="#" class="footer-roll text-[18px] text-[#1e293b] leading-[25.56px]"><span class="roll-wrap"><span>Sitemap</span><span aria-hidden="true">Sitemap</span></span></a>
      </nav>

      <!-- Language selector -->
      <button type="button"
              class="order-1 lg:order-3 border border-[#e2e8f0] rounded-full px-4 py-3 flex items-center gap-2.5 hover:bg-white/50 transition-colors">
        <span class="w-6 h-6 flex-shrink-0">
          <img src="assets/images/icons/world.svg" alt="" class="w-full h-full" />
        </span>
        <span class="text-[18px] text-[#334155] leading-[25.56px] whitespace-nowrap">English</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="#334155" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

    </div>
  </div>

</div>

`;
