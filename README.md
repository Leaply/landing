# Leaply Landing Pages

This is the primary marketing site for the Leaply opportunity platform.

It is a Nuxt application without a backing database, meaning it can safely be 
prerendered as a static site. All authenticated activity on the platform occurs
in separate services and so all links to the application redirects to the
service in question. For example, the login button links to the auth service.

## Purpose

The purpose of this site includes the following:

- Quick loading general site for new visitors to land on
- SEO-friendly page for searches regarding Leaply
- Platform information for the two sections of the userbase
- Links to newsletter signup, blog and socials.
- Access to our Terms of Use and Privacy Policy

## Details

It is designed to match as closely as possible the tools we use to build the
rest of the Leaply platform. Hence, it uses Nuxt, but in `static` mode instead
of `ssr`. It also does not include a Feathers.js API like other services do.
As with other services, the styling makes use of Tailwind CSS.

## Installation

It is recommended to install the LTS version of Node.js with Node Version 
Manager, and then install the package dependencies with yarn.

To run in development mode with Hot Module Reload: `yarn dev`

To build a static bundle for deployment in `dist`: `yarn generate`

