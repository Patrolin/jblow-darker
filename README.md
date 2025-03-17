# [jblow-darker](https://github.com/Patrolin/jblow-darker)
Jon blow-like theme with darker background from [monokai darker](https://github.com/eser/vscode-one-dark-pro-monokai-darker)

Recommended settings:
- font-family: "Consolas"
- font-size: 15px
- line-height: font-size + 4px

Tested with Typescript, Python, Odin, C/C++, JSON, [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv) and Markdown

# Screenshots

### Programming languages
<p>
  <img src="assets/screenshots/programming/typescript_cropped.png" width="47%" hspace="1%" title="Typescript">
  <img src="assets/screenshots/programming/python_cropped.png" width="47%" hspace="1%" title="Python">
</p>
<p>
  <img src="assets/screenshots/programming/odin_cropped.png" width="47%" hspace="1%" title="Odin">
  <img src="assets/screenshots/programming/cpp_cropped.png" width="47%" hspace="1%" title="C++">
</p>
<p>
  <img src="assets/screenshots/programming/c_cropped.png" width="47%" hspace="1%" title="C">
</p>

### Storage Formats
<p>
  <img src="assets/screenshots/storage/json_cropped.png" width="47%" hspace="1%" title="JSON">
  <img src="assets/screenshots/storage/csv_cropped.png" width="47%" hspace="1%" title="Rainbow CSV">
</p>

### Markup languages
![Markdown](assets/screenshots/markup/markdown_cropped.png "Markdown")

# dev

## Run
Press F5

`Ctrl+K Ctrl+O` > Open the `tests` subdirectory in this project (vscode doesn't let you open multiple copies of the same folder)

`Ctrl+Shift+P tokens` to view which token is responsible for which color


## Publish
https://code.visualstudio.com/api/working-with-extensions/publishing-extension

1) Update `CHANGELOG.md`

2) Update version number in `package.json`

2) Check which files will be published:

`vsce package`

3) Publish to VS marketplace:

`vsce publish`
