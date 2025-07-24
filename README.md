# crypto-price-tracker

Django Crypto Tracker is a responsive web application that displays real-time cryptocurrency prices by integrating with the CoinGecko API. Built using the Django framework, this project demonstrates how backend and frontend technologies can work together to build a modern, dynamic crypto monitoring dashboard.

**The application uses Django’s MVT architecture:**

Models manage and store coin data using Django ORM.

Views handle the logic to fetch and update coin prices via RESTful API calls.

Templates render clean UI components with a touch of interactivity.

AJAX is used to fetch updated crypto prices without reloading the page, ensuring a smooth and real-time user experience. The frontend is enhanced with a parallax scrolling effect, giving the app a more modern and engaging feel.

**Key Features**

Real-time price tracking of cryptocurrencies

RESTful API integration using CoinGecko

AJAX for dynamic updates

Django Admin Panel for easy database management

Parallax effect for improved UI/UX

Lightweight and scalable project structure

**Tech Stack**

Backend: Python, Django

Frontend: HTML, CSS (Parallax), JavaScript (AJAX)

Database: SQLite

API: CoinGecko (JSON responses)

**How to Run**

git clone https://github.com/your-username/django-crypto-tracker.git
cd django-crypto-tracker
pip install -r requirements.txt
python manage.py runserver

Visit http://localhost:8000/ to see the app in action!

**Project Goals**

This project is ideal for anyone looking to learn how Django handles API integration, AJAX-based updates, and full-stack development.

