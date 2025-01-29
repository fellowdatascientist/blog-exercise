# blog-exercise
A task to assess full stack developer


# Task description

1. You have a sqlite database in the root directory called `blogs` which contains multiple tables. Spend some time to understand the individual tables
2. Using any front end stack, create the following screens
  - `Login screen` asking for useremail and password
  - `Home page` which displays all the blog titles as thumbnail. Each blog thumbnail should have the following
     - Blog image
     - Blog title
     - Blog created date
  - When the user clicks any thumbnail, the individual`Blog page` should appear. This will display the following
    - Blog text
    - Comments section under the blog text. Show existing comments for that blog. Allow user to submit new comment.
3. Make sure that you enable authentication in all pages. Only logged users should see the blogs, else they should be redirected to login screen
4. Store blog views in a separate table. This table doesn't exist in the database. Create one with necessary columns. 

Notes
- Backend should be python or javascript based languages. No JAVA or PHP
- Do not write plain SQL queries. Use any ORM like `sqlalchemy`
- For design refer to [this Figma file](https://www.figma.com/design/AshwNmcthO0ejWH92xPgQc/Free-Blog-Template--%7C-Modern-%26-Creative-design-(Community)?node-id=1-2&m=dev&t=fEU7MXuNhogORBY2-1)
