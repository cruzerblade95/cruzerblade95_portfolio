# 🚀 Personal Portfolio Website

<p align="center">
  <strong>A modern personal portfolio website built with React.js and deployed on AWS EC2.</strong>
</p>

<p align="center">
  <a href="https://mybc.tech">🌐 Live Website</a>
  •
  <a href="https://github.com/cruzerblade95/cruzerblade95_portfolio">💻 Source Code</a>
</p>

---

## 📌 About the Project

This is my personal developer portfolio website, created to showcase my professional experience, technical skills, software engineering projects, and career journey.

The project demonstrates my ability to build a modern frontend application using React.js and independently deploy and manage a production website on AWS infrastructure.

Rather than using a managed hosting platform, I configured and deployed the application on my own AWS EC2 Linux server using HestiaCP, giving me hands-on experience with cloud infrastructure, Linux server administration, DNS configuration, SSL certificates, web server management, and production deployment.

---

## ✨ Features

* Responsive personal portfolio website
* Professional profile and developer introduction
* Technical skills showcase
* Project portfolio
* Work experience and career background
* Education and certifications
* Contact and social media links
* Responsive layout for desktop and mobile devices
* Production deployment on AWS EC2
* HTTPS-enabled custom domain
* Linux server administration using HestiaCP

---

## 🛠️ Technology Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Development Tools

* Git
* GitHub
* npm
* Node.js

### Cloud & Infrastructure

* Amazon Web Services (AWS)
* Amazon EC2
* Ubuntu Linux
* Elastic IP
* HestiaCP
* Nginx
* Apache

### Deployment & Server Administration

* Linux server administration
* DNS configuration
* Custom domain configuration
* SSL/TLS with Let's Encrypt
* HTTPS
* Web server configuration
* File permissions and ownership management

---

## 🏗️ Deployment Architecture

```text
                         Internet
                            │
                            ▼
                       mybc.tech
                            │
                            ▼
                       DNS Records
                            │
                            ▼
                     AWS Elastic IP
                            │
                            ▼
                   Amazon EC2 Instance
                     Ubuntu Linux
                            │
                            ▼
                         HestiaCP
                            │
                            ▼
                    Nginx / Apache
                            │
                            ▼
                    React Production Build
                            │
                            ▼
                       Portfolio Website
```

---

## 🚀 Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/cruzerblade95/cruzerblade95_portfolio.git
```

### 2. Navigate to the Project

```bash
cd cruzerblade95_portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

---

## 📦 Production Build

To create an optimized production build:

```bash
npm run build
```

The production files are generated inside:

```text
build/
```

These optimized files can then be served using a production web server such as Nginx or Apache.

---

## ☁️ AWS EC2 Deployment

The website is deployed on an AWS EC2 Linux server.

### Deployment Process

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
AWS EC2 Ubuntu Server
    │
    ▼
Clone / Pull Repository
    │
    ▼
Install Dependencies
    │
    ▼
npm run build
    │
    ▼
React build/
    │
    ▼
HestiaCP public_html
    │
    ▼
Live Website
```

### Example Deployment Workflow

```bash
git pull origin master

npm install

npm run build

rm -rf /home/cruzerblade95/web/mybc.tech/public_html/*

cp -r build/* \
/home/cruzerblade95/web/mybc.tech/public_html/
```

The generated React production files are served from the HestiaCP web directory:

```text
/home/cruzerblade95/web/mybc.tech/public_html/
```

---

## 🔐 Infrastructure & Server Configuration

The production environment includes:

* AWS EC2 compute instance
* Ubuntu Linux
* Elastic IP address
* HestiaCP hosting control panel
* Nginx and Apache web services
* DNS configuration for custom domain
* Let's Encrypt SSL certificate
* HTTPS access
* Linux file permissions and ownership
* Server-side resource and memory management

This project gave me practical experience managing a cloud-hosted application from development through production deployment.

---

## 🧠 Engineering Challenges

### 1. Deploying a React Application on a Self-Managed Server

Instead of relying on platforms such as managed frontend hosting, I configured the application to run on my own AWS EC2 server.

This required understanding:

* React production builds
* Node.js and npm
* Linux file systems
* Web server directories
* File ownership and permissions
* Static frontend deployment

---

### 2. Managing Limited Server Resources

Building a React application on a small EC2 instance required monitoring available memory and configuring swap space to prevent the Node.js build process from exhausting system memory.

This provided practical experience with:

* Linux memory management
* Swap configuration
* Process monitoring
* Resource optimization

---

### 3. DNS and HTTPS Configuration

The custom domain was connected to the EC2 instance through DNS configuration.

The production setup includes:

```text
mybc.tech
    │
    ▼
DNS A Record
    │
    ▼
AWS Elastic IP
    │
    ▼
EC2 Instance
```

HTTPS was configured using a Let's Encrypt SSL certificate.

---

## 📚 What This Project Demonstrates

This project demonstrates my ability to work across the complete application lifecycle:

```text
Frontend Development
        │
        ▼
React.js Application
        │
        ▼
Version Control
        │
        ▼
Git & GitHub
        │
        ▼
Cloud Infrastructure
        │
        ▼
AWS EC2
        │
        ▼
Linux Administration
        │
        ▼
Web Server Configuration
        │
        ▼
DNS & SSL
        │
        ▼
Production Deployment
```

---

## 🎯 Future Improvements

Planned improvements include:

* [ ] GitHub Actions CI/CD pipeline
* [ ] Automated deployment to AWS EC2
* [ ] Docker containerization
* [ ] AWS CloudFront CDN
* [ ] Amazon S3 for static assets
* [ ] Automated testing
* [ ] Performance monitoring
* [ ] Infrastructure monitoring
* [ ] Automated backup strategy
* [ ] Improved deployment rollback process

---

## 👨‍💻 About Me

I am a Software Engineer with experience building software solutions across web, mobile, blockchain, and cloud environments.

My technical experience includes:

* React.js
* Flutter
* Laravel
* PHP
* REST APIs
* MySQL
* Blockchain development
* AWS
* Linux server administration
* Git and GitHub

I enjoy building complete solutions — from developing the application to deploying and managing it in a production environment.

---

## 📫 Connect With Me

* 🌐 Portfolio: https://mybc.tech
* 💻 GitHub: https://github.com/cruzerblade95

---

## 📄 License

This project is for personal portfolio and educational purposes.
