[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9d9fb572026148c8bb1773ec5b330c7e)](https://www.codacy.com/app/kostysh/github-utils?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pandoraboxchain/github-utils&amp;utm_campaign=Badge_Grade) [![Known Vulnerabilities](https://snyk.io/test/github/pandoraboxchain/github-utils/badge.svg)](https://snyk.io/test/github/pandoraboxchain/github-utils)

# github-utils
Command-line utility for working with GitHub repositories  

## Install
```sh
npm i --save github-utils@https://github.com/pandoraboxchain/github-utils.git#0.1.0
```
you can use `-g` flag to install this module globally  

## Getting utility version 
```sh
ghu --version
0.1.0
```

## Getting help
```sh
ghu --help
ghu help <command>
```
for example:  
```sh
ghu help issue

   ghu 0.1.0 - Command-line utility for working with GitHub repositories

   USAGE

     ghu issue

   OPTIONS

     -d, --debug                               Enable debug mode                                         optional
     -k, --api-token, --api-key <api-key>      GihHub API key                                            required
     -o, --owner <owner>                       GitHub repository owner                                   required
     -r, --repositories <repositories>         Targeted GitHub repositories (can be coma separated)      required
     -t, --title <title>                       Issue title                                               required
     -b, --body <body>                         Issue body                                                required

   GLOBAL OPTIONS

     -h, --help         Display help
     -V, --version      Display version
     --no-color         Disable colors
     --quiet            Quiet mode - only displays warn and error messages
     -v, --verbose      Verbose mode - will also output debug messages
```

## Publishing an issue
```sh
npx ghu issue -k <access_token> -o <repos_owner> -r <repo_1[,repo_2]> -t "Issue title" -b "Issue body"
```
or in case of utility has been installed as global module:  
```sh
ghu issue -k <access_token> -o <repos_owner> -r <repo_1[,repo_2]> -t "Issue title" -b "Issue body"
```
