select title, username, profile_pic from posts
join app_users on posts.author_id = app_users.id
where title like $1;