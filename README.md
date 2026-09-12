# Google Docs Dark Mode for Safari

A lightweight userscript that provides a comprehensive dark mode experience for Google Docs on Safari for macOS.

It transforms the Google Docs interface into a darker, more comfortable workspace while preserving the actual document content and formatting.

## Features

- Dark Google Docs document canvas
- Light text for improved readability
- Dark editor workspace
- Dark toolbar and menu bar
- Dark horizontal and vertical rulers
- Dark dropdown menus and side panels
- Custom dark scrollbars for Safari
- Automatic reinjection when Google Docs dynamically updates its interface
- Does not permanently modify document formatting

## Compatibility

This userscript is primarily designed and tested for:

- macOS
- Safari
- Google Docs
- Userscripts for Safari

Compatibility with other browsers or userscript managers is not guaranteed.

## Installation

### Safari

1. Install a userscript manager such as **Userscripts for Safari**.
2. Open `google-docs-dark-mode.user.js` from this repository.
3. Click **Raw**.
4. Copy the complete userscript.
5. Create a new script in Userscripts for Safari.
6. Paste the code and save it.
7. Enable the script for:

   `https://docs.google.com/document/*`

8. Reload Google Docs.

## How It Works

The userscript injects custom CSS into Google Docs and applies visual transformations to the editor interface.

The changes are applied locally in the browser only.

Your actual Google Docs document remains unchanged.

## Important Notice

This userscript does **not** permanently modify:

- document background colors;
- document text colors;
- document formatting;
- printed documents;
- exported PDF or DOCX files; or
- how documents appear to other users.

The dark appearance exists only in the browser where the userscript is enabled.

## Maintenance

Google Docs is a continuously updated web application.

Changes made by Google to its HTML structure, CSS classes, or interface may occasionally affect compatibility with this userscript.

Updates may therefore be required following major Google Docs interface changes.

## Contributing

Contributions are welcome.

You may open an issue to report bugs or compatibility problems, or submit a pull request with improvements.

## Author

Developed and maintained by **Farazzmaldi**.

Copyright © 2026 Farazzmaldi.

## Disclaimer

This project is independently developed and is not affiliated with, endorsed by, sponsored by, or associated with Google LLC.

Google, Google Docs, and related trademarks are the property of Google LLC.

## License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for details.
