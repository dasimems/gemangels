/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear-rainbow-1': 'linear-gradient(to right, red, orange, yellow, green, blue, violet)',
        'linear-rainbow-2': 'linear-gradient(to right, #ff6666, #ffcc66, #ffff99, #99ff99, #66ccff, #cc99ff)',
        'linear-rainbow-3': 'linear-gradient(to right, #ff3366, #ff9933, #ffff66, #66ff66, #3399ff, #9933cc)',
        'linear-rainbow-4': 'linear-gradient(to right, #ff6699, #ffcc99, #ffffcc, #ccffcc, #99ccff, #cc99ff)',
        'linear-rainbow-5': 'linear-gradient(to right, #ff0066, #ff9900, #ffff00, #00ff66, #0099ff, #9900cc)',
        'linear-rainbow-6': 'linear-gradient(to right, #ff3399, #ff9933, #ffff00, #33ff66, #0099ff, #9933cc)',
        'linear-rainbow-7': 'linear-gradient(to right, #ff3399, #ff9966, #ffffcc, #99ffcc, #99ccff, #cc99ff)',
        'linear-rainbow-8': 'linear-gradient(to right, #ff6699, #ffcc66, #ffff99, #ccff99, #99ccff, #cc99ff)',
        'linear-rainbow-9': 'linear-gradient(to right, #ff3366, #ffcc33, #ffff66, #ccff99, #66ccff, #cc66ff)',
        'linear-rainbow-10': 'linear-gradient(to right, #ff0066, #ff9900, #ffff33, #00ff66, #0099ff, #9900cc)',
        'radial-rainbow-1': 'radial-gradient(circle at center, red, orange, yellow, green, blue, violet)',
        'radial-rainbow-2': 'radial-gradient(circle at center, #ff6666, #ffcc66, #ffff99, #99ff99, #66ccff, #cc99ff)',
        'radial-rainbow-3': 'radial-gradient(circle at center, #ff3366, #ff9933, #ffff66, #66ff66, #3399ff, #9933cc)',
        'radial-rainbow-4': 'radial-gradient(circle at center, #ff6699, #ffcc99, #ffffcc, #ccffcc, #99ccff, #cc99ff)',
        'radial-rainbow-5': 'radial-gradient(circle at center, #ff0066, #ff9900, #ffff00, #00ff66, #0099ff, #9900cc)',
        'radial-rainbow-6': 'radial-gradient(circle at center, #ff3399, #ff9933, #ffff00, #33ff66, #0099ff, #9933cc)',
        'radial-rainbow-7': 'radial-gradient(circle at center, #ff3399, #ff9966, #ffffcc, #99ffcc, #99ccff, #cc99ff)',
        'radial-rainbow-8': 'radial-gradient(circle at center, #ff6699, #ffcc66, #ffff99, #ccff99, #99ccff, #cc99ff)',
        'radial-rainbow-9': 'radial-gradient(circle at center, #ff3366, #ffcc33, #ffff66, #ccff99, #66ccff, #cc66ff)',
        'radial-rainbow-10': 'radial-gradient(circle at center, #ff0066, #ff9900, #ffff33, #00ff66, #0099ff, #9900cc)',
        'conic-rainbow-1': 'conic-gradient(from 0deg, red 0%, orange 14.28%, yellow 28.56%, green 42.84%, blue 57.12%, violet 71.4%, red 85.68%, orange 100%)',
        'conic-rainbow-2': 'conic-gradient(from 0deg, red 0%, yellow 20%, green 40%, blue 60%, violet 80%, red 100%)',
        'conic-rainbow-3': 'conic-gradient(from 0deg, red 0%, yellow 33.33%, green 66.66%, red 100%)',
        'conic-rainbow-4': 'conic-gradient(from 0deg, #ff6666 0%, #ffcc66 25%, #ffff99 50%, #99ff99 75%, #66ccff 100%)',
        'conic-rainbow-5': 'conic-gradient(from 0deg, #ff0066 0%, #ff9900 25%, #ffff00 50%, #00ff66 75%, #0099ff 100%)',
        'conic-rainbow-6': 'conic-gradient(from 0deg, #ff3399 0%, #ff9966 25%, #ffffcc 50%, #99ffcc 75%, #99ccff 100%)',
      },
      colors: {
        bg: {
          DEFAULT: "#1B1A1F"
        },
        primary: {
          DEFAULT: "#F5245F",
          "100": "rgb(245,36,95,.1)",
          "200": "rgb(245,36,95,.2)",
          "300": "rgb(245,36,95,.3)",
          "400": "rgb(245,36,95,.4)",
          "500": "rgb(245,36,95,.5)",
          "600": "rgb(245,36,95,.6)",
          "700": "rgb(245,36,95,.7)",
          "800": "rgb(245,36,95,.8)",
          "900": "rgb(245,36,95,.9)",
        }
      }
    },
  },
  plugins: [],
}
