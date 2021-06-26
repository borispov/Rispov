---
layout: post
title: "You Might Not Need React"
date: "2020-09-04"
categories: 
  - "programming"
---

JavaScript has begun its journey as the language of a browser and went through rough times, it was despised, called incompetent, wasn't considered a 'real' programming language. Today, according to [StackOverFlow's survey](https://insights.stackoverflow.com/survey/2020#technology-programming-scripting-and-markup-languages-all-respondents), JavaScript is the most popular language being significantly ahead of python. In the web frameworks we can see that jQuery is still the king of the hill, but steadily losing its first place to React.js, React is also the second most desired framework with Vue.js in the third place.

JavaScript's huge rise in popularity was correlated with the release and popularity of Node.js and the vast ecosystem [npm](https://www.npmjs.com/), as well as the release of front-end beloved frameworks like Ember, React, Angular, Svelte, Vue and more. There are probably more frameworks being built as I write this.

There are many implications of this phenomena, JavaScript is much more dominant in the workplace, there are many self-taught developers that are able to learn full-stack development with primarily one language. Also, especially if you are self-taught, the amount of technologies available at your disposal is dizzying. With every aspiring developer learning React like myself, it easily becomes the de facto choice when starting a new project which assists in the learning stage, and while I can see why you would stick you React for everything if your goal is to find a job role as React developer, it's easily an overkill for some small projects.

### Why React Is An Overkill

React is library, not a full blown framework like Angular that follows a traditional MVC model, so why not use react for every project, really?

There are use cases that do not require using a framework at all, in fact, in some cases it is a requirement to use vanilla js. If performance is of high importance, you might use vanilla js, because every byte of code is significant. In case you are ought to create a big project, the efficiency and speed of development with React compared to vanilla.js is imho, incomparable, it is definitely doable, and perhaps you should do it some time, build a relatively large single page application with vanilla js, it'll help you understand React better.

I want to concentrate on small scale projects where you can easily achieve your end-goal significantly faster without deploying React at all. Assume that you are given a task (yourself/client/manager) to create a simple landing page, your natural selection of tools is HTML, CSS and dozens of JavaScript lines, for now. For the sake of the example, suppose you got the job done in 2 hours, how long would it take had you chosen React for the task, of course, given that you're explicitly told that you're simply about to create landing page and then forget all about it, you wouldn't choose React, BUT! how often you find the proper rationalizations to convince yourself to start with React on the off chance you might want to scale it a little bit further. Quickly, you find yourself componentionalizing (is that even a word?) your entire page into buttons, headings and divs, and you want to make everything dynamic and reusable, because you've watched couple of lectures/tutorials on that and you've seen some of the best practice code repos. Hours, Days, Weeks go by, you forgot your initial task, you're on a different spree.

It has happened to me, very often, too often.

Remember one of the first principles you came across in the beginning of your self-taught journey, KISS? Keep it stupid simple, or keep it simple, stupid. This is where this principle applies for me. Provided that a landing page is all I need without **clear** plans of turning into a freaking SaSS business with a complex front end architecture and whatnot, I will use dead simple HTML and CSS. You are efficient with Tailwind.css? Use it! You're an expert on Bootstrap/Bulma? Use it!

#### What is your goal?

When your goal is to learn a language, framework, tool, pattern, paradigm, then the efficiency of your progress towards that task is measured differently. For example, I learn tailwindcss, that is my goal, I can definitely afford to learn it while also creating a landing page for the client, that being time allows for it, of course.

You want to launch an experiment project on the net, your goal is probably not the usage of language/tool/framework behind it. Back in the day, Ruby on Rails was the fastest way to launch an MVP (minimum viable product), companies used it to accelerate their business.

I will go a little bit controversial here, perhaps. Suppose a client reaches out to you and requests an eCommerce shop to sell his jewelry online, your client has basic understanding of how to use a PC, how to send an email, use social media, Microsoft Word, Skype, etc. You just finished a course on Udemy, and what a coincidence, the example project was an eCommerce shop using MERN Stack (Mongo, Express, React, Node), you're thrilled to get started with the client and provide him the best piece of software utilizing your honed down skills. Suppose you're also an experienced React & Node developer, let's also suppose that you have used tools like WooCommerce or Shopify in the past for personal experiments.

It would be a mistake to create the eCommerce shop using MERN stack. Not merely because you did never did before.

Chances are, if a small client approaches with a request like that, they couldn't care less of how customized you're gonna make it, all they need is a functioning website they can lead paying customers to, and make money. Small clients are not willing to pay big money for a custom webshop either and they want it fast. If your clients wants it FAST and relatively CHEAP, you are not building a webshop from scratch for him. Back to our question, what is your goal? To satisfy the client's request and get paid for a working functioning site, that he can add/remove/etc products from? Today there are CMS solutions even if you are going the custom path, so in case you'll go that way, you'll manage it, it just that you have to learn to make the appropriate decision.

### Personal Projects

Honestly, this is where we often get creative and also, get lost. We start a project, only to turn it into something else completely for the wrong reasons.

Recently, I built an app to assist my workflow with my staff at work. By the end of each month, my employees have to fill out a timesheet for every patient they work with. Prior to coronavirus, they would fill-in physical documents and pass them to me, and now, obviously, we try to minimize human contact, so I decided to digitize it. I developed a small app that allows for the employee to fill in a timesheet with his name, patient's name, and fill in hours that are basically a date-table and dropdowns for hour selection. Upon submission, the data is sent to my personal server. On the server, I wrote a tiny **express** app with POST request route to be able to process those submissions, where initially were just sent via Email to my work email, later I decided to save the data as csv files with identifiable filenames. I was manually opening each csv file through Outlook Office (my email client at work) which wasn't convenient at all, so I figured I should make a dashboard where I'll be able to switch between timesheets easily.

What I described is basically 3 separate applications: employee's app, dashboard app, and a backend app. It's unintuitive and certainly not the **best practice** way to do it. However, I was really short on time, I needed it ready _ASAP_, so I couldn't care less about how optimal, best practice and correct it is, so long as it works without fatal errors. The javascript on all 3 apps is not advanced at all, I'd argue anyway who finishes basic courses on JavaScript can accomplish even better results.

- I used HTML and Bootstrap for timesheet-fill and dashboard apps, and you probably guess it, **Vanilla JS!** Had I chosen React for that particular project, I think it would've taken me at least a bit longer and add unnecessary complexity.

- In the backend, I used an express server, with 'nodemailer' or sendgrid for emails. Actually, the emails are just a form of notification that an employee has sent a timesheet.

## Why React.js At All

Well, my latest project created with React was something much bigger and much more complex than the project I previously described, it was an COVID-19 Tracking app, displays statistics, graphs, and also local (Israeli) news and bunch of useful resources. I built it when my wife was quarantined, I wanted to control the way I stay up to date with the virus growth without heavily relying on TV news sources.

[The project](https://ncorona.live) was created using Next.js which is an awesome framework which I absolutely love for the simplicity and the logical coherence of their structure. It was the first time I used Next.js, and applying the principles I mentioned above, the initial goal was to **experiment** with Next.js while also trying out several covid19 public api's. I wasn't in a rush to complete the project, and it wasn't for a client. If I were to create this project again, I still wouldn't go with Vanilla.JS, I'd pick Next.js all over again. There isn't a tool I'm familiar with that would get the job done, the way I wanted it.

## Last Word

This isn't an article advocating for the abandonment of React.js framework, nor it is an effort to push us back to vanilla JavaScript. It is a conscious decision making, picking the appropriate tool for the job, taking into consideration relevant element such as Purpose, Time, Money, Efficiency, Complexity. We have went through the reasons why you might not need React and why vanilla JavaScript may suffice, it is up to you now to decide for yourself.
