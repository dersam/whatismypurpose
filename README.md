# whatismypurpose
Well what is it?

### Contributing
To submit more words, send a pull request.

###Word guidelines

To try and alleviate totally nonsensical pairings, while still preserving some
element of surprise and random chance, we attempt to do some rudimentary
kind of rules of what can be paired with what.

Nouns should be tangible objects in the plural form (since that seems to usually sound better).

Verbs each have two tag sets- noun types they are allowed to act on, and that they are not allowed to act on.
Nouns are tagged based on what makes sense. This is somewhat arbitrary.

List of tags:
`person`, `activity`, `edible`, `liquid`, `animal`,
`plant`, `building`, `group`

The word list is compiled via the `gulp dict` task. This will output a JSON file
based on words.json that list all eligible words for a verb.