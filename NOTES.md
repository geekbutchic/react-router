* Create a new github repo called reactrouter, clone the repo to your computer and add the link to populi. ✅

* Use create-react-app in the local project root folder (AKA the project root) to initialize the React project. Run npm start to see the default create-react-app page on localhost:3000. ✅


* Run npm i react-router-dom@6 in the project root. ✅

* Create a new folder in project root called /pages.
* In /pages, create two new files. ✅
    * /pages/Home.js
    * /pages/Blogs.js
* In these two files, create and default export a new react component for each file.
    * export default Home () {
        return (
            <h1>Home Page</h1>
        )
    }
    * export default Blogs () {
        return (
            <h1>Blogs Page</h1>
        )
    }
* In index.js, import BrowserRouter from react-router and add it to the React root render statement. ✅
    * https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app ✅
* Create a new folder in the project root called /components. ✅
* Create a new file called Navbar.js in /components. Then, create and default export a new react component inside called Navbar. The html element returned should be the <nav> element.
    * export default Navbar () {
        return (
            <nav>Nav</nav>
        )
    }
* Import and add the Home component and the Blogs component as new routes in App.js using the <Routes> and <Route> components from react-router.
    * https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app
    * The "/" path should render the <Home/> component
    * The "/blogs" path should render the <Blogs/> component
    * If you set this up correctly, you should be able to navigate to localhost:3000 to see the Home Page and localhost:3000/blogs to see the Blogs Page. ✅


* In /components/Navbar.js, import the <Link> component from react-router. Add two <Link>'s in Navbar, one to "/" titled "Home" and one to "/blogs" titled "Blogs". ✅

* Import the Navbar component into /pages/Home.js and /pages/Blogs.js and add above the <h1> tags. ✅


* If everything has been setup correctly, you should be able to click the two links in the navbar to switch between the Home Page and the Blogs Page in the browser. ✅