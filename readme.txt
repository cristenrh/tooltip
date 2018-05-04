
Tooltips & Overlays
Usage
Tooltips and overlays can be used to reveal additional information or selection options within a section of a page while 
the main page is still clearly in view.

Basic Tooltip  – Basic tooltips are used in one of the following scenarios:

To communicate a message related to the user’s actions or attempted actions on the site
To provide additional information when a “more information” (i) icon is clicked
To provide additional information from hyperlink
The Basic Tooltip does not offer a next step to the user besides textual information and a close. To close, the user can 
either click the “X” or click anywhere on the screen.




Add small overlays of content, like those on the iPad, to any element for housing secondary information.

Make sure “ni.min.js” and “ni.min.css” references are included in your application or system as well “bootstrap.min.css” and 
bootstrap.min.js”.

Initialize Tooltip - Popover API on your application with the following call (you can do this when the page is loaded):

Make sure you always include the ‘class=”ni-tooltip”’

You should always use the following “data-“ attributes» ‘data-trigger’ ‘data-content’ ‘data-placement’

‘data-trigger’ » How popover is triggered - ‘ click ‘ ‘ hover ‘ focus ‘ manual ‘ (Use the focus trigger to dismiss popovers on the next click that the user makes.)

‘data-content’ » The content that is going to be displayed inside of the tooltip-popover

‘data-placement’ » How to position the popover - Options: » ‘ top ‘ bottom ‘ left ‘ right ‘ auto’.



