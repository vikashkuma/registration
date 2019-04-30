

![Build Status](https://codebuild.us-west-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiUTQyTTJHM2V1NDl1akVNcmhxbXBnSktVd3NaYkFVZi95V3l6QXhNS2hrTjlVWW1rUHNocG5IV0JtR1BDNTRoLzBVVHFuOEVtQ2U2dTJiNTE4VmZSaFlVPSIsIml2UGFyYW1ldGVyU3BlYyI6ImlFdk5WcmR4eW82cnpzN3ciLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

## Local Development

Run `npm install` after clone the git repository.

### Local development using the local mock server

```sh
npm run start
```

local development server are available on ```http://localhost:3000```

mock server is available at ```http://localhost:3004/<resourseName>```

### Add New resourse to mock server

go to ```mock-server``` directory and create a json file (e.g. ```reports.json```) inside ```apis``` folders.

Now access the new mock resource at ```http://localhost:3004/reports``` it will support all the http verbs (Get, Post, Put , Delete, patch  etc).

### Local development using the remote API

```sh
npm run start:remote
```

It's also possible to set any other API URL, by changing environment variable `API_BASE_URL`

```sh
API_BASE_URL=https://dev-api.mv.accureanalytics.com/ npm run start
```

## Build

```sh
npm install
npm run build
```

## Lint & Flow

Before commit, please make sure there is no **errors**, run `npm run lint` and `npm run flow`.

If you use VSCode, it's better to install these extensions, and then change your "Workspace settings" to the following:

```json
"javascript.validate.enable": false,
"flow.useNPMPackagedFlow": true,
```

## Upgrade Node

Always use Node LTS version for development and runtime. When upgrade node version, update the `.nvmrc` file and remove `node_modules` and `package-lock.json` file. Re-run `npm install` with the new node.
