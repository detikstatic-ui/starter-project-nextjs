# next-template

A Next.js 14 template for building apps with Radix UI and Tailwind CSS.

## Usage

```bash
npx create-next-app -e https://github.com/detikstatic-ui/next-template
```
```bash
npx degit detikstatic-ui/starter-project-nextjs myapp-name
```

## Features

- Next.js 14 App Directory
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Tailwind CSS class sorting and merging.
- Prettier

## Basic Auth Feature : https://github.com/vercel/examples/tree/main/edge-middleware/basic-auth-password

- create middleware.ts in root directory:

```js
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/index'],
}

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    // use this if reading auth valid credentials from the .env file
    // const validUser = process.env.BASIC_AUTH_USER;
    // const validPassWord = process.env.BASIC_AUTH_PASSWORD;

    if (user === 'admin' && pwd === 'admin1234') {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
```

- Create auth in app/api/auth/route.ts

```js
export async function GET(request: Request) {
  return new Response("Authentication Required!", {
    status: 401,
    headers: {
      "WWW-Authenticate": "Basic realm='private_pages'",
    },
  })
}
```
