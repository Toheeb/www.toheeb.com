---
layout: plain.html
title: On recoding app.grey.co
pageStyle: |
  <style>
    :root {
      --base-color-hue: 270;
    }
  </style>
---

<section>
<div>
  <p>
    <video src="/en/media/greyco.m4v" controls></video>
  </p>
</div>
<hgroup>
  <h1>Recoding UI of app.grey.co</h1>
</hgroup>
<div>

  Grey.co has a fast service and slow onboarding; login page takes like-forever to load.

  After the recode, same design has better structure and personalizable design. Besides, it is more than 20 times faster on desktops and more than 10 times faster on desktops. <img src="/en/images/greyco-perf.png" alt="Before, LCP was 67.0 on mobiles and 12.3 on desktops. After, LCP is 2.4 on mobiles and 1.2 on desktops"> 


  ---

  The primary window of the HTML boilerplate introduces banner, main, complementary, and info landmarks to aid screen readers in navigating page content.

<figure>
<p>
  <audio src="/en/media/greyco-landmarks.m4v" controls></audio>
</p>

<figcaption>
    
  Before, despite clearly defined content, Grey.co has <b>no</b> landmarks. 
  
  After, Grey.co recognizes the <b>4</b> landmarks.

  </figcaption>
</figure>

<details>
<summary>Markup Overview for Primary Window</summary>

  Because of the design layout, a div contains the Main and Complementary Landmark as a single unit.

```html
<div class="primary-window">
  <header></header>

  <div class="primary-window__body">
    <main></main>
    <aside></aside>
  </div>

  <footer></footer>
</div>
```
</details>

  The Banner Landmark provides a Home Link and Language Selector.

  Home Link is an Anchor Phrase containing the logo-mark and brand-name.

<figure>
<p>
  <audio src="/en/media/greyco-brand.m4v" controls></audio>
</p>
<figcaption>

  Before, Grey.co makes Screen Readers spell out an anchor address because the Anchor Phrase contains an image with no alternative text.

  After, Grey.co uses the brand name as the anchor text.

</figcaption>
</figure>

<details>
<summary>Markup overview for Brand Component</summary>

```html
<header>
  <p>
    <a class="brand primary-window__header-brand" href="">
      <svg><!-- ... --></svg>
      <span class="brand-name">
        Grey
      </span>
    </a>
  </p>
</header>
```
</details>

  Language Selector is a Select Form with a label of "Page Language".

<figure>
<p>
  <video src="/en/media/greyco-lang-selector.m4v" controls></video>
</p>
<figcaption>

  Before, Grey.co fakes a Select Form with an Input Form and General Paragraphs. This creates weird selection experience for users in Document Mode.

  After, Grey.co uses the semantic Select Form for easy selections.

</figcaption>
</figure>
  
<details>
<summary>Markup overview for Language Selector</summary>

```html
<header>
  <!-- ... -->
  <label>
    <span class="sr-only">Page Language</span>
    <select class="lang-selector">
      <!-- ... -->
    </select>
  </label>
</header>
```
</details>

  The Main Landmark introduced the Login Form in a section so the section's heading can relate the page title to users.

<figure>
<p>
  <audio src="/en/media/greyco-heading.m4v" controls></audio>
</p>
<figcaption>

  Before, the misuse of heading level 3 begs for heading level 1 and 2, confusing Screen Readers navigating via Headings. Besides, "Welcome Back" doesn't make sense as an heading text.

  After, the use of heading level 1 raises no confusion. Besides, "Grey Login" conveys an actual heading.

</figcaption>
</figure>

<details>
<summary>Markup overview for a section in Main Landmark</summary>

  Because the design moves the brand component to another container at a larger viewport, a copy of the brand component is at the Main Landmark. 
  
  Before, that copy creates a duplicate on the page. Now, that copy is hidden from Screen Readers and Visual Readers to avoid duplicate contents.

```html
<main>
  <section>
    <hgroup class="sr-only">
      <h1>Grey Login</h1>
    </hgroup>
    <div class="login-form-group">
      <p aria-hidden="true" hidden class="primary-window__body-brand">
        <a class="brand" href="">
          <!-- ... -->
        </a>
      </p>
      <!--  -->
    </div>
  </section>
</main>
```
</details>

  Login Form uses 3 paragraphs for Introduction, Single Sign On (SSO), and Classic Sign On (CSO). Introductory Paragraph has the text "Welcome Back". SSO Paragraph has a button to sign in with google and a General Phrase to skip SSO and continue with email and password. CSO Paragraph uses a couple of forms.

<details>
<summary>Markup overview for Login Form</summary>

```html
<form class="login-form">
  <p><strong class="form-strong">Welcome back!</strong></p>
  <p>
    <button class="login-form__sso">
      Sign in with Google
    </button>
    <span class="login-form__hr">
      or continue with <span class="sr-only">email and password:</span>
    </span>
  </p>
  <p>
    <!-- CSO Paragraph forms -->
  </p>
</form>
```
</details>

  CSO Paragraph contains an Email Form labelled "Email Address", a Password Form labelled "Password, a General Button labelled "Password Visibility Toggle", a Submit Button labelled "Submit", and a Complementary Phrase containing an Anchor Link with the text "Trouble Signing In?"

<figure>
<p>
  <video src="/en/media/greyco-cso.m4v" controls></video>
</p>
<figcaption>

  Before: Screen Readers reiterates a redundant placeholder on Input Forms; Keyboard Navigation to Password Visibility Toggle is impossible; and there's a premature Support Link.

  After, there is: no redundant placeholders, keyboard accessibility to all forms, and no premature support link.

</figcaption>
</figure>

<details>
<summary>Markup overview for CSO Paragraph</summary>

```html
<p>
  <label>
    <span>Email address</span>
    <input type="email">
  </label>
  <label>
    <span>Password</span>
    <input type="password">
  </label>
  <button class="login-form__show-password">
    <!-- ... -->
  </button>
  <button type="submit">
    Login
  </button>
  <small><a href="https://app.grey.co/auth/trouble-signing-in" class="login-form__support-link">Trouble signing in?</a></small>
</p>
```
</details>

  The Complementary Landmark conveys the Registration Link for new users.

<details>
<summary>Markup overview for Complementary Landmark</summary>

```html
<aside>
  <p class="signup">
    <span class="signup__intro">Are you a new user?</span> 
    <strong><a href="" class="signup__link">Create an account</a></strong>
  </p>
</aside>
```
</details>

  The Info Landmark provides 2 buttons to toggle the personalization and chat windows.

<details>
<summary>Markup overview for Info Landmark</summary>

Besides, Info Landmark has a class id for styles that will retain the height of the contents when those content are taken out of flow as per the design.

```html
<footer class="primary-window__footer-group">
  <p class="primary-window__footer">
    <button class="base-settings primary-window__footer-settings" aria-label="Personalization Settings">
      <!-- ... -->
    </button>
    <button class="primary-window__footer-chat">
      <!-- ... -->
      <span class="sr-only">Chat</span>
    </button>
  </p>
</footer>
```
</details>
</div>


<section>
<hgroup>
<h2>Stylesheet</h2>
</hgroup>


The Primary Window has inline padding of Space-100, block padding of Space-200, and content gap of Space-300. Trailing block space within the window are distributed equally between the children.

Header and Footer of the Primary Window have their content centered vertically. Trailing inline space within these blocks are distributed between the children. 

Body of the Primary Window has a content gap of Space-100, while the Login Form Group has a content gap of Space-200.

Form Cards across all windows have content gap of Space-100, block padding of Space-150, and inline padding of Space-200. Each child also have a content gap of Space-100.

Furthermore: Login Form, centered inline with a border radius of 10px, has a width of 100% and a max-width of 500px.

Each type of Form, except Checkbox Form, has a solid border, 3rem height, full width, and padding inline of .75em. Language Selector has a 2.5rem height and an auto width. Button Forms within the Footer have 2.5rem width and height. 

At 700px breakpoint, the Footer is fixed to the bottom of the viewport maintaining its initial padding. The parent element retain the height of the Footer. The breakpoint value avoids the Footer colliding with the Form Card.

That breakpoint is also used to switch the the visibility of the brand component from the Banner Landmark to the Main Landmark. Now, Login Form Group have to provide a content gap of Space-300.


</section>


</section>


<!-- 

The Banner Landmark maintains its static position. It is not expected of a user to change the page language while they scrolls. This provides more screen space for other contents.

The Info Landmark becomes fixed to the bottom of the page when its vertical path is clear. This avoids collision of two interractive elements.


By the design layout, a div contains the Main and Complementary Landmark as a single unit. a block relates the background image of the window as an SVG image so the image will be customizable. a block for the splash screen.


 -->
