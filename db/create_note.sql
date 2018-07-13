insert into notes (note_title, coordinates, note_date, note_image, note_text)
values ($1, $2, $3, $4, $5)

returning *;