### What the app does

This app has two pages ('/' and '/image_rotation').  The '/' page lists the current 3D Print jobs, with the job's Title, submitter's First Name, and job Status.  The '/image_rotation' page displays a carousel of 3d printed images.

  - Pulls json from

    https://digitalmakerspace.uncw.edu/api/v1/queue 
    https://digitalmakerspace.uncw.edu/api/v1/image_rotation

  - Lives at

    https://print-queue.libapps.uncw.edu

Within the ./app folder is an Express app that uses axios to pull json from digitalmakerspace API app.  It uses morgan to pipe logs to stdout.  If env == development, it sends the error stack to the browser.  It uses handlebar templates.  And serve-favicon to serve favicon (good naming!).  It uses jest and supertest for tests.

### How to build a dev box

#### Bare metal approach

  ```
  git clone https://libapps-admin.uncw.edu/randall-dev/3d-print-queue-view
  cd 3d-print-queue-view
  npm install
  npm start
  ```

  See the app at localhost:3000

To add a new package, run `npm install {{whatever}}`.  This adds the library to your local repo's package.json and to the local repo's ./node_modules folder.  With nodemon installed globally, run `nodemon ./app/bin/www`.  The view will be at localhost:3000.  When you revise the code, nodemon with reload the app with your new changes.

Test your changes with `npm run test`.

Push any changes to gitlab.


#### Docker approach

  ```
  git clone https://libapps-admin.uncw.edu/randall-dev/3d-print-queue-view
  cd 3d-print-queue-view
  docker-compose up -d
  ```

  See the app at localhost:3000

  - `docker-compose down`  # to stop it

To add a new package, run `npm install {{whatever}}` on your local computer to add that requirement to package.json.  Running `docker-compose down` `docker-compose up --build -d` will rebuild the container with the new package.json requirement.

To revise the app, you will first likely want to change the docker-compose file to "command: npm run dev".  That uses nodemon to auto-reload the app whenever you revise your local computer's ./app folder. Next, `docker-compose up --build` and edit the code in the ./app folder on your local computer.  This works because the ./app folder on your local computer is mounted inside the container, so any revisions to those files is reflected inside container.

Test your changes, with `docker exec {{name of container}} npm run test` or `npm run test`

Push any code changes to gitlab.



### How to build a prod image

  - After you get the code like you want it,
  ```
  docker login libapps-admin.uncw.edu:8000
  docker build -t libapps-admin.uncw.edu:8000/randall-dev/3d-print-queue-view .
  docker push libapps-admin.uncw.edu:8000/randall-dev/3d-print-queue-view
  ```
