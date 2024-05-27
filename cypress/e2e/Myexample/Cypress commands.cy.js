//*To open Test Runner*//
//node_module\.bin\cypress open

//*To run all the tests under folder directory*//
//node_module\.bin\cypress run
//.....without GUI
//node_module\.bin\cypress run --headed 
//....with GUI

//*To run single test under a folder*//
//node_module\.bin\cypress run --spec "cypress\integration\myexample\FirstTest.spec.js"

//*To run all the tests under particular directory using Chrome
//node_modules\.bin\cypress run --browser chrome