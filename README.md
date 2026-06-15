# Azure Cloud Resume Challenge

This project is my implementation of the Cloud Resume Challenge using Microsoft Azure.  
It is a cloud-hosted personal resume website built with Azure Static Web Apps, GitHub Actions, Azure Functions, and Azure Table Storage.

## Live Website

Visit the live site here:  
www.atranresume.cloud

## Project Overview

The goal of this project was to build a professional resume website while demonstrating cloud, serverless, storage, CI/CD, and DNS skills.

## Architecture

User Browser  
→ Custom Domain  
→ Azure Static Web Apps  
→ JavaScript fetch request  
→ Azure Function API  
→ Azure Table Storage  
→ Visitor count returned to website

## Technologies Used

- HTML
- CSS
- JavaScript
- GitHub
- GitHub Actions
- Azure Static Web Apps
- Azure Functions
- Azure Table Storage
- Azure Storage Account
- Custom DNS (Porkbun) 

## Features

- Responsive online resume website
- Custom domain connected to Azure
- HTTPS enabled
- Serverless visitor counter
- Visitor count stored in Azure Table Storage
- CI/CD deployment through GitHub Actions
- Storage connection string protected with Azure environment variables

## Visitor Counter Flow

When someone visits the website, JavaScript calls the backend API:

```javascript
fetch('/api/visitorCounter')
