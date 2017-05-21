// Basic literal string creation
var mytemplateString = `This is a pretty little template string.`;

// Multiline strings
mytemplateString = `In ES5 this is
 not legal.`;

// Interpolate variable bindings
var name = "Bob", time = "today";
var greeting = `Hello ${name}, how are you ${time}?`;

// Unescaped template strings
var unescaped = String.raw`In ES5 "\n" is a line-feed.`;

// Construct an HTTP request prefix is used to interpret the replacements and construction
var a = 1;
var b = 2;
var foo = 2;
var bar = 2;
var credentials = 'My credentials';

var myGET =
    `GET: http://foo.org/bar?a=${a}&b=${b}
    Content-Type: application/json
    X-Credentials: ${credentials}
    { "foo": ${foo},
      "bar": ${bar}}`;
