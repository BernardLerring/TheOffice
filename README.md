# TheOffice

## The Office Quiz

This is the main website for the a quiz based on the UK sitcom The Office. For fans of the show. 

Responsive images here

## User Experience

### User Stories

### First time user goals

- First time users should be able to easily navigate the site and view the content on any device.

- First time users should be able to easily start the quiz.

### Returning user goals:

- As a returning visitor I want to be able to find updated questions on a regular basis.

- I would want to be able to submit questions of my own to make the quiz interactive and like a community. 

### Frequent user goals:

- I want to see a variety of different difficulty levels so I can continue to challenge myself.

## Design

### Colour scheme:

The main colours used are

### Fonts/Typography:

The main font in use is Helvetica Bold as it is the font used in the original show title. The fall back font is Sans Serif should it not load. 

### Images:

The image is a screen grab from the episode of the show in which they partake in quiz night.

## Wireframes/Sketches



## Features

- Responsive on a variety of devices.

- Interactive elements to add to the user experience.

### Header/Navigation

- Logo/site title is in the top left of the screen. Pressing on it will link you back to the top of the homepage.

- To the right of the bar is the remaining navigation links. Home, Pictures and Join Us. These all link to seperate site pages. The page you are currently on will always be underscored. The page you hover over will change colour to indicate the potential for it to be pushed. I intentionally chose "Join Us" as it is a community based website and that sounds like a call to be part of it.

- The background colour, and the font colours chosen stand out well making it easy for the user to see where they are and what they are doing.

- The navigation makes it clear to the user what can be accessed on the site.

<img width="990" alt="Header" src="https://user-images.githubusercontent.com/92179145/143723157-b0dbf96a-7fb7-4454-9422-60ca79163d33.png">

### Hero image

- The image chosen is of 2 people exchanging a vegetable, to highlight the ethos of the community. 

- The overlay in the top left is opaque so as not to detract from the image, but gives a short descrption as to what the site is about.

- The animation used is designed to draw the user into the site.

<img width="990" alt="Hero" src="https://user-images.githubusercontent.com/92179145/143723224-abfcb65a-d3cf-4e72-bc9c-0623d34fa67a.png">

### Philosophy/Ethos

- This section gives more detail about what the site is about and what the community is used for.

- A different background colour is used here to highlight the change in section on the site page.

- A new font is used to differentiate the more detailed descriptions of what the A Lot To Swap community does from the other site headings.

- FontAwesome icons are used to give the user a clear and visual idea about each section.

<img width="990" alt="Philosophy" src="https://user-images.githubusercontent.com/92179145/143723342-961afffd-6579-4a96-92ce-d50470a4e12d.png">

### Locations

- This section gives details about upcoming SwapMeets and their locations. 

- Again, a different background is used to differentiate the change of section on the main site page.

- An opaque bar adds interest to this area, and contrasts against the lighter font colour used.

- The image underneath is of a selection of vegetables to link the user back to the site purpose.

<img width="990" alt="Locations" src="https://user-images.githubusercontent.com/92179145/143723402-3eac4e39-3319-498f-a132-498897380773.png">

### Footer

- This links the user to the 4 main social media accounts for the community.

- This allows them to confirm the legitimacy of the site, whilst also joining the social media followings.

- A different background colour is used again, with the FontAwesome icons changing colour when hovered over to indicate to the user that they can be pressed.

<img width="990" alt="Footer" src="https://user-images.githubusercontent.com/92179145/143723438-de19709e-6cd0-4aae-b450-daab2d6ac15c.png">

### Pictures

- A masonry style photo library adds to the organic feel of the site.

- It means photos of new meets can easily be added without the need for major change to the layout.

- The header/navigation and footer are the same as the other site pages giving the user continuity.

<img width="990" alt="Pictures" src="https://user-images.githubusercontent.com/92179145/143723482-4a928965-8607-4220-b3e4-3c50e5b72dca.png">

### Join Us

- The form indicates the 4 required fields for first and last names, location, email and preferred item to swap.

- The colours contrast to allow the user to easily navigate the form.

- The "Let's Get Swapping" button changes colour when hovered over, again indicating to the user that it can be pushed.

<img width="990" alt="Form" src="https://user-images.githubusercontent.com/92179145/143723555-5c9c9871-517a-49a7-b88b-d97f071996ba.png">

## Technology used

### Languages used

- HTML 5 

- CSS

### Frameworks, libraries and programs used:

- Google Fonts. Both main fonts used throughout the site are from the [Google Fonts](https://fonts.google.com/) repository.

- Font Awesome. All icons used through the site are imported from the directory at [FontAwesome](https://fontawesome.com/).

- [GitHub](https://github.com/) was used to host the repositories and for site deployment.

- [GitPod](https://gitpod.io/) was used for all writing of code.

- hover.css. Hover.css was used to change colour when hovering over the icons and nav titles.

- PhotoShop was used to alter the image used in the Locations section.

- [Pexels](https://www.pexels.com/) was used for all of the imagery on the site.

## Testing

- I confirmed that the site is responsive on a variety of device sizes through DevTools.

- I confirm that the colours and fonts all contrast and allow the user to easily navigate the site.

- I have confirmed that the form cannot be submitted without a valid email and without all fields being filled in, but the join button does not link to anywhere due to the site address not being live.

- I confirm that the site works in both Safari and Chrome.

## Validation

- I confirm that no errors were found when passing it through the W3C html validator.

- I confirm that no errors were found when passing through the Jigsaw CSS validator.

- I confirm that the site is easy to read and navigate by passing it through the Lighthouse tool on DevTools.

<img width="990" alt="Accessibility" src="https://user-images.githubusercontent.com/92179145/143723766-3fcd3b10-5716-42b8-85c2-267968783df7.png">

## Fixed Bugs 

- After running the W3C html validator, I converted the Philosophy and Locations headings to h2 from h1 to avoid issues in the CSS styling of the code. 

- I removed an ALotToSwap logo from the header bar as it was causing issues with image sizing in the Pictures section, as well as being pushed from the page altogether when the size of the screen was shrunk beyond a certain point.

- All media queries resolved size and flow issues on smaller devices.

## Unfixed Bugs

- The nav menu is displayed in the wrong order when the site is displayed on smaller screen sizes.

- The social media icons in the footer are not perfectly centred on smaller screens.

- One picture disappears from the pictures gallery at 470px and below.

## Deployment

The site was deployed to GitHub pages by following these steps:

1. In the GitHub repository, find the Settings tab.

2. From the Source section drop down menu select "Main".

3. Press "Refresh".

4. GitHub then creates the live link for the site.

It can also be found at [ALotToSwap](https://bernardlerring.github.io/ALotToSwap/).

## Credits

### Content

- All images on the site are taken from [Pexels](https://www.pexels.com/).

- All icons on the site are taken from [FontAwesome](https://fontawesome.com/).

- Both fonts used on the site are from [Google Fonts](https://fonts.google.com/).

### Media

- The code used for the Join Us form and the Social Media links was taken from the CI Love Running walkthrough project and modified to suit the style of the ALotToSwap site.

- The idea for the masonry style photo layout on the Pictures page and the hero image animation were inspired by the CI Love Running walkthrough project.

### Personal Development

- I am aware that h1 headings should not be used beyond the very first heading as brought up as a warning in my W3C validation of my index.html file. If I was to change them to h2 headings at this late stage, I would have to change all h2 headings to h3 and so on, along with all their associated CSS stylings.  

- It would appear that through reaching out on the Slack channel, that there was an issue with GitHub that caused a grafted git history to appear on my repository around the time I was editing some of my code and my ReadMe.MD. 

- In future, I will also use Balsamiq for my wireframes as I am aware that pencil drawings do not look as proffessional or as detailed as could be.

### Thanks

- Dave H from the Slack Community for helping me sort out my issues with GitHub.

- My Partner for being my UX companion for the site and for helping test it for me.

- My mentor for his feedback and encouragement throughout the project.



