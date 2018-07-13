create table users(
    id serial primary key,
    authid text,
    username varchar(30)
);

create table notes(
    id serial primary key,
    note_title varchar(80),
    coordinates integer,
    note_date varchar(20),
    note_image text,
    note_text text,
    user_id integer REFERENCES users(id)
);
