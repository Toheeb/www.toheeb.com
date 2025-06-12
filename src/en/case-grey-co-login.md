---
layout: base.html
title: On recoding app.grey.co
---

Grey.co's services always make me come back to experience a login page that takes like-forever to load. 

To show an optimal solution, I recorded the page and add some goodies:

- 31 times faster on mobile devices, and 15 times faster on desktop devices

- ? document issues, fixed!

- Infinite personalization by typeface, color, and more




The primary window of the HTML boilerplate contains landmarks for the banner, main, complementary, and contentinfo.

The Banner Landmark contains a Home Link and a Language Selector. Home Link is an Anchor Phrase containing the brand logo labelled as "Home". Language Selector is a Select Form with a label of "Page Language".

The Main Landmark contains a Page Heading followed by the Login Form. 

Page Heading uses the first heading level <code>h1</code> with the content "Login Page". 

Login Form contains an Introductory Paragraph, Single sign-on (SSO) Paragraph, and a Classic sign-in (CSO) Paragraph. 

Introductory Paragraph has the text "Welcome Back". 

SSO Paragraph has a button to sign in with google and a General Phrase to skip SSO and continue with email and password. 

CSO Paragraph contains an Email Form labelled "Email Address", a Password Form labelled "Password, a General Button labelled "Password Visibility Toggle", a Submit Button labelled "Submit", and a Complementary Phrase containing an Anchor Link with the text "Trouble Signing In?"

The Complementary Landmark contains a Paragraph Block that conveys the Registration Link for new users.

The ContentInfo Landmark contains a Paragraph Block which contains 2 General Buttons. One Button toggles the Personalization Window and the other toggles the Chat Window.



Per design layout, both Main and Complementary Landmark are a single unit.

The Primary Window lays all landmarks in a grid column with a base gap twice the block gap. Extra space in the viewport height are distributed between the landmarks. 

The Banner Landmark maintains its static position. It is not expected of a user to change the page language while they scrolls. This provides more screen space for other contents.