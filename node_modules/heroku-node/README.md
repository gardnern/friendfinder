heroku-node
===========

As of node 2, the garbage collection defaults have changed such that
[1.5 GB is consumed][1] before garbage collection will occur. This is
especially problematic on platforms such as heroku which will force your
application to start swapping well before that limit is reached. Heroku
provides [`$WEB_MEMORY`][2] to let you know what that limit is. This wraps node
to inform it of that limit.

Installation
------------
```bash
npm install -S heroku-node
```

Usage
-----

Use `heroku-node foo` or whatever your application is called for
your `npm start` script. If you're using a Procfile, be sure to include the
path, `node_modules/.bin/heroku-node`. Essentially, use `heroku-node` wherever
you'd use plain old `node`.

[1]: https://github.com/nodejs/node/issues/3370#issuecomment-148108323
[2]: https://devcenter.heroku.com/articles/node-concurrency#tuning-the-concurrency-level
