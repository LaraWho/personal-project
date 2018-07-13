insert into users (authid, username)
values ($1, $2)

returning *;