# Mayank Raj's Personal Website

This repository contains the source code for [mayankraj.com](https://mayankraj.com), the personal website and blog of Mayank Raj, a multifaceted technologist with a passion for innovation and problem-solving.

[![Build and release](https://github.com/rajmayank/mayankraj.com/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/rajmayank/mayankraj.com/actions/workflows/build-and-deploy.yml)

## 👨‍💻 About Mayank Raj

Hello, I'm Mayank Raj - a violinist who codes, a trekker who builds AI systems, and a drone enthusiast who secures the digital world. My tech odyssey has taken me through various roles and exciting challenges:

- 🔐 Currently, I'm a Lead Engineer at Salesforce, where I'm the digital locksmith fortifying the Salesforce ecosystem with unbreakable cryptography.

- 🎪 At Cactus Communications, I led a team of 15+ engineers, orchestrating big data and machine learning projects. We built a data platform processing 1.5TB of data weekly, generating insights at lightning speed.

- 🚀 As the founder of Apptale.io, I created a cost-effective monitoring service covering all 51 AWS availability zones, providing a digital guardian angel for apps at 1/15th the cost of competitors.

- 🦊 I'm proud to have contributed to open-source projects like Firefox, leaving my mark on widely-used software.

- 📊 I've architected a graph database engine querying ~8Tb of raw data for under $30 per query, with an average query time of just 8 minutes.

- 🤖 I built an AR bot assisted by LLMs for Salesforce conferences, used by over 450+ unique users across 4 conferences.

When I'm not immersed in code, you might find me scaling mountains, coaxing melodies from my violin, or tinkering with drones. I believe in the power of diverse experiences to fuel creativity and innovation in tech.

I'm passionate about bridging the gap between complex technology and real-world applications, always striving to make tech work smarter, not harder. Whether it's designing systems that process terabytes of data or crafting APIs that handle thousands of requests with sub-second latency, I'm all about pushing the boundaries of what's possible.

## 🚀 Key Features of This Website

- 📝 Blog with RSS feed
- 📊 Project showcase
- 📄 Resume/CV
- 🎨 Custom design with responsive layout
- 🚀 Performance optimized (91/100 lighthouse score)
- 🔍 SEO friendly

## 🛠️ Technologies

- [Gatsby](https://www.gatsbyjs.com/) - React-based static site generator
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Sass](https://sass-lang.com/) - CSS extension language
- [GraphQL](https://graphql.org/) - Query language for APIs
- [Material-UI (Joy)](https://mui.com/joy-ui/getting-started/) - React component library

## 📦 Notable Packages

- `gatsby-plugin-image` and `gatsby-plugin-sharp` for optimized image loading
- `gatsby-plugin-feed` for RSS feed generation
- `gatsby-plugin-google-analytics` for website analytics
- `react-player` for media playback
- `react-fast-marquee` for dynamic content display

## 🧶 Yarn 2 with Plug'n'Play

This project uses Yarn 2 with Plug'n'Play (PnP) for dependency management. PnP offers faster installation times, improved security, and better offline support. The `.pnp.cjs` file in the root directory manages dependencies without the need for a `node_modules` folder.

## 🏗️ Project Structure

```
.
├── content/
│   └── blog/         # Markdown files for blog posts
├── src/
│   ├── assets/       # Static assets (images, fonts, etc.)
│   ├── components/   # React components
│   ├── pages/        # Page components
│   └── styles/       # SCSS stylesheets
├── static/           # Static files (copied to public as-is)
├── gatsby-config.js  # Gatsby configuration
├── .pnp.cjs          # Yarn 2 PnP runtime
└── package.json      # Project dependencies and scripts
```

## 🚀 Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/mayankraj.com.git
   cd mayankraj.com
   ```

2. Install dependencies:

   ```
   yarn install
   ```

3. Start the development server:

   ```
   yarn dev
   ```

4. Open `http://localhost:8000` in your browser

## 📜 Available Commands

- `yarn preload-fonts`: Preload fonts for improved performance
- `yarn dev`: Start the development server
- `yarn devm`: Start the development server on local network
- `yarn build`: Create a production-ready build
- `yarn serve`: Serve the production build locally
- `yarn clean`: Clear the Gatsby cache

## 🏗️ Building for Production

To create a production-ready build:

```
yarn build
```

The output will be in the `public/` directory.

## 🚢 Deployment

This project is set up for continuous deployment using GitHub Actions. Any push to the main branch will trigger a build and deploy process.

## 📄 License and Attribution

This project is open source and available under the [MIT License](LICENSE).

When using or building upon this project, please provide attribution to Mayank Raj and link back to the original repository. For example:

```
This project is based on the personal website of Mayank Raj (https://github.com/yourusername/mayankraj.com).
```

Mayank appreciates acknowledgment of his work and encourages sharing and building upon it in the spirit of open source collaboration.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/mayankraj.com/issues).

When contributing:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with clear, descriptive messages
4. Push your changes to your fork
5. Create a pull request with a clear description of your changes

Please ensure your code follows the existing style and structure of the project.

## 📞 Contact

Mayank Raj - [@mayank9856](https://twitter.com/mayank9856)

---

Remember, in the world of tech, as in music, it's not just about playing the right notes – it's about making them dance together in perfect harmony. And sometimes, it's about knowing when to improvise a killer solo.
