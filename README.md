# gitbook-plugin-code-highlighter
[GitBook plugin](https://plugins.gitbook.com/) to highlight specific 
lines in code blocks.


## Example
Here are a couple of highlighted [Python](https://www.fullstackpython.com/) 
code lines using a yellow background:
 
<img src="https://raw.githubusercontent.com/makaimc/gitbook-plugin-code-highlighter/master/docs/img/example-highlight.png">

The above example was generated from these source lines:

```
from os import environ
&&&from fabric.api import *
from fabric.context_managers import cd
&&&from fabric.contrib.files import sed
```



## Plugin Installation
1. Make sure you have [GitBook](https://github.com/GitbookIO/gitbook) 
   and the [gitbook-cli](https://github.com/GitbookIO/gitbook-cli) 
   installed.

1. The default **highlight** plugin that is built into GitBook must be 
   disabled, because it prevents other plugins from processing code 
   blocks. Here is an example `book.json` with the highlight plugin 
   disabled and this code-highlighter plugin enabled.

        {
            "author": "Matthew Makai",
            "cover": "cover.jpg",
            "gitbook": "2.x.x",
            "plugins": ["-highlight", "code-highlighter"],
            "title": "The Full Stack Python Guide to Deployments",
            "pdf": {
                "pageNumbers": true,
                "headerTemplate": " ",
                "footerTemplate": " "
            }
        }

1. Run `gitbook install` to pull down 
   [the latest plugin version from NPM](https://www.npmjs.com/package/gitbook-plugin-code-highlighter).


## How To Use After Installation
Within a block code prepend `&&&` to each line that should be highlighted.
Then add a `.code-line-highlight` property with a `background-color` to 
the `.css` files under the `styles/` directory. 

For example, your `styles/` directory can contain a `pdf.css` with this line:

    .code-line-highlight {background-color: #ffff00;}

That will highlight each selected line in yellow.

For more information on styling, refer to the 
[GitBook docs](https://help.gitbook.com/styling/book.html).


## More Information
The `&&&` mark and the CSS class can be made configurable, but I have not 
added that feature just yet. 
