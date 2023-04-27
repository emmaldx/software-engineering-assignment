SUMMARY

The application I have created is an online doctor appointment booking system, using node.js and sqlite. I thought this would be best for me to do as I currently work for the NHS, and I wanted to do something relating to healthcare that I have not attempted in my job yet.

There are two types of users, regular and admin. A regular user can register for the service, login, book an appointment, view their appointments and edit an appointment.

An admin user can register, login, view patient appointments, edit an appointment and delete patient appointments.

To Login as an admin user and see the admin dashboard:
email address - admin1@gmail.com
password - 12345

The application comprises of 11 pages in total, as listed below. Different pages are accessible to different user types.

• Starting Page (index)
• Register Page
• Login Page
• Dashboard Page
• Book an appointment Page
• View your appointments Page
• Edit an appointment Page
• Delete an appointment Page (admin only)
• View patient appointments Page (admin only)
• Booking Confirmation Page
• Deletion Confirmation Page (admin only)

There is validation in place on the register and login pages to stop null or incorrect details being entered. The Error messages thrown are general and will not specify which field is incorrect. This has been done on purpose to reduce the risk of users being able to guess emails and passwords.

On the delete an appointment page, when the user clicks delete, they will be asked if, they are sure. If they click yes, they should be sent to the next page after the deletion, whereas if they click no, they should stay on the same page and the deletion will not take place.

After booking an appointment, the user should be sent to the confirmation page and given the option to log out. Their appointment should also then be visible to any admin user that logs in.

After deleting an appointment, similarly, the user should be sent to a deletion confirmation page and given the option to log out.

I have tested this application by creating two sample users and trying out all the operations and testing the validation to make sure it all worked.
