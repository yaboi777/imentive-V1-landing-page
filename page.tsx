"use client";
import Link from 'next/link';
import './globals.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Image from 'next/image';


const HomePage = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Responsive Website</title>
        <link rel="stylesheet" href="/globals.css" />
      </Head>

      {/* Navbar and Banner Section */}
      <div className="banner">
        <header className="header">
          <Container>
            <Navbar bg="transparent" expand="lg">
              <Container>
                <Navbar.Brand href="/">
                  <Image
                    src="/imentiv.svg"
                    alt="Logo"
                    width={100}
                    height={30}
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto navbar">
                    <Nav.Link href="#home">Media Analytics</Nav.Link>
                    <Nav.Link href="#features">About imentiv</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#myaccount">My Account</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Container>
        </header>

        <main className="main-content">
          <Container>
            <Row className="text-center">
              <Col md={6} className="text-light">
                <h1>Welcome to the Home Page</h1>
                <p>This is the content of the home page.</p>
              </Col>
              <Col md={6} className="text-center">
                <Image 
                  src="/welcome.png" // Replace with your image path
                  alt="Welcome"
                  width={300}
                  height={300}
                />
              </Col>
            </Row>

            <Row className="button-container text-center">
              <Col xs={12} sm={4}>
                <Link href="#" className="btn-rounded small-btn">Trial</Link>
              </Col>
              <Col xs={12} sm={4}>
                <Link href="#" className="btn-rounded small-btn">How it Works</Link>
              </Col>
            </Row>
          </Container>
        </main>
      </div>

   {/* About Section */}
<div className='about'>
  <Container className='about-content'>
    <Row className="flex-column flex-md-row align-items-center">
      {/* Text Column */}
      <Col md={6} className='about-text'>
        <h1>Integrating Emotion AI</h1>
        <p>We optimize ads, videos, and content to engage your audience and maximize ROI.</p>
        <p>Get unbiased and authentic consumer insights using emotion analytics.</p>
        <Link href="#" className="btn-rounded small-btn">Learn More</Link>
      </Col>

      {/* Image Column */}
      <Col sm={6} className='about-image'>
        <Image 
          src="/about-bg.png"
          alt="Description of the image"
          width={300}
          height={300}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }} // Handle responsiveness
        />
      </Col>
    </Row>
  </Container>
</div>



      {/* Emotion Recognition Section */}
      <div className='emotion'>
        <div className='emotion-content'>
          <div className='emotion-text'>
            <h1>Discover Face Emotion Recognition</h1>
            <p>The system recognizes seven basic emotions: Happiness, Sadness, Surprise, Anger, Fear, Disgust, and Contempt. The application can identify what emotion a person is feeling by analyzing the video.</p>
          </div>
        </div>

        {/* Three Cards */}
        <div className='card-container'>
          <div className='card'>
            <Image 
              src="/artificial-intelligence.png"
              alt="AI"
              width={78}
              height={79}
            />
            <h2>Artificial Intelligence</h2>
            <p>AI face emotion recognition allows users to detect the facial expressions of characters. The application employs advanced machine learning techniques to recognize emotions with high accuracy.</p>
          </div>

          <div className='card'>
            <Image 
              src="/emotions.png"
              alt="Emotions"
              width={78}
              height={79}
            />
            <h2>Emotions</h2>
            <p>This advanced emotion recognition system detects characters' emotions like happiness, sadness, and neutrality. It can even differentiate among seven emotions like anger, fear, happiness, sadness, surprise, and neutral.</p>
          </div>

          <div className='card'>
            <Image 
              src="/report.png"
              alt="Report"
              width={78}
              height={79}
            />
            <h2>Report</h2>
            <p>This statistical report is a user-friendly interface that provides a timeline report for users, assessing the percentage of emotions displayed by the characters in the video.</p>
          </div>
        </div>
      </div>

     {/* Editor Section */}
<div className='editor'>
  <Container className='editor-content'>
    <Row className="flex-column flex-md-row align-items-center">
      {/* Text Column */}
      <Col md={6} className='editor-text'>
        <h1>Imentiv Insights for Video Ads</h1>
        <p>imentiv's emotion AI technology enhances the marketability of products and services by helping you analyze videos and understand the emotions of characters in the ad story.</p>
        <Link href="#" className="btn-rounded small-btn">Learn More</Link>
      </Col>

      {/* Image Column */}
      <Col md={6} className='editor-image'>
        <Image 
          src="/editor.png"
          alt="Description of the image"
          width={1141}
          height={389.34}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }} // Handle responsiveness
        />
      </Col>
    </Row>
  </Container>
</div>





{/* Media Analytics Section */}
<div className='analysis'>
  <Container className="analysis-content">
    <Row className="align-items-center">
      {/* Image Column */}
      <Col md={6} className="analysis-image order-2 order-md-1"> {/* Image on the left on larger screens */}
        <Image 
          src="/analysis.png"
          alt="Description of the image"
          width={1141}
          height={389.34}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }} // Handle responsiveness
        />
      </Col>

      {/* Text Column */}
      <Col md={6} className="analysis-text order-1 order-md-2"> {/* Text on the right on larger screens */}
        <h1 className='ap'>Media Analytics for Entertainment</h1>
        <p>Emotion recognition has significant applications in short video platforms such as TikTok, Reels, and Shorts. It can quickly identify the mood of the performers in the video, helping them focus on the content they want to deliver.</p>
        <Link href="#" className="btn-rounded small-btn">Learn More</Link>
      </Col>
    </Row>
  </Container>
</div>


{/* Editing Section */}
<div className='editing'>
  <Container className='editing-content'>
    <Row className="flex-column flex-md-row align-items-center">
      {/* Text Column */}
      <Col md={6} className='editing-text'>
        <h1>Easy to Use Editor</h1>
        <p>This software not only detects emotions but also allows you to edit emotions that have already been detected. For instance, if a character appears surprised and happy, you can edit the detected emotion of happiness to surprise.</p>
      </Col>

      {/* Image Column */}
      <Col md={6} className='editing-image'>
        <Image 
          src="/editing.png"
          alt="Description of the image"
          width={1141}
          height={389.34}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }} // Handle responsiveness
        />
      </Col>
    </Row>
  </Container>
</div>



{/* Data Section */}
<div className="data">
  <Container className="data-content">
    <Row className="align-items-center">
      {/* Image Column */}
      <Col md={6} className="data-image order-2 order-md-1"> {/* Image on the left on larger screens */}
        <Image 
          src="/data.png"
          alt="Description of the image"
          width={1141} 
          height={389.34}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }} // Handle responsiveness
        />
      </Col>

      {/* Text Column */}
      <Col md={6} className="data-text order-1 order-md-2"> {/* Text on the right on larger screens */}
        <h1>Clear Visualization of Data</h1>
        <p>Get a visual representation of the facial emotions expressed by characters in the video. Analyze the emotions for each character/total characters over time (in percentage) to determine how effectively those emotions engage viewers. You can observe emotions rise and drop, helping you refine content elements accordingly.</p>
      </Col>
    </Row>
  </Container>
</div>






      {/* Footer Section */}
      <footer className="footer">
        <Container>
          <Row className="footer-links">
            <Col xs={12} sm={8} md={9}>
              <Row>
                <Col xs={6} sm={3}>
                  <h4>Services</h4>
                  <ul>
                    <li><Link href="#">Media Analytics</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Pricing</Link></li>
                  </ul>
                </Col>
                <Col xs={6} sm={3}>
                  <h4>Contact</h4>
                  <ul>
                    <li><Link href="#">FAQ</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Support</Link></li>
                  </ul>
                </Col>
                <Col xs={6} sm={3}>
                  <h4>Company</h4>
                  <ul>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">Terms of Service</Link></li>
                    <li><Link href="#">Careers</Link></li>
                  </ul>
                </Col>
                <Col xs={6} sm={3}>
                  <h4>Follow Us</h4>
                  <ul>
                    <li><Link href="#">Facebook</Link></li>
                    <li><Link href="#">Twitter</Link></li>
                    <li><Link href="#">LinkedIn</Link></li>
                  </ul>
                </Col>
              </Row>
            </Col>

            {/* Newsletter Section on the far right */}
            <Col xs={12} sm={4} md={3} className="text-center">
              <div className="newsletter">
                <h4>Subscribe to our Newsletter</h4>
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                  <Link href="#" className="btn-rounded small-btn">Signup Newsletter</Link>
                </form>
              </div>
            </Col>
          </Row>

          {/* Line above the copyright section */}
          <hr className="footer-divider" />

          <Row className="footer-bottom">
            <Col className="text-center">
              <p>© 2024 Imentiv. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
