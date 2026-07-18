# Floor Decor

[![Build site](https://github.com/RipplyPear/floor-decor/actions/workflows/ci.yml/badge.svg?branch=gh-pages)](https://github.com/RipplyPear/floor-decor/actions/workflows/ci.yml)
[![Live website](https://img.shields.io/badge/Live%20website-floordecor.ro-1f6f78?style=flat-square)](https://floordecor.ro)

A responsive static website for Floor Decor, a Romanian showroom specializing in interior and exterior finishing solutions, built with Jekyll.

## Highlights

- Responsive, mobile-friendly layout
- Data-driven partner brand catalogue powered by YAML
- Product categories rendered with Liquid templates
- Contact form with a custom confirmation page
- Custom domain deployment: [floordecor.ro](https://floordecor.ro)
- Privacy policy, terms and a custom 404 page

## Tech stack

- Jekyll 4
- Liquid
- HTML5
- SCSS
- Vanilla JavaScript
- GitHub Pages

## Local development

### Prerequisites

- Ruby 2.7+
- Bundler

### Run locally

```bash
bundle install
bundle exec jekyll serve --livereload
```

The local preview is available at `http://localhost:4000`.

To create a production build:

``` bash
bundle exec jekyll build
```

## Project structure

``` text
_data/       # Brand catalogue, navigation and policy data
_includes/   # Reusable Liquid partials
_layouts/    # Page layouts
assets/      # CSS, JavaScript, brand logos and static assets
pictures/    # Product and showroom imagery
```

## Context

This repository contains the source code for the Floor Decor website. Product information and visual assets are used with permission.

## License

This project is not licensed for reuse. All brand assets, product materials and business content remain the property of their respective owners.