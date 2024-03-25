# John Peden's technical test for Close

Thanks for checking out my submission!

I know, I know...I've been a bit cheeky here and used Create React App to flesh out what you've asked for. Let me explain what I've done

## My approach

I decided to use [Create React App](https://github.com/facebook/create-react-app) and spent around 10 minutes building out what you'd asked for in the following requirements:

1. Clicking an item selects/unselects it.
2. Multiple items can be selected at a time.
3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
4. Currently selected items should be visually highlighted.
5. Currently selected items' names should be shown at the top of the page.

I refactored the original component a little but it should be very much recognisable to the component in JSFiddle.

## How I addressed these requirements

When a user clicks on one of the tabs, the `handleClick()` method is triggered. This will append the item name to an array of selected items which is held in state. If the item name already exists in that array, it is removed.

I've used the item index as a key to avoid re-rendering, added a border to show the currently selected items (a11y could be improved) and then created a list of selected items from the object held in state which is to be displayed at the top of the screen.

Obviously, this allows multiple items to be selected.

### Code quality
Feel free to judge me harshly. I baulk at some of the rubbish I wrote 12 months ago when I see it. I always think there's room to improve your code but I try to balance perfectionism with the value it delivers to the business.

### Test coverage
Probably unnecessary but I've added them nonetheless.

## Running the app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

From here, you'll see a basic form allowing you to input the height, length, width and weight of your package. Once you've done that you can click 'Calculate' and see how the package will to be processed (or not if it's too big/heavy).

### `npm test`

Launches the test runner in the interactive watch mode.\

My decision to use react-scripts fed into this. I wanted to add solid test coverage and while unit testing would have probably sufficed, my past few projects have leant more heavily into the testing trophy or diamond.

While I wasn't a massive fan at first, I now see the value in writing these tests against blocks of UI and actual user interactions instead of hundreds of unit tests that are brittle and not representative of how a user actually interacts with your app.

### `npm run build`

You shouldn't need to worry about this...

### `npm run eject`

You shouldn't need to worry about this either...

## Learn More

You can find out more about me here: [https://www.linkedin.com/in/johnpeden/].

