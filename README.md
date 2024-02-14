[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# 💎 Etimo Diamonds 2

Diamonds is a programming challenge. Program a bot and compete to get the highest score.

## Want to play? 🕹

- Read the [game rules and how to get started](RULES.md).
- Try the api using Swagger either [locally](http://localhost:3000/docs) or [live](http://diamonds.etimo.se/docs/)

If you find a bug or has a suggestion for improvement you are more than welcome to [submit an issue](https://github.com/Etimo/diamonds2/issues/new) or [pull request](https://github.com/Etimo/diamonds2/compare)!

## How to run 💻

1. Clone this repository and move to the root of this project's directory

```
git clone https://github.com/haziqam/tubes1-IF2110-game-engine.git
cd ./tubes1-IF2110-game-engine

```

2. Install dependencies

```
yarn
```

3. Setup default environment variables

```
./scripts/copy-env.bat
```

4. Setup local database

```
docker compose up -d database
```

```
./scripts/setup-db-prisma.bat
```

5. Build

```
npm run build
```

6. Start

```
npm run start
```

Frontend: http://localhost:8082

Swagger: http://localhost:3000/docs
