# stylelint-config-metamo

###### ※ルール検討中

## Install

```
npm install -D stylelint-config-metamo stylelint
```

## Usage

`.stylelintrc`

```json
{
  "extends": ["stylelint-config-metamo"]
}
```

#### VSCode Settings (JSON) need to be written
1. `command` + `shift` + `P`
1. selected `Preferences: Open Settings(JSON)`
1. Describe the following

```json
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true
}
```