# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

The goal of this project is to use HTML, CSS, JS, and jQuery to build a mobile focused portfolio to showcase projects/websites I've built (or will build). The final product will be simple, aesthetically pleasing, intuitive, and adaptable to any screen size. I intend to display all content ona single page layout feature some minimal animation and a image slider/carousel to display projects in at least one of the media query sizes. 

## Inspiration

- [Nicolas Desle](https://www.nicolasdesle.be/)
- [Brian Nathan](http://www.briannathanhartwell.com/contact)
- [Studio Lenzing](https://www.studiolenzing.com/)
- [works.pm](https://works.pm/) 

## Google Sheet

- [Goggle Contact Sheet](https://docs.google.com/spreadsheets/d/1HYuagmj-TDEW8Wkjps2L_PZiPThWU0pAnnV9GLcS2p4/edit?usp=sharing)

## Wireframes

- [Mobile](https://github.com/mpenajoia/PortfolioProject1/blob/main/Preproduction/MSPORTmobile.JPG)
- [Tablet](https://github.com/mpenajoia/PortfolioProject1/blob/main/Preproduction/MSPORTtablet.JPG)
- [Desktop](https://github.com/mpenajoia/PortfolioProject1/blob/main/Preproduction/MSPORTdesk.JPG)

## Time/Priority Matrix 

- [Matrix](https://github.com/mpenajoia/PortfolioProject1/blob/main/Preproduction/MSMatrix.JPG)


## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Layout/Structure | H | 3hr | 4.5hr |
| Responsive-ness | H | 3hr | 6hr |
| Contact Form | H | 1hr | 3hr |  
| Social Icons | L | 1.5hr|  .5hr | 
| Aesthetics | H | 3hr | 1hr |
|jQuery animation on Arrow | H | 3hr | 3hr |
| Total | H | 15.5hrs| 18hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Swipeable slider on mobile | M | 3hr | -hr |
| interactive google map in contact  | L | 2hr | 1hr |
| Parallax background | L | 4hr | -hr |
| Listing actual work instead of placeholders | M | 4hr | .5hr |
| Total | H | 20hrs| 1.5hrs |

## Additional Libraries
- [Iconfinder](http://iconfinder.com) for all iconography

- [Google API](https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6) Contact form

## Code Snippet

```
/* had to declare this variable out side the function's scope for this to work. Thanks to assistance from Jackson*/
let topArrowVis = false;
/* function that is evoked when the window is scrolled */
$win.on('scroll', function(){
    /* declaration of the 'page height' */
    const $top = $win.scrollTop();
    /* conditional to determine first appearance of up arrow after 
    user has initially begun scrolling down the page */
    if(!topArrowVis && $top >= 100){
        /* function to animate a fade in for the up arrow to appear */
        $upArrow.fadeTo(600, 0.1, function(){});
        /* change this variable to prepare for next conditional */
        topArrowVis = true;
    }
    /* second conditional to make the up arrow disappear once user has reached the top of page again */
    if(topArrowVis && $top < 100){
        /* function to fade out the arrow for it to disappear */
        $upArrow.fadeTo(600, 0, function(){});
        /* change this variable to prepare to start the conditional above if need be */
        topArrowVis = false;
    }
    /* conditional to adjust the up arrow position when it reaches the footer as to not go behind it and get lost */
    if(topArrowVis && $top >= 1850){
        /* function that pushes the up arrow higher when it reaches the footer */
        $upArrow.css('bottom', '130px')
    }else{
        /* function to return the up arrow to it's original position once clear of the footer */
        $upArrow.css('bottom', '90px')
    }

});
```

## Issues and Resolutions
The biggest head scratcher was due to the 402 error from the APISPREADSHEETS.com approach to tieing a Google Sheet to the contact form submissions. Resolution was to wait 24 hours..

## Resources

- [Initial taste for the use of scrollTop](https://www.youtube.com/watch?v=nhHqiGCG10E)

- [Class provided guide for contact form](https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6)

- [Instructions for Google Maps implementation](https://www.youtube.com/watch?v=9CY0V0JAgNU)

- [Guide for one example of an image slider (in hind sight, bootstrap would have likely been much easier)](https://www.youtube.com/watch?v=J2HLW4A40X8)

- [W3 Schools](http://www.w3schools.com)

- [CSS Tricks Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- [CSS Tricks Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

- [CSS Animation for text reveal](https://www.sitepoint.com/css-typewriter-effect/?utm_source=tldrnewsletter)
