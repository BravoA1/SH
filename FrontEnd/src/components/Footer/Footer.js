import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex justify-content-center align-items-center p10`}
    >
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="37%" y1="2%" x2="63%" y2="98%">
            <stop offset="5%" stop-color="#4a69bd"></stop>
            <stop offset="95%" stop-color="#6a89cc"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 C 0,500 0,166 0,166 C 127.42583732057417,186.01913875598086 254.85167464114835,206.03827751196172 339,200 C 423.14832535885165,193.96172248803828 464.01913875598086,161.86602870813397 550,144 C 635.9808612440191,126.13397129186603 767.0717703349281,122.49760765550238 861,138 C 954.9282296650719,153.50239234449762 1011.6937799043062,188.1435406698565 1102,196 C 1192.3062200956938,203.8564593301435 1316.153110047847,184.92822966507174 1440,166 C 1440,166 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="0.53"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="37%" y1="2%" x2="63%" y2="98%">
            <stop offset="5%" stop-color="#4a69bd"></stop>
            <stop offset="95%" stop-color="#6a89cc"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 C 0,500 0,333 0,333 C 80.09569377990428,305.81339712918657 160.19138755980856,278.6267942583732 261,285 C 361.80861244019144,291.3732057416268 483.33014354066995,331.30622009569373 588,360 C 692.66985645933,388.69377990430627 780.4880382775119,406.14832535885165 863,383 C 945.5119617224881,359.85167464114835 1022.7177033492824,296.10047846889955 1118,281 C 1213.2822966507176,265.89952153110045 1326.6411483253587,299.4497607655502 1440,333 C 1440,333 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
      <p>Copyright © 2023 JWT Inc.</p>
    </footer>
  );
}
