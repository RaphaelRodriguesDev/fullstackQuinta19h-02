
# Curso de Fullstack

Curso de Fullstack Turma Quinta(Logica, frontend, backend, banco de dados)

## Configuracoes VScode (JSON)

```json
{
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  // "remote.SSH.remotePlatform": {
  //   "$remote_server_name": "linux"
  // },
  "editor.mouseWheelZoom": true,
  "editor.wordWrap": "on",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.productIconTheme": "fluent-icons",
  "material-icon-theme.activeIconPack": "nest",
  "material-icon-theme.folders.associations": {
    "infra": "app",
    "entities": "class",
    "domain": "class",
    "schemas": "class",
    "typeorm": "database",
    "repositories": "mappings",
    "http": "container",
    "migrations": "tools",
    "modules": "components",
    "implementations": "core",
    "dtos": "typescript",
    "fakes": "mock",
    "websockets": "pipe",
    "protos": "pipe",
    "grpc": "pipe",
    "providers": "include",
    "subscribers": "messages",
    "useCases": "controller",
    "kafka": "scripts",
    "mappers": "meta",
    "_shared": "shared",
    "eslint-config": "tools",
    "kube": "kubernetes",
    "wordpress": "wordpress",
    "post-types": "docs",
    "shortcodes": "src",
    "express": "api",
    "workflows": "Flow",
    "frontend-vanilla": "Client",
    "frontend-vue": "Vue",
    "accounts": "Content"
  },
  "material-icon-theme.files.associations": {
    "ormconfig.json": "database",
    "tsconfig.json": "tune",
    "*.proto": "3d",
    "*.webpack.js": "webpack"
  },
  // Configura tamanho e família da fonte
  "editor.fontSize": 13,
  "editor.fontWeight": "500",
  "editor.lineHeight": 17,
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.semanticHighlighting.enabled": false,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  // "editor.fontFamily":"MesloLGM Nerd Font",
  // Aplica linhas verticais para lembrar de quebrar linha em códigos muito grandes
  "editor.rulers": [
    // 80,
    120
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "splitHTMLAttributes.closingBracketOnNewLine": true,
  "eslint.workingDirectories": [
    {
      "mode": "auto"
    }
  ],
  // Aplica um sinal visual na esquerda da linha selecionada
  "editor.renderLineHighlight": "gutter",
  // TodoTree
  "todo-tree.tree.showScanModeButton": false,
  "todo-tree.highlights.defaultHighlight": {
    "foreground": "yellow",
    "type": "text"
  },
  //CodeRunner
  "code-runner.runInTerminal": true,
  "code-runner.fileDirectoryAsCwd": true,
  "code-runner.preserveFocus": true,
  // IntelliSense
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  // Typescript
  "typescript.tsserver.log": "off",
  //CSpell
  "cSpell.language": "en,pt-BR",
  "cSpell.enableFiletypes": [
    "vue"
  ],
  "cSpell.userWords": [
    "Arial",
    "Avenir",
    "browserslist",
    "chao",
    "codigo",
    "condicao",
    "conteudo",
    "descricao",
    "devtools",
    "fastify",
    "Flexbox",
    "grayscale",
    "Helvetica",
    "indice",
    "introducao",
    "lightblue",
    "lightgreen",
    "middlewares",
    "nivel",
    "openai",
    "operacao",
    "Parens",
    "posttest",
    "preco",
    "prepend",
    "previsao",
    "readonly",
    "regioes",
    "registro",
    "requisicao",
    "Roboto",
    "scrollable",
    "shortcode",
    "typeof",
    "typeorm",
    "usuario",
    "varchar",
    "vnode",
    "vuetify",
    "woocommerce"
  ],
  // Default formatter VUE
  // "[vue]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  // Default formatter JS
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  //Prettier
  "prettier.arrowParens": "avoid",
  "editor.formatOnSave": true,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // Terminal
  // "terminal.integrated.fontFamily": "MesloLGM Nerd Font",
  // "terminal.integrated.fontFamily": "'BitstreamVeraSansMono Nerd Font', monospace",
  "terminal.integrated.fontFamily": "Fira Code",
  "terminal.integrated.fontSize": 12,
  "terminal.integrated.fontLigatures": true,
  // "terminal.integrated.fontWeightBold": "bold",
  // "terminal.integrated.showExitAlert": false,
  // Files Associations
  "files.associations": {
    ".sequelizerc": "javascript",
    ".stylelintrc": "json",
    ".prettierrc": "json",
    "*.tsx": "typescriptreact",
    "*.hbs": "handlebars",
    "*.css": "css"
  },
  "security.workspace.trust.untrustedFiles": "open",
  "editor.linkedEditing": true,
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma",
    "editor.formatOnSave": true
  },
  "git.autofetch": true,
  "launch": {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "XDebug (docker)",
        "type": "php",
        "request": "launch",
        "port": 9000,
        "pathMappings": {
          "/var/www/html/": "${workspaceRoot}/dev"
        },
        "xdebugSettings": {
          "max_children": 999
        }
      }
    ],
    "compounds": []
  },
  "bracket-pair-colorizer-2.depreciation-notice": false,
  "workbench.colorTheme": "Bearded Theme Vivid Black",
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[dockercompose]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.editorAssociations": {
    "*.html": "default"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "editor.tabSize": 2,
  "[markdown]": {
    "editor.defaultFormatter": "yzhang.markdown-all-in-one"
  },
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell"
    },
    "Command Prompt": {
      "path": [
        "${env:windir}\\Sysnative\\cmd.exe",
        "${env:windir}\\System32\\cmd.exe"
      ],
      "args": [],
      "icon": "terminal-cmd"
    },
    "Git Bash": {
      "source": "Git Bash"
    }
    // "Cmder": {
    //   "path": "${env:windir}\\System32\\cmd.exe",
    //   "args": ["/k", "C:\\cmder\\vendor\\bin\\vscode_init.cmd"]
    // }
  },
  "terminal.integrated.env.windows": {
    "PATH": "${env:PATH};${workspaceRoot}\\node_modules\\.bin;${env:PNPM_HOME}"
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "php.validate.executablePath": "C:/wamp64/bin/php/php7.4.33/php.exe",
  "CodeGPT.query.language": "Portuguese",
  "diffEditor.ignoreTrimWhitespace": false,
  "sshfs.configs": [
    {
      "name": "myvps",
      "host": "181.215.134.224",
      "username": "root",
      "password": true,
      "root": "/"
    }
  ],
  "[handlebars]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "bitoAI.codeCompletion.setAutoCompletionTriggerLogic": 250,
  "java.debug.settings.console": "internalConsole",
  "window.zoomLevel": 1,
  "codeium.enableConfig": {
    "*": false,
    "javascript": false
  },
  "code-runner.executorMap": {
    "javascript": "node",
    // "javascript": "wsl node",
    "java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
    "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "zig": "zig run",
    "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "objective-c": "cd $dir && gcc -framework Cocoa $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "php": "php",
    "python": "python -u",
    "perl": "perl",
    "perl6": "perl6",
    "ruby": "ruby",
    "go": "go run",
    "lua": "lua",
    "groovy": "groovy",
    "powershell": "powershell -ExecutionPolicy ByPass -File",
    "bat": "cmd /c",
    "shellscript": "bash",
    "fsharp": "fsi",
    "csharp": "scriptcs",
    "vbscript": "cscript //Nologo",
    "typescript": "ts-node",
    "coffeescript": "coffee",
    "scala": "scala",
    "swift": "swift",
    "julia": "julia",
    "crystal": "crystal",
    "ocaml": "ocaml",
    "r": "Rscript",
    "applescript": "osascript",
    "clojure": "lein exec",
    "haxe": "haxe --cwd $dirWithoutTrailingSlash --run $fileNameWithoutExt",
    "rust": "cd $dir && rustc $fileName && $dir$fileNameWithoutExt",
    "racket": "racket",
    "scheme": "csi -script",
    "ahk": "autohotkey",
    "autoit": "autoit3",
    "dart": "dart",
    "pascal": "cd $dir && fpc $fileName && $dir$fileNameWithoutExt",
    "d": "cd $dir && dmd $fileName && $dir$fileNameWithoutExt",
    "haskell": "runghc",
    "nim": "nim compile --verbosity:0 --hints:off --run",
    "lisp": "sbcl --script",
    "kit": "kitc --run",
    "v": "v run",
    "sass": "sass --style expanded",
    "scss": "scss --style expanded",
    "less": "cd $dir && lessc $fileName $fileNameWithoutExt.css",
    "FortranFreeForm": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "fortran-modern": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "fortran_fixed-form": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "fortran": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "sml": "cd $dir && sml $fileName",
    "mojo": "mojo run",
    "erlang": "escript",
    "spwn": "spwn build",
    "pkl": "cd $dir && pkl eval -f yaml $fileName -o $fileNameWithoutExt.yaml",
    "gleam": "gleam run -m $fileNameWithoutExt"
  },
  "terminal.integrated.defaultProfile.linux": "zsh",
  "workbench.editor.empty.hint": "hidden",
  "explorer.compactFolders": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.autoSave": "afterDelay"
}
