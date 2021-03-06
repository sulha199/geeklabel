
# Drupal 7 Theme for GeekLabel

This theme is build based on basic javascript and css. The css is generated using css predecessor, it is compiled using SASS. Below is the preview:
![Site screenshot](https://github.com/sulha199/geeklabel/raw/master/screenshot.png)

## Getting Started
Please follow instruction on how to install theme in Drupal 7

## Regions
![region demonstration](https://github.com/sulha199/geeklabel/raw/master/regions.jpg)

## Slider
Slider is used to create a responsive content-slider in members and blog block. To use the slider just add the following classes
```
<div .. class="flex-slider flex-width-200 ...">
```
The class width 200 is to set the min-width to be 200px, hence if you want to set the min-width to 300 then write the class as follows:
```
<div .. class="flex-slider flex-width-300  ...">
```

By default, the slider will have previous/next button on the side of the content. However, if the screen's width is smaller than 768px, then the buttons will turn into bullet buttons below the content as the slider pagination.  

## Full Height Block
To create a block with full height, below are the steps:

 1. Create view 
 2. add css class "h-100vh" to the view
 

## GeekLabel Blocks
These blocks here is generated by View.
### Home Banner Block
The home banner uses view-site-logo as the classname. The image and text is generated from a basic page so it can be modified by modifying the related page.
```
<div .. class="view-site-logo ...">
```

### "Love Design..", "Know to Build" block 
These three block is generated from a view and have css class "view-what-we-do".
```
<div .. class="view-what-we-do ...">
```

### Services
It use "view-services" as the classname. 
```
<div .. class="view-services...">
```

### Clients
It use "view-clients" as the classname for the formatting and also have "flex-slider flex-width-300" class to apply the slider.
```
<div .. class="view-clients flex-slider flex-width-300...">
```
### Map
Map is using Google Map and is already using simple-silver theme. However, I've exceed the quota for my map and the map doesnt show correctly
### Contact Form
The contact form is modified by creating file template inside the theme.