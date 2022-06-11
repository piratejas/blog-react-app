-create BlogPost component
    - create BlogPost function that takes props as a param
    - deconstruct variables to give props keys
    - return html elements with props values

-App file
    - import BlogPost component
    - import `blog` object from `data`
    - return BlogPost
        - assign props from `blog` using spread operator

-create Comment component
    - write function that takes props `author` and `content`, expecting strings
    - return html elements showing comment, author and author's initials
        - generate author's initials from author
    - style (later)

App file
    - import Comment component
    - return Comment