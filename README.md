# projectPOS

The projectPOS is a proof-of-concept MEAN-based Point of Sale system.

## Getting Started
- clone directory
   - git clone https://github.com/Babakanoosh/projectPOS
- install all packages listed in package.json
   - sudo npm install
- use 'npm start' to begin the server:
~~~
$ npm start
                                                                  
> project-pos@0.0.0 start /home/danthemango/github/projectPOS
> ng serve --proxy-config proxy.conf.json & nodemon server.js

[nodemon] 1.14.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
listening on 3000
** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
Date: 2018-01-02T00:31:23.587Z                                                      Hash: 5fd9fa9d22135b1a16ca
Time: 9132ms
chunk {inline} inline.bundle.js (inline) 5.79 kB [entry] [rendered]
chunk {main} main.bundle.js (main) 63.7 kB [initial] [rendered]
chunk {polyfills} polyfills.bundle.js (polyfills) 549 kB [initial] [rendered]
chunk {styles} styles.bundle.js (styles) 33.8 kB [initial] [rendered]
chunk {vendor} vendor.bundle.js (vendor) 8.18 MB [initial] [rendered]

webpack: Compiled successfully.
~~~
- then point a browser to 'localhost:4200'

# Attribution
This system has been developed by [Anand Sundaras](https://github.com/anandsundar), [Callum Stewart](https://github.com/Babakanoosh), [Daniel Guenther](https://github.com/danthemango) using a number of guides, including:
* book: "build modern web applications with html5 css3 and javascript"
* https://zellwk.com/blog/crud-express-mongodb/
* https://coursetro.com/posts/code/111/Using-the-Angular-5-Router-(Tutorial)