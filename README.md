# interactive-form
 
In this project, I'll use JavaScript to enhance an interactive registration form for a fictional Full Stack conference.

Form fields that have real time validation and conditional error messages are detailed in this file below.




Testing real time validation with regular expressions

![Page Screen](/img/Screenshot_1.png)

The USERNAME input field tests that there is at least a first name containing only letters, and does not allow spaces<br />
/^[A-Za-z]+$/

The EMAIL input field tests that email is validly formatted.<br />
/^[^@]+@[^@.]+\.[a-z]+$/i

![Page Screen](/img/Screenshot_2.png)

The CREDIT CARD NUMBER input field tests that it contains only numbers between 13-16 digits.<br />
^\d{13,16}$

The ZIP CODE input field tests that it contains only 5 digits.<br />
^\d{5}$

The CREDIT CARD NUMBER input field tests that it contains only 3 digits.<br />
^\d{3}$



Fictional Full Stack Conference [Link](https://getoarm.github.io/interactive-form/)