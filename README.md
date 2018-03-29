# Drupal 7 Theme for Open Charity

This theme is build based on bootstrap and using SASS as the preprocessor. 

## Getting Started and Installation
Please follow instruction on how to install theme in Drupal 7

## Regions
The regions in this theme inherits the region from bootsrap theme. The regions are :
1. Navigation : top right of the page
2. Header : before the content, use the theme color as its background
3. Highlight : Below the header, use the silver color as its background
4. Main : Main content, white background
5. Primary : left sidebar, white background
6. Secondary : right sidebar, , white background
7. Footer : silver color as the background

## Reusable html class
### Div with sreen height
it utilize class h-100vh and will automatically adds scroller button. It can be applied to the whole View to make it have the screein height. Or in a row inside a view.
#### h-100vh in Whole View
We have created our own custom view template. Just add the h-100vh into the css class of a view. Then the structure will be :
```
<div .. class="view ... h-100vh ...">
    <div .. class="view-container">
          View content and header goes here
```
#### h-100vh in Row inside a view
We have created our own custom view template. Just add the h-100vh into the format -> settings --> row class. Then the structure will be :
```
<div .. class="views-row ... h-100vh ...">
    <div .. class="inner-container">
          Row content goes here
```

### Slider
Slider is used to create a responsive content-slider in Clients. To use the slider just add the following classes
```
<div .. class="flex-slider flex-width-200 ...">
```
The class width 200 is to set the min-width to be 200px, hence if you want to set the min-width to 300 then write the class as follows
```
<div .. class="flex-slider flex-width-300  ...">
```
By default, the slider will have bullet button below the content, you can change the button to become arrow and put it on the side by add another classname so it becomes
```
<div .. class="flex-slider flex-width-300 flex-sidebutton ...">
```
