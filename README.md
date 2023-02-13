# tennis-people

## How to setup

Clone the repo in your local server and run

```yarn install```

To run app :

```yarn run dev```

To run tests : 

```yarn run test```

## App routes

/   
-> Will return list of tennis players, sorted by ascendant IDs

/:id (ex: /1)
-> Will return one card only, try with id 52 for Djokovic. If no player is found, error can be seen in console, and loader will keep turning.

