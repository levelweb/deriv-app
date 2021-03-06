# `@deriv/translations`

>

-   Extract new string translations to crowdin
-   Staging / dev branch is the source of truth for strings that should be translated.
-   React i18next configuration and translation components
    >

## Index

-   [General](docs/README.md) - Contains general philosophy and overview of this package
-   [Modules docs](docs/Modules/README.md) - Contains implementation guides (i.e., scaffolding, code usage)

# Requirements:

-   Crowdin CLI: download here: https://support.crowdin.com/cli-tool-v2/#installation
-   **Important:** Please use version 2 of the crowdin cli-tool (version 3 is not supported by our translation scripts yet)
-   remote `origin` should be your fork
-   remote `upstream` should be the source repository (e.g. `git@github.com:binary-com/deriv-app.git`)

## Extracting translations

### Setup: add the crowdin API key to your ~/.bash_profile

```sh
   $ echo "export DERIV_CROWDIN_API_KEY='apikeyhere'" >> ~/.bash_profile
   $ source ~/.bash_profile
```

### To update strings to be translated in crowdin

```sh
   $ npm run translate
```

## Project translations

-   This project uses [react-i18next](https://react.i18next.com)

### Setup

-   initialize translations in root app.jsx by importing and calling initializeTranslations
-   in `app.jsx`:

```jsx
    import { initializeTranslations } from '@deriv/translations';
    ...
    initializeTranslations()
```

### Usage

-   For strings use either `localize(...)` or `<Localize />`
-   [`<Localize />`](https://react.i18next.com/latest/trans-component) example:

```jsx
import { Localize } from '@deriv/translations';

<Localize
    i18n_default_text='You cannot use your real money account with {{website_name}} at this time.'
    values={{ website_name }}
/>;
```

-   localize example:

```jsx
import { localize } from '@deriv/translations';

<h4 className='drawer__notifications-header'>{localize('all notifications')}</h4>;
```

>

## FAQ:

-   This package includes all Crowdin configuration
-   Crowdin source translation file --> crowdin/messages.json
-   Source for the translated strings in the project --> src/translations/fr|en|id....json
