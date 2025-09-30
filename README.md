# serverless-blog-post
# Student Management System - Serverless Web Application

A complete serverless web application for managing student data, built with AWS Serverless technologies.

## 🚀 Live Demo
[View Live Website](http://bucket-for-hosting-serverless-blog.s3-website-us-east-1.amazonaws.com)

## 📋 Project Overview

This project demonstrates a full-stack serverless application that allows users to:
- **Add new students** with details (ID, Name, Class, Age)
- **View all students** in a tabular format
- **Store data persistently** in DynamoDB
- **Host static website** on S3 with serverless backend


### Components:
- **Frontend**: HTML, CSS, JavaScript hosted on Amazon S3
- **Backend**: AWS Lambda functions (Python)
- **Database**: Amazon DynamoDB for data storage
- **API**: Amazon API Gateway for RESTful endpoints
- **Security**: IAM roles and policies

## 🛠️ Technologies Used

- **AWS S3** - Static website hosting
- **AWS Lambda** - Serverless compute
- **Amazon DynamoDB** - NoSQL database
- **AWS API Gateway** - REST API management
- **Python** - Backend logic
- **JavaScript/jQuery** - Frontend interactivity
- **HTML/CSS** - User interface

## 📁 Project Structure

student-management-system/
|-- lambda-functions/
|   |-- getStudents.py
|   |-- insertStudentData.py
|-- frontend/
|   |-- index.html
|   |-- scripts.js
|-- infrastructure/
|   |-- s3-bucket-policy.json
|-- README.md

🎯 Features

✅ Add new student records

✅ View all students in table format

✅ Responsive web design

✅ Serverless architecture

✅ Real-time data persistence

2. Create Lambda Functions
Create two Lambda functions in AWS Console

Upload the Python code files

Set up IAM roles with DynamoDB access

3. Set Up API Gateway
Create new REST API

Create resources:

/students (GET method) → getStudents Lambda

/save (POST method) → insertStudentData Lambda

Enable CORS for both endpoints

Deploy API to a stage (e.g., 'prod')

4. Configure S3 Bucket
Create S3 bucket

Enable static website hosting

Apply bucket policy

Upload index.html and scripts.js

5. Update Configuration
Replace API endpoint URL in scripts.js

Test the application

Notes:
Make sure all services are in the same AWS region

Update CORS settings if needed

Test both GET and POST functionality


This gives you a complete, ready-to-deploy serverless student management system!
