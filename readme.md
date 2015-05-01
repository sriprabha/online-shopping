# Webpage Modifications (Assuming the page is targeted towards modern browsers (IE8+, Chrome, Firefox))

## Test platform
* OS: Ubuntu 14.04 LTS
* Browsers: Chrome (Version 40.0.2214.91), Firefox (35.0)
* Responsiveness test on: http://mattkersley.com/responsive/

## Frameworks used: 
* AngularJS, Angular UI Bootstrap components and Bootstrap CSS framework.
* AngularJS provided the support for a templating tool. 
* Bootstrap CSS framework provided the support to make the webpage responsive and view easily on a mobile device, by laying out the webpage in the form of a grid.
* Node JS to serve the data


## Optimizations/Modifications:
1. Moved the script tags to the bottom of the body section 
2. Used minified CSS files to reduce the page load time
3. A bootstrap styled loading indicator is added as a separate angular directive, that is displayed when the page is being rendered.
4. The page is initially rendered with 24 items. A show more link is added at the bottom of the page to load more data (12 more items). This helps to reduce the initial page load time.
4. A custom css class is added to override bootstrap css for anchor tags.
5. The text on the page is center aligned.
6. A bootstrap styled x icon is added to each image that removes it from the view when clicked.
7. A bootstrap styled overlay from angular-ui-bootstrap components is used to display the description on hover.
8. Replaced the div for page titles with header tags. The header tags represent the headings of a page semantically well. They are also read by a screen reader or any Assistive Technology easily.
9. Set the width and height for each image to be 100% to occupy the available column width and to not display a scroll bar.
10. Added a product directive to load the template for each product.
11. Used Chrome's PageSpeed Analyser to analyze load time and results of the changes.
12. Screenshots are added under the screenshot folder
The app is configured to run with npm. Running npm start in the online-shopping directory should load the app.

