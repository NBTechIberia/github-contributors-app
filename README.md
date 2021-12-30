# GitHub Contributors App

React App Typescript with Redux

This app shows contributor's GitHub users from react/facebook repository

## Configuration

You must to create `.env` to initialize firebase as AuthProvider with next lines:

```
REACT_APP_FB_API_KEY=
REACT_APP_FB_AUTH_DOMAIN=
REACT_APP_FB_PROJECT_ID=
REACT_APP_FB_STORAGE_BUCKET=
REACT_APP_FB_MESSAGING_SENDER_ID=
REACT_APP_FB_APP_ID=
```

## Instalation

```
npm i
```

This command install all dependencies in project

## Redux

This app contains Redux Management and Thunk for async actions

```
auth: contains info about firebase's user
ui: manages ui app
settings: manages settings app
dashboard: manages dashboard info
```

## Structure

```
- components: contains app's components
- firebase: contains firebase config
- helpers: contains helpers to use in app
- hooks: contains hooks to use in app
- providers: contains providers to use in app
- reducers: contains reducers to use with Redux
- routers: contains router management and template routes to use in app
- screens: contains screens to use in routes
- services: contains fetch managements to use in app
- store: redux management
```

## Next Steps

[ ] Manage Firebase Error Code

[ ] Save Settings App in LS while user is logged in
