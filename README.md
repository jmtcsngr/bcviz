bcviz
=====

D3 based JavaScript visualisation for bamcheck and
NPG autoqc json file formats.

Requires bower (http://bower.io) to install package dependencies.

Running demos:
--------------

1. Navigate to bcviz directory in terminal

2. Execute bower to install dependencies:

    bower install

3. Start a localhost server in the directory using python:

    python -m SimpleHTTPServer 8888 &

4. In your browser go to: 

    http://localhost:8888/demo

5. To generate a demo for your own data, change to demo/custom
   directory, execute demo.py script:

    python demo.py

   Follow the displayed prompt (test files are provided as part 
   of this package and are located in the demo folder, ../ when executing
   python). The script generates index.html and main.js files that are 
   specific to your input. The visuals are displayed at:

    http://localhost:8888/demo/custom

Running tests:
--------------

Install dependencies by running bower in the top level directory:

  bower install

Start a localhost server in the directory using python:

  python -m SimpleHTTPServer 8888 &

In a browser: http://localhost:8888/test/test.html

Headless: phantomjs test/run-qunit.js test/test.html

