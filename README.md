# OCTANET-MAY
This task contains creating a landing page of my own quiz website with the help of HTML,CSS and Javascript.
### Enhanced Theory of the Web Page

The provided web page is a well-structured landing page designed to engage users with sports-themed quizzes. The main objective is to attract sports enthusiasts, encouraging them to participate in quizzes and sign up for the platform. Below is an enhanced theoretical description, focusing on the key elements and underlying principles of the web page.

#### Purpose and Audience

**Purpose**:
The web page aims to serve as an entry point for users interested in sports quizzes. It provides an engaging interface where users can explore different sports categories, participate in quizzes, and sign up for more interactive content. The goal is to create a community of sports trivia enthusiasts who regularly engage with the content.

**Target Audience**:
- Sports enthusiasts
- Quiz aficionados
- General users looking for engaging and educational content related to sports

#### Structural Overview

1. **Header Section**:
    - **Metadata**: Ensures proper rendering and responsiveness across different devices and browsers.
    - **External Resources**: Links to stylesheets, icons, and manifest files necessary for the visual and functional aspects of the page.

2. **Body Section**:
    - **Navigation**: 
        - Top navigation bar with a menu button to open a side navigation bar, enhancing accessibility on mobile devices.
        - Contains links to key sections like Home, About, and Sign Up.

    - **Main Content**: 
        - **Welcome Section**: Features a motivational quote and a call-to-action button, encouraging users to explore more.
        - **Sports Categories**: Displays various sports (Cricket, Football, Hockey) with images and descriptive tooltips, enticing users to engage with the quizzes.
        - **Sign-Up Section**: Includes a user-friendly form for registration, with input fields for name, email, and password. This section also provides rules and additional information through scrolling marquees for enhanced engagement.

    - **Footer**: Contains a simple footer with creator credits and pagination for easy navigation across different content sections or pages.

#### Functional Components

1. **HTML Structure**:
    - **Semantic Tags**: Proper use of HTML5 semantic tags (`<nav>`, `<section>`, `<footer>`) for better content organization and accessibility.
    - **Forms and Inputs**: Clearly marked-up forms for user interaction, ensuring a seamless sign-up process.

2. **CSS Styling**:
    - **External Stylesheet**: Linked CSS file (`index.css`) for styling, promoting maintainability and separation of concerns.
    - **Class and ID Selectors**: Effective use of classes and IDs to style specific elements, ensuring a consistent and visually appealing layout.

3. **JavaScript Interactivity**:
    - **Responsive Navigation**: JavaScript functions (`openNavbar()`, `closeNavbar()`) to manage the side navigation bar's width, providing a responsive design that adapts to different screen sizes.

#### Theoretical Design Principles

1. **User Engagement**:
    - **Visual Appeal**: The use of high-quality sports images and motivational quotes creates an engaging visual experience.
    - **Interactive Elements**: Tooltips and quizzes enhance user interaction, keeping users engaged and interested in the content.

2. **Responsive Design**:
    - The side navigation bar ensures that the website is accessible and user-friendly on both desktop and mobile devices, following responsive design principles.

3. **Usability and Accessibility**:
    - **Navigation**: Clear and intuitive navigation options make it easy for users to find and access different sections of the website.
    - **Form Design**: Simple and straightforward sign-up forms improve usability, reducing friction for new users.

4. **Content Organization**:
    - **Logical Sections**: Content is divided into well-defined sections (Welcome, Sports Categories, Sign-Up), making it easy for users to locate information.
    - **Informative Tooltips**: Provide additional context without cluttering the interface, enhancing the overall user experience.

5. **Engagement and Retention**:
    - **Call-to-Action**: The 'Explore More' button and motivational content encourage users to delve deeper into the website.
    - **Community Building**: By promoting quiz participation and sign-ups, the site aims to build a community of like-minded sports enthusiasts.

### Human-Written Script

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/x-icon" href="favicon-32x32.png">
    <link rel="manifest" href="/site.webmanifest">
    <title>Landing Page</title>
</head>
<body>
    <nav>
        <div class="heading">Welcome!</div>
        <span class="sideMenuButton" onclick="openNavbar()">&#9776;</span>
        <div class="navbar">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
        </div>
    </nav>

    <div class="sideNavigationBar" id="sideNavigationBar">
        <a href="#" class="closeButton" onclick="closeNavbar()">&#x274C;</a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Sign Up</a>
    </div>

    <div class="line" id="Home">
        <div class="side1">
            <h1>The only way to pass the test is to attempt the test.</h1>
            <h2 style="font-family: Arial, Helvetica, sans-serif; font-size: 25px; text-align: end;">-Mario Morgan</h2>
            <button><a href="https://www.geeksforgeeks.org/">Explore More</a></button>
        </div>
        <div class="side2">
            <img src="https://th.bing.com/th/id/OIP.NNxyNXsM5AK3IWN8N7qsNAHaEK?rs=1&pid=ImgDetMain" alt="Main Image">
        </div>
    </div>

    <section class="about" id="My Projects">
        <div class="content">
            <div class="title"><span>Sports</span></div>
            <div class="boxes">
                <div class="box">
                    <div class="topic">
                        <a href="#" target="_blank">
                            <div class="pic1">
                                <img src="https://cdn.wisden.com/wp-content/uploads/2020/05/GettyImages-143951451-e1590474501805-980x530.jpg" height="220px" width="225px" alt="Cricket Image">
                                <div class="info1">
                                    Cricket
                                    <span class="tooltiptext">Quiz based on the <b>Hockey events</b> starting from <u style="color:white;">1973's.</u></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="box">
                    <div class="topic">
                        <a href="#" target="_blank">
                            <img src="https://www.foottheball.com/wp-content/uploads/2017/11/ronaldo-messi.jpg" height="220px" width="225px" alt="Football Image">
                            <div class="info2">
                                Football
                                <span class="tooltiptext">Quiz based on the <b>Football events</b> starting from <u style="color:white;">1980's.</u></span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="box">
                    <div class="topic">
                        <a href="#" target="_blank">
                            <img src="https://th.bing.com/th/id/OIP.3Ak9ecp4kcqxvNDcvSNcnwAAAA?rs=1&pid=ImgDetMain" height="220px" width="225px" alt="Hockey Image">
                            <div class="info3">
                                Hockey
                                <span class="tooltiptext">Quiz based on the <b>Hockey events</b> starting from <u style="color:white;">2000's.</u></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <div class="content">
            <div class="title"><span>Sign Up</span></div>
            <div class="contactMenu">
                <div class="input1">
                    <div class="label1">Your Name</div>
                    <div class="input2"><input type="text" placeholder="Enter your Name here"></div>
                    <div class="label1"><label>Your Email</label></div>
                    <div class="input2"><input type="text" placeholder="Enter your Email here"></div>
                    <div class="label1"><label>Your Password</label></div>
                    <div class="input2"><input type="password" placeholder="Enter your Password here"></div>
                    <div class="button"><button>Sign Up</button></div>
                </div>
                <div class="input3">
                    <div class="rightside1">
                        <div class="title1"><span>Rules and Regulations:</span></div>
