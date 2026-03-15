@import "tailwindcss";

@theme {
  --color-sky-blue: #6AAFE6;
  --color-sky-blue-hover: #5599D4;
  --color-deep-navy: #2B3D4F;
  --color-deep-navy-hover: #3A5068;
  --color-warm-white: #F5F5F3;
  --color-light-gray: #E8E8E4;
  --color-medium-gray: #8A8F94;
  --color-soft-teal: #4DB8A4;
  --color-warm-coral: #E07C5A;
  --color-whatsapp: #25D366;

  --font-sans: "Heebo", "Assistant", ui-sans-serif, system-ui, sans-serif;
}

body {
  font-family: var(--font-sans);
  color: var(--color-deep-navy);
  background-color: #ffffff;
  direction: rtl;
}

/* Typography scale */
h1 {
  font-size: 32px;
  font-weight: 700;
}
@media (min-width: 680px) {
  h1 {
    font-size: 48px;
  }
}

h2 {
  font-size: 24px;
  font-weight: 700;
}
@media (min-width: 680px) {
  h2 {
    font-size: 32px;
  }
}

h3 {
  font-size: 18px;
  font-weight: 500;
}
@media (min-width: 680px) {
  h3 {
    font-size: 22px;
  }
}

p, .body-text {
  font-size: 16px;
  font-weight: 400;
}
@media (min-width: 680px) {
  p, .body-text {
    font-size: 17px;
  }
}

.small-text {
  font-size: 13px;
  font-weight: 400;
}
@media (min-width: 680px) {
  .small-text {
    font-size: 14px;
  }
}
