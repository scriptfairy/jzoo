General
-------

* All code to go into /src

Configure Bower
---------------

Create `.bowerrc` and specify that it should install everything in the /src
directory

{
  "directory" : "src"
}

Create bower.json
-----------------

Run `bower init` and choose all defaults, but change private to 'y'

This creates the bower.json file.

Install Angular
---------------

`bower install angular --save`

`--save` means add angular to the bower.json file as a production dependency.
E.g. any libraries that should go out to production.

`--save-dev` means add angular to the bower.json file as a development
dependency. E.g. unit testing libraries.

Uninstalling Angular
--------------------

As an example

`bower uninstall angular --save`


Install Bootstrap
-----------------

`bower install bootstrap --save`


Set Up Local Web Server
-----------------------

`npm install -g http-server`

To use this, just go to whatever directory is the root of your site and type
`http-server`.

You can then browse the site at `http://localhost:8080`.

Note that `http://0.0.0.0:8080` does not seem to work.


Install Angular UI Router
-------------------------

Separate routing library for nested views.

`bower install angular-ui-router --save`



Install Angular Collection
--------------------------

Separate library managing generic collections.

`bower install angular-collection --save`


Use anonymous function in js files
----------------------------------

To prevent the functions from executing in the global scope.
