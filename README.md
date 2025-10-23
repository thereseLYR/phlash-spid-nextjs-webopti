# Cat Distribution System - Performance Workshop Baseline

This Next.js application serves as a baseline for web performance optimization workshops. It intentionally implements various performance anti-patterns to provide workshop participants with opportunities to identify and optimize real-world performance issues.

## Project Purpose

This application is deliberately designed with sub-optimal performance patterns to serve as a learning tool. Workshop participants will:

1. Identify performance bottlenecks
2. Measure performance metrics
3. Implement optimizations
4. Validate improvements

## Core Requirements

While optimizing the application, the following features must be maintained:

### Essential Components

- Header and footer must maintain their current appearance and functionality
- All core routes must remain functional:
  - Landing page (`/`)
  - About Us (`/about-us`)
  - Contact Us (`/contact-us`)

### Dynamic Content Requirements

- Announcement banner below the header must:
  - Display quote of the day from a dynamic API
  - Update at least once per day
- Hero section must include:
  - Dynamic cat image from an API
  - Image must change at least once per day

## Getting Started

### Running the local environment (Development mode)

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

After npm packages are installed, you only need to run `npm run dev` to start the server.

### Running a production build locally

```bash
# Build for production
npm run build

# Start production server
npm start
```

After npm packages are installed, you will need to run both commands to start the server.

- `npm run build` compiles the latest version of your changes, and dumps the output in the `.next` folder
- `npm start` starts the server in production mode, using the contents of the `.next` folder

### Performance Measurement

To measure the baseline performance and track improvements:

1. Use Lighthouse in Chrome DevTools
2. Monitor Core Web Vitals in Chrome DevTools
3. Use the Performance tab for detailed analysis
4. Check Network tab for waterfall charts

For accurate performance testing, always use production builds (i.e. `npm start` instead of `npm run dev`) and measure on representative devices/networks. For this workshop, we will focus on measurements for mobile devices.

### General workflow

1. Measuring current performance (Lighthouse, Core Web Vitals)
2. Identifying specific performance bottlenecks
3. Implementing optimizations while maintaining core functionality
4. Validating improvements with metrics

### Notes for Participants

- Do not remove core functionality while optimizing
- All performance improvements should be measurable
- Focus on real-world optimization techniques
- Document your improvements and their impact

## Other Information

### Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- External APIs for dynamic content

### Other Resources

- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Next.js Performance Documentation](https://nextjs.org/docs/pages/building-your-application/optimizing)
- [Chrome DevTools Performance Analysis](https://developer.chrome.com/docs/devtools/performance/)
