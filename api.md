FORMAT: 1A

# Something

### List all Movies [GET]

### Retrieve a Message [GET]

+ Request Plain Text Message

    + Headers

            Accept: text/plain

(...)

## Movie collection [/movies]

### List all Movies [GET]

List movies in reverse order of publication.

+ Response 200 (application/json)

            {
                "question": "Favourite programming language?",
                "published_at": "2014-11-11T08:40:51.620Z",
                "url": "/questions/1",
                "choices": [
                    {
