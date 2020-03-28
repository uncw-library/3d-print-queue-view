### What the app does

  - Pulls from 

    https://digitalmakerspace.uncw.edu/api/v1/queue 
    https://digitalmakerspace.uncw.edu/api/v1/image_rotation

  - Lives at

    https://print-queue.libapps.uncw.edu

This app has two pages ('/' and '/image_rotation').  

### How to build a dev box

  ```
  git clone https://libapps-admin.uncw.edu/randall-dev/3d-print-queue-view
  cd 3d-print-queue-view
  docker-compose up -d
  ```

  - `docker-compose down`  # to stop it

### To revise the app

To add a new requirement, run `npm install whatever` on your local computer to add that requirement to package.json.  Running `docker-compose down` `docker-compose up --build -d` will rebuild the container with the new package.json requirement.

To revise the app, edit the code in the ./app folder on your local computer.  Then run `docker-compose restart 3d-print-queue-view` to restart the app.  This works because the ./app folder on your local computer is mounted inside the container, so any revisions to those files is reflected inside container.

Push any code changes to gitlab.

### How to build a prod image

  - After you get the code like you want it,
  ```
  docker login libapps-admin.uncw.edu:8000
  docker build -t libapps-admin.uncw.edu:8000/randall-dev/3d-print-queue-view .
  docker push libapps-admin.uncw.edu:8000/randall-dev/3d-print-queue-view
  ```

### What's inside the app

Within the ./app folder is an Express app that uses axios to pull json from digitalmakerspace API app.  It uses morgan to pipe logs to stdout.  If env == development, it sends the error stack to the browser.  It uses handlebar templates.  And serve-favicon to serve favicon (good naming!).  Blueimp's load-image module is saved in ./app/javascripts, and is used for the image rotation feature.
