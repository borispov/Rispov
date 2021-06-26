---
layout: post
title: "Automate Mundane Tasks With JavaScript"
date: "2020-09-04"
categories: 
  - "programming"
---

We will learn the main tools and techniques for automating tasks with JavaScript. A tool I often use for various missions is: _Puppeteer_, puppeteer is quite a heavy load library, without proper configuration, it loads Chromium instances which may at some point burden your memory. Indeed, for some tasks, we prefer Cheerio library which is much lighter than puppeteer. Many more tools come in handy in dealing with the automation of mundane tasks with JavaScript, I'll introduce the tools I have used in some of my personal projects, as well as some tools that are out there for you to test.

JavaScript is not designed for automation efficiency tasks, however, since it is primarily a language for the browser, it's easy to automate DOM related stuff. That being said, Python, is much more capable of automating, you may have heard of the famous book [automate the boring stuff with python](https://automatetheboringstuff.com/). I have used Python for stuff like cracking a pdf's code, saving the cracked file in the filesystem, and sending over email with notification for example. I am not a python programmer, and still, it was much easier to accomplish with Python. Additionally, there are server-side tasks that you might need to automate and you'll find that it's much easier to write a bash script instead of javascript, which I use plenty of on the backend side.

_Important Note_: _this article is not about testing, you won't encounter tips for using Jest, Mocha, etc**.**_

First, let's quickly go over some tasks that you might want to automate:

1. Web Scraping
2. Send Emails
3. API Requests
4. Saving/Deleting Files

I will elaborate a little bit on some of those topics now.

### **Puppeteer** - Web Scraping

Let's overview a use case to see how such tool may come in handy.

Last year, my wife was searching for a job after maternity leave in the field of Social Work, it was a tough period right before the Jewish holidays, so not many relevant jobs were displayed on the internet. Every day, my wife had to filter tens of irrelevant jobs that were showing up on each search, rendering her frustrated, and .. jobless. So I wrote a little program that automates this task flow.

All it does is:

- Fire up a browser instance and a relevant URL
- Perform a search using command-line arguments for a search query
- Loop over the results filtering irrelevant jobs by predetermined (hardcoded) keywords
- Open each of the filtered job posts, capturing a snapshot -
- Merge all snapshots into a single pdf file
- Sending it to my wife's email.

It's accessible through [Github](https://github.com/borispov/local-jobscraper). Some of the queries and keywords and in Hebrew, so ignore that. It targets a specific use case, a specific URL, it's not meant to be reusable or used for other purposes, this is why I was able to code it really fast and employ it's utility by automating the task that frustrated my wife. I mean, wasn't that the reason you learnt to code?

## API Requests

With today's innovations and the era of serverless technologies and lambdas, there is a well-known issue that you may be familiar with by using Heroku's free hosting services. Your app goes into a sleep mode after 30 minutes of no traffic. One trick is to send a GET request every once in a while. You can easily accomplish this with javascript in a couple of methods:

1. write a GET request script and run the script manually each time
2. write a GET request within a setInterval method, only works when the script is running
3. configure a cron job to run the script

The first method is unacceptable of course, unless combined with a cron job, which is something I have used for a different purpose. For example, I had a cron job set to every 45 minutes to run a script that would do a whole job of scraping data and saving it into a database. There are different ways to achieve this depending on your OS, there is crontab, on centOS I used systemd because it would start over even the server restarted. You can research this topic to fit your needs.

#### Many more

You may find many other use cases, as another example, at my work my employees sometimes ask me for a 3/6-month period pay slip, initially I was doing manually, I got lazy (obviously) and dedicated 60 days to write a script that automates 1 minute work. JOKING. It was real quick, a small script that does not use any external libraries at all, it was just a function that took few arguments like time period and employee's ID, and then it would download a .zip file for each month, it does the same work I manually do, just by running a script, a function. It's useless for you, it's useless for almost everybody, except it's really useful for me.

## Summary

What I want you to take away with this blog post is a simple thing that I was taught early on, it just took really long time to "click". You know what? one day you'll make a seemingly useless piece of software, that is just useful for you, only to find out that it solves a problem other people have too. For example, I made a small app that allows my employees to fill timesheets that are saved in a server as a csv, then I can pull those timesheets easily on my 'admin' dashboard and insert those timesheets into a dedicated crappy software that unfortunately, doesn't allow direct API-integration. Anyways, while my other colleagues are struggling with manually passing CSV sheets to employees, employees that loath those sheets, because each employee has to fill between 1-4 of those, while my team does it with ease. It opened up an opportunity as the VP of our company wanted to offer me a deal to do it for the whole company, I turned off the offer for various personal reasons, but it's not the point. The point is, don't search for ideas in some tutorials exclusively, try to solve your own problems.

Coding is useful for lots of different occasions, not only for nailing a job in the IT industry, or working as a freelance web developer. Expand your horizons.
