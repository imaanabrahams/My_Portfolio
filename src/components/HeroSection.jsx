import '../styles/HeroSection.css'

const KEY_ROWS = [
  Array.from({ length: 12 }, (_, i) => i),
  Array.from({ length: 12 }, (_, i) => i + 12),
]

function PinkComputer() {
  return (
    <div className="hero-stage">
      <h1 className="sr-only">
        Imaan Abrahams — Aspiring Full-Stack Web Developer and Cybersecurity
        Enthusiast
      </h1>

      <span className="pc-spark pc-spark--a">✦</span>
      <span className="pc-spark pc-spark--b">✧</span>
      <span className="pc-spark pc-spark--c">✦</span>
      <span className="pc-spark pc-spark--d">·</span>
      <span className="pc-spark pc-spark--e">✧</span>
      <span className="pc-spark pc-spark--f">✦</span>
      <span className="pc-spark pc-spark--g">·</span>
      <span className="pc-spark pc-spark--h">✧</span>

      <svg
        className="pc-svg"
        viewBox="0 0 520 420"
        role="presentation"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="pc-scan"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <rect width="4" height="1.5" fill="#0a0a0a" opacity="0.22" />
          </pattern>
        </defs>

        <ellipse className="pc-shadow" cx="260" cy="410" rx="180" ry="9" />

        {/* monitor */}
        <rect
          className="pc-case"
          x="88"
          y="18"
          width="344"
          height="254"
          rx="24"
        />

        <g className="pc-screen-group">
          <rect
            className="pc-screen"
            x="108"
            y="38"
            width="304"
            height="214"
            rx="14"
          />

          {/* terminal lines */}
          <rect className="pc-line pc-line--1" x="128" y="68" width="118" height="8" rx="4" />
          <rect className="pc-line pc-line--2" x="128" y="86" width="86" height="8" rx="4" />
          <rect className="pc-line pc-line--3" x="128" y="104" width="146" height="8" rx="4" />
          <rect className="pc-cursor" x="128" y="122" width="10" height="13" rx="2" />

          <text
            className="pc-screen-text"
            x="128"
            y="172"
            fill="currentColor"
            opacity="0.55"
          >
            imaan.dev
          </text>

          {/* flower on screen */}
          <g className="pc-flower">
            <circle className="pc-flower-petal" cx="345" cy="98" r="11" />
            <circle className="pc-flower-petal" cx="362" cy="108" r="11" />
            <circle className="pc-flower-petal" cx="362" cy="128" r="11" />
            <circle className="pc-flower-petal" cx="345" cy="138" r="11" />
            <circle className="pc-flower-petal" cx="328" cy="128" r="11" />
            <circle className="pc-flower-petal" cx="328" cy="108" r="11" />
            <circle className="pc-flower-heart" cx="345" cy="118" r="7" />
            <path
              className="pc-flower-stem"
              d="M345 145 C345 158 345 166 345 176"
              fill="none"
            />
            <ellipse
              className="pc-flower-leaf"
              cx="336"
              cy="162"
              rx="9"
              ry="4"
              transform="rotate(-28 336 162)"
            />
          </g>

          <rect className="pc-scanlines" x="108" y="38" width="304" height="214" rx="14" />
        </g>

        {/* power light */}
        <circle className="pc-led" cx="404" cy="258" r="3.5" />

        {/* stand */}
        <rect className="pc-neck" x="238" y="272" width="44" height="30" />
        <rect className="pc-base" x="178" y="302" width="164" height="16" rx="8" />

        {/* keyboard */}
        <rect className="pc-keyboard" x="60" y="340" width="400" height="58" rx="14" />

        {KEY_ROWS.map((row, rowIndex) =>
          row.map((keyNumber, i) => (
            <rect
              key={keyNumber}
              className="pc-key"
              x={84 + i * 30}
              y={352 + rowIndex * 17}
              width="24"
              height="11"
              rx="3"
              style={{ '--kd': `${keyNumber * 60}ms` }}
            />
          ))
        )}

        <rect
          className="pc-key pc-key--space"
          x="170"
          y="386"
          width="180"
          height="9"
          rx="4"
          style={{ '--kd': '780ms' }}
        />
      </svg>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <PinkComputer />
    </section>
  )
}
